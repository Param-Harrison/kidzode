import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, logActivity, getAccountForUser } from '@/lib/db/queries';
import { comparePasswords } from '@/lib/auth/session';
import { setSession } from '@/lib/auth/session';
import { ActivityType } from '@/lib/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Get user by email
    const user = await getUserByEmail(email);
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Verify password
    if (!user.passwordHash) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    const isValidPassword = await comparePasswords(password, user.passwordHash);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Check if user is parent or teacher (students use class code login)
    if (user.userType === 'student') {
      return NextResponse.json(
        { error: 'Students should use class code login' },
        { status: 403 }
      );
    }

    // Get account
    const account = await getAccountForUser(user.id);

    // Log activity
    if (account) {
      await logActivity(
        user.id,
        account.id,
        ActivityType.SIGN_IN,
        request.headers.get('x-forwarded-for') || undefined
      );
    }

    // Set session
    await setSession(user);

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        userType: user.userType,
        emailVerified: user.emailVerified,
      },
    });
  } catch (error) {
    console.error('Signin error:', error);
    return NextResponse.json(
      { error: 'Failed to sign in' },
      { status: 500 }
    );
  }
}
