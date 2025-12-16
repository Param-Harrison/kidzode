"use client";

import { CheckCircle, Lock, Play, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GameMapNodeProps {
  lesson: {
    id: string;
    name: string;
    type?: string;
    description?: string;
  };
  index: number;
  status: 'locked' | 'active' | 'completed';
  position: 'left' | 'right';
  bookId: string;
  isLast?: boolean;
}

// ... imports ...

export function GameMapNode({ lesson, index, status, position, bookId, isLast }: GameMapNodeProps) {
  const isLeft = position === 'left';
  
  return (
    <div className={cn(
      "relative flex items-center w-full mb-16", // More vertical spacing
      isLeft ? "flex-row-reverse" : "flex-row"
    )}>
      
      {/* Connector Line */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-[-64px] w-2.5 bg-black z-0" />
      )}

      <div className="flex-1" />
      
      {/* Node Circle */}
      <div className="relative z-10 flex items-center shrink-0 mx-auto">
        <Link href={status === 'locked' ? '#' : `/courses/${bookId}/lessons/${lesson.id}`} className={status === 'locked' ? 'cursor-default' : 'cursor-pointer'}>
          <div className={cn(
            "w-24 h-24 rounded-full border-[4px] border-black flex items-center justify-center transition-all duration-300 relative group bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]", // Added bg-white to ensure it covers line
            status === 'completed' && "bg-green-500 border-green-600 text-white",
            status === 'active' && "bg-yellow-400 border-yellow-500 text-black shadow-[0px_0px_20px_rgba(250,204,21,0.5)] scale-110",
            status === 'locked' && "bg-muted text-muted-foreground"
          )}>
            {status === 'completed' && <CheckCircle className="w-10 h-10" />}
            {status === 'active' && <Play className="w-10 h-10 ml-1" />}
            {status === 'locked' && <Lock className="w-8 h-8 opacity-50" />}
            
            <div className="absolute -top-3 -right-3 bg-white border-[3px] border-black rounded-full w-9 h-9 flex items-center justify-center font-black text-sm shadow-sm z-20 text-black">
              {index + 1}
            </div>
          </div>
        </Link>
      </div>

      {/* Title Card */}
      <div className={cn(
        "flex-1 flex", 
        isLeft ? "justify-end pr-12" : "justify-start pl-12" // Increased spacing
      )}>
        <Link href={status === 'locked' ? '#' : `/courses/${bookId}/lessons/${lesson.id}`} className={cn(
            "block w-full max-w-sm transition-all hover:-translate-y-1 active:translate-y-0",
            status === 'locked' ? 'cursor-default' : 'cursor-pointer'
        )}>
          <div className={cn(
            "border-[3px] px-6 py-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative",
            status === 'completed' && "bg-green-100 border-green-500 hover:bg-green-200",
            status === 'active' && "bg-yellow-50 border-yellow-400 hover:bg-yellow-100",
            status === 'locked' && "bg-white border-black opacity-80"
          )}>
            {/* Connector Arm Visualization (Optional) */}
            <div className={cn(
              "absolute top-1/2 -translate-y-1/2 w-8 h-[3px] bg-black z-[-1]",
              isLeft ? "-right-8" : "-left-8",
              (status === 'completed' || status === 'active') ? "bg-black" : "bg-black/50"
            )} />

            <div className="flex flex-col gap-1">
               <h3 className="font-bold text-xl leading-tight font-lexend">
                  {lesson.name}
               </h3>
               {lesson.description && (
                  <p className="text-sm font-medium opacity-80 leading-relaxed">
                    {lesson.description}
                  </p>
               )}
            </div>
            
            <div className="mt-3 flex items-center gap-2">
               <span className={cn(
                 "text-[10px] uppercase font-black px-2 py-0.5 rounded-md border border-black/10",
                 status === 'completed' ? "bg-green-200 text-green-800" : 
                 status === 'active' ? "bg-yellow-200 text-yellow-800" : "bg-gray-100 text-gray-600"
               )}>
                 {lesson.type || 'Lesson'}
               </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
