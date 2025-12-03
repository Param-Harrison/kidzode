"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

interface RatingStarsProps {
  lessonId: string
  bookId: string
  initialRating?: number // 1-3
  averageRating?: number // Average from all users
}

export function RatingStars({ lessonId, bookId, initialRating, averageRating }: RatingStarsProps) {
  const { user } = useAuth()
  const [rating, setRating] = useState<number>(initialRating || 0)
  const [hoveredRating, setHoveredRating] = useState<number>(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (initialRating) {
      setRating(initialRating)
    }
  }, [initialRating])

  const handleRatingClick = async (value: number) => {
    if (!user || isSubmitting) return

    setRating(value)
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: user.id,
          lessonId,
          courseId: bookId,
          rating: value
        })
      })

      if (!response.ok) {
        throw new Error('Failed to save rating')
      }
    } catch (error) {
      console.error('Failed to save rating:', error)
      // Revert on error
      setRating(initialRating || 0)
    } finally {
      setIsSubmitting(false)
    }
  }

  const displayRating = hoveredRating || rating

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3].map((value) => (
          <button
            key={value}
            onClick={() => handleRatingClick(value)}
            onMouseEnter={() => setHoveredRating(value)}
            onMouseLeave={() => setHoveredRating(0)}
            disabled={!user || isSubmitting}
            className={`transition-all ${
              displayRating >= value
                ? 'text-yellow-400 scale-110'
                : 'text-gray-300'
            } ${
              user && !isSubmitting
                ? 'hover:scale-125 cursor-pointer'
                : 'cursor-not-allowed opacity-50'
            }`}
            title={user ? `Rate ${value} star${value > 1 ? 's' : ''}` : 'Login to rate'}
          >
            <Star className="h-5 w-5 fill-current" />
          </button>
        ))}
      </div>
      {averageRating && averageRating > 0 && (
        <span className="text-xs text-muted-foreground font-medium">
          ({averageRating.toFixed(1)})
        </span>
      )}
    </div>
  )
}

