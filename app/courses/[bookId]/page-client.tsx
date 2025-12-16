"use client"

import { useState, useMemo, useCallback } from "react"
import { CourseProgress } from "@/components/CourseProgress"
import { CourseLessonsList } from "@/components/CourseLessonsList"
import { useAuth } from "@/hooks/useAuth"

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
    }>
  }>
  children?: Array<{
    id: string
    name: string
    type?: 'lesson' | 'challenge'
    guide: string
    py: string
  }>
}

interface CourseProgressClientProps {
  bookId: string
  book: BookData
}

export function CourseProgressClient({ bookId, book }: CourseProgressClientProps) {
  const { user } = useAuth()
  const [courseStats, setCourseStats] = useState<{
    total: number
    completed: number
    inProgress: number
    completionPercentage: number
    lastAccessedLessonId?: string | null
    lastAccessedLessonName?: string | null
    nextLessonId?: string | null
  } | null>(null)

  // Get all lessons to calculate total - memoized
  const allLessons = useMemo(() => {
    if (book.projects) {
      return book.projects.flatMap(p => p.lessons)
    } else if (book.children) {
      return book.children
    }
    return []
  }, [book])

  // Find lesson name by ID - memoized
  const getLessonName = useCallback((lessonId: string | null | undefined): string | null => {
    if (!lessonId) return null
    const lesson = allLessons.find(l => l.id === lessonId)
    return lesson?.name || null
  }, [allLessons])

  const handleProgressLoaded = useCallback((stats: {
    total: number
    completed: number
    inProgress: number
    completionPercentage: number
    lastAccessedLessonId?: string | null
    nextLessonId?: string | null
  }) => {
    setCourseStats((prev) => {
      // Only update if stats actually changed
      if (prev && 
          prev.total === stats.total &&
          prev.completed === stats.completed &&
          prev.inProgress === stats.inProgress &&
          prev.completionPercentage === stats.completionPercentage &&
          prev.lastAccessedLessonId === stats.lastAccessedLessonId &&
          prev.nextLessonId === stats.nextLessonId) {
        return prev
      }
      return {
        ...stats,
        lastAccessedLessonName: getLessonName(stats.lastAccessedLessonId),
      }
    })
  }, [getLessonName])

  return (
    <>
      {courseStats && (
        <CourseProgress
          bookId={bookId}
          totalLessons={courseStats.total}
          completedLessons={courseStats.completed}
          inProgressLessons={courseStats.inProgress}
          completionPercentage={courseStats.completionPercentage}
          lastAccessedLessonId={courseStats.lastAccessedLessonId}
          lastAccessedLessonName={courseStats.lastAccessedLessonName}
          nextLessonId={courseStats.nextLessonId}
        />
      )}
      <CourseLessonsList bookId={bookId} book={book} onProgressLoaded={handleProgressLoaded} />
    </>
  )
}
