"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { BookOpen, Book, Hammer, Zap, FileText, CheckCircle, Star, Heart, Clock } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

interface Lesson {
  id: string
  name: string
  type?: 'lesson' | 'challenge' | 'concept' | 'build' // Support both old and new types
  guide: string
  py: string
}

interface Project {
  id: string
  name: string
  description: string
  lessons: Lesson[]
}

interface BookData {
  name: string
  projects?: Project[]
  children?: Lesson[]
}

interface CourseLessonsListProps {
  bookId: string
  book: BookData
  onProgressLoaded?: (stats: {
    total: number
    completed: number
    inProgress: number
    completionPercentage: number
    lastAccessedLessonId?: string | null
  }) => void
}

interface LessonProgress {
  status: 'not_started' | 'in_progress' | 'completed'
  rating?: number
  bookmarked?: boolean
}

export function CourseLessonsList({ bookId, book, onProgressLoaded }: CourseLessonsListProps) {
  const { user } = useAuth()
  const [lessonProgress, setLessonProgress] = useState<Map<string, LessonProgress>>(new Map())
  
  // Calculate total lessons from book structure - memoized
  const allLessonsList = useMemo(() => {
    if (book.projects) {
      return book.projects.flatMap(p => p.lessons)
    } else if (book.children) {
      return book.children
    }
    return []
  }, [book])
  
  const totalLessons = allLessonsList.length

  // Memoize the callback to prevent infinite loops
  const memoizedOnProgressLoaded = useCallback((stats: {
    total: number
    completed: number
    inProgress: number
    completionPercentage: number
    lastAccessedLessonId?: string | null
  }) => {
    if (onProgressLoaded) {
      onProgressLoaded(stats)
    }
  }, [onProgressLoaded])

  useEffect(() => {
    const loadProgress = async () => {
      const progressMap = new Map<string, LessonProgress>()

      // Initialize all lessons as not_started
      allLessonsList.forEach((lesson) => {
        progressMap.set(lesson.id, {
          status: 'not_started',
          rating: undefined,
          bookmarked: false,
        })
      })

      // Check API if user is logged in
      if (user && user.userType === 'student') {
        try {
          const studentId = user.studentId || user.id
          console.log('Loading progress for course:', bookId, 'student:', studentId)
          const res = await fetch(`/api/progress/bulk?studentId=${studentId}&courseId=${bookId}`)
          if (res.ok) {
            const data = await res.json()
            if (data.progress) {
              // Update progress map with API data
              data.progress.forEach((p: any) => {
                progressMap.set(p.lessonId, {
                  status: p.status,
                  rating: p.rating,
                  bookmarked: p.bookmarked || false,
                })
              })
            }
            
            // Notify parent component of stats
            if (data.stats && memoizedOnProgressLoaded) {
              const completed = data.stats.completed || 0
              const inProgress = data.stats.inProgress || 0
              const completionPercentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0
              
              console.log('Progress stats loaded:', { completed, inProgress, completionPercentage, totalLessons })
              
              memoizedOnProgressLoaded({
                total: totalLessons,
                completed,
                inProgress,
                completionPercentage,
                lastAccessedLessonId: data.stats.lastAccessedLessonId,
              })
            }
          } else {
            console.error('Failed to load progress:', res.status, res.statusText)
          }
        } catch (error) {
          console.error("Failed to load progress", error)
        }
      }

      setLessonProgress(progressMap)
    }

    loadProgress()
    
    // Listen for lesson completion events
    const handleLessonCompleted = (event: CustomEvent) => {
      const { lessonId, courseId } = event.detail || {}
      
      // Only refresh if the event is for this course
      if (courseId && courseId !== bookId) {
        console.log('Ignoring lesson-completed event for different course:', courseId, 'current:', bookId)
        return
      }
      
      console.log('Lesson completed event received, refreshing progress:', { lessonId, courseId, bookId })
      
      // Add a small delay to ensure the API has processed the update
      setTimeout(() => {
        loadProgress()
      }, 200)
    }
    
    window.addEventListener('lesson-completed', handleLessonCompleted as EventListener)
    
    return () => {
      window.removeEventListener('lesson-completed', handleLessonCompleted as EventListener)
    }
  }, [bookId, user, totalLessons, allLessonsList, memoizedOnProgressLoaded])

  const renderLessonCard = (lesson: Lesson, index: number) => {
    const progress = lessonProgress.get(lesson.id)
    const isCompleted = progress?.status === 'completed'
    const isInProgress = progress?.status === 'in_progress'
    const rating = progress?.rating
    const isBookmarked = progress?.bookmarked || false

    return (
      <Link key={lesson.id} href={`/courses/${bookId}/lessons/${lesson.id}`}>
        <div className={`group h-full flex flex-col justify-between p-4 sm:p-5 border-2 rounded-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
          isCompleted 
            ? 'bg-green-100 hover:bg-green-200 border-green-500' 
            : isInProgress 
            ? 'bg-yellow-50 hover:bg-yellow-100 border-yellow-400'
            : 'bg-card hover:bg-blue-50 border-black'
        }`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 font-bold text-sm transition-colors ${
                isCompleted 
                  ? 'bg-green-500 border-green-600 text-white' 
                  : isInProgress
                  ? 'bg-yellow-400 border-yellow-500 text-white'
                  : 'bg-muted border-black group-hover:bg-white'
              }`}>
                {isCompleted ? <CheckCircle className="h-5 w-5" /> : isInProgress ? <Clock className="h-4 w-4" /> : index + 1}
              </div>
              <div className="flex items-center gap-2">
                {/* Star Rating - Larger and more prominent */}
                {rating !== undefined && rating > 0 && (
                  <div className="flex items-center gap-0.5 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-300">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
                {/* Bookmark - Larger and more visible */}
                {isBookmarked && (
                  <div className="bg-red-50 px-2 py-1 rounded-lg border border-red-300">
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                  </div>
                )}
                <BookOpen className={`h-5 w-5 transition-colors ${
                  isCompleted 
                    ? 'text-green-600' 
                    : isInProgress
                    ? 'text-yellow-600'
                    : 'text-muted-foreground group-hover:text-black'
                }`} />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                  {lesson.name}
                </div>
                {/* Status Badge */}
                {isCompleted && (
                  <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded border border-green-600">
                    Completed
                  </span>
                )}
                {isInProgress && (
                  <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded border border-yellow-500">
                    In Progress
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider flex items-center gap-1.5">
                {lesson.type === 'challenge' && (
                  <>
                    <Zap className="h-3 w-3" />
                    Challenge
                  </>
                )}
                {(lesson.type === 'lesson' || !lesson.type) && (
                  <>
                    <FileText className="h-3 w-3" />
                    Lesson
                  </>
                )}
                {/* Legacy types for backward compatibility */}
                {lesson.type === 'concept' && (
                  <>
                    <Book className="h-3 w-3" />
                    Concept
                  </>
                )}
                {lesson.type === 'build' && (
                  <>
                    <Hammer className="h-3 w-3" />
                    Build
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  if (book.projects) {
    return (
      <div className="space-y-12">
        {book.projects.map((project, projectIndex) => (
          <div key={project.id} className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4 border-b-2 border-black pb-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground px-4 py-1.5 border-2 border-black font-bold text-sm rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Project {projectIndex + 1}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {project.lessons.map((lesson, lessonIndex) => renderLessonCard(lesson, lessonIndex))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {book.children?.map((lesson, index) => {
        const progress = lessonProgress.get(lesson.id)
        const isCompleted = progress?.status === 'completed'
        const isInProgress = progress?.status === 'in_progress'
        const rating = progress?.rating
        const isBookmarked = progress?.bookmarked || false

        return (
          <Link key={lesson.id} href={`/courses/${bookId}/lessons/${lesson.id}`}>
            <div className={`group flex items-center justify-between p-4 border-2 rounded-lg transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
              isCompleted 
                ? 'bg-green-100 hover:bg-green-200 border-green-500' 
                : isInProgress 
                ? 'bg-yellow-50 hover:bg-yellow-100 border-yellow-400'
                : 'bg-card hover:bg-blue-50 border-black'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-bold transition-colors ${
                  isCompleted 
                    ? 'bg-green-500 border-green-600 text-white' 
                    : isInProgress
                    ? 'bg-yellow-400 border-yellow-500 text-white'
                    : 'bg-white border-black group-hover:bg-white'
                }`}>
                  {isCompleted ? <CheckCircle className="h-6 w-6" /> : isInProgress ? <Clock className="h-5 w-5" /> : index + 1}
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-medium group-hover:text-black">{lesson.name}</div>
                  {/* Status Badge */}
                  {isCompleted && (
                    <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded border border-green-600">
                      Completed
                    </span>
                  )}
                  {isInProgress && (
                    <span className="px-2 py-0.5 bg-yellow-400 text-yellow-900 text-xs font-bold rounded border border-yellow-500">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Star Rating - Larger */}
                {rating !== undefined && rating > 0 && (
                  <div className="flex items-center gap-0.5 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-300">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
                {/* Bookmark - Larger */}
                {isBookmarked && (
                  <div className="bg-red-50 px-2 py-1 rounded-lg border border-red-300">
                    <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                  </div>
                )}
                <BookOpen className={`h-5 w-5 ${
                  isCompleted 
                    ? 'text-green-600' 
                    : isInProgress
                    ? 'text-yellow-600'
                    : 'text-muted-foreground group-hover:text-black'
                }`} />
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
