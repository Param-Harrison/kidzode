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
      "relative flex items-center w-full mb-20 md:mb-24", 
      isLeft ? "flex-row-reverse" : "flex-row"
    )}>
      
      {/* Connector Line - Dashed path feel */}
      {!isLast && (
        <div className="absolute left-1/2 -translate-x-1/2 top-16 bottom-[-130px] w-0 border-l-[4px] border-dashed border-black/30 z-0" />
      )}

      {/* Interactive Hub */}
      <div className="flex-1 hidden md:block" />
      
      {/* Node Circle */}
      <div className="relative z-10 flex items-center shrink-0 mx-auto group">
        <Link href={status === 'locked' ? '#' : `/courses/${bookId}/lessons/${lesson.id}`} 
          className={cn(
            "relative",
            status === 'locked' ? 'cursor-default' : 'cursor-pointer'
          )}>
          
          {/* Pulsing ring for active lesson */}
          {status === 'active' && (
            <div className="absolute inset-0 rounded-full bg-yellow-400/30 animate-ping scale-150" />
          )}

          <div className={cn(
            "w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-black flex items-center justify-center transition-all duration-500 relative bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1",
            status === 'completed' && "bg-[#9ADE7B] border-black text-black",
            status === 'active' && "bg-[#FFFACD] border-black text-black scale-110",
            status === 'locked' && "bg-[#F3F4F6] text-gray-400 border-gray-300 shadow-none"
          )}>
            {status === 'completed' && <CheckCircle className="w-8 h-8 md:w-10 md:h-10" />}
            {status === 'active' && <Play className="w-8 h-8 md:w-10 md:h-10 fill-current" />}
            {status === 'locked' && <Lock className="w-6 h-6 md:w-8 md:h-8 opacity-40" />}
            
            <div className={cn(
              "absolute -top-1 -right-1 md:-top-3 md:-right-3 border-[2px] border-black rounded-full w-7 h-7 md:w-9 md:h-9 flex items-center justify-center font-black text-xs md:text-sm z-20 transition-colors",
              status === 'locked' ? "bg-gray-200 text-gray-500 border-gray-300" : "bg-white text-black"
            )}>
              {index + 1}
            </div>
          </div>
        </Link>
      </div>

      {/* Info Card */}
      <div className={cn(
        "flex-1 flex", 
        isLeft ? "justify-end pr-6 md:pr-16" : "justify-start pl-6 md:pl-16"
      )}>
        <Link href={status === 'locked' ? '#' : `/courses/${bookId}/lessons/${lesson.id}`} className={cn(
            "block w-full max-w-sm transition-all duration-300",
            status === 'locked' ? 'cursor-default' : 'hover:-translate-y-1 active:scale-[0.98]'
        )}>
          <div className={cn(
            "border-[3px] px-5 py-4 md:px-7 md:py-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative transition-all",
            status === 'completed' && "bg-white border-black hover:bg-green-50/50",
            status === 'active' && "bg-[#FFFACD] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
            status === 'locked' && "bg-white border-gray-200 text-gray-400 shadow-none opacity-60"
          )}>
            {/* Connector Arm with Dot */}
            <div className={cn(
              "absolute top-1/2 -translate-y-1/2 w-6 md:w-16 h-[2px] bg-black/20 z-[-1]",
              isLeft ? "-right-6 md:-right-16" : "-left-6 md:-left-16",
              status === 'active' && "bg-black/40 h-[3px]"
            )} />

            <div className="flex flex-col gap-1.5">
               <div className="flex items-center gap-2">
                 <span className={cn(
                   "text-[9px] md:text-[10px] uppercase font-black px-2 py-0.5 rounded-full border",
                   status === 'completed' ? "bg-green-100 border-green-200 text-green-700" : 
                   status === 'active' ? "bg-black text-yellow-300 border-black" : "bg-gray-100 border-gray-200 text-gray-400"
                 )}>
                   {lesson.type || 'Lesson'}
                 </span>
                 {status === 'completed' && <Star className="w-3 h-3 fill-yellow-400 text-yellow-500" />}
               </div>
               
               <h3 className={cn(
                 "font-black text-lg md:text-xl leading-tight font-lexend",
                 status !== 'locked' ? "text-black" : "text-gray-400"
               )}>
                  {lesson.name}
               </h3>
               
               {lesson.description && (
                  <p className="text-xs md:text-sm font-medium opacity-70 leading-relaxed line-clamp-2">
                    {lesson.description}
                  </p>
               )}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
