import { NextRequest, NextResponse } from 'next/server'
import { getStudentProgress } from '@/lib/db/queries'
import { getUser } from '@/lib/db/queries'
import { canAccessStudent } from '@/lib/auth/authorization'
import { db } from '@/lib/db/drizzle'
import { ratings, bookmarks } from '@/lib/db/schema'
import { eq, and } from 'drizzle-orm'

export async function GET(request: NextRequest) {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const studentId = searchParams.get('studentId')
    const courseId = searchParams.get('courseId')

    if (!studentId || !courseId) {
      return NextResponse.json(
        { error: 'Student ID and course ID are required' },
        { status: 400 }
      )
    }

    // Check access
    const hasAccess = await canAccessStudent(parseInt(studentId))
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Get progress
    const progressData = await getStudentProgress(
      parseInt(studentId),
      courseId
    )

    // Get all ratings for this course
    const ratingsData = await db
      .select()
      .from(ratings)
      .where(
        and(
          eq(ratings.studentId, parseInt(studentId)),
          eq(ratings.courseId, courseId)
        )
      )

    // Get all bookmarks for this course
    const bookmarksData = await db
      .select()
      .from(bookmarks)
      .where(
        and(
          eq(bookmarks.studentId, parseInt(studentId)),
          eq(bookmarks.courseId, courseId)
        )
      )

    // Create maps for quick lookup
    const ratingsMap = new Map<string, number>()
    ratingsData.forEach((r) => {
      ratingsMap.set(r.lessonId, r.rating)
    })

    const bookmarksSet = new Set<string>()
    bookmarksData.forEach((b) => {
      bookmarksSet.add(b.lessonId)
    })

    // Combine data
    const combined = progressData.map((p) => ({
      lessonId: p.lessonId,
      status: p.status,
      rating: ratingsMap.get(p.lessonId),
      bookmarked: bookmarksSet.has(p.lessonId),
    }))

    // Also include lessons that have ratings/bookmarks but no progress
    const allLessonIds = new Set([
      ...progressData.map((p) => p.lessonId),
      ...ratingsData.map((r) => r.lessonId),
      ...bookmarksData.map((b) => b.lessonId),
    ])

    const result = Array.from(allLessonIds).map((lessonId) => {
      const existing = combined.find((c) => c.lessonId === lessonId)
      if (existing) {
        return existing
      }
      return {
        lessonId,
        status: 'not_started' as const,
        rating: ratingsMap.get(lessonId),
        bookmarked: bookmarksSet.has(lessonId),
      }
    })

    return NextResponse.json({
      success: true,
      progress: result,
    })
  } catch (error) {
    console.error('Get bulk progress error:', error)
    return NextResponse.json(
      { error: 'Failed to get progress' },
      { status: 500 }
    )
  }
}

