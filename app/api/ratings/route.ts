import { NextRequest, NextResponse } from 'next/server'
import { saveRating, getRating, getAverageRating } from '@/lib/db/queries'
import { getUser } from '@/lib/db/queries'
import { canAccessStudent } from '@/lib/auth/authorization'

export async function POST(request: NextRequest) {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { studentId, lessonId, courseId, rating, testResults } = body

    if (!studentId || !lessonId || !courseId || rating === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (rating < 0 || rating > 3) {
      return NextResponse.json(
        { error: 'Rating must be between 0 and 3' },
        { status: 400 }
      )
    }

    // Check access
    const hasAccess = await canAccessStudent(studentId)
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const savedRating = await saveRating(studentId, courseId, lessonId, rating, testResults)

    return NextResponse.json({ success: true, rating: savedRating })
  } catch (error) {
    console.error('Error saving rating:', error)
    return NextResponse.json(
      { error: 'Failed to save rating' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const searchParams = request.nextUrl.searchParams
    const studentId = searchParams.get('studentId')
    const lessonId = searchParams.get('lessonId')

    if (!studentId || !lessonId) {
      return NextResponse.json(
        { error: 'Missing studentId or lessonId' },
        { status: 400 }
      )
    }

    // Check access
    const hasAccess = await canAccessStudent(parseInt(studentId))
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const rating = await getRating(parseInt(studentId), lessonId)
    const averageRating = await getAverageRating(lessonId)

    return NextResponse.json({
      rating: rating?.rating,
      averageRating: averageRating || undefined
    })
  } catch (error) {
    console.error('Error fetching rating:', error)
    return NextResponse.json(
      { error: 'Failed to fetch rating' },
      { status: 500 }
    )
  }
}

