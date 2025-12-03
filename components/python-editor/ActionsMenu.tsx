"use client"

import { RotateCcw, Lightbulb, FileText, MessageSquare, Heart, MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ActionsMenuProps {
  onReset: () => void
  onHint?: () => void
  onAnswer?: () => void
  onFeedback?: () => void
  onBookmarkToggle?: () => void
  isBookmarked?: boolean
  hasHints?: boolean
  hasAnswer?: boolean
  disabled?: boolean
}

export function ActionsMenu({
  onReset,
  onHint,
  onAnswer,
  onFeedback,
  onBookmarkToggle,
  isBookmarked,
  hasHints,
  hasAnswer,
  disabled,
}: ActionsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={disabled}
          className="border-2 border-black bg-white hover:bg-gray-100 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none font-bold md:hidden"
          aria-label="More actions"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[180px]"
      >
        <DropdownMenuItem
          onClick={onReset}
          className="flex items-center gap-2 cursor-pointer focus:bg-gray-100"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Reset</span>
        </DropdownMenuItem>
        {hasHints && onHint && (
          <DropdownMenuItem
            onClick={onHint}
            className="flex items-center gap-2 cursor-pointer focus:bg-yellow-100"
          >
            <Lightbulb className="h-4 w-4" />
            <span>Hint</span>
          </DropdownMenuItem>
        )}
        {hasAnswer && onAnswer && (
          <DropdownMenuItem
            onClick={onAnswer}
            className="flex items-center gap-2 cursor-pointer focus:bg-blue-100"
          >
            <FileText className="h-4 w-4" />
            <span>Answer</span>
          </DropdownMenuItem>
        )}
        {onFeedback && (
          <DropdownMenuItem
            onClick={onFeedback}
            className="flex items-center gap-2 cursor-pointer focus:bg-purple-100"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Feedback</span>
          </DropdownMenuItem>
        )}
        {onBookmarkToggle && (
          <DropdownMenuItem
            onClick={onBookmarkToggle}
            className={`flex items-center gap-2 cursor-pointer ${
              isBookmarked ? 'focus:bg-red-100' : 'focus:bg-gray-100'
            }`}
          >
            <Heart className={`h-4 w-4 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
            <span>{isBookmarked ? 'Remove Bookmark' : 'Bookmark'}</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

