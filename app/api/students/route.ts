import { NextRequest, NextResponse } from 'next/server';
import {
  createStudent,
  getStudentsByParentAccount,
  getAccountForUser,
  updateStudentPin,
} from '@/lib/db/queries';
import { getUser } from '@/lib/db/queries';
import { requireParent } from '@/lib/auth/authorization';

export async function GET(request: NextRequest) {
  try {
    await requireParent();
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const account = await getAccountForUser(user.id);
    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    const students = await getStudentsByParentAccount(account.id);

    return NextResponse.json({
      success: true,
      students: students.map((s) => ({
        id: s.id,
        displayName: s.displayName,
        avatarUrl: s.avatarUrl,
        hasPin: !!s.pin,
        userId: s.userId,
      })),
    });
  } catch (error: any) {
    if (error.message === 'Parent access required') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('Get students error:', error);
    return NextResponse.json(
      { error: 'Failed to get students' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireParent();
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const account = await getAccountForUser(user.id);
    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    const body = await request.json();
    const { displayName, pin } = body;

    if (!displayName) {
      return NextResponse.json(
        { error: 'Display name is required' },
        { status: 400 }
      );
    }

    const result = await createStudent(account.id, displayName, pin);

    return NextResponse.json({
      success: true,
      student: {
        id: result.student.id,
        displayName: result.student.displayName,
        userId: result.user.id,
      },
    });
  } catch (error: any) {
    if (error.message === 'Parent access required') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('Create student error:', error);
    return NextResponse.json(
      { error: 'Failed to create student' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await requireParent();

    const body = await request.json();
    const { studentId, pin } = body;

    if (!studentId || !pin) {
      return NextResponse.json(
        { error: 'Student ID and PIN are required' },
        { status: 400 }
      );
    }

    await updateStudentPin(studentId, pin);

    return NextResponse.json({
      success: true,
      message: 'PIN updated successfully',
    });
  } catch (error: any) {
    if (error.message === 'Parent access required') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('Update student PIN error:', error);
    return NextResponse.json(
      { error: 'Failed to update PIN' },
      { status: 500 }
    );
  }
}
