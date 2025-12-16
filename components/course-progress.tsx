"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/local-storage";

interface CourseProgressProps {
  courseId: string;
  totalLessons: number;
}

export function CourseProgress({ courseId, totalLessons }: CourseProgressProps) {
  const { user } = useAuth();
  const [progress, setProgress] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (user && user.userType === "student") {
      const completed = db.progress.getCompletedCount(user.id, courseId);
      setCompletedCount(completed);
      
      const percent = totalLessons > 0 
        ? Math.round((completed / totalLessons) * 100) 
        : 0;
      
      setProgress(percent);
    }
  }, [user, courseId, totalLessons]);

  if (!isClient || !user || user.userType !== "student" || completedCount === 0) {
    return null;
  }

  return (
    <div className="w-full mt-4 bg-muted/50 border-2 border-black p-2">
      <div className="flex justify-between items-center mb-1 text-xs font-bold uppercase">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-3 w-full bg-white border-2 border-black relative overflow-hidden">
        <div 
          className="h-full bg-secondary transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-[10px] font-bold mt-1 text-right text-muted-foreground uppercase">
        {completedCount} / {totalLessons} Missions
      </div>
    </div>
  );
}
