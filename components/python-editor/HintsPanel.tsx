"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Lightbulb, ChevronRight, X } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeHighlighter } from '@/components/code-highlighter'

interface HintsPanelProps {
  hints: string[]
  isOpen: boolean
  onClose: () => void
}

export function HintsPanel({ hints, isOpen, onClose }: HintsPanelProps) {
  const [currentHintIndex, setCurrentHintIndex] = useState(0)

  if (!isOpen || hints.length === 0) return null

  const currentHint = hints[currentHintIndex]
  const hasMoreHints = currentHintIndex < hints.length - 1
  const hintNumber = currentHintIndex + 1
  const totalHints = hints.length

  const handleNextHint = () => {
    if (hasMoreHints) {
      setCurrentHintIndex(currentHintIndex + 1)
    }
  }

  const handleReset = () => {
    setCurrentHintIndex(0)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-yellow-50 w-full max-w-2xl max-h-[80vh] p-6 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-600" />
            <h2 className="text-xl font-bold text-black">Hint {hintNumber} of {totalHints}</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 border-2 border-black hover:bg-yellow-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Hint Content */}
        <div className="flex-1 overflow-y-auto mb-4">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mb-3 text-black" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-xl font-bold mb-2 mt-4 text-black" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-lg font-bold mb-2 mt-3 text-black" {...props} />,
                p: ({ node, ...props }) => <p className="mb-3 leading-relaxed text-black" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-3 space-y-1 text-black" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-3 space-y-1 text-black" {...props} />,
                code: ({ node, className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || '')
                  const isInline = !match && (!node || !node.position || (node.position?.start.line === node.position?.end.line));

                  if (isInline) {
                    return (
                      <CodeHighlighter
                        code={String(children).trim()}
                        inline={true}
                      />
                    )
                  }
                  return null
                },
                pre: ({ node, children, ...props }: any) => {
                  const codeElement = children?.props?.children;
                  const hasLangClass = children?.props?.className?.includes('language-');

                  if (hasLangClass && children?.props) {
                    const match = /language-(\w+)/.exec(children.props.className || '')
                    const lang = match ? match[1] : 'python';
                    const code = String(children.props.children).trim();

                    return (
                      <div className="not-prose">
                        <CodeHighlighter
                          code={code}
                          language={lang}
                        />
                      </div>
                    );
                  }

                  const code = typeof children === 'string' ? children : String(children?.props?.children || '');
                  return (
                    <div className="not-prose">
                      <CodeHighlighter
                        code={code.trim()}
                        language="python"
                      />
                    </div>
                  );
                },
              }}
            >
              {currentHint}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer with buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t-2 border-black">
          <Button
            onClick={handleReset}
            variant="outline"
            className="border-2 border-black bg-white hover:bg-yellow-100 font-bold"
            disabled={currentHintIndex === 0}
          >
            Reset Hints
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={onClose}
              variant="outline"
              className="border-2 border-black bg-white hover:bg-yellow-100 font-bold"
            >
              Close
            </Button>
            <Button
              onClick={handleNextHint}
              disabled={!hasMoreHints}
              className="bg-yellow-400 hover:bg-yellow-500 text-black border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            >
              Next Hint
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

