"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { BookOpen, Book, Hammer, Zap, FileText, CheckCircle } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

interface Lesson {
  id: string
  name: string
  type?: 'concept' | 'build' | 'challenge'
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
}

export function CourseLessonsList({ bookId, book }: CourseLessonsListProps) {
  const { user } = useAuth()
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())

  useEffect(() => {
    const loadProgress = async () => {
      const completed = new Set<string>()

      // 1. Check localStorage first (immediate feedback)
      // Iterate through all lessons to check localStorage
      const allLessons: Lesson[] = []
      if (book.projects) {
        book.projects.forEach(p => allLessons.push(...p.lessons))
      } else if (book.children) {
        allLessons.push(...book.children)
      }

      allLessons.forEach(lesson => {
        // Check for local code save - this doesn't mean completed, but it's something
        // For completion, we might need a specific flag in localStorage if API fails
        // But for now let's rely on API for "completed" status source of truth
      })

      // 2. Check API if user is logged in
      if (user && user.userType === 'student') {
        try {
          const res = await fetch(`/api/progress?studentId=${user.id}&courseId=${bookId}`)
          if (res.ok) {
            const data = await res.json()
            if (data.progress) {
              data.progress.forEach((p: any) => {
                if (p.status === 'completed') {
                  completed.add(p.lessonId)
                }
              })
            }
          }
        } catch (error) {
          console.error("Failed to load progress", error)
        }
      }

      setCompletedLessons(completed)
    }

    loadProgress()
  }, [bookId, book, user])

  const renderLessonCard = (lesson: Lesson, index: number) => {
    const isCompleted = completedLessons.has(lesson.id)

    return (
      <Link key={lesson.id} href={`/courses/${bookId}/lessons/${lesson.id}`}>
        <div className={`group h-full flex flex-col justify-between p-5 border-2 border-black rounded-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none bg-card ${isCompleted ? 'bg-green-50 hover:bg-green-100' : 'hover:bg-blue-50'}`}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-black font-bold text-sm transition-colors ${isCompleted ? 'bg-green-400 text-white' : 'bg-muted group-hover:bg-white'}`}>
                {isCompleted ? <CheckCircle className="h-5 w-5" /> : index + 1}
              </div>
              <BookOpen className={`h-5 w-5 transition-colors ${isCompleted ? 'text-green-600' : 'text-muted-foreground group-hover:text-black'}`} />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight group-hover:text-primary transition-colors mb-1">
                {lesson.name}
              </div>
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider flex items-center gap-1.5">
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
                {lesson.type === 'challenge' && (
                  <>
                    <Zap className="h-3 w-3" />
                    Challenge
                  </>
                )}
                {!lesson.type && (
                  <>
                    <FileText className="h-3 w-3" />
                    Lesson
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

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {project.lessons.map((lesson, lessonIndex) => renderLessonCard(lesson, lessonIndex))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {book.children?.map((lesson, index) => (
        <Link key={lesson.id} href={`/courses/${bookId}/lessons/${lesson.id}`}>
          <div className={`group flex items-center justify-between p-4 border-2 border-black rounded-lg transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none bg-card ${completedLessons.has(lesson.id) ? 'bg-green-50 hover:bg-green-100' : 'hover:bg-blue-50'}`}>
            <div className="flex items-center gap-4">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-black font-bold transition-colors ${completedLessons.has(lesson.id) ? 'bg-green-400 text-white' : 'bg-white group-hover:bg-white'}`}>
                {completedLessons.has(lesson.id) ? <CheckCircle className="h-6 w-6" /> : index + 1}
              </div>
              <div className="font-medium group-hover:text-black">{lesson.name}</div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className={`h-5 w-5 ${completedLessons.has(lesson.id) ? 'text-green-600' : 'text-muted-foreground group-hover:text-black'}`} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
