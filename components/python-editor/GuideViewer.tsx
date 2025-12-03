"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { CodeHighlighter } from '@/components/code-highlighter'
import { VoiceOver } from '@/components/VoiceOver'
import { BookmarkButton } from '@/components/BookmarkButton'
import { FeedbackPanel } from './FeedbackPanel'
import { useState } from 'react'
import { MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import 'katex/dist/katex.min.css'

interface GuideViewerProps {
  content: string
  lessonId?: string
  bookId?: string
  initialBookmarked?: boolean
}

export function GuideViewer({ content, lessonId, bookId, initialBookmarked }: GuideViewerProps) {
  const [showFeedbackPanel, setShowFeedbackPanel] = useState(false)

  return (
    <div className="h-full flex flex-col bg-card border-r-2 border-black">
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {/* Voice Over Button */}
        <div className="flex justify-end mb-4">
          <VoiceOver content={content} />
        </div>
        
        <div className="max-w-none space-y-4 prose prose-slate dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4 text-foreground" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-3 mt-6 text-foreground" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-2 mt-4 text-foreground" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 leading-relaxed text-foreground/90" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/90" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/90" {...props} />,
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

                // For multi-line code blocks, let the pre element handle it
                return null
              },
              pre: ({ node, children, ...props }: any) => {
                // Extract code and language from the pre element
                const codeElement = children?.props?.children;
                const hasLangClass = children?.props?.className?.includes('language-');

                if (hasLangClass && children?.props) {
                  const match = /language-(\w+)/.exec(children.props.className || '')
                  const lang = match ? match[1] : 'code';
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

                // Regular pre blocks (without language specified)
                const code = typeof children === 'string' ? children : String(children?.props?.children || '');
                return (
                  <div className="not-prose">
                    <CodeHighlighter
                      code={code.trim()}
                      language="text"
                    />
                  </div>
                );
              },
              blockquote: ({ node, ...props }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>

      {/* Bookmark and Feedback buttons at bottom */}
      {(lessonId && bookId) && (
        <div className="border-t-2 border-black p-4 bg-white flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <BookmarkButton 
              lessonId={lessonId} 
              bookId={bookId} 
              initialBookmarked={initialBookmarked}
            />
            <span className="text-sm font-bold text-gray-700">Bookmark this lesson</span>
          </div>
          
          <Button
            onClick={() => setShowFeedbackPanel(true)}
            variant="outline"
            size="sm"
            className="gap-2 border-2 border-black bg-purple-100 hover:bg-purple-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Feedback</span>
          </Button>
        </div>
      )}

      {/* Feedback Panel */}
      {lessonId && bookId && (
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
