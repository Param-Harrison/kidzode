"use client"

import { ConsoleOutput } from "@/hooks/usePyodide"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ConsoleProps {
  output: ConsoleOutput[]
  awaitingInput: boolean
  onInput: (value: string) => void
  onClear: () => void
}

export function Console({ output, awaitingInput, onInput, onClear }: ConsoleProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onInput(inputValue)
      setInputValue("")
    }
  }

  return (
    <div className="flex flex-col h-full border-2 border-black bg-black text-white font-mono text-sm">
      <div className="flex items-center justify-between px-3 py-2 border-b-2 border-white/20 bg-black">
        <span className="font-bold text-primary">Console</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClear}
          className="h-6 px-2 text-xs text-white hover:bg-white/10 border-white/20"
        >
          Clear
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {output.length === 0 ? (
          <div className="text-gray-400">Run your code to see output...</div>
        ) : (
          output.map((line, index) => (
            <div
              key={index}
              className={
                line.type === 'stderr'
                  ? 'text-red-400'
                  : line.type === 'input'
                  ? 'text-green-400'
                  : 'text-white'
              }
            >
              {line.type === 'input' && '> '}
              {line.content}
            </div>
          ))
        )}
        {awaitingInput && (
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400">&gt;</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white"
              placeholder="Enter input..."
              autoFocus
            />
          </form>
        )}
      </div>
    </div>
  )
}
