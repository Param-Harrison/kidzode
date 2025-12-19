"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import Link from "next/link"
import { Trophy } from "lucide-react" // Optimized imports
import { useAuth } from "@/hooks/useAuth"
import { GameMapNode } from "@/components/ui/game-map-node"
import { db } from "@/lib/local-storage"

interface Lesson {
  id: string
  name: string
  type?: 'lesson' | 'challenge' | 'concept' | 'build'
  description?: string
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
    nextLessonId?: string | null
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
    nextLessonId?: string | null
  }) => {
    if (onProgressLoaded) {
      onProgressLoaded(stats)
    }
  }, [onProgressLoaded])

  useEffect(() => {
    const loadProgress = async () => {
      const progressMap = new Map<string, LessonProgress>()
      let completedCount = 0;
      let inProgressCount = 0;
      let lastActivityLessonId = null;

      // Initialize all lessons as not_started
      allLessonsList.forEach((lesson) => {
        progressMap.set(lesson.id, {
          status: 'not_started',
          rating: undefined,
          bookmarked: false,
        })
      })

      if (user && user.userType === 'student') {
        try {
          const studentId = user.id
          console.log(`[Kidzode] Loading progress for course: ${bookId}, student: ${studentId}`)
          
          const allProgress = await db.progress.get(studentId, bookId);
          console.log(`[Kidzode] Found ${allProgress?.length || 0} progress entries`)

          if (allProgress && allProgress.length > 0) {
             allProgress.forEach((p: any) => {
                const rawStatus = p.status || 'not_started';
                const status = rawStatus.toLowerCase() as 'completed' | 'in_progress' | 'not_started';
                
                console.log(`[Kidzode] Processing entry: lessonId=${p.lessonId}, status=${status}, raw=${rawStatus}`);

                progressMap.set(p.lessonId, {
                  status: status,
                  rating: p.rating, 
                  bookmarked: p.bookmarked || false,
                })
                
                if (status === 'completed') {
                  completedCount++;
                  console.log(`[Kidzode] Counted +1 completed for ${p.lessonId}`);
                }
                else if (status === 'in_progress') inProgressCount++;
             })

             // Find last accessed
              const lastActivity = [...allProgress]
                .filter(p => p.completedAt || p.data?.lastAccessedAt)
                .sort((a: any, b: any) => {
                  const dateA = new Date(a.completedAt || a.data?.lastAccessedAt || 0).getTime();
                  const dateB = new Date(b.completedAt || b.data?.lastAccessedAt || 0).getTime();
                  return dateB - dateA;
                })[0];
              
              lastActivityLessonId = lastActivity?.lessonId || allProgress[allProgress.length-1].lessonId;
          }
        } catch (error) {
          console.error("[Kidzode] Failed to load progress", error)
        }
      }

      // Find Next Lesson (first not completed)
      let nextLessonId = allLessonsList[0]?.id;
      for (const lesson of allLessonsList) {
          const p = progressMap.get(lesson.id);
          if (p?.status !== 'completed') {
              nextLessonId = lesson.id;
              break;
          }
      }

      // ALWAYS notify parent component of stats, even if counts are 0
      if (memoizedOnProgressLoaded) {
        const completionPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0
        console.log(`[Kidzode] Reporting stats: ${completedCount}/${totalLessons} (${completionPercentage}%), Next: ${nextLessonId}`)
        
        memoizedOnProgressLoaded({
          total: totalLessons,
          completed: completedCount,
          inProgress: inProgressCount,
          completionPercentage,
          lastAccessedLessonId: lastActivityLessonId,
          nextLessonId,
        })
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

  const calculateStatus = (lessonId: string, globalIndex: number, isProjectStart: boolean): 'locked' | 'active' | 'completed' => {
    const progress = lessonProgress.get(lessonId)
    if (progress?.status === 'completed') return 'completed'
    if (progress?.status === 'in_progress') return 'active'
    
    // Always unlock the first lesson of a project
    if (isProjectStart) return 'active'
    
    // Check if previous lesson is completed
    if (globalIndex > 0) {
      const prevLesson = allLessonsList[globalIndex - 1]
      const prevProgress = lessonProgress.get(prevLesson.id)
      if (prevProgress?.status === 'completed') return 'active'
    }
    
    return 'locked'
  }

  const getGlobalIndex = (lessonId: string) => allLessonsList.findIndex(l => l.id === lessonId)

  if (book.projects) {
    return (
      <div className="space-y-24 py-12 relative">
        {book.projects.map((project, projectIndex) => (
          <div key={project.id} className="relative">
            {/* Zone Marker / Header */}
            <div className="flex justify-center mb-16 sticky top-24 z-[30]">
               <div className="bg-blue-200 border-[3px] border-black px-10 py-5 rounded-[2rem] shadow-[8px_8px_0px_0px_#000] text-center max-w-3xl mx-auto backdrop-blur-sm transition-transform hover:scale-[1.02]">
                  <h2 className="text-2xl md:text-4xl font-black font-lexend uppercase tracking-tight mb-2 text-black">{project.name}</h2>
                  <p className="text-base md:text-lg font-bold text-slate-700 leading-relaxed">{project.description}</p>
               </div>
            </div>

            <div className="max-w-4xl mx-auto px-4">
              {project.lessons.map((lesson, lessonIndex) => {
                 const globalIndex = getGlobalIndex(lesson.id)
                 const isProjectStart = lessonIndex === 0
                 const status = calculateStatus(lesson.id, globalIndex, isProjectStart)
                 const isLast = globalIndex === allLessonsList.length - 1

                 return (
                   <GameMapNode
                     key={lesson.id}
                     lesson={lesson}
                     index={globalIndex}
                     status={status}
                     position={globalIndex % 2 === 0 ? 'left' : 'right'}
                     bookId={bookId}
                     isLast={isLast}
                   />
                 )
              })}
            </div>
          </div>
        ))}
        
        {/* Completion Trophy / End Marker */}
        <div className="flex flex-col items-center justify-center mt-12 pb-12">
            <div className="w-24 h-24 bg-yellow-400 rounded-full border-[3px] border-black flex items-center justify-center shadow-[6px_6px_0px_0px_#000] mb-4">
                 <Trophy className="w-12 h-12 text-black" />
            </div>
            <div className="bg-white px-6 py-2 border-[3px] border-black font-black uppercase text-xl shadow-[4px_4px_0px_0px_#000]">
                Course Clear!
            </div>
        </div>
      </div>
    )
  }

  // Fallback for flat children list (not projects)
  return (
      <div className="max-w-3xl mx-auto py-8">
         {book.children?.map((lesson, index) => {
             const globalIndex = getGlobalIndex(lesson.id)
             const status = calculateStatus(lesson.id, globalIndex, index === 0)
             const isLast = globalIndex === allLessonsList.length - 1

             return (
               <GameMapNode
                 key={lesson.id}
                 lesson={lesson}
                 index={globalIndex}
                 status={status}
                 position={globalIndex % 2 === 0 ? 'left' : 'right'}
                 bookId={bookId}
                 isLast={isLast}
               />
             )
         })}
      </div>
  )
}
