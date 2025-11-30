import { db } from '@/lib/db/drizzle';
import { classrooms, students } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { comparePasswords } from './session';

/**
 * Generate a 6-character class code
 * Avoids ambiguous characters: 0, O, 1, I, L
 */
export function generateClassCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

/**
 * Validate a class code and return the classroom if valid
 */
export async function validateClassCode(classCode: string) {
  const result = await db
    .select()
    .from(classrooms)
    .where(eq(classrooms.classCode, classCode.toUpperCase()))
    .limit(1);

  if (result.length === 0) {
    return null;
  }

  const classroom = result[0];

  // Check if classroom is active
  if (!classroom.isActive) {
    return null;
  }

  return classroom;
}

/**
 * Validate student PIN
 */
export async function validateStudentPin(
  studentId: number,
  pin: string
): Promise<boolean> {
  const result = await db
    .select()
    .from(students)
    .where(eq(students.id, studentId))
    .limit(1);

  if (result.length === 0) {
    return false;
  }

  const student = result[0];

  // If no PIN is set, validation passes
  if (!student.pin) {
    return true;
  }

  // Compare provided PIN with hashed PIN
  return await comparePasswords(pin, student.pin);
}
