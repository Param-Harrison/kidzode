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
    <div className={`border-2 border-black p-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${allPassed ? 'bg-green-100' : 'bg-red-50'}`}>
      <div className="flex items-center gap-2 mb-4">
        {allPassed ? (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span className="font-bold text-lg text-green-800">
              Amazing! All {totalCount} tests passed! 🎉
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-600" />
            <span className="font-bold text-lg text-red-800">
              Keep going! {passedCount}/{totalCount} passed
            </span>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-4 border-2 border-black rounded-md ${
              result.passed ? 'bg-white' : 'bg-white'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {result.passed ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}
              <span className="font-bold text-base">Test {index + 1}</span>
              {result.passed && <span className="text-green-600 font-medium text-sm ml-auto">Great job! 🌟</span>}
            </div>
            
            {!result.passed && (
              <div className="ml-7 text-sm space-y-2 bg-red-50 p-3 rounded border border-red-100">
                {result.error && (
                  <div className="text-red-700">
                    <span className="font-bold">Oops!</span> Something went wrong: {result.error}
                  </div>
                )}
                {result.expected && (
                  <div className="text-gray-700">
                    <span className="font-bold block text-xs uppercase tracking-wider text-gray-500 mb-1">We expected to see:</span>
                    <div className="font-mono bg-white px-2 py-1 rounded border border-gray-200 inline-block">
                      {result.expected}
                    </div>
                  </div>
                )}
                {result.actual && (
                  <div className="text-gray-700">
                    <span className="font-bold block text-xs uppercase tracking-wider text-gray-500 mb-1">But we saw:</span>
                    <div className="font-mono bg-white px-2 py-1 rounded border border-gray-200 inline-block">
                      {result.actual}
                    </div>
                  </div>
                )}
                <div className="text-xs text-gray-500 italic mt-1">
                  Check your code and try again! You can do it! 💪
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
