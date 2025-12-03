"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Copy, Check, X, AlertTriangle } from "lucide-react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeHighlighter } from '@/components/code-highlighter'

interface AnswerPanelProps {
  answer: string
  isOpen: boolean
  onClose: () => void
}

export function AnswerPanel({ answer, isOpen, onClose }: AnswerPanelProps) {
  const [copied, setCopied] = useState(false)
  const [showWarning, setShowWarning] = useState(true)

  if (!isOpen || !answer) return null

  // Extract code from markdown
  const extractCode = (markdown: string): string => {
    const codeBlockRegex = /```(?:python)?\n([\s\S]*?)```/g
    const matches = [...markdown.matchAll(codeBlockRegex)]
    if (matches.length > 0) {
      return matches[0][1].trim()
    }
    return ""
  }

  const codeToCopy = extractCode(answer)

  const handleCopy = async () => {
    if (codeToCopy) {
      try {
        await navigator.clipboard.writeText(codeToCopy)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 p-2 sm:p-4">
      <div className="bg-blue-50 w-full max-w-2xl max-h-[90vh] sm:max-h-[80vh] p-4 sm:p-6 rounded-xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-black">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <h2 className="text-xl font-bold text-black">Complete Answer</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 border-2 border-black bg-white hover:bg-blue-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Warning Message */}
        {showWarning && (
          <div className="mb-4 p-4 bg-yellow-200 border-2 border-black rounded-lg flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-800 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-yellow-900 mb-1">Try solving it yourself first!</p>
              <p className="text-sm text-yellow-900">Understanding how it works is more important than just copying the answer.</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowWarning(false)}
              className="h-6 w-6 p-0 border-2 border-black bg-white hover:bg-yellow-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}

        {/* Answer Content */}
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
              {answer}
            </ReactMarkdown>
          </div>
        </div>

        {/* Footer with buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3 pt-3 border-t-2 border-black">
          <Button
            onClick={handleCopy}
            disabled={!codeToCopy}
            className="bg-blue-400 hover:bg-blue-500 text-black border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
          >
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy Code
              </>
            )}
          </Button>
          <Button
            onClick={onClose}
            className="bg-white hover:bg-blue-100 text-black border-2 border-black font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

