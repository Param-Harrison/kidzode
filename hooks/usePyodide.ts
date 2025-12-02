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
  expected?: string
  actual?: string
  error?: string
}

// Package cache to avoid reloading
const packageCache = new Set<string>()

export function usePyodide() {
  const [status, setStatus] = useState<PyodideStatus>('loading')
  const [output, setOutput] = useState<ConsoleOutput[]>([])
  const [awaitingInput, setAwaitingInput] = useState(false)
  const pyodideRef = useRef<any>(null)
  const inputResolveRef = useRef<((value: string) => void) | null>(null)

  // Initialize Pyodide once globally
  useEffect(() => {
    // Check if Pyodide is already loaded globally
    if ((window as any).__pyodide) {
      pyodideRef.current = (window as any).__pyodide
      
      // Re-attach stdout/stderr for this component instance
      pyodideRef.current.setStdout({
        batched: (text: string) => {
          setOutput(prev => [...prev, {
            type: 'stdout',
            content: text,
            timestamp: Date.now()
          }])
        }
      })

      pyodideRef.current.setStderr({
        batched: (text: string) => {
          setOutput(prev => [...prev, {
            type: 'stderr',
            content: text,
            timestamp: Date.now()
          }])
        }
      })
      
      setStatus('ready')
      return
    }

    const loadPyodide = async () => {
      try {
        // Load Pyodide from CDN
        const pyodide = await (window as any).loadPyodide({
          indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.29.0/full/',
        })

        // Setup stdout/stderr capture
        pyodide.setStdout({
          batched: (text: string) => {
            setOutput(prev => [...prev, {
              type: 'stdout',
              content: text,
              timestamp: Date.now()
            }])
          }
        })

        pyodide.setStderr({
          batched: (text: string) => {
            setOutput(prev => [...prev, {
              type: 'stderr',
              content: text,
              timestamp: Date.now()
            }])
          }
        })

        // Setup proper input handling
        await pyodide.runPythonAsync(`
import sys
from js import Object

# Create a proper input handler that works with browser
class BrowserInput:
    def __init__(self):
        self.queue = []
        self.waiting = False
    
    def set_queue(self, inputs):
        self.queue = list(inputs) if inputs else []
    
    def __call__(self, prompt=''):
        if prompt:
            print(prompt, end='', flush=True)
        
        if self.queue:
            value = str(self.queue.pop(0))
            print(value, flush=True)
            return value
        
        # Use window.prompt for interactive input
        from js import prompt as js_prompt
        value = js_prompt(prompt)
        
        # If user cancels, return empty string or raise EOFError? 
        # Standard input() raises EOFError on EOF, but empty string is safer for simple scripts.
        if value is None:
            return ""
            
        print(value, flush=True)
        return str(value)

# Install the input handler
_browser_input = BrowserInput()
sys.modules['builtins'].input = _browser_input
        `)

        // Store globally to reuse
        ;(window as any).__pyodide = pyodide
        pyodideRef.current = pyodide
        setStatus('ready')
      } catch (error) {
        console.error('Failed to initialize Pyodide:', error)
        setStatus('error')
      }
    }

    // Check if script is already loaded
    if (document.querySelector('script[src*="pyodide.js"]')) {
      // Script exists, wait for it to load
      const checkLoaded = setInterval(() => {
        if ((window as any).loadPyodide) {
          clearInterval(checkLoaded)
          loadPyodide()
        }
      }, 100)
    } else {
      // Load script
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.29.0/full/pyodide.js'
      script.async = true
      script.onload = () => loadPyodide()
      script.onerror = () => {
        console.error('Failed to load Pyodide script')
        setStatus('error')
      }
      document.head.appendChild(script)
    }
  }, [])

  const clearOutput = useCallback(() => {
    setOutput([])
  }, [])

  // Load packages with caching
  const loadPackages = useCallback(async (packages: string[]) => {
    if (!pyodideRef.current) return

    const toLoad = packages.filter(pkg => !packageCache.has(pkg))
    if (toLoad.length === 0) return

    try {
      await pyodideRef.current.loadPackage(toLoad)
      toLoad.forEach(pkg => packageCache.add(pkg))
    } catch (error) {
      console.error('Failed to load packages:', error)
      throw error
    }
  }, [])

  // Detect required packages from code
  const detectPackages = useCallback((code: string): string[] => {
    const packages: string[] = []
    
    // Common package imports
    const importPatterns = [
      { pattern: /import\s+numpy|from\s+numpy/m, package: 'numpy' },
      { pattern: /import\s+pandas|from\s+pandas/m, package: 'pandas' },
      { pattern: /import\s+matplotlib|from\s+matplotlib/m, package: 'matplotlib' },
      { pattern: /import\s+scipy|from\s+scipy/m, package: 'scipy' },
      { pattern: /import\s+scikit-learn|from\s+sklearn/m, package: 'scikit-learn' },
      { pattern: /import\s+sympy|from\s+sympy/m, package: 'sympy' },
    ]

    importPatterns.forEach(({ pattern, package: pkg }) => {
      if (pattern.test(code)) {
        packages.push(pkg)
      }
    })

    return packages
  }, [])

  const runCode = useCallback(async (code: string): Promise<{ success: boolean; error?: string }> => {
    if (!pyodideRef.current || status !== 'ready') {
      return { success: false, error: 'Python runtime not ready' }
    }

    setStatus('running')
    clearOutput()

    try {
      // Detect and load required packages
      const requiredPackages = detectPackages(code)
      if (requiredPackages.length > 0) {
        setOutput(prev => [...prev, {
          type: 'stdout',
          content: `Loading packages: ${requiredPackages.join(', ')}...\n`,
          timestamp: Date.now()
        }])
        await loadPackages(requiredPackages)
      }

      // Run the code
      await pyodideRef.current.runPythonAsync(code)
      setStatus('ready')
      return { success: true }
    } catch (error: any) {
      setOutput(prev => [...prev, {
        type: 'stderr',
        content: error.message || String(error),
        timestamp: Date.now()
      }])
      setStatus('ready')
      return { success: false, error: error.message }
    }
  }, [status, clearOutput, detectPackages, loadPackages])

  const runTests = useCallback(async (
    code: string,
    tests: Array<{ in: string | string[]; out: string | any[] }>
  ): Promise<TestResult[]> => {
    if (!pyodideRef.current || status !== 'ready') {
      return []
    }

    const results: TestResult[] = []

    for (const test of tests) {
      try {
        clearOutput()
        
        // Detect and load required packages
        const requiredPackages = detectPackages(code)
        if (requiredPackages.length > 0) {
          await loadPackages(requiredPackages)
        }

        // Prepare input queue
        const inputs = Array.isArray(test.in) ? test.in : (test.in ? [test.in] : [])
        
        // Setup input queue and capture output
        await pyodideRef.current.runPythonAsync(`
import sys
from io import StringIO

# Set input queue
_browser_input.set_queue(${JSON.stringify(inputs)})

# Capture output
_old_stdout = sys.stdout
sys.stdout = StringIO()
        `)

        // Run the code
        await pyodideRef.current.runPythonAsync(code)
        
        // Get output
        const output = await pyodideRef.current.runPythonAsync(`
result = sys.stdout.getvalue()
sys.stdout = _old_stdout
result
        `)

        // Check output against expected pattern
        const expected = typeof test.out === 'string' ? test.out : JSON.stringify(test.out)
        const actual = output.trim()
        
        // Use regex matching with proper escaping
        let passed = false
        try {
          // Escape special regex characters except .* which we want to keep as wildcard
          const escapedPattern = expected
            .replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')  // Escape special chars
            .replace(/\\\.\\\*/g, '.*')              // Restore .* as wildcard
          
          const regex = new RegExp(escapedPattern, 'is')  // i=case insensitive, s=dotall
          passed = regex.test(actual)
        } catch (regexError) {
          // If regex fails, fall back to simple includes check
          passed = actual.includes(expected.replace(/\.\*/g, ''))
        }

        results.push({
          passed,
          expected,
          actual,
        })
      } catch (error: any) {
        results.push({
          passed: false,
          expected: typeof test.out === 'string' ? test.out : JSON.stringify(test.out),
          error: error.message,
        })
      }
    }

    return results
  }, [status, clearOutput, detectPackages, loadPackages])

  const handleInput = useCallback((value: string) => {
    if (inputResolveRef.current) {
      inputResolveRef.current(value)
      inputResolveRef.current = null
      setAwaitingInput(false)
    }
  }, [])

  return {
    status,
    output,
    runCode,
    runTests,
    clearOutput,
    awaitingInput,
    handleInput,
  }
}
