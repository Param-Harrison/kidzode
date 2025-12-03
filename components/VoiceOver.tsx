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
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    // Check browser support
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true)
      
      // Load voices when available
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices()
        // Prefer kid-friendly voices: female voices, child voices, or friendly-sounding voices
        const kidFriendlyVoices = voices.filter(voice => {
          const name = voice.name.toLowerCase()
          return (
            name.includes('female') ||
            name.includes('child') ||
            name.includes('zira') || // Microsoft Zira (friendly female)
            name.includes('samantha') || // Apple Samantha
            name.includes('karen') || // Australian female
            name.includes('fiona') || // Scottish female
            (voice.lang.startsWith('en') && voice.name.includes('Female'))
          )
        })
        
        // Use first kid-friendly voice, or fallback to first English voice, or first available
        const preferredVoice = kidFriendlyVoices[0] || 
          voices.find(v => v.lang.startsWith('en')) || 
          voices[0]
        
        if (preferredVoice) {
          setSelectedVoice(preferredVoice)
        }
      }
      
      loadVoices()
      
      // Some browsers load voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices
      }
    }
    
    return () => {
      // Cleanup: stop speaking when component unmounts
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  // Extract text from markdown (remove code blocks, keep explanations)
  const extractText = (markdown: string): string => {
    // Remove code blocks
    let text = markdown.replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    text = text.replace(/`[^`]+`/g, '')
    // Remove markdown headers
    text = text.replace(/#+\s+/g, '')
    // Remove markdown links but keep text
    text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // Remove markdown bold/italic markers
    text = text.replace(/\*\*([^\*]+)\*\*/g, '$1')
    text = text.replace(/\*([^\*]+)\*/g, '$1')
    // Clean up extra whitespace
    text = text.replace(/\n\s*\n/g, '\n').trim()
    return text
  }

  const handlePlay = () => {
    if (!isSupported || !selectedVoice) return

    const text = extractText(content)
    if (!text) return

    // Cancel any ongoing speech
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = selectedVoice
    utterance.rate = 0.9 // Slightly slower for kids
    utterance.pitch = 1.1 // Slightly higher, more friendly
    utterance.volume = 1.0

    utterance.onstart = () => setIsPlaying(true)
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  const handlePause = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.pause()
      setIsPlaying(false)
    }
  }

  const handleStop = () => {
    window.speechSynthesis.cancel()
    setIsPlaying(false)
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
            className="border-2 border-black bg-yellow-100 hover:bg-yellow-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
            title="Pause reading"
          >
            <Pause className="h-4 w-4" />
          </Button>
          <Button
            onClick={handleStop}
            variant="outline"
            size="sm"
            className="border-2 border-black bg-white hover:bg-gray-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
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
          className="border-2 border-black bg-yellow-100 hover:bg-yellow-200 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
          title="Listen to lesson"
        >
          <Volume2 className="h-4 w-4" />
          <span className="hidden sm:inline ml-2">Listen</span>
        </Button>
      )}
    </div>
  )
}

