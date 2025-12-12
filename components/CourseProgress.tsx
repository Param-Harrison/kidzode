"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"

interface CourseProgressProps {
  bookId: string
  totalLessons: number
  completedLessons: number
  inProgressLessons: number
  completionPercentage: number
  lastAccessedLessonId?: string | null
  lastAccessedLessonName?: string | null
}

export function CourseProgress({
  bookId,
  totalLessons,
  completedLessons,
  inProgressLessons,
  completionPercentage,
  lastAccessedLessonId,
  lastAccessedLessonName,
}: CourseProgressProps) {
  const hasStarted = completedLessons > 0 || inProgressLessons > 0
  const isCompleted = completionPercentage === 100

  return (
    <div className="bg-accent/20 border-4 border-black rounded-xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
        {/* Left: Progress Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            {isCompleted ? (
              <Trophy className="h-8 w-8 text-chart-3" />
            ) : (
              <Play className="h-8 w-8 text-chart-4" />
            )}
            <h2 className="text-2xl md:text-3xl font-bold">
              {isCompleted 
                ? "Course Completed! 🎉" 
                : hasStarted 
                ? "Continue Learning" 
                : "Start Your Journey"}
            </h2>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-bold text-foreground">
                Progress: {completedLessons} of {totalLessons} lessons completed
              </span>
              <span className="text-sm font-bold text-foreground">
                {completionPercentage}%
              </span>
            </div>
            <div className="w-full h-6 bg-card border-2 border-black rounded-full overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <div
                className="h-full bg-secondary transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 text-sm">
            {completedLessons > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary rounded-full border border-secondary/80" />
                <span className="font-bold">{completedLessons} Completed</span>
              </div>
            )}
            {inProgressLessons > 0 && (
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full border border-accent/80" />
                <span className="font-bold">{inProgressLessons} In Progress</span>
              </div>
            )}
          </div>

          {/* Last Accessed Lesson */}
          {lastAccessedLessonId && lastAccessedLessonName && hasStarted && !isCompleted && (
            <div className="mt-3 text-sm text-muted-foreground">
              Last lesson: <span className="font-bold">{lastAccessedLessonName}</span>
            </div>
          )}
        </div>

        {/* Right: Action Button */}
        <div className="flex-shrink-0">
          {hasStarted && !isCompleted && lastAccessedLessonId ? (
            <Link href={`/courses/${bookId}/lessons/${lastAccessedLessonId}`}>
              <Button
                size="lg"
                className="w-full md:w-auto border-4 border-black bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg py-6 px-8 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                Resume Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : hasStarted && !isCompleted ? (
            <Link href={`/courses/${bookId}/lessons`}>
              <Button
                size="lg"
                className="w-full md:w-auto border-4 border-black bg-primary hover:bg-primary/80 text-primary-foreground font-bold text-lg py-6 px-8 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                Continue Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link href={`/courses/${bookId}/lessons`}>
              <Button
                size="lg"
                className="w-full md:w-auto border-4 border-black bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold text-lg py-6 px-8 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                Start Learning
                <Play className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

