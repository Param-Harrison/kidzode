import { NextRequest, NextResponse } from 'next/server'
import { saveFeedback, getFeedback } from '@/lib/db/queries'
import { getUser } from '@/lib/db/queries'
import { canAccessStudent } from '@/lib/auth/authorization'

export async function POST(request: NextRequest) {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { studentId, lessonId, courseId, thumbsUp, comment } = body

    if (!studentId || !lessonId || !courseId || typeof thumbsUp !== 'boolean') {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check access
    const hasAccess = await canAccessStudent(studentId)
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    await saveFeedback(studentId, courseId, lessonId, thumbsUp, comment)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving feedback:', error)
    return NextResponse.json(
      { error: 'Failed to save feedback' },
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

    const feedbackData = await getFeedback(parseInt(studentId), lessonId)

    return NextResponse.json({
      thumbsUp: feedbackData?.thumbsUp,
      comment: feedbackData?.comment || null,
    })
  } catch (error) {
    console.error('Error fetching feedback:', error)
    return NextResponse.json(
      { error: 'Failed to fetch feedback' },
      { status: 500 }
    )
  }
}

