import { NextRequest, NextResponse } from 'next/server'
import { toggleBookmark, getBookmark } from '@/lib/db/queries'
import { getUser } from '@/lib/db/queries'
import { canAccessStudent } from '@/lib/auth/authorization'

export async function POST(request: NextRequest) {
  try {
    const user = await getUser()
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { studentId, lessonId, courseId, bookmarked } = body

    if (!studentId || !lessonId || !courseId || typeof bookmarked !== 'boolean') {
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

    await toggleBookmark(studentId, courseId, lessonId, bookmarked)

    return NextResponse.json({ success: true, bookmarked })
  } catch (error) {
    console.error('Error toggling bookmark:', error)
    return NextResponse.json(
      { error: 'Failed to toggle bookmark' },
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

    const bookmark = await getBookmark(parseInt(studentId), lessonId)

    return NextResponse.json({ bookmarked: !!bookmark })
  } catch (error) {
    console.error('Error fetching bookmark:', error)
    return NextResponse.json(
      { error: 'Failed to fetch bookmark' },
      { status: 500 }
    )
  }
}

