"use client"

import { useEffect, useState } from "react"
import Editor from "@monaco-editor/react"
import { Button } from "@/components/ui/button"
import { Play, RotateCcw, CheckCircle, Loader2, ArrowLeft } from "lucide-react"
import { usePyodide, TestResult } from "@/hooks/usePyodide"
import { Console } from "./Console"
import { GuideViewer } from "./GuideViewer"
import { TestResults } from "./TestResults"
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels"
import Link from "next/link"

interface PythonEditorProps {
  initialCode: string
  guide: string
  tests?: Array<{ in: string | string[]; out: string | any[] }>
  onCodeChange?: (code: string) => void
  onComplete?: () => void
  bookId: string
  lessonId?: string
  progress?: 'not_started' | 'in_progress' | 'completed'
}

export function PythonEditor({ 
  initialCode, 
  guide, 
  tests = [], 
  onCodeChange, 
  onComplete,
  bookId,
  lessonId,
  progress 
}: PythonEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const { status, output, runCode, runTests, clearOutput, awaitingInput, handleInput } = usePyodide()

  const [isVertical, setIsVertical] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsVertical(window.innerWidth < 1024) // lg breakpoint
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  useEffect(() => {
    setCode(initialCode)
  }, [initialCode])

  const handleRun = async () => {
    await runCode(code)
    if (onCodeChange) {
      onCodeChange(code)
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
      if (allPassed && onComplete && progress !== 'completed') {
        onComplete()
      }
    }
  }

  const handleReset = () => {
    setCode(initialCode)
    clearOutput()
    setTestResults([])
  }

  const isLoading = status === 'loading'
  const isRunning = status === 'running'

  return (
    <div className="flex flex-col h-screen">
      {/* Single unified toolbar */}
      <div className="flex items-center justify-between p-3 border-b border-border bg-card">
        <div className="flex items-center gap-3">
          <Link href={`/courses/${bookId}`}>
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          
          <div className="h-6 w-px bg-border" />
          
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
          {/* Left: Guide */}
          <Panel defaultSize={isVertical ? 40 : 50} minSize={20}>
            <div className="h-full overflow-y-auto border-r-2 border-black">
              {testResults.length > 0 && (
                <div className="border-b-2 border-black">
                  <TestResults results={testResults} isRunning={isRunning} />
                </div>
              )}
              <GuideViewer content={guide} />
            </div>
          </Panel>

          <PanelResizeHandle className="w-2 bg-border hover:bg-secondary transition-colors" />

          {/* Right: Editor + Console */}
          <Panel defaultSize={70} minSize={30}>
            <PanelGroup direction="vertical">
              {/* Code Editor */}
              <Panel defaultSize={60} minSize={30}>
                <Editor
                  height="100%"
                  defaultLanguage="python"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 4,
                  }}
                />
              </Panel>

              <PanelResizeHandle className="h-2 bg-border hover:bg-secondary transition-colors" />

              {/* Console */}
              <Panel defaultSize={40} minSize={20}>
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
    </div>
  )
}
