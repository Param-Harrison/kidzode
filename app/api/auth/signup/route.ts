import { NextRequest, NextResponse } from 'next/server';
import { createParentAccount, createTeacherAccount } from '@/lib/db/queries';
import { setSession } from '@/lib/auth/session';
import {
  createEmailVerificationToken,
  sendVerificationEmail,
} from '@/lib/auth/verification';
import { logActivity } from '@/lib/db/queries';
import { ActivityType } from '@/lib/db/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, name, accountType } = body;

    // Validate input
    if (!email || !password || !name || !accountType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!['parent', 'teacher'].includes(accountType)) {
      return NextResponse.json(
        { error: 'Invalid account type' },
        { status: 400 }
      );
    }

    // Create account based on type
    let user, account;
    if (accountType === 'parent') {
      const result = await createParentAccount(email, password, name);
      user = result.user;
      account = result.account;
    } else {
      const result = await createTeacherAccount(email, password, name);
      user = result.user;
      account = result.account;
    }

    // Generate and send verification email
    const verificationToken = await createEmailVerificationToken(user.id);
    await sendVerificationEmail(email, verificationToken);

    // In development, auto-verify email for convenience
    if (process.env.NODE_ENV === 'development') {
      const { db } = await import('@/lib/db/drizzle');
      const { users } = await import('@/lib/db/schema');
      const { eq } = await import('drizzle-orm');
      
      await db
        .update(users)
        .set({ emailVerified: true })
        .where(eq(users.id, user.id));
        
      user.emailVerified = true;
    }

    // Log activity
    await logActivity(
      user.id,
      account.id,
      ActivityType.SIGN_UP,
      request.headers.get('x-forwarded-for') || undefined
    );

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
      message: 'Account created successfully. Please check your email to verify your account.',
    });
  } catch (error: any) {
    console.error('Signup error:', error);

    // Handle duplicate email
    if (error.code === '23505') {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}
