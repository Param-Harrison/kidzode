"use client"

import { use, useEffect, useState } from "react"
import { PythonEditor } from "@/components/python-editor/PythonEditor"
import { useAuth } from "@/hooks/useAuth"
import { Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RatingStars } from "@/components/RatingStars"
import { BookmarkButton } from "@/components/BookmarkButton"
import Link from "next/link"

interface BookData {
  name: string
  projects?: Array<{
    id: string
    name: string
    description: string
    lessons: Array<{
      id: string
      name: string
      type?: 'lesson' | 'challenge'
      guide: string
      py: string
      hints?: string
      answer?: string
      tests?: Array<{ in: string | string[]; out: string | any[] }>
    }>
  }>
  children?: Array<{
    id: string
    name: string
    type?: 'lesson' | 'challenge'
    guide: string
    py: string
    hints?: string
    answer?: string
    tests?: Array<{ in: string | string[]; out: string | any[] }>
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
  const [starterCode, setStarterCode] = useState("") // Original starter code from .py file
  const [tests, setTests] = useState<Array<{ in: string | string[]; out: string | any[] }>>([])
  const [hints, setHints] = useState<string>("")
  const [answer, setAnswer] = useState<string>("")
  const [lessonType, setLessonType] = useState<'lesson' | 'challenge' | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [progress, setProgress] = useState<LessonProgress | null>(null)
  const [studentId, setStudentId] = useState<number | null>(null)
  const [prevLesson, setPrevLesson] = useState<{ id: string; name: string } | null>(null)
  const [nextLesson, setNextLesson] = useState<{ id: string; name: string } | null>(null)
  const [userRating, setUserRating] = useState<number | undefined>(undefined)
  const [averageRating, setAverageRating] = useState<number | undefined>(undefined)
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false)

  // Load student ID from user (now includes studentId from session)
  useEffect(() => {
    if (user && user.userType === 'student') {
      // Use studentId from user object (set by /api/auth/me)
      // Fallback to user.id if studentId is not available (for backwards compatibility)
      const id = user.studentId || user.id
      if (id) {
        setStudentId(id)
      }
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
        let prevLessonData = null
        let nextLessonData = null
        
        if (bookData.projects) {
          const allLessons: any[] = []
          bookData.projects.forEach(p => allLessons.push(...p.lessons))
          
          const currentIndex = allLessons.findIndex(l => l.id === lessonId)
          if (currentIndex !== -1) {
            lesson = allLessons[currentIndex]
            if (currentIndex > 0) prevLessonData = allLessons[currentIndex - 1]
            if (currentIndex < allLessons.length - 1) nextLessonData = allLessons[currentIndex + 1]
          }
        } else if (bookData.children) {
          const currentIndex = bookData.children.findIndex((l: any) => l.id === lessonId)
          if (currentIndex !== -1) {
            lesson = bookData.children[currentIndex]
            if (currentIndex > 0) prevLessonData = bookData.children[currentIndex - 1]
            if (currentIndex < bookData.children.length - 1) nextLessonData = bookData.children[currentIndex + 1]
          }
        }
        
        if (!lesson) {
          throw new Error('Lesson not found')
        }

        // Set prev/next lesson state
        setPrevLesson(prevLessonData ? { id: prevLessonData.id, name: prevLessonData.name } : null)
        setNextLesson(nextLessonData ? { id: nextLessonData.id, name: nextLessonData.name } : null)

        // Load guide
        const guideRes = await fetch(`/courses/${bookId}/${lesson.guide}`)
        if (!guideRes.ok) throw new Error('Failed to load lesson guide')
        const guideText = await guideRes.text()
        setGuide(guideText)

        // Load starter code
        const codeRes = await fetch(`/courses/${bookId}/${lesson.py}`)
        if (!codeRes.ok) throw new Error('Failed to load starter code')
        const codeText = await codeRes.text()
        setStarterCode(codeText) // Store original starter code

        // Load progress from API if student ID is available
        // Use studentId state, or fallback to user.studentId/user.id
        const currentStudentId = studentId || (user && user.userType === 'student' ? (user.studentId || user.id) : null)
        let savedCode = codeText
        if (currentStudentId) {
          try {
            const progressRes = await fetch(`/api/progress?studentId=${currentStudentId}&courseId=${bookId}`)
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
              } else {
                // Lesson not started yet - mark as in_progress when accessed
                // This tracks the last accessed lesson
                fetch('/api/progress', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    studentId: currentStudentId,
                    courseId: bookId,
                    lessonId,
                    status: 'in_progress',
                    data: { code: codeText }
                  })
                }).catch(err => console.error('Failed to track lesson access:', err))
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
        setLessonType(lesson.type)

        // Load user rating and bookmark status
        if (currentStudentId) {
          try {
            // Load rating
            const ratingRes = await fetch(`/api/ratings?studentId=${currentStudentId}&lessonId=${lessonId}`)
            if (ratingRes.ok) {
              const ratingData = await ratingRes.json()
              if (ratingData.rating) {
                setUserRating(ratingData.rating)
              }
              if (ratingData.averageRating) {
                setAverageRating(ratingData.averageRating)
              }
            }

            // Load bookmark
            const bookmarkRes = await fetch(`/api/bookmarks?studentId=${currentStudentId}&lessonId=${lessonId}`)
            if (bookmarkRes.ok) {
              const bookmarkData = await bookmarkRes.json()
              setIsBookmarked(bookmarkData.bookmarked || false)
            }
          } catch (err) {
            console.error('Failed to load rating/bookmark:', err)
          }
        }

        // Load hints if available
        if (lesson.hints) {
          try {
            const hintsRes = await fetch(`/courses/${bookId}/${lesson.hints}`)
            if (hintsRes.ok) {
              const hintsText = await hintsRes.text()
              setHints(hintsText)
            }
          } catch (err) {
            console.error('Failed to load hints:', err)
          }
        } else {
          setHints("")
        }

        // Load answer if available
        if (lesson.answer) {
          try {
            const answerRes = await fetch(`/courses/${bookId}/${lesson.answer}`)
            if (answerRes.ok) {
              const answerText = await answerRes.text()
              setAnswer(answerText)
            }
          } catch (err) {
            console.error('Failed to load answer:', err)
          }
        } else {
          setAnswer("")
        }

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
    // Use studentId state, or fallback to user.studentId/user.id
    const currentStudentId = studentId || (user && user.userType === 'student' ? (user.studentId || user.id) : null)
    if (currentStudentId) {
      try {
        await fetch('/api/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            studentId: currentStudentId,
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

  const handleLessonComplete = async (starRating?: number, testResults?: any) => {
    // Validate user is authenticated and is a student
    if (!user || !user.id || user.userType !== 'student') {
      console.error('Cannot save progress: User is not authenticated or not a student', { 
        user,
        hasUser: !!user,
        userId: user?.id,
        userType: user?.userType
      })
      return
    }

    // Get studentId from user object (includes studentId from session via /api/auth/me)
    // Fallback to studentId state if user object doesn't have it yet
    let currentStudentId: number | null = null
    
    // Prefer studentId from user object (set by /api/auth/me from session)
    currentStudentId = user.studentId || null
    
    // Fallback to state if user object doesn't have studentId
    if (!currentStudentId) {
      currentStudentId = studentId
    }
    
    // If still no studentId, try to fetch it directly from /api/auth/me
    if (!currentStudentId) {
      try {
        console.log('StudentId not found, fetching from /api/auth/me...', { userId: user.id })
        const response = await fetch('/api/auth/me', {
          credentials: 'include'
        })
        if (response.ok) {
          const data = await response.json()
          console.log('/api/auth/me response:', data)
          if (data.user && data.user.studentId) {
            currentStudentId = data.user.studentId
            console.log('Retrieved studentId from /api/auth/me:', currentStudentId)
            // Update local state for future use
            if (currentStudentId) {
              setStudentId(currentStudentId)
            }
          } else if (data.user && data.user.userType === 'student') {
            // If still no studentId but user is a student, use userId as fallback
            // This handles the case where studentId lookup failed but we know it's a student
            console.warn('studentId not found in /api/auth/me response, using userId as fallback:', data.user.id)
            currentStudentId = data.user.id
          }
        } else {
          console.error('/api/auth/me failed:', response.status, response.statusText)
        }
      } catch (err) {
        console.error('Failed to fetch studentId from /api/auth/me:', err)
      }
    }
    
    if (!currentStudentId) {
      console.error('Cannot save progress: studentId is not available after all attempts', { 
        user, 
        studentId, 
        userStudentId: user?.studentId,
        userId: user?.id,
        userType: user?.userType,
        userKeys: user ? Object.keys(user) : []
      })
      return
    }

    try {
      console.log('Saving lesson completion:', { studentId: currentStudentId, courseId: bookId, lessonId, starRating })
      
      // Save progress
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: currentStudentId,
          courseId: bookId,
          lessonId,
          status: 'completed',
          data: { code, completedAt: new Date().toISOString() }
        })
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`Failed to save progress: ${response.status} ${errorData.error || response.statusText}`)
      }

      const responseData = await response.json()
      console.log('Progress saved successfully:', responseData)
      
      // Update local state only after successful API response
      setProgress({ status: 'completed', data: { code } })

      // Save rating if provided (from test results)
      if (starRating !== undefined && starRating > 0) {
        try {
          const ratingResponse = await fetch('/api/ratings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              studentId: currentStudentId,
              lessonId,
              courseId: bookId,
              rating: starRating,
              testResults: testResults
            })
          })
          
          if (!ratingResponse.ok) {
            console.error('Failed to save rating:', ratingResponse.status, ratingResponse.statusText)
          } else {
            console.log('Rating saved successfully')
          }
        } catch (err) {
          console.error('Failed to save rating:', err)
        }
      }

      // Trigger event to refresh progress on course page
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('lesson-completed', { detail: { lessonId, courseId: bookId } }))
      }, 100)
    } catch (err) {
      console.error('Failed to mark lesson as complete:', err)
      // Don't update local state if API call failed
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

  // Redirect to login if not authenticated or not a student
  // Check if user exists and has required properties (not just empty object)
  const isUserValid = user && typeof user === 'object' && 'id' in user && user.id !== undefined
  const isStudent = isUserValid && user.userType === 'student'
  
  if (!isUserValid) {
    return (
      <div className="flex items-center justify-center h-screen bg-background p-4">
        <div className="max-w-md w-full bg-card border-2 border-border rounded-lg p-8 text-center shadow-neo">
          <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Login Required</h2>
          <p className="text-muted-foreground mb-6">You need to be logged in to access lessons.</p>
          <div className="flex gap-3 justify-center">
            <Link href={`/sign-in?redirect=/courses/${bookId}/lessons/${lessonId}`}>
              <Button variant="neo">
                Sign In
              </Button>
            </Link>
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

  // Redirect parents/teachers to student login - lessons are only for students
  if (!isStudent) {
    return (
      <div className="flex items-center justify-center h-screen bg-background p-4">
        <div className="max-w-md w-full bg-card border-2 border-border rounded-lg p-8 text-center shadow-neo">
          <AlertCircle className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Student Login Required</h2>
          <p className="text-muted-foreground mb-6">
            Lessons are only accessible to students. Please log in as a student to continue.
          </p>
          <div className="flex gap-3 justify-center">
            <Link href={`/student-login?redirect=/courses/${bookId}/lessons/${lessonId}`}>
              <Button variant="neo">
                Student Login
              </Button>
            </Link>
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
      starterCode={starterCode}
      guide={guide}
      tests={tests}
      hints={hints}
      answer={answer}
      lessonType={lessonType}
      onCodeChange={handleCodeChange}
      onComplete={handleLessonComplete}
      bookId={bookId}
      lessonId={lessonId}
      progress={progress?.status}
      prevLesson={prevLesson ? { id: prevLesson.id, name: prevLesson.name } : undefined}
      nextLesson={nextLesson ? { id: nextLesson.id, name: nextLesson.name } : undefined}
      initialBookmarked={isBookmarked}
    />
  )
}
