"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

interface BookmarkButtonProps {
  lessonId: string
  bookId: string
  initialBookmarked?: boolean
}

export function BookmarkButton({ lessonId, bookId, initialBookmarked }: BookmarkButtonProps) {
  const { user } = useAuth()
  const [isBookmarked, setIsBookmarked] = useState<boolean>(initialBookmarked || false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (initialBookmarked !== undefined) {
      setIsBookmarked(initialBookmarked)
    }
  }, [initialBookmarked])

  const handleToggle = async () => {
    if (!user || isSubmitting) return

    const newBookmarked = !isBookmarked
    setIsBookmarked(newBookmarked)
    setIsSubmitting(true)

    try {
      // Stub for local bookmarks - could implement in db.bookmarks.save() later
      console.log('Bookmark toggled:', newBookmarked, { lessonId, bookId, userId: user.id });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 300));

    } catch (error) {
      console.error('Failed to toggle bookmark:', error)
      // Revert on error
      setIsBookmarked(!newBookmarked)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Button
      onClick={handleToggle}
      disabled={!user || isSubmitting}
      variant="outline"
      size="sm"
      className={`border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold transition-all ${
        isBookmarked
          ? 'bg-red-100 hover:bg-red-200 text-red-600'
          : 'bg-white hover:bg-gray-100 text-gray-600'
      } ${!user ? 'opacity-50 cursor-not-allowed' : ''}`}
      title={user ? (isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson') : 'Login to bookmark'}
    >
      <Heart className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
    </Button>
  )
}

