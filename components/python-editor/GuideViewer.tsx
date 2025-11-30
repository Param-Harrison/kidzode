"use client"

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface GuideViewerProps {
  content: string
}

export function GuideViewer({ content }: GuideViewerProps) {
  return (
    <div className="h-full overflow-y-auto p-6 bg-card border-2 border-black">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-3 mt-6" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-2 mt-4" {...props} />,
            p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
            code: ({ node, inline, ...props }: any) =>
              inline ? (
                <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono border border-border" {...props} />
              ) : (
                <code className="block bg-black text-white p-4 rounded-md overflow-x-auto font-mono text-sm border-2 border-black my-4" {...props} />
              ),
            pre: ({ node, ...props }) => <pre className="my-4" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}
