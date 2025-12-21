"use client"

import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CourseProgressProps {
  bookId: string
  totalLessons: number
  completedLessons: number
  inProgressLessons: number
  completionPercentage: number
  lastAccessedLessonId?: string | null
  lastAccessedLessonName?: string | null
  nextLessonId?: string | null
}

export function CourseProgress({
  bookId,
  totalLessons,
  completedLessons,
  inProgressLessons,
  completionPercentage,
  lastAccessedLessonId,
  lastAccessedLessonName,
  nextLessonId,
}: CourseProgressProps) {
  const hasStarted = completedLessons > 0 || inProgressLessons > 0
  const isCompleted = completionPercentage === 100
  
  // Determine target lesson: next available, or last accessed, or default to lessons list if unknown
  const targetLessonId = nextLessonId || lastAccessedLessonId;
  const targetLink = targetLessonId 
    ? `/courses/${bookId}/lessons/${targetLessonId}` 
    : `/courses/${bookId}/lessons`; // Fallback to list if we really can't find one (shouldn't happen with nextLessonId logic)

  return (
    <div className="bg-white border-[3px] border-black rounded-[2rem] p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 relative z-10">
        {/* Left: Progress Info */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-4">
            <div className={cn(
              "w-12 h-12 rounded-xl border-[3px] border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
              isCompleted ? "bg-[#9ADE7B]" : "bg-[#FFFACD]"
            )}>
              {isCompleted ? (
                <Trophy className="h-6 w-6 text-black" />
              ) : (
                <Play className="h-6 w-6 text-black fill-current" />
              )}
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black font-lexend text-black uppercase tracking-tight">
                {isCompleted 
                  ? "Course Mastered! 🎉" 
                  : hasStarted 
                  ? "Pick up where you left" 
                  : "Begin Your Adventure"}
              </h2>
              {lastAccessedLessonId && lastAccessedLessonName && hasStarted && !isCompleted && (
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  Last: <span className="text-black">{lastAccessedLessonName}</span>
                </p>
              )}
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="space-y-3">
            <div className="flex items-end justify-between">
              <span className="text-sm font-black text-black/40 uppercase tracking-widest">
                Mission Progress
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-black">{completionPercentage}</span>
                <span className="text-xs font-black text-black/40">%</span>
              </div>
            </div>
            
            <div className="relative">
              {/* Decorative track */}
              <div className="w-full h-5 bg-slate-100 border-[3px] border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              {/* Active track */}
              <div
                className="absolute top-0 left-0 h-5 bg-secondary border-[3px] border-black rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-1"
                style={{ width: `${Math.max(completionPercentage, 8)}%` }}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full opacity-50" />
              </div>
            </div>
            
            <p className="text-xs font-bold text-slate-500">
               {completedLessons} of {totalLessons} lessons completed
            </p>
          </div>
        </div>

        {/* Right: Action Button */}
        <div className="flex-shrink-0">
          {!isCompleted && (
            <Link href={targetLink}>
              <Button
                size="lg"
                className="w-full md:w-auto border-[3px] border-black bg-primary hover:bg-primary/90 text-black font-black text-xl py-7 px-10 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-3 group/btn"
              >
                <span>{hasStarted ? "Resume" : "Start Now"}</span>
                <ArrowRight className="h-6 w-6 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

