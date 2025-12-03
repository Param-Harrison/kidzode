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
    tests: Array<TestConfig>
  ): Promise<{ results: TestResult[]; starRating: number }> => {
    if (!pyodideRef.current || status !== 'ready') {
      return { results: [], starRating: 0 }
    }

    const results: TestResult[] = []
    const testType = tests[0]?.type || 'output' // Default to output if no type specified

    // Test 1: Compilation Test (always run first)
    let compilationPassed = false
    try {
      clearOutput()
      const requiredPackages = detectPackages(code)
      if (requiredPackages.length > 0) {
        await loadPackages(requiredPackages)
      }
      // Try to compile/parse the code
      await pyodideRef.current.runPythonAsync(code)
      compilationPassed = true
      results.push({
        type: 'compilation',
        passed: true,
        message: 'Code compiles successfully!'
      })
    } catch (error: any) {
      compilationPassed = false
      results.push({
        type: 'compilation',
        passed: false,
        error: error.message,
        message: 'Code has syntax errors'
      })
    }

    // If compilation fails, return early with 0 stars
    if (!compilationPassed) {
      return { results, starRating: 0 }
    }

    // Test 2: Text Test (check for required strings)
    for (const test of tests) {
      if (test.type === 'text' && test.requiredText) {
        const codeLower = code.toLowerCase()
        const missingTexts: string[] = []
        const foundTexts: string[] = []
        
        for (const requiredText of test.requiredText) {
          if (codeLower.includes(requiredText.toLowerCase())) {
            foundTexts.push(requiredText)
          } else {
            missingTexts.push(requiredText)
          }
        }
        
        results.push({
          type: 'text',
          passed: missingTexts.length === 0,
          message: missingTexts.length === 0 
            ? `Found all required text: ${foundTexts.join(', ')}`
            : `Missing: ${missingTexts.join(', ')}`,
          expected: test.requiredText.join(', '),
          actual: foundTexts.join(', ')
        })
      }
    }

    // Test 3: Input Test (check for input() calls)
    for (const test of tests) {
      if (test.type === 'input' && test.requiredInputs !== undefined) {
        const inputMatches = code.match(/input\s*\(/g)
        const inputCount = inputMatches ? inputMatches.length : 0
        const passed = inputCount >= test.requiredInputs
        
        results.push({
          type: 'input',
          passed,
          message: passed
            ? `Found ${inputCount} input() call(s)`
            : `Need at least ${test.requiredInputs} input() call(s), found ${inputCount}`,
          expected: `${test.requiredInputs} input() call(s)`,
          actual: `${inputCount} input() call(s)`
        })
      }
    }

    // Test 4: Variables Test (check for required variables)
    for (const test of tests) {
      if (test.type === 'variables' && test.requiredVariables) {
        const codeLower = code.toLowerCase()
        const missingVars: string[] = []
        const foundVars: string[] = []
        
        for (const varName of test.requiredVariables) {
          // Check for variable assignment (varName = ...)
          const varPattern = new RegExp(`\\b${varName}\\s*=`, 'i')
          if (varPattern.test(code)) {
            foundVars.push(varName)
          } else {
            missingVars.push(varName)
          }
        }
        
        results.push({
          type: 'variables',
          passed: missingVars.length === 0,
          message: missingVars.length === 0
            ? `Found all required variables: ${foundVars.join(', ')}`
            : `Missing variables: ${missingVars.join(', ')}`,
          expected: test.requiredVariables.join(', '),
          actual: foundVars.join(', ')
        })
      }
    }

    // Test 5: Output Test (run code and check output pattern)
    for (const test of tests) {
      if ((test.type === 'output' || test.type === 'logic' || !test.type) && test.out) {
        try {
          clearOutput()
          
          const requiredPackages = detectPackages(code)
          if (requiredPackages.length > 0) {
            await loadPackages(requiredPackages)
          }

          const inputs = Array.isArray(test.in) ? test.in : (test.in ? [test.in] : [])
          
          await pyodideRef.current.runPythonAsync(`
import sys
from io import StringIO

_browser_input.set_queue(${JSON.stringify(inputs)})

_old_stdout = sys.stdout
sys.stdout = StringIO()
          `)

          await pyodideRef.current.runPythonAsync(code)
          
          const output = await pyodideRef.current.runPythonAsync(`
result = sys.stdout.getvalue()
sys.stdout = _old_stdout
result
          `)

          const expected = typeof test.out === 'string' ? test.out : JSON.stringify(test.out)
          const actual = output.trim()
          
          let passed = false
          try {
            const escapedPattern = expected
              .replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
              .replace(/\\\.\\\*/g, '.*')
            
            const regex = new RegExp(escapedPattern, 'is')
            passed = regex.test(actual)
          } catch (regexError) {
            passed = actual.includes(expected.replace(/\.\*/g, ''))
          }

          results.push({
            type: test.type || 'output',
            passed,
            expected,
            actual,
            message: passed ? 'Output matches expected pattern!' : 'Output does not match expected pattern'
          })
        } catch (error: any) {
          results.push({
            type: test.type || 'output',
            passed: false,
            expected: typeof test.out === 'string' ? test.out : JSON.stringify(test.out),
            error: error.message,
            message: 'Error running code'
          })
        }
      }
    }

    // Calculate star rating based on results
    // 3 stars: All tests pass perfectly
    // 2 stars: No blocking errors, but some improvements possible (e.g., missing optional text, minor issues)
    // 1 star: Major improvements needed (e.g., missing required variables, wrong output pattern)
    // 0 stars: Code doesn't compile or critical failures
    
    const criticalTests = results.filter(r => r.type === 'compilation' || r.type === 'variables' || r.type === 'output')
    const optionalTests = results.filter(r => r.type === 'text' || r.type === 'input')
    
    const criticalPassed = criticalTests.every(r => r.passed)
    const optionalPassed = optionalTests.length > 0 ? optionalTests.every(r => r.passed) : true
    const allPassed = results.every(r => r.passed)
    
    let starRating = 0
    if (!criticalPassed) {
      starRating = 0 // Code doesn't compile or critical failures
    } else if (allPassed) {
      starRating = 3 // All tests pass perfectly
    } else if (criticalPassed && optionalTests.length > 0 && optionalTests.some(r => r.passed)) {
      starRating = 2 // No blocking errors, but some improvements possible
    } else {
      starRating = 1 // Major improvements needed
    }

    return { results, starRating }
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
