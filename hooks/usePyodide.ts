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

export function usePyodide() {
  const [status, setStatus] = useState<PyodideStatus>('loading')
  const [output, setOutput] = useState<ConsoleOutput[]>([])
  const [inputCallback, setInputCallback] = useState<((value: string) => void) | null>(null)
  const pyodideRef = useRef<any>(null)
  const loadingRef = useRef(false)

  // Initialize Pyodide
  useEffect(() => {
    if (loadingRef.current) return
    loadingRef.current = true

    const loadPyodide = async () => {
      try {
        // Load Pyodide script dynamically
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
        script.async = true
        
        script.onload = async () => {
          try {
            // @ts-ignore
            const pyodide = await window.loadPyodide({
              indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
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
            
            pyodideRef.current = pyodide
            setStatus('ready')
          } catch (error) {
            console.error('Failed to initialize Pyodide:', error)
            setStatus('error')
          }
        }
        
        script.onerror = () => {
          console.error('Failed to load Pyodide script')
          setStatus('error')
        }
        
        document.head.appendChild(script)
      } catch (error) {
        console.error('Failed to load Pyodide:', error)
        setStatus('error')
      }
    }

    loadPyodide()
  }, [])

  const clearOutput = useCallback(() => {
    setOutput([])
  }, [])

  const runCode = useCallback(async (code: string): Promise<{ success: boolean; error?: string }> => {
    if (!pyodideRef.current || status !== 'ready') {
      return { success: false, error: 'Python runtime not ready' }
    }

    setStatus('running')
    clearOutput()

    try {
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
  }, [status, clearOutput])

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
        
        // Prepare input
        const inputs = Array.isArray(test.in) ? test.in : [test.in]
        const inputQueue = [...inputs]
        
        // Override input function for testing
        await pyodideRef.current.runPythonAsync(`
import sys
from io import StringIO

input_queue = ${JSON.stringify(inputQueue)}
input_index = 0

def mock_input(prompt=''):
    global input_index
    if prompt:
        print(prompt, end='')
    if input_index < len(input_queue):
        value = str(input_queue[input_index])
        input_index += 1
        print(value)
        return value
    return ''

sys.modules['builtins'].input = mock_input

# Capture output
old_stdout = sys.stdout
sys.stdout = StringIO()
        `)

        // Run the code
        await pyodideRef.current.runPythonAsync(code)
        
        // Get output
        const output = await pyodideRef.current.runPythonAsync(`
import sys
result = sys.stdout.getvalue()
sys.stdout = old_stdout
result
        `)

        // Check output
        const expected = typeof test.out === 'string' ? test.out : JSON.stringify(test.out)
        const actual = output.trim()
        
        // Simple pattern matching (supports .* wildcard)
        const pattern = expected.replace(/\.\*/g, '.*')
        const regex = new RegExp(pattern, 'i')
        const passed = regex.test(actual)

        results.push({
          passed,
          expected,
          actual,
        })
      } catch (error: any) {
        results.push({
          passed: false,
          error: error.message,
        })
      }
    }

    return results
  }, [status, clearOutput])

  const handleInput = useCallback((value: string) => {
    if (inputCallback) {
      inputCallback(value)
    }
  }, [inputCallback])

  return {
    status,
    output,
    runCode,
    runTests,
    clearOutput,
    awaitingInput: inputCallback !== null,
    handleInput,
  }
}
