"use client"

import { useEffect, useRef, useState, useCallback } from 'react'

export type PyodideStatus = 'loading' | 'ready' | 'running' | 'error'

export interface ConsoleOutput {
  type: 'stdout' | 'stderr' | 'input'
  content: string
  timestamp: number
}

export interface TestResult {
  passed: boolean
  type?: 'compilation' | 'text' | 'input' | 'variables' | 'output' | 'logic'
  expected?: string
  actual?: string
  error?: string
  message?: string
}

export interface TestConfig {
  type?: 'compilation' | 'text' | 'input' | 'variables' | 'output' | 'logic'
  in?: string | string[]
  out?: string | any[]
  requiredText?: string[]
  requiredInputs?: number
  requiredVariables?: string[]
}

const PYODIDE_VERSION = "0.29.0"

export function usePyodide() {
  const [status, setStatus] = useState<PyodideStatus>('loading')
  const [output, setOutput] = useState<ConsoleOutput[]>([])
  const pyodideRef = useRef<any>(null)

  // Initialize Pyodide
  useEffect(() => {
    let isMounted = true

    const loadPyodideRuntime = async () => {
      // 1. If already loaded
      if ((window as any).__pyodide) {
        pyodideRef.current = (window as any).__pyodide
        // Re-attach stdout/stderr for this instance
        pyodideRef.current.setStdout({
          batched: (text: string) => {
            if (isMounted) setOutput(prev => [...prev, { type: 'stdout', content: text, timestamp: Date.now() }])
          }
        })
        pyodideRef.current.setStderr({
          batched: (text: string) => {
            if (isMounted) setOutput(prev => [...prev, { type: 'stderr', content: text, timestamp: Date.now() }])
          }
        })
        if (isMounted) setStatus('ready')
        return
      }

      // 2. If already loading, wait for it
      if ((window as any).__pyodide_loading) {
        const checkInterval = setInterval(() => {
          if ((window as any).__pyodide) {
            clearInterval(checkInterval)
            pyodideRef.current = (window as any).__pyodide
            if (isMounted) setStatus('ready')
          } else if ((window as any).__pyodide_error) {
            clearInterval(checkInterval)
            if (isMounted) setStatus('error')
          }
        }, 100)
        return
      }

      // 3. Start loading
      (window as any).__pyodide_loading = true

      try {
        // Load script if not already present
        if (!(window as any).loadPyodide) {
          await new Promise<void>((resolve, reject) => {
            const script = document.createElement('script')
            script.src = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/pyodide.js`
            script.async = true
            script.onload = () => resolve()
            script.onerror = () => reject(new Error("CDN Load Failed"))
            document.head.appendChild(script)
            setTimeout(() => reject(new Error("Timeout")), 20000)
          })
        }

        const pyodide = await (window as any).loadPyodide({
          indexURL: `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`,
        })

        // Setup IO
        pyodide.setStdout({
          batched: (text: string) => {
            if (isMounted) setOutput(prev => [...prev, { type: 'stdout', content: text, timestamp: Date.now() }])
          }
        })
        pyodide.setStderr({
          batched: (text: string) => {
            if (isMounted) setOutput(prev => [...prev, { type: 'stderr', content: text, timestamp: Date.now() }])
          }
        })

        // Simple input handling that can be triggered from UI or browser prompt
        await pyodide.runPythonAsync(`
import sys
from js import prompt as js_prompt

def _input_handler(prompt=""):
    if prompt:
        print(prompt, end="", flush=True)
    
    # Try browser prompt - simple and works
    res = js_prompt(prompt)
    if res is None: return ""
    print(res, flush=True)
    return str(res)

sys.modules['builtins'].input = _input_handler
        `);

        (window as any).__pyodide = pyodide
        pyodideRef.current = pyodide
        if (isMounted) setStatus('ready')
      } catch (err) {
        console.error("Pyodide loading failed:", err);
        (window as any).__pyodide_error = true
        if (isMounted) setStatus('error')
      } finally {
        (window as any).__pyodide_loading = false
      }
    }

    loadPyodideRuntime()

    return () => {
      isMounted = false
    }
  }, [])

  // Basic package support
  const detectPackages = useCallback((code: string): string[] => {
    const packages: string[] = []
    if (/import\s+numpy|from\s+numpy/.test(code)) packages.push('numpy')
    if (/import\s+pandas|from\s+pandas/.test(code)) packages.push('pandas')
    if (/import\s+matplotlib|from\s+matplotlib/.test(code)) packages.push('matplotlib')
    return packages
  }, [])

  const runCode = useCallback(async (code: string) => {
    if (!pyodideRef.current || status !== 'ready') return { success: false }
    setStatus('running')
    
    try {
      const pkgs = detectPackages(code)
      if (pkgs.length > 0) {
        setOutput(prev => [...prev, { type: 'stdout', content: `Loading ${pkgs.join(', ')}...\n`, timestamp: Date.now() }])
        await pyodideRef.current.loadPackage(pkgs)
      }
      await pyodideRef.current.runPythonAsync(code)
      setStatus('ready')
      return { success: true }
    } catch (err: any) {
      setOutput(prev => [...prev, { type: 'stderr', content: err.message, timestamp: Date.now() }])
      setStatus('ready')
      return { success: false, error: err.message }
    }
  }, [status, detectPackages])

  const runTests = useCallback(async (code: string, tests: Array<TestConfig>): Promise<{ results: TestResult[], starRating: number }> => {
    const { success, error } = await runCode(code)
    return { 
      results: [{ passed: success, type: 'compilation', message: success ? 'Passed' : error } as TestResult], 
      starRating: success ? 3 : 0 
    }
  }, [runCode])

  const clearOutput = useCallback(() => setOutput([]), [])

  return {
    status,
    output,
    runCode,
    runTests,
    clearOutput,
    awaitingInput: false,
    handleInput: () => {}
  }
}
