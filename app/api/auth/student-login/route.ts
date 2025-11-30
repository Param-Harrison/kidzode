import { NextRequest, NextResponse } from 'next/server';
import { validateClassCode } from '@/lib/auth/class-code';
import { getStudentsInClassroom } from '@/lib/db/queries';
import { validateStudentPin } from '@/lib/auth/class-code';
import { getStudentById, logActivity } from '@/lib/db/queries';
import { setSession } from '@/lib/auth/session';
import { ActivityType } from '@/lib/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { classCode, studentId, pin } = body;

    // Step 1: Validate class code and return students
    if (classCode && !studentId) {
      const classroom = await validateClassCode(classCode);
      if (!classroom) {
        return NextResponse.json(
          { error: 'Invalid class code' },
          { status: 404 }
        );
      }

      // Get students in classroom
      const classroomStudents = await getStudentsInClassroom(classroom.id);
      const students = classroomStudents.map((cs) => ({
        id: cs.student.id,
        displayName: cs.student.displayName,
        avatarUrl: cs.student.avatarUrl,
        hasPin: !!cs.student.pin,
      }));

      return NextResponse.json({
        success: true,
        classroom: {
          id: classroom.id,
          name: classroom.name,
        },
        students,
      });
    }

    // Step 2: Validate student selection and PIN
    if (studentId) {
      const student = await getStudentById(studentId);
      if (!student) {
        return NextResponse.json(
          { error: 'Student not found' },
          { status: 404 }
        );
      }

      // Validate PIN if student has one
      if (student.pin) {
        if (!pin) {
          return NextResponse.json(
            { error: 'PIN is required' },
            { status: 400 }
          );
        }

        const isValidPin = await validateStudentPin(studentId, pin);
        if (!isValidPin) {
          return NextResponse.json(
            { error: 'Invalid PIN' },
            { status: 401 }
          );
        }
      }

      // Log activity
      await logActivity(
        student.userId,
        null,
        ActivityType.SIGN_IN,
        request.headers.get('x-forwarded-for') || undefined
      );

      // Set session with student ID
      await setSession(student.user, student.id);

      return NextResponse.json({
        success: true,
        student: {
          id: student.id,
          displayName: student.displayName,
          userId: student.userId,
        },
      });
    }

    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Student login error:', error);
    return NextResponse.json(
      { error: 'Failed to log in' },
      { status: 500 }
    );
  }
}
