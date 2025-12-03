"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { CodeHighlighter } from '@/components/code-highlighter'
import { VoiceOver } from '@/components/VoiceOver'
import 'katex/dist/katex.min.css'

interface GuideViewerProps {
  content: string
}

export function GuideViewer({ content }: GuideViewerProps) {
  return (
    <div className="h-full overflow-y-auto p-4 sm:p-6 bg-card border-r-2 border-black">
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
  )
}
