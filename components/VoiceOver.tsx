"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Pause, Play } from "lucide-react"

interface VoiceOverProps {
  content: string
}

export function VoiceOver({ content }: VoiceOverProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null)
  const currentChunkIndexRef = useRef(0)
  const chunksRef = useRef<string[]>([])
  const isPausedRef = useRef(false)
  const isPlayingRef = useRef(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    // Check browser support
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true)
      
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices()
        
        // Priority for natural/high-quality voices
        const getVoiceScore = (voice: SpeechSynthesisVoice) => {
          const name = voice.name.toLowerCase()
          let score = 0
          
          // Must be English (or preferred lang, but kidzode is mostly English)
          if (!voice.lang.startsWith('en')) return -1
          
          // High quality markers
          if (name.includes('natural')) score += 100
          if (name.includes('enhanced')) score += 90
          if (name.includes('neural')) score += 80
          if (name.includes('premium')) score += 70
          if (name.includes('google')) score += 50
          
          // Specific good voices
          if (name.includes('samantha')) score += 40
          if (name.includes('ava')) score += 40
          if (name.includes('karen')) score += 30
          if (name.includes('serena')) score += 30
          
          // Friendly markers
          if (name.includes('female')) score += 10
          if (name.includes('child')) score += 20
          
          return score
        }

        const preferredVoice = [...voices]
          .sort((a, b) => getVoiceScore(b) - getVoiceScore(a))[0]
        
        if (preferredVoice) {
          setSelectedVoice(preferredVoice)
        }
      }
      
      loadVoices()
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }
    }
    
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  const extractTextChunks = (markdown: string): string[] => {
    // 1. Remove code blocks entirely
    let text = markdown.replace(/```[\s\S]*?```/g, '\n')
    // 2. Remove inline code
    text = text.replace(/`[^`]+`/g, '')
    // 3. Remove markdown headers (but keep text)
    text = text.replace(/#+\s+(.*)/g, '$1.')
    // 4. Remove markdown links but keep text
    text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // 5. Remove bold/italic markers
    text = text.replace(/\*\*\*([^\*]+)\*\*\*/g, '$1')
    text = text.replace(/\*\*([^\*]+)\*\*/g, '$1')
    text = text.replace(/\*([^\*]+)\*/g, '$1')
    
    // Split by lines/paragraphs and ensure each chunk has punctuation for natural feel
    return text.split(/\n+/)
      .map(part => part.trim())
      .filter(part => part.length > 0)
      .map(part => {
        // Ensure ends with a period for a natural pause if it doesn't have major punctuation
        if (!/[.!?:]$/.test(part)) {
          return part + '.'
        }
        return part
      })
  }

  const speakChunk = (index: number) => {
    if (index >= chunksRef.current.length) {
      setIsPlaying(false)
      isPlayingRef.current = false
      currentChunkIndexRef.current = 0
      return
    }

    if (isPausedRef.current) return

    currentChunkIndexRef.current = index
    const utterance = new SpeechSynthesisUtterance(chunksRef.current[index])
    utteranceRef.current = utterance
    utterance.voice = selectedVoice
    
    // Fine-tune rate/pitch for "real feel"
    // Premium voices often need slightly different settings
    const isPremium = selectedVoice?.name.toLowerCase().includes('natural') || 
                      selectedVoice?.name.toLowerCase().includes('enhanced')
    
    utterance.rate = isPremium ? 1.0 : 0.95
    utterance.pitch = isPremium ? 1.0 : 1.05
    utterance.volume = 1.0

    utterance.onend = () => {
      // Small interval between chunks for natural breathing
      setTimeout(() => {
        if (isPlayingRef.current && !isPausedRef.current) {
          speakChunk(index + 1)
        }
      }, 350)
    }

    utterance.onerror = (e) => {
      // Ignore errors caused by intentional cancellation
      if (e.error === 'canceled' || e.error === 'interrupted') {
        return
      }
      console.error('TTS Error:', e)
      setIsPlaying(false)
      isPlayingRef.current = false
    }

    window.speechSynthesis.speak(utterance)
  }

  const handlePlay = () => {
    if (!isSupported || !selectedVoice) return

    if (isPausedRef.current) {
      isPausedRef.current = false
      setIsPlaying(true)
      isPlayingRef.current = true
      window.speechSynthesis.resume()
      // If resume fails (some browsers are buggy), restart from current chunk
      if (!window.speechSynthesis.speaking) {
        speakChunk(currentChunkIndexRef.current)
      }
      return
    }

    const chunks = extractTextChunks(content)
    if (chunks.length === 0) return

    window.speechSynthesis.cancel()
    chunksRef.current = chunks
    currentChunkIndexRef.current = 0
    setIsPlaying(true)
    isPlayingRef.current = true
    isPausedRef.current = false
    speakChunk(0)
  }

  const handlePause = () => {
    window.speechSynthesis.pause()
    isPausedRef.current = true
    setIsPlaying(false)
    isPlayingRef.current = false
  }

  const handleStop = () => {
    window.speechSynthesis.cancel()
    isPausedRef.current = false
    setIsPlaying(false)
    isPlayingRef.current = false
    currentChunkIndexRef.current = 0
  }

  if (!isSupported) {
    return null // Don't show button if not supported
  }

  return (
    <div className="flex items-center gap-2">
      {isPlaying ? (
        <>
          <Button
            onClick={handlePause}
            variant="outline"
            size="sm"
            className="border-2 border-black bg-accent hover:bg-accent/80 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
            title="Pause reading"
          >
            <Pause className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleStop}
            variant="outline"
            size="sm"
            className="border-2 border-black bg-card hover:bg-card/80 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
            title="Stop reading"
          >
            <VolumeX className="h-4 w-4" />
          </Button>
        </>
      ) : (
        <Button
          onClick={handlePlay}
          variant="outline"
          size="sm"
          className="border-2 border-black bg-accent hover:bg-accent/80 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
          title="Listen to lesson"
        >
          <Volume2 className="h-4 w-4" />
          <span className="hidden sm:inline ml-2">Listen</span>
        </Button>
      )}
    </div>
  )
}

