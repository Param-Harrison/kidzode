"use client"

import { use, useEffect, useState } from "react"
import { PythonEditor } from "@/components/python-editor/PythonEditor"
import { useAuth } from "@/hooks/useAuth"
import { Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BookData {
  name: string
  projects: Array<{
    id: string
    name: string
    description: string
    lessons: Array<{
      id: string
      name: string
      guide: string
      py: string
      tests?: Array<{ in: string | string[]; out: string | any[] }>
    }>
  }>
}

interface LessonProgress {
  status: 'not_started' | 'in_progress' | 'completed'
  data?: any
}

export default function LessonPage({ params }: { params: Promise<{ bookId: string; lessonId: string }> }) {
  const resolvedParams = use(params)
  const { bookId, lessonId } = resolvedParams
  const { user, isLoading: authLoading } = useAuth()
  
  const [guide, setGuide] = useState("")
  const [code, setCode] = useState("")
  const [tests, setTests] = useState<Array<{ in: string | string[]; out: string | any[] }>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState<LessonProgress | null>(null)
  const [studentId, setStudentId] = useState<number | null>(null)

  // Load student ID from user
  useEffect(() => {
    if (user && user.userType === 'student' && user.id) {
      setStudentId(user.id)
    }
  }, [user])

  // Load lesson data and progress
  useEffect(() => {
    if (authLoading) return
    
    const loadLesson = async () => {
      try {
        setLoading(true)
        setError(null)

        // Load book.json
        const bookRes = await fetch(`/courses/${bookId}/book.json`)
        if (!bookRes.ok) throw new Error('Failed to load course data')
        const bookData: BookData = await bookRes.json()
        
        // Find the lesson
        let lesson = null
        if (bookData.projects) {
          for (const project of bookData.projects) {
            const found = project.lessons.find(l => l.id === lessonId)
            if (found) {
              lesson = found
              break
            }
          }
        }
        
        if (!lesson) {
          throw new Error('Lesson not found')
        }

        // Load guide
        const guideRes = await fetch(`/courses/${bookId}/${lesson.guide}`)
        if (!guideRes.ok) throw new Error('Failed to load lesson guide')
        const guideText = await guideRes.text()
        setGuide(guideText)

        // Load starter code
        const codeRes = await fetch(`/courses/${bookId}/${lesson.py}`)
        if (!codeRes.ok) throw new Error('Failed to load starter code')
        const codeText = await codeRes.text()

        // Load progress from API if student ID is available
        let savedCode = codeText
        if (studentId) {
          try {
            const progressRes = await fetch(`/api/progress?studentId=${studentId}&courseId=${bookId}`)
            if (progressRes.ok) {
              const progressData = await progressRes.json()
              const lessonProgress = progressData.progress?.find((p: any) => p.lessonId === lessonId)
              if (lessonProgress) {
                setProgress({
                  status: lessonProgress.status,
                  data: lessonProgress.data
                })
                if (lessonProgress.data?.code) {
                  savedCode = lessonProgress.data.code
                }
              }
            }
          } catch (err) {
            console.error('Failed to load progress:', err)
            // Fall back to localStorage
            const localCode = localStorage.getItem(`code-${bookId}-${lessonId}`)
            if (localCode) savedCode = localCode
          }
        } else {
          // Fall back to localStorage if no student ID
          const localCode = localStorage.getItem(`code-${bookId}-${lessonId}`)
          if (localCode) savedCode = localCode
        }

        setCode(savedCode)
        setTests(lesson.tests || [])
        setLoading(false)
      } catch (error) {
        console.error("Failed to load lesson:", error)
        setError(error instanceof Error ? error.message : 'Failed to load lesson')
        setLoading(false)
      }
    }

    loadLesson()
  }, [bookId, lessonId, authLoading, studentId])

  const handleCodeChange = async (newCode: string) => {
    // Save code to localStorage as backup
    localStorage.setItem(`code-${bookId}-${lessonId}`, newCode)

    // Save to API if student ID is available
    if (studentId) {
      try {
        await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentId,
            courseId: bookId,
            lessonId,
            status: 'in_progress',
            data: { code: newCode }
          })
        })
      } catch (err) {
        console.error('Failed to save progress:', err)
      }
    }
  }

  const handleLessonComplete = async () => {
    if (!studentId) return

    try {
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          courseId: bookId,
          lessonId,
          status: 'completed',
          data: { code, completedAt: new Date().toISOString() }
        })
      })
      setProgress({ status: 'completed', data: { code } })
    } catch (err) {
      console.error('Failed to mark lesson as complete:', err)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-lg font-medium">Loading lesson...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-background p-4">
        <div className="max-w-md w-full bg-card border-2 border-border rounded-lg p-8 text-center shadow-neo">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Failed to Load Lesson</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={() => window.location.reload()} variant="neo">
              Try Again
            </Button>
            <Link href={`/courses/${bookId}`}>
              <Button variant="outline">
                Back to Course
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <PythonEditor
      initialCode={code}
      guide={guide}
      tests={tests}
      onCodeChange={handleCodeChange}
      onComplete={handleLessonComplete}
      bookId={bookId}
      lessonId={lessonId}
      progress={progress?.status}
    />
  )
}
