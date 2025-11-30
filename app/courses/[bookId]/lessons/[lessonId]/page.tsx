"use client"

import { use, useEffect, useState } from "react"
import { PythonEditor } from "@/components/python-editor/PythonEditor"

interface BookData {
  name: string
  children: Array<{
    id: string
    name: string
    guide: string
    py: string
    tests?: Array<{ in: string | string[]; out: string | any[] }>
  }>
}

export default function LessonPage({ params }: { params: Promise<{ bookId: string; lessonId: string }> }) {
  const { bookId, lessonId } = use(params)
  const [guide, setGuide] = useState("")
  const [code, setCode] = useState("")
  const [tests, setTests] = useState<Array<{ in: string | string[]; out: string | any[] }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadLesson = async () => {
      try {
        // Load book.json
        const bookRes = await fetch(`/courses/${bookId}/book.json`)
        const bookData: BookData = await bookRes.json()
        
        // Find the lesson
        const lesson = bookData.children.find(l => l.id === lessonId)
        if (!lesson) {
          console.error("Lesson not found")
          return
        }

        // Load guide
        const guideRes = await fetch(`/courses/${bookId}/${lesson.guide}`)
        const guideText = await guideRes.text()
        setGuide(guideText)

        // Load starter code
        const codeRes = await fetch(`/courses/${bookId}/${lesson.py}`)
        const codeText = await codeRes.text()
        
        // Check if there's saved code in localStorage
        const savedCode = localStorage.getItem(`code-${bookId}-${lessonId}`)
        setCode(savedCode || codeText)

        // Set tests
        setTests(lesson.tests || [])
        
        setLoading(false)
      } catch (error) {
        console.error("Failed to load lesson:", error)
        setLoading(false)
      }
    }

    loadLesson()
  }, [bookId, lessonId])

  const handleCodeChange = (newCode: string) => {
    // Save code to localStorage
    localStorage.setItem(`code-${bookId}-${lessonId}`, newCode)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Loading lesson...</div>
      </div>
    )
  }

  return (
    <PythonEditor
      initialCode={code}
      guide={guide}
      tests={tests}
      onCodeChange={handleCodeChange}
      bookId={bookId}
    />
  )
}
