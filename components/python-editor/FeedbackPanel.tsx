"use client"

import { useState, useEffect } from "react"
import { ThumbsUp, ThumbsDown, X, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { Textarea } from "@/components/ui/textarea"
import { db } from "@/lib/local-storage"

interface FeedbackPanelProps {
  lessonId: string
  bookId: string
  isOpen: boolean
  onClose: () => void
  initialThumbsUp?: boolean | null
  initialComment?: string | null
}

export function FeedbackPanel({
  lessonId,
  bookId,
  isOpen,
  onClose,
  initialThumbsUp,
  initialComment,
}: FeedbackPanelProps) {
  const { user } = useAuth()
  const [thumbsUp, setThumbsUp] = useState<boolean | null>(initialThumbsUp ?? null)
  const [comment, setComment] = useState<string>(initialComment || "")
  const [showCommentBox, setShowCommentBox] = useState<boolean>(!!initialComment)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadFeedback = async () => {
       if (isOpen && user && user.userType === 'student') {
        setIsLoading(true)
        try {
           const existing = await db.feedback.get(user.id, bookId, lessonId);
           if (existing) {
             setThumbsUp(existing.thumbsUp);
             setComment(existing.comment || "");
             setShowCommentBox(!!existing.comment);
           }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false)
        }
       }
    }
    loadFeedback()
  }, [isOpen, lessonId, bookId, user])

  const handleThumbsClick = (value: boolean) => {
    setThumbsUp(value)
  }

  const handleSubmit = async () => {
    if (!user || user.userType !== 'student' || isSubmitting) return

    setIsSubmitting(true)
    try {
      const studentId = user.id
      await db.feedback.save(studentId, bookId, lessonId, thumbsUp ?? true, comment.trim());

      // Close panel after successful submission
      setTimeout(() => {
        onClose()
      }, 500)
    } catch (error) {
      console.error('Failed to submit feedback:', error)
      alert('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-md w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">How did you like this lesson?</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 border-2 border-black rounded-lg hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        ) : (
          <>
            {/* Thumbs Up/Down */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => handleThumbsClick(true)}
                className={`flex-1 p-4 border-4 border-black rounded-xl font-bold text-lg transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                  thumbsUp === true
                    ? 'bg-green-200 text-green-900'
                    : 'bg-white hover:bg-green-50'
                }`}
              >
                <ThumbsUp className="h-8 w-8 mx-auto mb-2" />
                <span>Loved it!</span>
              </button>
              <button
                onClick={() => handleThumbsClick(false)}
                className={`flex-1 p-4 border-4 border-black rounded-xl font-bold text-lg transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                  thumbsUp === false
                    ? 'bg-red-200 text-red-900'
                    : 'bg-white hover:bg-red-50'
                }`}
              >
                <ThumbsDown className="h-8 w-8 mx-auto mb-2" />
                <span>Needs work</span>
              </button>
            </div>

            {/* Comment Toggle */}
            <div className="mb-4">
              <Button
                onClick={() => setShowCommentBox(!showCommentBox)}
                variant="outline"
                size="sm"
                className="w-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none font-bold"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                {showCommentBox ? 'Hide' : 'Add'} Comment
              </Button>
            </div>

            {/* Comment Box */}
            {showCommentBox && (
              <div className="mb-4">
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us what you think! What did you like? What was confusing?"
                  className="min-h-[100px] border-2 border-black rounded-lg p-3 font-medium resize-none focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            )}

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              disabled={thumbsUp === null || isSubmitting || !user}
              className="w-full border-4 border-black bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg py-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

