import { NextRequest, NextResponse } from 'next/server';
import {
  saveProgress,
  getStudentProgress,
  getCompletedLessonsCount,
} from '@/lib/db/queries';
import { getUser } from '@/lib/db/queries';
import { canAccessStudent } from '@/lib/auth/authorization';
import { ProgressStatus } from '@/lib/db/schema';

export async function GET(request: NextRequest) {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const studentId = searchParams.get('studentId');
    const courseId = searchParams.get('courseId');

    if (!studentId) {
      return NextResponse.json(
        { error: 'Student ID is required' },
        { status: 400 }
      );
    }

    // Check access
    const hasAccess = await canAccessStudent(parseInt(studentId));
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const progress = await getStudentProgress(
      parseInt(studentId),
      courseId || undefined
    );

    return NextResponse.json({
      success: true,
      progress: progress.map((p) => ({
        id: p.id,
        courseId: p.courseId,
        lessonId: p.lessonId,
        status: p.status,
        completedAt: p.completedAt,
        data: p.data,
        updatedAt: p.updatedAt,
      })),
    });
  } catch (error) {
    console.error('Get progress error:', error);
    return NextResponse.json(
      { error: 'Failed to get progress' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { studentId, courseId, lessonId, status, data } = body;

    if (!studentId || !courseId || !lessonId || !status) {
      return NextResponse.json(
        { error: 'Student ID, course ID, lesson ID, and status are required' },
        { status: 400 }
      );
    }

    // Check access
    const hasAccess = await canAccessStudent(studentId);
    if (!hasAccess) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Validate status
    if (!Object.values(ProgressStatus).includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status' },
        { status: 400 }
      );
    }

    const progress = await saveProgress(
      studentId,
      courseId,
      lessonId,
      status,
      data
    );

    // Get completed lessons count for free tier check
    const completedCount = await getCompletedLessonsCount(studentId, courseId);

    return NextResponse.json({
      success: true,
      progress: {
        id: progress.id,
        courseId: progress.courseId,
        lessonId: progress.lessonId,
        status: progress.status,
        completedAt: progress.completedAt,
        updatedAt: progress.updatedAt,
      },
      completedLessonsCount: completedCount,
    });
  } catch (error) {
    console.error('Save progress error:', error);
    return NextResponse.json(
      { error: 'Failed to save progress' },
      { status: 500 }
    );
  }
}
