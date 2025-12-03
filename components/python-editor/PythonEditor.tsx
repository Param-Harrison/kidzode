"use client"

import { useEffect, useState } from "react"
import Editor from "@monaco-editor/react"
import { Button } from "@/components/ui/button"
import { Play, RotateCcw, CheckCircle, Loader2, ArrowLeft } from "lucide-react"
import { usePyodide, TestResult } from "@/hooks/usePyodide"
import { Console } from "./Console"
import { GuideViewer } from "./GuideViewer"
import { TestResults } from "./TestResults"
import { HintsPanel } from "./HintsPanel"
import { AnswerPanel } from "./AnswerPanel"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import Link from "next/link"
import confetti from "canvas-confetti"
import { Lightbulb, FileText } from "lucide-react"

interface PythonEditorProps {
  initialCode: string
  starterCode?: string // Original starter code from .py file (for reset)
  guide: string
  tests?: Array<{ in: string | string[]; out: string | any[] }>
  hints?: string // Hints markdown content
  answer?: string // Answer markdown content
  lessonType?: 'lesson' | 'challenge'
  onCodeChange?: (code: string) => void
  onComplete?: () => void
  bookId: string
  lessonId?: string
  progress?: 'not_started' | 'in_progress' | 'completed'
  prevLesson?: { id: string; name: string }
  nextLesson?: { id: string; name: string }
}

export function PythonEditor({ 
  initialCode, 
  starterCode: starterCodeProp,
  guide, 
  tests = [], 
  hints,
  answer,
  lessonType,
  onCodeChange, 
  onComplete,
  bookId,
  lessonId,
  progress,
  prevLesson,
  nextLesson
}: PythonEditorProps) {
  // Use starterCode prop if provided, otherwise fall back to initialCode
  const actualStarterCode = starterCodeProp || initialCode
  
  // Store starter code separately for reset functionality
  const [starterCode, setStarterCode] = useState(actualStarterCode)
  const [code, setCode] = useState(initialCode)
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const { status, output, runCode, runTests, clearOutput, awaitingInput, handleInput } = usePyodide()

  const [isVertical, setIsVertical] = useState(false)

  // Hints and answer state
  const [hintsArray, setHintsArray] = useState<string[]>([])
  const [showHintsPanel, setShowHintsPanel] = useState(false)
  const [showAnswerPanel, setShowAnswerPanel] = useState(false)

  // Parse hints when they change
  useEffect(() => {
    if (hints) {
      // Split by --- delimiter (with optional whitespace)
      const parsedHints = hints.split(/---+/).map(h => h.trim()).filter(h => h.length > 0)
      setHintsArray(parsedHints)
    } else {
      setHintsArray([])
    }
    // Reset hints panel when hints change
    setShowHintsPanel(false)
  }, [hints])

  // Reset answer panel when answer changes
  useEffect(() => {
    setShowAnswerPanel(false)
  }, [answer])

  useEffect(() => {
    const checkSize = () => {
      setIsVertical(window.innerWidth < 1024) // lg breakpoint
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  // Update starter code when prop changes
  useEffect(() => {
    if (starterCodeProp) {
      setStarterCode(starterCodeProp)
    }
  }, [starterCodeProp])

  // Update current code when initialCode changes
  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  const handleRun = async () => {
    const result = await runCode(code)
    if (onCodeChange) {
      onCodeChange(code)
    }
    
    // For lessons without tests, mark as complete when code runs successfully
    if (tests.length === 0 && result.success && onComplete && progress !== 'completed') {
      // Trigger confetti for successful run!
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 }
      })
      onComplete()
    }
  }

  const handleTest = async () => {
    if (tests.length > 0) {
      const results = await runTests(code, tests)
      setTestResults(results)
      if (onCodeChange) {
        onCodeChange(code)
      }
      
      // If all tests pass, mark lesson as complete
      const allPassed = results.every(r => r.passed)
      if (allPassed) {
        // Trigger confetti!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
        
        if (onComplete && progress !== 'completed') {
          onComplete()
        }
      }
    }
  }

  const handleReset = () => {
    // Reset to starter code (original snippet), not initialCode which may have been modified
    setCode(starterCode)
    clearOutput()
    setTestResults([])
    // Reset hints/answer panels
    setShowHintsPanel(false)
    setShowAnswerPanel(false)
  }

  const isLoading = status === 'loading'
  const isRunning = status === 'running'

  return (
    <div className="flex flex-col h-screen">
      {/* Single unified toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-card">
        {/* Left side: Back and Navigation */}
        <div className="flex items-center gap-3">
          <Link href={`/courses/${bookId}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          
          {(prevLesson || nextLesson) && <div className="h-6 w-px bg-border" />}

          {prevLesson && (
            <Link href={`/courses/${bookId}/lessons/${prevLesson.id}`}>
              <Button variant="outline" size="sm" className="gap-2">
                ← Prev
              </Button>
            </Link>
          )}

          {nextLesson && (
            <Link href={`/courses/${bookId}/lessons/${nextLesson.id}`}>
              <Button variant="outline" size="sm" className="gap-2">
                Next →
              </Button>
            </Link>
          )}
        </div>
        
        {/* Right side: Completion Status, Run, Test, Reset, Hints, Answer */}
        <div className="flex items-center gap-3">
          {/* Completion Status Indicator */}
          {progress === 'completed' && (
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 border-2 border-green-600 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-xs font-bold text-green-900">Completed</span>
            </div>
          )}
          
          <Button
            onClick={handleRun}
            disabled={isLoading || isRunning}
            variant="neo"
            size="sm"
            className="gap-2"
          >
            {isRunning ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            Run
          </Button>
          
          {tests.length > 0 && (
            <Button
              onClick={handleTest}
              disabled={isLoading || isRunning}
              variant="default"
              size="sm"
              className="gap-2 shadow-sm"
            >
              <CheckCircle className="h-4 w-4" />
              Test
            </Button>
          )}

          {/* Hints and Answer buttons - only for challenges */}
          {lessonType === 'challenge' && hintsArray.length > 0 && (
            <Button
              onClick={() => setShowHintsPanel(true)}
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm border-yellow-400 hover:bg-yellow-50"
            >
              <Lightbulb className="h-4 w-4" />
              Hint
            </Button>
          )}

          {lessonType === 'challenge' && answer && (
            <Button
              onClick={() => setShowAnswerPanel(true)}
              variant="outline"
              size="sm"
              className="gap-2 shadow-sm border-blue-400 hover:bg-blue-50"
            >
              <FileText className="h-4 w-4" />
              Show Answer
            </Button>
          )}
          
          <Button
            onClick={handleReset}
            disabled={isLoading || isRunning}
            variant="outline"
            size="sm"
            className="gap-2 shadow-sm"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground font-medium">
          {isLoading && "Loading Python..."}
          {status === 'ready' && "Ready"}
          {isRunning && "Running..."}
          {status === 'error' && "Error loading Python"}
        </div>
      </div>

      {/* Resizable panels */}
      <div className="flex-1 overflow-hidden">
        <PanelGroup direction={isVertical ? "vertical" : "horizontal"}>
          {/* Left: Guide - 40% on desktop, full width on mobile */}
          <Panel 
            defaultSize={isVertical ? 45 : 40} 
            minSize={isVertical ? 30 : 25}
            maxSize={isVertical ? 70 : 50}
          >
            <div className="h-full overflow-y-auto border-r-2 border-black">
              {testResults.length > 0 && (
                <div className="border-b-2 border-black">
                  <TestResults results={testResults} isRunning={isRunning} />
                </div>
              )}
              <GuideViewer content={guide} />
            </div>
          </Panel>

          <PanelResizeHandle className={`${isVertical ? 'h-2' : 'w-2'} bg-border hover:bg-secondary transition-colors`} />

          {/* Right: Editor + Console - 60% on desktop */}
          <Panel 
            defaultSize={isVertical ? 55 : 60} 
            minSize={isVertical ? 30 : 40}
          >
            <PanelGroup direction="vertical">
              {/* Code Editor - larger on desktop */}
              <Panel 
                defaultSize={isVertical ? 50 : 65} 
                minSize={30}
              >
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: isVertical ? 13 : 14,
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 4,
                  }}
                />
              </Panel>

              <PanelResizeHandle className="h-2 bg-border hover:bg-secondary transition-colors" />

              {/* Console - smaller on desktop */}
              <Panel 
                defaultSize={isVertical ? 50 : 35} 
                minSize={20}
              >
                <Console
                  output={output}
                  awaitingInput={awaitingInput}
                  onInput={handleInput}
                  onClear={clearOutput}
                />
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>

      {/* Hints and Answer Panels */}
      <HintsPanel
        hints={hintsArray}
        isOpen={showHintsPanel}
        onClose={() => setShowHintsPanel(false)}
      />
      <AnswerPanel
        answer={answer || ""}
        isOpen={showAnswerPanel}
        onClose={() => setShowAnswerPanel(false)}
      />
    </div>
  )
}
