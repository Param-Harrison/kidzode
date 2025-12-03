import { desc, and, eq, isNull, sql } from 'drizzle-orm';
import { db } from './drizzle';
import {
  users,
  accounts,
  students,
  classrooms,
  classroomStudents,
  progress,
  ratings,
  bookmarks,
  feedback,
  activityLogs,
  oauthAccounts,
  UserType,
  AccountType,
  ProgressStatus,
  type NewUser,
  type NewAccount,
  type NewStudent,
  type NewClassroom,
  type NewProgress,
  type NewActivityLog,
} from './schema';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/session';
import { hashPassword } from '@/lib/auth/session';

// ============================================================================
// SESSION & AUTHENTICATION
// ============================================================================

export async function getUser() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (
    !sessionData ||
    !sessionData.user ||
    typeof sessionData.user.id !== 'number'
  ) {
    return null;
  }

  if (new Date(sessionData.expires) < new Date()) {
    return null;
  }

  const user = await db
    .select()
    .from(users)
    .where(and(eq(users.id, sessionData.user.id), isNull(users.deletedAt)))
    .limit(1);

  if (user.length === 0) {
    return null;
  }

  return user[0];
}

export async function getUserByEmail(email: string) {
  const result = await db
    .select()
    .from(users)
    .where(and(eq(users.email, email), isNull(users.deletedAt)))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

export async function getUserById(userId: number) {
  const result = await db
    .select()
    .from(users)
    .where(and(eq(users.id, userId), isNull(users.deletedAt)))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

export async function verifyUserEmail(userId: number) {
  await db
    .update(users)
    .set({
      emailVerified: true,
      emailVerificationToken: null,
      updatedAt: new Date(),
    })
    .where(eq(users.id, userId));
}

// ============================================================================
// USER & ACCOUNT CREATION
// ============================================================================

export async function createParentAccount(
  email: string,
  password: string,
  name: string
) {
  const passwordHash = await hashPassword(password);

  return await db.transaction(async (tx) => {
    // Create user
    const [user] = await tx
      .insert(users)
      .values({
        email,
        passwordHash,
        name,
        userType: UserType.PARENT,
        emailVerified: false,
      })
      .returning();

    // Create account
    const [account] = await tx
      .insert(accounts)
      .values({
        ownerId: user.id,
        accountType: AccountType.INDIVIDUAL,
        subscriptionType: 'free',
      })
      .returning();

    return { user, account };
  });
}

export async function createTeacherAccount(
  email: string,
  password: string,
  name: string
) {
  const passwordHash = await hashPassword(password);

  return await db.transaction(async (tx) => {
    // Create user
    const [user] = await tx
      .insert(users)
      .values({
        email,
        passwordHash,
        name,
        userType: UserType.TEACHER,
        emailVerified: false,
      })
      .returning();

    // Create account
    const [account] = await tx
      .insert(accounts)
      .values({
        ownerId: user.id,
        accountType: AccountType.TEACHER,
        subscriptionType: 'free',
      })
      .returning();

    return { user, account };
  });
}

// ============================================================================
// STUDENT MANAGEMENT
// ============================================================================

export async function createStudent(
  parentAccountId: number,
  displayName: string,
  pin?: string
) {
  return await db.transaction(async (tx) => {
    // Create user for student
    const [user] = await tx
      .insert(users)
      .values({
        userType: UserType.STUDENT,
        name: displayName,
      })
      .returning();

    // Create student record
    const hashedPin = pin ? await hashPassword(pin) : null;
    const [student] = await tx
      .insert(students)
      .values({
        userId: user.id,
        parentAccountId,
        displayName,
        pin: hashedPin,
      })
      .returning();

    return { user, student };
  });
}

export async function getStudentsByParentAccount(accountId: number) {
  return await db.query.students.findMany({
    where: eq(students.parentAccountId, accountId),
    with: {
      user: true,
    },
  });
}

export async function getStudentById(studentId: number) {
  return await db.query.students.findFirst({
    where: eq(students.id, studentId),
    with: {
      user: true,
      parentAccount: true,
    },
  });
}

export async function updateStudentPin(studentId: number, pin: string) {
  const hashedPin = await hashPassword(pin);
  await db
    .update(students)
    .set({ pin: hashedPin })
    .where(eq(students.id, studentId));
}

// ============================================================================
// CLASSROOM MANAGEMENT
// ============================================================================

function generateClassCode(): string {
  // Generate 6-character alphanumeric code, avoiding ambiguous characters
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function createClassroom(teacherAccountId: number, name: string) {
  let classCode = generateClassCode();

  // Ensure unique class code
  let attempts = 0;
  while (attempts < 10) {
    const existing = await db
      .select()
      .from(classrooms)
      .where(eq(classrooms.classCode, classCode))
      .limit(1);

    if (existing.length === 0) break;
    classCode = generateClassCode();
    attempts++;
  }

  const [classroom] = await db
    .insert(classrooms)
    .values({
      teacherAccountId,
      name,
      classCode,
    })
    .returning();

  return classroom;
}

export async function getClassroomByCode(classCode: string) {
  const result = await db
    .select()
    .from(classrooms)
    .where(eq(classrooms.classCode, classCode.toUpperCase()))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

export async function getClassroomsByTeacher(teacherAccountId: number) {
  return await db.query.classrooms.findMany({
    where: eq(classrooms.teacherAccountId, teacherAccountId),
    with: {
      classroomStudents: {
        with: {
          student: {
            with: {
              user: true,
            },
          },
        },
      },
    },
  });
}

export async function addStudentToClassroom(
  classroomId: number,
  studentId: number,
  isActive: boolean = true
) {
  const [enrollment] = await db
    .insert(classroomStudents)
    .values({
      classroomId,
      studentId,
      isActive,
    })
    .returning();

  return enrollment;
}

export async function updateStudentActiveStatus(
  classroomId: number,
  studentId: number,
  isActive: boolean
) {
  await db
    .update(classroomStudents)
    .set({ isActive })
    .where(
      and(
        eq(classroomStudents.classroomId, classroomId),
        eq(classroomStudents.studentId, studentId)
      )
    );
}

export async function getStudentsInClassroom(classroomId: number) {
  return await db.query.classroomStudents.findMany({
    where: eq(classroomStudents.classroomId, classroomId),
    with: {
      student: {
        with: {
          user: true,
        },
      },
    },
  });
}

// ============================================================================
// PROGRESS TRACKING
// ============================================================================

export async function saveProgress(
  studentId: number,
  courseId: string,
  lessonId: string,
  status: string,
  data?: any
) {
  // Check if progress record exists
  const existing = await db
    .select()
    .from(progress)
    .where(
      and(
        eq(progress.studentId, studentId),
        eq(progress.courseId, courseId),
        eq(progress.lessonId, lessonId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    // Update existing
    const [updated] = await db
      .update(progress)
      .set({
        status,
        data,
        completedAt: status === ProgressStatus.COMPLETED ? new Date() : null,
        updatedAt: new Date(),
      })
      .where(eq(progress.id, existing[0].id))
      .returning();

    return updated;
  } else {
    // Insert new
    const [newProgress] = await db
      .insert(progress)
      .values({
        studentId,
        courseId,
        lessonId,
        status,
        data,
        completedAt: status === ProgressStatus.COMPLETED ? new Date() : null,
      })
      .returning();

    return newProgress;
  }
}

export async function getStudentProgress(studentId: number, courseId?: string) {
  const conditions = [eq(progress.studentId, studentId)];
  if (courseId) {
    conditions.push(eq(progress.courseId, courseId));
  }

  return await db
    .select()
    .from(progress)
    .where(and(...conditions))
    .orderBy(desc(progress.updatedAt));
}

export async function getCompletedLessonsCount(
  studentId: number,
  courseId: string
) {
  const result = await db
    .select({ count: sql<number>`count(*)` })
    .from(progress)
    .where(
      and(
        eq(progress.studentId, studentId),
        eq(progress.courseId, courseId),
        eq(progress.status, ProgressStatus.COMPLETED)
      )
    );

  return result[0]?.count || 0;
}

// ============================================================================
// RATINGS
// ============================================================================

export async function saveRating(
  studentId: number,
  courseId: string,
  lessonId: string,
  rating: number,
  testResults?: any
) {
  // Check if rating exists
  const existing = await db
    .select()
    .from(ratings)
    .where(
      and(
        eq(ratings.studentId, studentId),
        eq(ratings.courseId, courseId),
        eq(ratings.lessonId, lessonId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    // Update existing
    const [updated] = await db
      .update(ratings)
      .set({
        rating,
        testResults,
      })
      .where(eq(ratings.id, existing[0].id))
      .returning();

    return updated;
  } else {
    // Insert new
    const [newRating] = await db
      .insert(ratings)
      .values({
        studentId,
        courseId,
        lessonId,
        rating,
        testResults,
      })
      .returning();

    return newRating;
  }
}

export async function getRating(studentId: number, lessonId: string) {
  const result = await db
    .select()
    .from(ratings)
    .where(
      and(
        eq(ratings.studentId, studentId),
        eq(ratings.lessonId, lessonId)
      )
    )
    .limit(1);

  return result[0] || null;
}

export async function getAverageRating(lessonId: string) {
  const result = await db
    .select({
      avgRating: sql<number>`AVG(${ratings.rating})`,
      count: sql<number>`COUNT(*)`,
    })
    .from(ratings)
    .where(eq(ratings.lessonId, lessonId));

  return result[0]?.avgRating ? Number(result[0].avgRating) : null;
}

// ============================================================================
// BOOKMARKS
// ============================================================================

export async function toggleBookmark(
  studentId: number,
  courseId: string,
  lessonId: string,
  bookmarked: boolean
) {
  if (bookmarked) {
    // Check if already bookmarked
    const existing = await db
      .select()
      .from(bookmarks)
      .where(
        and(
          eq(bookmarks.studentId, studentId),
          eq(bookmarks.courseId, courseId),
          eq(bookmarks.lessonId, lessonId)
        )
      )
      .limit(1);

    if (existing.length === 0) {
      // Insert new bookmark
      const [newBookmark] = await db
        .insert(bookmarks)
        .values({
          studentId,
          courseId,
          lessonId,
        })
        .returning();

      return newBookmark;
    }
    return existing[0];
  } else {
    // Delete bookmark
    await db
      .delete(bookmarks)
      .where(
        and(
          eq(bookmarks.studentId, studentId),
          eq(bookmarks.courseId, courseId),
          eq(bookmarks.lessonId, lessonId)
        )
      );

    return null;
  }
}

export async function getBookmark(studentId: number, lessonId: string) {
  const result = await db
    .select()
    .from(bookmarks)
    .where(
      and(
        eq(bookmarks.studentId, studentId),
        eq(bookmarks.lessonId, lessonId)
      )
    )
    .limit(1);

  return result[0] || null;
}

export async function getStudentBookmarks(studentId: number, courseId?: string) {
  const conditions = [eq(bookmarks.studentId, studentId)];
  if (courseId) {
    conditions.push(eq(bookmarks.courseId, courseId));
  }

  return await db
    .select()
    .from(bookmarks)
    .where(and(...conditions))
    .orderBy(desc(bookmarks.createdAt));
}

// ============================================================================
// SUBSCRIPTION MANAGEMENT
// ============================================================================

export async function getAccountByStripeCustomerId(customerId: string) {
  const result = await db
    .select()
    .from(accounts)
    .where(eq(accounts.stripeCustomerId, customerId))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

// ============================================================================
// FEEDBACK
// ============================================================================

export async function saveFeedback(
  studentId: number,
  courseId: string,
  lessonId: string,
  thumbsUp: boolean,
  comment?: string
) {
  // Check if feedback already exists
  const existing = await db
    .select()
    .from(feedback)
    .where(
      and(
        eq(feedback.studentId, studentId),
        eq(feedback.courseId, courseId),
        eq(feedback.lessonId, lessonId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    // Update existing feedback
    const [updated] = await db
      .update(feedback)
      .set({
        thumbsUp,
        comment: comment || null,
        updatedAt: new Date(),
      })
      .where(eq(feedback.id, existing[0].id))
      .returning();

    return updated;
  } else {
    // Insert new feedback
    const [newFeedback] = await db
      .insert(feedback)
      .values({
        studentId,
        courseId,
        lessonId,
        thumbsUp,
        comment: comment || null,
      })
      .returning();

    return newFeedback;
  }
}

export async function getFeedback(studentId: number, lessonId: string) {
  const result = await db
    .select()
    .from(feedback)
    .where(
      and(
        eq(feedback.studentId, studentId),
        eq(feedback.lessonId, lessonId)
      )
    )
    .limit(1);

  return result[0] || null;
}

export async function updateAccountSubscription(
  accountId: number,
  subscriptionData: {
    stripeSubscriptionId?: string | null;
    stripeProductId?: string | null;
    subscriptionStatus?: string | null;
    subscriptionType?: string | null;
  }
) {
  await db
    .update(accounts)
    .set({
      ...subscriptionData,
      updatedAt: new Date(),
    })
    .where(eq(accounts.id, accountId));
}

export async function getAccountSubscription(accountId: number) {
  const result = await db
    .select()
    .from(accounts)
    .where(eq(accounts.id, accountId))
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

export async function hasActiveSubscription(accountId: number) {
  const account = await getAccountSubscription(accountId);
  return (
    account &&
    (account.subscriptionStatus === 'active' ||
      account.subscriptionStatus === 'trialing' ||
      account.subscriptionType === 'lifetime')
  );
}

export async function getAccountForUser(userId: number) {
  const result = await db.query.accounts.findFirst({
    where: eq(accounts.ownerId, userId),
    with: {
      owner: true,
      students: {
        with: {
          user: true,
        },
      },
      classrooms: {
        with: {
          classroomStudents: {
            with: {
              student: {
                with: {
                  user: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return result || null;
}

// ============================================================================
// ACTIVITY LOGS
// ============================================================================

export async function logActivity(
  userId: number | null,
  accountId: number | null,
  action: string,
  ipAddress?: string,
  metadata?: any
) {
  await db.insert(activityLogs).values({
    userId,
    accountId,
    action,
    ipAddress,
    metadata,
  });
}

export async function getActivityLogs(accountId?: number) {
  const user = await getUser();
  if (!user) {
    throw new Error('User not authenticated');
  }

  const conditions = accountId
    ? [eq(activityLogs.accountId, accountId)]
    : [eq(activityLogs.userId, user.id)];

  return await db
    .select({
      id: activityLogs.id,
      action: activityLogs.action,
      timestamp: activityLogs.timestamp,
      ipAddress: activityLogs.ipAddress,
      userName: users.name,
    })
    .from(activityLogs)
    .leftJoin(users, eq(activityLogs.userId, users.id))
    .where(and(...conditions))
    .orderBy(desc(activityLogs.timestamp))
    .limit(50);
}
