import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  boolean,
  date,
  jsonb,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ============================================================================
// USERS & AUTHENTICATION
// ============================================================================

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 255 }).unique(),
  passwordHash: text('password_hash'),
  userType: varchar('user_type', { length: 20 }).notNull(), // 'parent' | 'teacher' | 'student'
  dateOfBirth: date('date_of_birth'),
  emailVerified: boolean('email_verified').notNull().default(false),
  emailVerificationToken: text('email_verification_token'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const oauthAccounts = pgTable('oauth_accounts', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  provider: varchar('provider', { length: 20 }).notNull(), // 'google' | 'github'
  providerAccountId: text('provider_account_id').notNull(),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ============================================================================
// ACCOUNTS & BILLING
// ============================================================================

export const accounts = pgTable('accounts', {
  id: serial('id').primaryKey(),
  ownerId: integer('owner_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  accountType: varchar('account_type', { length: 20 }).notNull(), // 'individual' | 'teacher'
  stripeCustomerId: text('stripe_customer_id').unique(),
  stripeSubscriptionId: text('stripe_subscription_id').unique(),
  stripeProductId: text('stripe_product_id'),
  subscriptionStatus: varchar('subscription_status', { length: 20 }), // 'active' | 'canceled' | 'past_due' | null
  subscriptionType: varchar('subscription_type', { length: 20 }), // 'monthly' | 'lifetime' | 'free'
  priceLocale: varchar('price_locale', { length: 10 }), // 'US' | 'IN' | 'GB' etc. for future adaptive pricing
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// ============================================================================
// STUDENTS
// ============================================================================

export const students = pgTable('students', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  parentAccountId: integer('parent_account_id').references(() => accounts.id, {
    onDelete: 'set null',
  }),
  displayName: varchar('display_name', { length: 100 }).notNull(),
  avatarUrl: text('avatar_url'),
  pin: varchar('pin', { length: 4 }), // Optional 4-digit PIN, hashed
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ============================================================================
// CLASSROOMS
// ============================================================================

export const classrooms = pgTable('classrooms', {
  id: serial('id').primaryKey(),
  teacherAccountId: integer('teacher_account_id')
    .notNull()
    .references(() => accounts.id, { onDelete: 'cascade' }),
  name: varchar('name', { length: 100 }).notNull(),
  classCode: varchar('class_code', { length: 6 }).notNull().unique(),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const classroomStudents = pgTable('classroom_students', {
  id: serial('id').primaryKey(),
  classroomId: integer('classroom_id')
    .notNull()
    .references(() => classrooms.id, { onDelete: 'cascade' }),
  studentId: integer('student_id')
    .notNull()
    .references(() => students.id, { onDelete: 'cascade' }),
  isActive: boolean('is_active').notNull().default(true), // For teacher billing
  joinedAt: timestamp('joined_at').notNull().defaultNow(),
});

// ============================================================================
// PROGRESS TRACKING
// ============================================================================

export const progress = pgTable('progress', {
  id: serial('id').primaryKey(),
  studentId: integer('student_id')
    .notNull()
    .references(() => students.id, { onDelete: 'cascade' }),
  courseId: varchar('course_id', { length: 100 }).notNull(),
  lessonId: varchar('lesson_id', { length: 100 }).notNull(),
  status: varchar('status', { length: 20 }).notNull(), // 'not_started' | 'in_progress' | 'completed'
  completedAt: timestamp('completed_at'),
  data: jsonb('data'), // Detailed progress data (e.g., test results, code submissions)
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// ============================================================================
// ACTIVITY LOGS
// ============================================================================

export const activityLogs = pgTable('activity_logs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  accountId: integer('account_id').references(() => accounts.id, {
    onDelete: 'set null',
  }),
  action: text('action').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
  ipAddress: varchar('ip_address', { length: 45 }),
  metadata: jsonb('metadata'),
});

// ============================================================================
// RELATIONS
// ============================================================================

export const usersRelations = relations(users, ({ one, many }) => ({
  account: one(accounts, {
    fields: [users.id],
    references: [accounts.ownerId],
  }),
  student: one(students, {
    fields: [users.id],
    references: [students.userId],
  }),
  oauthAccounts: many(oauthAccounts),
  activityLogs: many(activityLogs),
}));

export const accountsRelations = relations(accounts, ({ one, many }) => ({
  owner: one(users, {
    fields: [accounts.ownerId],
    references: [users.id],
  }),
  students: many(students),
  classrooms: many(classrooms),
  activityLogs: many(activityLogs),
}));

export const studentsRelations = relations(students, ({ one, many }) => ({
  user: one(users, {
    fields: [students.userId],
    references: [users.id],
  }),
  parentAccount: one(accounts, {
    fields: [students.parentAccountId],
    references: [accounts.id],
  }),
  classroomStudents: many(classroomStudents),
  progress: many(progress),
}));

export const classroomsRelations = relations(classrooms, ({ one, many }) => ({
  teacherAccount: one(accounts, {
    fields: [classrooms.teacherAccountId],
    references: [accounts.id],
  }),
  classroomStudents: many(classroomStudents),
}));

export const classroomStudentsRelations = relations(
  classroomStudents,
  ({ one }) => ({
    classroom: one(classrooms, {
      fields: [classroomStudents.classroomId],
      references: [classrooms.id],
    }),
    student: one(students, {
      fields: [classroomStudents.studentId],
      references: [students.id],
    }),
  })
);

export const progressRelations = relations(progress, ({ one }) => ({
  student: one(students, {
    fields: [progress.studentId],
    references: [students.id],
  }),
}));

export const oauthAccountsRelations = relations(oauthAccounts, ({ one }) => ({
  user: one(users, {
    fields: [oauthAccounts.userId],
    references: [users.id],
  }),
}));

export const activityLogsRelations = relations(activityLogs, ({ one }) => ({
  user: one(users, {
    fields: [activityLogs.userId],
    references: [users.id],
  }),
  account: one(accounts, {
    fields: [activityLogs.accountId],
    references: [accounts.id],
  }),
}));

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Account = typeof accounts.$inferSelect;
export type NewAccount = typeof accounts.$inferInsert;
export type Student = typeof students.$inferSelect;
export type NewStudent = typeof students.$inferInsert;
export type Classroom = typeof classrooms.$inferSelect;
export type NewClassroom = typeof classrooms.$inferInsert;
export type ClassroomStudent = typeof classroomStudents.$inferSelect;
export type NewClassroomStudent = typeof classroomStudents.$inferInsert;
export type Progress = typeof progress.$inferSelect;
export type NewProgress = typeof progress.$inferInsert;
export type OAuthAccount = typeof oauthAccounts.$inferSelect;
export type NewOAuthAccount = typeof oauthAccounts.$inferInsert;
export type ActivityLog = typeof activityLogs.$inferSelect;
export type NewActivityLog = typeof activityLogs.$inferInsert;

// ============================================================================
// ENUMS
// ============================================================================

export enum UserType {
  PARENT = 'parent',
  TEACHER = 'teacher',
  STUDENT = 'student',
}

export enum AccountType {
  INDIVIDUAL = 'individual',
  TEACHER = 'teacher',
}

export enum SubscriptionStatus {
  ACTIVE = 'active',
  CANCELED = 'canceled',
  PAST_DUE = 'past_due',
  TRIALING = 'trialing',
}

export enum SubscriptionType {
  MONTHLY = 'monthly',
  LIFETIME = 'lifetime',
  FREE = 'free',
}

export enum ProgressStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  CREATE_STUDENT = 'CREATE_STUDENT',
  CREATE_CLASSROOM = 'CREATE_CLASSROOM',
  ADD_STUDENT_TO_CLASSROOM = 'ADD_STUDENT_TO_CLASSROOM',
  REMOVE_STUDENT_FROM_CLASSROOM = 'REMOVE_STUDENT_FROM_CLASSROOM',
  SUBSCRIBE = 'SUBSCRIBE',
  CANCEL_SUBSCRIPTION = 'CANCEL_SUBSCRIPTION',
}

export enum OAuthProvider {
  GOOGLE = 'google',
  GITHUB = 'github',
}
