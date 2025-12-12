interface CodeHighlighterProps {
  code: string
  language?: string
  inline?: boolean
  className?: string
}

export function CodeHighlighter({ code, language = 'python', inline = false, className = '' }: CodeHighlighterProps) {
  // Neo-brutalism color scheme - bold, high contrast, playful
  const colors = {
    python: {
      background: 'bg-accent border-black',
      header: 'bg-black text-accent',
      code: 'text-black'
    },
    javascript: {
      background: 'bg-chart-4 border-black',
      header: 'bg-black text-chart-4',
      code: 'text-black'
    },
    typescript: {
      background: 'bg-primary border-black',
      header: 'bg-black text-primary',
      code: 'text-black'
    },
    bash: {
      background: 'bg-secondary border-black',
      header: 'bg-black text-secondary',
      code: 'text-black'
    },
    default: {
      background: 'bg-chart-5 border-black',
      header: 'bg-black text-chart-5',
      code: 'text-black'
    }
  }

  const theme = colors[language as keyof typeof colors] || colors.default

  // Inline code styling
  if (inline) {
    return (
      <code className={`inline-block px-2 py-1 font-mono text-sm font-bold bg-pink-200 text-black border-2 border-black rounded ${className}`}>
        {code}
      </code>
    )
  }

  // Multi-line code block styling
  return (
    <div className={`my-4 border-2 border-black rounded-lg overflow-hidden ${theme.background}`}>
      {/* Header with language label */}
      <div className="px-3 py-2 font-bold text-xs uppercase tracking-wider border-b-2 border-black bg-black text-white">
        {language}
      </div>

      {/* Code content */}
      <pre className="p-4 font-mono text-sm overflow-x-auto">
        <code className={`font-bold ${theme.code}`}>
          {code}
        </code>
      </pre>
    </div>
  )
}