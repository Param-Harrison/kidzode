import { NextResponse } from 'next/server';
import { getUser, getStudentByUserId } from '@/lib/db/queries';
import { getSession } from '@/lib/auth/session';

export async function GET() {
  try {
    const user = await getUser();
    if (!user) {
      console.log('/api/auth/me: No user found')
      return NextResponse.json({ user: null }, { status: 200 });
    }

    // Get studentId from session if available (for student logins)
    let studentId: number | undefined;
    const session = await getSession();
    
    console.log('/api/auth/me: User found', { 
      userId: user.id, 
      userType: user.userType,
      sessionStudentId: session?.studentId 
    })
    
    if (session?.studentId) {
      // Use studentId from session (set during student login)
      studentId = session.studentId;
      console.log('/api/auth/me: Using studentId from session:', studentId)
    } else if (user.userType === 'student') {
      // Fallback: look up studentId from database if user is a student
      console.log('/api/auth/me: Looking up studentId from database for userId:', user.id)
      const studentRecords = await getStudentByUserId(user.id);
      if (studentRecords.length > 0) {
        studentId = studentRecords[0].id;
        console.log('/api/auth/me: Found studentId from database:', studentId)
      } else {
        console.log('/api/auth/me: No student record found for userId:', user.id)
      }
    }

    const responseUser = {
      ...user,
      studentId, // Include studentId if available
    }
    
    console.log('/api/auth/me: Returning user with studentId:', { 
      userId: responseUser.id, 
      userType: responseUser.userType,
      studentId: responseUser.studentId 
    })

    return NextResponse.json({ 
      user: responseUser
    });
  } catch (error) {
    console.error('Error getting current user:', error);
    return NextResponse.json({ user: null }, { status: 200 });
  }
}