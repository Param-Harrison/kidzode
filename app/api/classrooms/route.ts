import { NextRequest, NextResponse } from 'next/server';
import {
  createClassroom,
  getClassroomsByTeacher,
  getAccountForUser,
  addStudentToClassroom,
  updateStudentActiveStatus,
  getStudentsInClassroom,
} from '@/lib/db/queries';
import { getUser } from '@/lib/db/queries';
import { requireTeacher } from '@/lib/auth/authorization';

export async function GET(request: NextRequest) {
  try {
    await requireTeacher();
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const account = await getAccountForUser(user.id);
    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    const classrooms = await getClassroomsByTeacher(account.id);

    return NextResponse.json({
      success: true,
      classrooms: classrooms.map((c) => ({
        id: c.id,
        name: c.name,
        classCode: c.classCode,
        isActive: c.isActive,
        studentCount: c.classroomStudents.length,
        activeStudentCount: c.classroomStudents.filter((cs) => cs.isActive).length,
        students: c.classroomStudents.map((cs) => ({
          id: cs.student.id,
          displayName: cs.student.displayName,
          avatarUrl: cs.student.avatarUrl,
          isActive: cs.isActive,
          joinedAt: cs.joinedAt,
        })),
      })),
    });
  } catch (error: any) {
    if (error.message === 'Teacher access required') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('Get classrooms error:', error);
    return NextResponse.json(
      { error: 'Failed to get classrooms' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireTeacher();
    const user = await getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const account = await getAccountForUser(user.id);
    if (!account) {
      return NextResponse.json({ error: 'Account not found' }, { status: 404 });
    }

    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Classroom name is required' },
        { status: 400 }
      );
    }

    const classroom = await createClassroom(account.id, name);

    return NextResponse.json({
      success: true,
      classroom: {
        id: classroom.id,
        name: classroom.name,
        classCode: classroom.classCode,
        isActive: classroom.isActive,
      },
    });
  } catch (error: any) {
    if (error.message === 'Teacher access required') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('Create classroom error:', error);
    return NextResponse.json(
      { error: 'Failed to create classroom' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    await requireTeacher();

    const body = await request.json();
    const { classroomId, studentId, isActive } = body;

    if (!classroomId || !studentId || isActive === undefined) {
      return NextResponse.json(
        { error: 'Classroom ID, student ID, and active status are required' },
        { status: 400 }
      );
    }

    await updateStudentActiveStatus(classroomId, studentId, isActive);

    return NextResponse.json({
      success: true,
      message: 'Student status updated successfully',
    });
  } catch (error: any) {
    if (error.message === 'Teacher access required') {
      return NextResponse.json({ error: error.message }, { status: 403 });
    }
    console.error('Update student status error:', error);
    return NextResponse.json(
      { error: 'Failed to update student status' },
      { status: 500 }
    );
  }
}
