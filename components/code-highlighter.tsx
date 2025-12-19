import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

interface CodeHighlighterProps {
  code: string
  language?: string
  inline?: boolean
  className?: string
}

export function CodeHighlighter({ code, language = 'python', inline = false, className = '' }: CodeHighlighterProps) {
  // Custom Neo-brutalism theme for Prism
  // Using vibrant colors that fit the Kidzode aesthetic
  const neoBrutalTheme: { [key: string]: React.CSSProperties } = {
    'code[class*="language-"]': {
      color: '#000000',
      background: 'none',
      fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      fontWeight: '700', // Bold Everything for Neo-brutalism
    },
    'pre[class*="language-"]': {
      color: '#000000',
      background: 'none',
      fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      margin: '0',
      padding: '0',
      overflow: 'auto',
    },
    'comment': { color: '#6A7280', fontStyle: 'italic' },
    'prolog': { color: '#6A7280' },
    'doctype': { color: '#6A7280' },
    'cdata': { color: '#6A7280' },
    'punctuation': { color: '#000000' },
    'namespace': { opacity: '0.7' },
    'property': { color: '#D34E4E' }, // Red
    'tag': { color: '#D34E4E' },
    'boolean': { color: '#D34E4E' },
    'number': { color: '#D34E4E' },
    'constant': { color: '#D34E4E' },
    'symbol': { color: '#D34E4E' },
    'deleted': { color: '#D34E4E' },
    'selector': { color: '#2563EB' }, // Blue
    'attr-name': { color: '#2563EB' },
    'string': { color: '#059669' }, // Green
    'char': { color: '#059669' },
    'builtin': { color: '#059669' },
    'inserted': { color: '#059669' },
    'operator': { color: '#000000' },
    'entity': { color: '#000000', cursor: 'help' },
    'url': { color: '#000000' },
    '.language-css .token.string': { color: '#000000' },
    '.style .token.string': { color: '#000000' },
    'atrule': { color: '#7C3AED' }, // Purple
    'attr-value': { color: '#7C3AED' },
    'keyword': { color: '#7C3AED' },
    'function': { color: '#2563EB' }, // Blue
    'class-name': { color: '#2563EB' },
    'regex': { color: '#EAB308' }, // Yellow
    'important': { color: '#EAB308', fontWeight: 'bold' },
    'variable': { color: '#EAB308' },
    'bold': { fontWeight: 'bold' },
    'italic': { fontStyle: 'italic' },
  }

  // Language mapping for background colors (aesthetic only)
  const bgColors: { [key: string]: string } = {
    python: 'bg-[#FDEDED]', // Light Pink/Red accent
    javascript: 'bg-[#FFFBEB]', // Light Yellow accent
    typescript: 'bg-[#EFF6FF]', // Light Blue accent
    bash: 'bg-[#F3F4F6]', // Light Gray
    default: 'bg-white'
  }

  const bgColor = bgColors[language.toLowerCase()] || bgColors.default

  if (inline) {
    return (
      <code className={`inline-block px-1.5 py-0.5 font-mono text-sm font-black bg-yellow-200 text-black border-2 border-black rounded ${className}`}>
        {code}
      </code>
    )
  }

  return (
    <div className={`my-6 border-[3px] border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_#000] ${bgColor} ${className}`}>
      {/* Header with language label */}
      <div className="px-4 py-2 font-black text-xs uppercase tracking-[0.1em] border-b-[3px] border-black bg-black text-white flex justify-between items-center">
        <span>{language}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full border-2 border-white/20 bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full border-2 border-white/20 bg-white/10" />
        </div>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={neoBrutalTheme}
          customStyle={{
            padding: '0',
            margin: '0',
            fontSize: '15px',
            backgroundColor: 'transparent',
          }}
          codeTagProps={{
            style: {
              fontWeight: '700',
              fontFamily: 'inherit'
            }
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}