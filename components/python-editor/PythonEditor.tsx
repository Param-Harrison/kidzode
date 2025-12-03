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
import { FeedbackPanel } from "./FeedbackPanel"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import Link from "next/link"
import confetti from "canvas-confetti"
import { Lightbulb, FileText, MessageSquare } from "lucide-react"
import { BookmarkButton } from "@/components/BookmarkButton"
import { ActionsMenu } from "./ActionsMenu"

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

  const [isVertical, setIsVertical] = useState(false)

  // Hints and answer state
  const [hintsArray, setHintsArray] = useState<string[]>([])
  const [showHintsPanel, setShowHintsPanel] = useState(false)
  const [showAnswerPanel, setShowAnswerPanel] = useState(false)
  const [showFeedbackPanel, setShowFeedbackPanel] = useState(false)

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
      
      // If all tests pass (3 stars), mark lesson as complete
      if (stars === 3 && onComplete && progress !== 'completed') {
        onComplete(stars, results)
      } else if (stars > 0 && onComplete) {
        // Also save rating for non-perfect scores
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

  return (
    <div className="flex flex-col h-screen">
      {/* Responsive toolbar - Mobile optimized */}
      <div className="flex flex-col border-b-2 border-black bg-card">
        {/* Row 1: Navigation - Mobile optimized */}
        <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-300 md:border-b-0 md:p-3">
          <div className="flex items-center gap-1.5 md:gap-3 flex-1 min-w-0">
            <Link href={`/courses/${bookId}`} className="flex-shrink-0">
              <Button variant="outline" size="sm" className="gap-1 md:gap-2 border-2 border-black bg-white hover:bg-gray-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold h-9 md:h-auto">
                <ArrowLeft className="h-4 w-4" /> 
                <span className="hidden md:inline">Back</span>
              </Button>
            </Link>
            
            {(prevLesson || nextLesson) && (
              <div className="h-6 w-px bg-border hidden md:block flex-shrink-0" />
            )}

            {prevLesson && (
              <Link href={`/courses/${bookId}/lessons/${prevLesson.id}`} className="flex-shrink-0">
                <Button variant="outline" size="sm" className="gap-1 md:gap-2 border-2 border-black bg-white hover:bg-gray-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold h-9 md:h-auto text-xs md:text-sm">
                  <span className="text-sm md:text-base">←</span>
                  <span className="hidden md:inline">Prev</span>
                </Button>
              </Link>
            )}

            {nextLesson && (
              <Link href={`/courses/${bookId}/lessons/${nextLesson.id}`} className="flex-shrink-0">
                <Button variant="outline" size="sm" className="gap-1 md:gap-2 border-2 border-black bg-white hover:bg-gray-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold h-9 md:h-auto text-xs md:text-sm">
                  <span className="hidden md:inline">Next</span>
                  <span className="text-sm md:text-base">→</span>
                </Button>
              </Link>
            )}
          </div>

          {/* Status indicator - Mobile */}
          {progress === 'completed' && (
            <div className="flex items-center gap-1 px-2 py-1 bg-green-100 border-2 border-green-600 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:hidden flex-shrink-0">
              <CheckCircle className="h-4 w-4 text-green-600" />
            </div>
          )}
        </div>

        {/* Row 2: Primary Actions - Always visible */}
        <div className="flex items-center gap-2 p-2 md:p-3 md:justify-between">
          {/* Left: Status (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {progress === 'completed' && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-100 border-2 border-green-600 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-xs font-bold text-green-900">Completed</span>
              </div>
            )}
          </div>

          {/* Center: Primary Action Buttons */}
          <div className="flex items-center gap-2 flex-1 justify-center md:justify-end">
            <Button
              onClick={handleRun}
              disabled={isLoading || isRunning}
              variant="neo"
              size="sm"
              className="gap-1 md:gap-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold h-10 md:h-auto flex-1 md:flex-initial min-w-[80px] md:min-w-0"
            >
              {isRunning ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Play className="h-4 w-4" />
              )}
              <span className="text-sm md:text-base">Run</span>
            </Button>
            
            {tests.length > 0 && lessonType === 'challenge' && (
              <Button
                onClick={handleTest}
                disabled={isTestDisabled}
                variant="default"
                size="sm"
                className="gap-1 md:gap-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold h-10 md:h-auto flex-1 md:flex-initial min-w-[80px] md:min-w-0"
                title={!hasModifiedCode ? "Type some code first!" : ""}
              >
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm md:text-base">Test</span>
              </Button>
            )}
          </div>

          {/* Right: Secondary Actions - Desktop visible, Mobile in dropdown */}
          <div className="hidden md:flex items-center gap-2 md:gap-3">
            {/* Bookmark Button - Desktop */}
            {lessonId && (
              <BookmarkButton 
                lessonId={lessonId} 
                bookId={bookId} 
                initialBookmarked={initialBookmarked}
              />
            )}

            {/* Hints and Answer buttons - Desktop only */}
            {lessonType === 'challenge' && hintsArray.length > 0 && (
              <Button
                onClick={() => setShowHintsPanel(true)}
                variant="outline"
                size="sm"
                className="gap-2 border-2 border-black bg-yellow-100 hover:bg-yellow-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold"
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
                className="gap-2 border-2 border-black bg-blue-100 hover:bg-blue-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold"
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
              className="gap-2 border-2 border-black bg-white hover:bg-gray-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold"
            >
              <RotateCcw className="h-4 w-4" />
              <span className="hidden lg:inline">Reset</span>
            </Button>

            {/* Feedback Button - Desktop */}
            {lessonId && (
              <Button
                onClick={() => setShowFeedbackPanel(true)}
                variant="outline"
                size="sm"
                className="gap-2 border-2 border-black bg-purple-100 hover:bg-purple-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="hidden lg:inline">Feedback</span>
              </Button>
            )}
          </div>

          {/* Mobile: Actions Menu Dropdown */}
          <div className="md:hidden">
            <ActionsMenu
              onReset={handleReset}
              onHint={lessonType === 'challenge' && hintsArray.length > 0 ? () => setShowHintsPanel(true) : undefined}
              onAnswer={lessonType === 'challenge' && answer ? () => setShowAnswerPanel(true) : undefined}
              onFeedback={lessonId ? () => setShowFeedbackPanel(true) : undefined}
              onBookmark={lessonId ? () => {
                // Toggle bookmark - we'll need to handle this via the BookmarkButton's internal state
                // For now, we'll just show the menu item
              } : undefined}
              isBookmarked={initialBookmarked}
              hasHints={hintsArray.length > 0}
              hasAnswer={!!answer}
              disabled={isLoading || isRunning}
            />
          </div>

          {/* Status text - Desktop only */}
          <div className="hidden lg:block text-xs text-muted-foreground font-medium min-w-[120px] text-right">
            {isLoading && "Loading Python..."}
            {status === 'ready' && "Ready"}
            {isRunning && "Running..."}
            {status === 'error' && "Error loading Python"}
          </div>
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
                  <TestResults results={testResults} isRunning={isRunning} starRating={starRating} />
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
      {lessonId && (
        <FeedbackPanel
          lessonId={lessonId}
          bookId={bookId}
          isOpen={showFeedbackPanel}
          onClose={() => setShowFeedbackPanel(false)}
        />
      )}
    </div>
  )
}
