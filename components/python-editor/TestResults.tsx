"use client"

import { TestResult } from "@/hooks/usePyodide"
import { CheckCircle, XCircle } from "lucide-react"

interface TestResultsProps {
  results: TestResult[]
  isRunning: boolean
}

export function TestResults({ results, isRunning }: TestResultsProps) {
  if (results.length === 0) {
    return null
  }

  const passedCount = results.filter(r => r.passed).length
  const totalCount = results.length
  const allPassed = passedCount === totalCount

  return (
    <div className={`border-2 border-black p-4 ${allPassed ? 'bg-green-100' : 'bg-red-100'}`}>
      <div className="flex items-center gap-2 mb-3">
        {allPassed ? (
          <CheckCircle className="h-5 w-5 text-green-600" />
        ) : (
          <XCircle className="h-5 w-5 text-red-600" />
        )}
        <span className="font-bold">
          Tests: {passedCount}/{totalCount} passed
        </span>
      </div>
      
      <div className="space-y-2">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-3 border-2 border-black ${
              result.passed ? 'bg-white' : 'bg-white'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              {result.passed ? (
                <CheckCircle className="h-4 w-4 text-green-600" />
              ) : (
                <XCircle className="h-4 w-4 text-red-600" />
              )}
              <span className="font-medium">Test {index + 1}</span>
            </div>
            
            {!result.passed && (
              <div className="ml-6 text-sm space-y-1">
                {result.error && (
                  <div className="text-red-600">Error: {result.error}</div>
                )}
                {result.expected && (
                  <div>
                    <span className="font-medium">Expected:</span> {result.expected}
                  </div>
                )}
                {result.actual && (
                  <div>
                    <span className="font-medium">Got:</span> {result.actual}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
