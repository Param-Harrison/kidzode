"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
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

  const totalLessons = allLessons.length

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
  }) => {
    setCourseStats((prev) => {
      // Only update if stats actually changed
      if (prev && 
          prev.total === stats.total &&
          prev.completed === stats.completed &&
          prev.inProgress === stats.inProgress &&
          prev.completionPercentage === stats.completionPercentage &&
          prev.lastAccessedLessonId === stats.lastAccessedLessonId) {
        return prev
      }
      return {
        ...stats,
        lastAccessedLessonName: getLessonName(stats.lastAccessedLessonId),
      }
    })
  }, [getLessonName])

  const loadCourseStats = useCallback(async () => {
    if (user && user.userType === 'student') {
      try {
        const studentId = user.id
        console.log('Loading course stats for:', bookId, 'student:', studentId)
        
        // Use local db
        const { db } = require('@/lib/local-storage');
        const completed = db.progress.getCompletedCount(studentId, bookId);
        // Find in-progress (naive count for now)
        const allProgress = db.progress.get(studentId, bookId);
        const inProgress = allProgress.filter((p: any) => p.status === 'in_progress').length;
        
        // Find last accessed
        const lastActivity = allProgress.sort((a: any, b: any) => 
           (new Date(b.completedAt || 0).getTime() - new Date(a.completedAt || 0).getTime())
        )[0];

        const completionPercentage = totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0
        
        setCourseStats({
          total: totalLessons,
          completed,
          inProgress,
          completionPercentage,
          lastAccessedLessonId: lastActivity?.lessonId,
          lastAccessedLessonName: getLessonName(lastActivity?.lessonId),
        })

      } catch (err) {
        console.error('Failed to load course stats:', err)
        setCourseStats({
          total: totalLessons,
          completed: 0,
          inProgress: 0,
          completionPercentage: 0,
        })
      }
    } else {
      // Not logged in, set defaults
      setCourseStats({
        total: totalLessons,
        completed: 0,
        inProgress: 0,
        completionPercentage: 0,
      })
    }
  }, [bookId, user, totalLessons, getLessonName])

  // Load initial stats if user is logged in
  useEffect(() => {
    loadCourseStats()
  }, [loadCourseStats])

  // Listen for lesson completion events to refresh stats
  useEffect(() => {
    const handleLessonCompleted = (event: CustomEvent) => {
      const { lessonId, courseId } = event.detail || {}
      
      // Only refresh if the event is for this course
      if (courseId && courseId !== bookId) {
        console.log('Ignoring lesson-completed event for different course:', courseId, 'current:', bookId)
        return
      }
      
      console.log('Lesson completed event received in CourseProgressClient, refreshing stats:', { lessonId, courseId, bookId })
      
      // Add a small delay to ensure the API has processed the update
      setTimeout(() => {
        loadCourseStats()
      }, 200)
    }
    
    window.addEventListener('lesson-completed', handleLessonCompleted as EventListener)
    
    return () => {
      window.removeEventListener('lesson-completed', handleLessonCompleted as EventListener)
    }
  }, [bookId, loadCourseStats])

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
        />
      )}
      <CourseLessonsList bookId={bookId} book={book} onProgressLoaded={handleProgressLoaded} />
    </>
  )
}

