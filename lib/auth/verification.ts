import crypto from 'crypto';
import { db } from '@/lib/db/drizzle';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

const VERIFICATION_TOKEN_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

export function generateVerificationToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export async function createEmailVerificationToken(
  userId: number
): Promise<string> {
  const token = generateVerificationToken();

  await db
    .update(users)
    .set({
      emailVerificationToken: token,
      updatedAt: new Date(),
    })
    .where(eq(users.id, userId));

  return token;
}

export async function verifyEmailToken(token: string): Promise<number | null> {
  const result = await db
    .select()
    .from(users)
    .where(eq(users.emailVerificationToken, token))
    .limit(1);

  if (result.length === 0) {
    return null;
  }

  const user = result[0];

  // Check if token is still valid (within 24 hours of account creation)
  const tokenAge = Date.now() - new Date(user.createdAt).getTime();
  if (tokenAge > VERIFICATION_TOKEN_EXPIRY) {
    return null;
  }

  return user.id;
}

export async function sendVerificationEmail(
  email: string,
  token: string
): Promise<void> {
  // TODO: Implement with Resend
  // For now, just log to console
  const verificationUrl = `${process.env.BASE_URL}/api/auth/verify-email?token=${token}`;
  console.log(`Verification email for ${email}: ${verificationUrl}`);

  // When implementing with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: process.env.RESEND_FROM_EMAIL,
  //   to: email,
  //   subject: 'Verify your Kidsemy account',
  //   html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`
  // });
}
