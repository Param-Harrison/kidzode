import { getUser, getAccountForUser, getStudentById } from '@/lib/db/queries';
import { UserType } from '@/lib/db/schema';

/**
 * Check if the current user is a parent
 */
export async function isParent(): Promise<boolean> {
  const user = await getUser();
  return user?.userType === UserType.PARENT;
}

/**
 * Check if the current user is a teacher
 */
export async function isTeacher(): Promise<boolean> {
  const user = await getUser();
  return user?.userType === UserType.TEACHER;
}

/**
 * Check if the current user is a student
 */
export async function isStudent(): Promise<boolean> {
  const user = await getUser();
  return user?.userType === UserType.STUDENT;
}

/**
 * Check if user can access a specific student's data
 * Parents can access their own children
 * Teachers can access students in their classrooms
 */
export async function canAccessStudent(studentId: number): Promise<boolean> {
  const user = await getUser();
  if (!user) return false;

  const student = await getStudentById(studentId);
  if (!student) return false;

  // Parents can access their own children
  if (user.userType === UserType.PARENT) {
    const account = await getAccountForUser(user.id);
    if (!account) return false;

    return account.students.some((s) => s.id === studentId);
  }

  // Teachers can access students in their classrooms
  if (user.userType === UserType.TEACHER) {
    const account = await getAccountForUser(user.id);
    if (!account) return false;

    return account.classrooms.some((classroom) =>
      classroom.classroomStudents.some((cs) => cs.studentId === studentId)
    );
  }

  // Students can only access their own data
  if (user.userType === UserType.STUDENT) {
    return student.userId === user.id;
  }

  return false;
}

/**
 * Check if student can access a lesson
 * Free tier: First 6 lessons of beginners course
 * Paid: All lessons if account has active subscription
 */
export async function canAccessLesson(
  studentId: number,
  courseId: string,
  lessonNumber: number
): Promise<boolean> {
  const student = await getStudentById(studentId);
  if (!student) return false;

  // Free tier: First 6 lessons of beginners course
  if (courseId === 'beginners' && lessonNumber <= 6) {
    return true;
  }

  // Check if parent account has active subscription
  if (student.parentAccountId) {
    const { hasActiveSubscription } = await import('@/lib/db/queries');
    const hasAccess = await hasActiveSubscription(student.parentAccountId);
    return hasAccess ?? false;
  }

  // If student is in a classroom, check teacher's subscription
  // This would require additional logic to find the classroom
  // For now, return false if no parent account
  return false;
}

/**
 * Require user to be authenticated
 */
export async function requireAuth() {
  const user = await getUser();
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}

/**
 * Require user to be a parent
 */
export async function requireParent() {
  const user = await requireAuth();
  if (user.userType !== UserType.PARENT) {
    throw new Error('Parent access required');
  }
  return user;
}

/**
 * Require user to be a teacher
 */
export async function requireTeacher() {
  const user = await requireAuth();
  if (user.userType !== UserType.TEACHER) {
    throw new Error('Teacher access required');
  }
  return user;
}

/**
 * Require user to be a student
 */
export async function requireStudent() {
  const user = await requireAuth();
  if (user.userType !== UserType.STUDENT) {
    throw new Error('Student access required');
  }
  return user;
}
