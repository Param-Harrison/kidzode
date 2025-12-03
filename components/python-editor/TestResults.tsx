"use client"

import { TestResult } from "@/hooks/usePyodide"
import { CheckCircle, XCircle, Star } from "lucide-react"

interface TestResultsProps {
  results: TestResult[]
  isRunning: boolean
  starRating?: number
}

export function TestResults({ results, isRunning, starRating = 0 }: TestResultsProps) {
  if (results.length === 0) {
    return null
  }

  const passedCount = results.filter(r => r.passed).length
  const totalCount = results.length
  const allPassed = passedCount === totalCount

  // Star rating messages
  const starMessages = {
    3: "Amazing! Perfect code!",
    2: "Good job! Small improvements needed",
    1: "Keep trying! You're learning!",
    0: "Don't give up! Fix the errors and try again!"
  }

  return (
    <div className={`border-2 border-black p-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
      starRating === 3 ? 'bg-green-100' : 
      starRating === 2 ? 'bg-yellow-100' : 
      starRating === 1 ? 'bg-orange-100' : 
      'bg-red-50'
    }`}>
      {/* Star Rating Display */}
      {starRating > 0 && (
        <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black">
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className={`h-6 w-6 ${
                  star <= starRating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="font-bold text-lg text-black ml-2">
            {starMessages[starRating as keyof typeof starMessages]}
          </span>
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-4">
        {allPassed ? (
          <div className="flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <span className="font-bold text-lg text-green-800">
              All {totalCount} tests passed! 🎉
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <XCircle className="h-6 w-6 text-red-600" />
            <span className="font-bold text-lg text-red-800">
              {passedCount}/{totalCount} tests passed
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
              {result.passed && <span className="text-green-600 font-medium text-sm ml-auto">✓ Passed</span>}
            </div>
            
            {/* Show details for passing tests too */}
            {result.passed && (
              <div className="ml-7 text-sm space-y-2 bg-green-50 p-3 rounded border border-green-100">
                {result.actual && (
                  <div className="text-gray-700">
                    <span className="font-bold block text-sm text-green-700 mb-2">✨ What your code printed:</span>
                    <div className="font-mono bg-white px-3 py-2 rounded border border-green-200 text-sm leading-relaxed whitespace-pre-wrap">
                      {result.actual}
                    </div>
                  </div>
                )}
                <div className="text-sm text-green-700 font-medium mt-3 flex items-center gap-2">
                  <span className="text-2xl">🎉</span>
                  <span>Perfect! This is exactly what we wanted to see!</span>
                </div>
              </div>
            )}
            
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
                    <div className="font-mono bg-white px-2 py-1 rounded border border-gray-200 inline-block whitespace-pre-wrap">
                      {result.expected}
                    </div>
                  </div>
                )}
                {result.actual && (
                  <div className="text-gray-700">
                    <span className="font-bold block text-xs uppercase tracking-wider text-gray-500 mb-1">But we saw:</span>
                    <div className="font-mono bg-white px-2 py-1 rounded border border-gray-200 inline-block whitespace-pre-wrap">
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
