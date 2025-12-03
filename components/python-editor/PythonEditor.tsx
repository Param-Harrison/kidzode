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
import { ActionsMenu } from "./ActionsMenu"
import { useAuth } from "@/hooks/useAuth"

interface PythonEditorProps {
  initialCode: string
  starterCode?: string // Original starter code from .py file (for reset)
  guide: string
  tests?: Array<{ in: string | string[]; out: string | any[] }>
  hints?: string // Hints markdown content
  answer?: string // Answer markdown content
  lessonType?: 'lesson' | 'challenge'
  onCodeChange?: (code: string) => void
  onComplete?: (starRating?: number, testResults?: any) => void
  bookId: string
  lessonId?: string
  progress?: 'not_started' | 'in_progress' | 'completed'
  prevLesson?: { id: string; name: string }
  nextLesson?: { id: string; name: string }
  initialBookmarked?: boolean
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
  nextLesson,
  initialBookmarked
}: PythonEditorProps) {
  // Use starterCode prop if provided, otherwise fall back to initialCode
  const actualStarterCode = starterCodeProp || initialCode
  
  // Store starter code separately for reset functionality
  const [starterCode, setStarterCode] = useState(actualStarterCode)
  const [code, setCode] = useState(initialCode)
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [starRating, setStarRating] = useState<number>(0)
  const { status, output, runCode, runTests, clearOutput, awaitingInput, handleInput } = usePyodide()
  const { user } = useAuth()

  const [isVertical, setIsVertical] = useState(false)

  // Hints and answer state
  const [hintsArray, setHintsArray] = useState<string[]>([])
  const [showHintsPanel, setShowHintsPanel] = useState(false)
  const [showAnswerPanel, setShowAnswerPanel] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(initialBookmarked || false)

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

  // Update bookmark state when prop changes
  useEffect(() => {
    if (initialBookmarked !== undefined) {
      setIsBookmarked(initialBookmarked)
    }
  }, [initialBookmarked])

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
      console.log('Marking lesson as complete (no tests, successful run)')
      // Trigger confetti for successful run!
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.6 }
      })
      onComplete(3) // Give 3 stars for lessons that run successfully
    }
  }

  const handleTest = async () => {
    if (tests.length > 0) {
      const { results, starRating: stars } = await runTests(code, tests)
      setTestResults(results)
      setStarRating(stars)
      
      if (onCodeChange) {
        onCodeChange(code)
      }
      
      // Trigger confetti with stars based on rating!
      if (stars > 0) {
        // Multiple bursts for better effect - one for each star
        for (let i = 0; i < stars; i++) {
          setTimeout(() => {
            confetti({
              particleCount: 50,
              spread: 70,
              origin: { y: 0.6, x: 0.3 + (i * 0.2) },
              colors: ['#FFD700', '#FFA500', '#FF6347'], // Gold, orange, tomato - star colors
              shapes: ['star'],
            })
          }, i * 200)
        }
        
        // Also trigger regular confetti with star colors
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FFD700', '#FFA500', '#FF6347'],
        })
      }
      
      // Mark lesson as complete if any tests pass (stars > 0) and not already completed
      // This ensures progress is saved regardless of star rating (1, 2, or 3 stars)
      if (stars > 0 && onComplete && progress !== 'completed') {
        console.log('Marking lesson as complete with star rating:', stars)
        onComplete(stars, results)
      } else if (stars > 0 && onComplete && progress === 'completed') {
        // Already completed, but update rating if it changed
        console.log('Lesson already completed, updating rating:', stars)
        onComplete(stars, results)
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
  
  // Check if user has modified code from starter code
  const hasModifiedCode = code.trim() !== starterCode.trim() && code.trim().length > 0
  const isTestDisabled = isLoading || isRunning || !hasModifiedCode

  // Standard button classes for consistency
  const buttonBaseClasses = "gap-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold h-10"

  return (
    <div className="flex flex-col h-screen">
      {/* Single unified toolbar */}
      <div className="flex items-center justify-between gap-2 p-3 border-b-2 border-black bg-card">
        {/* Left: Navigation */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link href={`/courses/${bookId}`}>
            <Button 
              variant="outline" 
              size="sm" 
              className={`${buttonBaseClasses} bg-white hover:bg-gray-100`}
            >
              <ArrowLeft className="h-4 w-4" /> 
              <span className="hidden md:inline">Back</span>
            </Button>
          </Link>
          
          <div className="h-6 w-px bg-border hidden md:block" />

          {prevLesson ? (
            <Link href={`/courses/${bookId}/lessons/${prevLesson.id}`}>
              <Button 
                variant="outline" 
                size="sm" 
                className={`${buttonBaseClasses} bg-white hover:bg-gray-100`}
              >
                <span className="text-base">←</span>
                <span className="hidden md:inline">Prev</span>
              </Button>
            </Link>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              disabled
              className={`${buttonBaseClasses} bg-white opacity-50 cursor-not-allowed`}
            >
              <span className="text-base">←</span>
              <span className="hidden md:inline">Prev</span>
            </Button>
          )}

          {nextLesson ? (
            <Link href={`/courses/${bookId}/lessons/${nextLesson.id}`}>
              <Button 
                variant="outline" 
                size="sm" 
                className={`${buttonBaseClasses} bg-white hover:bg-gray-100`}
              >
                <span className="hidden md:inline">Next</span>
                <span className="text-base">→</span>
              </Button>
            </Link>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              disabled
              className={`${buttonBaseClasses} bg-white opacity-50 cursor-not-allowed`}
            >
              <span className="hidden md:inline">Next</span>
              <span className="text-base">→</span>
            </Button>
          )}

          {/* Status indicator */}
          {progress === 'completed' && (
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-100 border-2 border-green-600 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-xs font-bold text-green-900">Completed</span>
            </div>
          )}
        </div>

        {/* Center: Primary Actions */}
        <div className="flex items-center gap-2 flex-1 justify-center md:justify-end">
          <Button
            onClick={handleRun}
            disabled={isLoading || isRunning}
            variant="neo"
            size="sm"
            className={`${buttonBaseClasses} flex-1 md:flex-initial min-w-[80px] md:min-w-0`}
          >
            {isRunning ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span>Run</span>
          </Button>
          
          {tests.length > 0 && lessonType === 'challenge' && (
            <Button
              onClick={handleTest}
              disabled={isTestDisabled}
              variant="default"
              size="sm"
              className={`${buttonBaseClasses} flex-1 md:flex-initial min-w-[80px] md:min-w-0`}
              title={!hasModifiedCode ? "Type some code first!" : ""}
            >
              <CheckCircle className="h-4 w-4" />
              <span>Test</span>
            </Button>
          )}
        </div>

        {/* Right: Secondary Actions */}
        <div className="hidden md:flex items-center gap-2 flex-shrink-0">
          {lessonType === 'challenge' && hintsArray.length > 0 && (
            <Button
              onClick={() => setShowHintsPanel(true)}
              variant="outline"
              size="sm"
              className={`${buttonBaseClasses} bg-yellow-100 hover:bg-yellow-200`}
            >
              <Lightbulb className="h-4 w-4" />
              <span className="hidden lg:inline">Hint</span>
            </Button>
          )}

          {lessonType === 'challenge' && answer && (
            <Button
              onClick={() => setShowAnswerPanel(true)}
              variant="outline"
              size="sm"
              className={`${buttonBaseClasses} bg-blue-100 hover:bg-blue-200`}
            >
              <FileText className="h-4 w-4" />
              <span className="hidden lg:inline">Answer</span>
            </Button>
          )}
          
          <Button
            onClick={handleReset}
            disabled={isLoading || isRunning}
            variant="outline"
            size="sm"
            className={`${buttonBaseClasses} bg-white hover:bg-gray-100`}
          >
            <RotateCcw className="h-4 w-4" />
            <span className="hidden lg:inline">Reset</span>
          </Button>
        </div>

        {/* Mobile: Actions Menu Dropdown */}
        <div className="md:hidden flex-shrink-0">
          <ActionsMenu
            onReset={handleReset}
            onHint={lessonType === 'challenge' && hintsArray.length > 0 ? () => setShowHintsPanel(true) : undefined}
            onAnswer={lessonType === 'challenge' && answer ? () => setShowAnswerPanel(true) : undefined}
            hasHints={hintsArray.length > 0}
            hasAnswer={!!answer}
            disabled={isLoading || isRunning}
          />
        </div>

        {/* Status text - Desktop only */}
        <div className="hidden lg:block text-xs text-muted-foreground font-medium min-w-[120px] text-right flex-shrink-0">
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
            <div className="h-full overflow-hidden border-r-2 border-black flex flex-col">
              {testResults.length > 0 && (
                <div className="border-b-2 border-black flex-shrink-0">
                  <TestResults results={testResults} isRunning={isRunning} starRating={starRating} />
                </div>
              )}
              <GuideViewer 
                content={guide} 
                lessonId={lessonId}
                bookId={bookId}
                initialBookmarked={isBookmarked}
              />
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

      {/* Hints, Answer, and Feedback Panels */}
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
