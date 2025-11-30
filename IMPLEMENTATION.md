Kidsemy Authentication & Subscription System - Implementation Plan
Overview
This plan outlines the implementation of a multi-role authentication and subscription system for Kidsemy, supporting:

Individual/Parent accounts - Parents managing their children's learning
Teacher accounts - Teachers managing classrooms and student progress
Student accounts - Simplified login via class codes (no email/password required)
Free Tier: First 6 lessons of the Beginners course are free for everyone (parents, teachers, and their students). After that, users need to subscribe to continue.

The system will use Next.js API routes, PostgreSQL with Drizzle ORM, Resend for email verification, and Stripe for payments. OAuth2 support (Google/GitHub) will be designed for but not implemented in MVP.

User Review Required
IMPORTANT

Adaptive Pricing Support (Future)

The system will be designed to support Stripe's adaptive pricing per location in the future. The database schema includes:

priceLocale field in accounts table for storing user's pricing region
Flexible subscription tracking that can handle multiple price points
Stripe product/price ID mapping that can vary by region
For MVP, we'll use fixed USD pricing, but the architecture will support easy migration to location-based pricing.

Proposed Changes
Database Schema
[NEW] 
schema.ts
Extending the existing schema with new tables:

Modified Tables:

users - Add fields: userType ('parent' | 'teacher' | 'student'), dateOfBirth, emailVerified, emailVerificationToken
Remove teams concept - replace with accounts (for parents/teachers) and classrooms (for teachers)
New Tables:

accounts - Replaces teams, represents a billing entity (parent or teacher account)

Fields: 
id
, ownerId (FK to users), accountType ('individual' | 'teacher'), stripeCustomerId, stripeSubscriptionId, subscriptionStatus, subscriptionType ('monthly' | 'lifetime' | 'free'), priceLocale (for future adaptive pricing, e.g., 'US', 'IN', 'GB'), createdAt, updatedAt
students - Child accounts linked to parent accounts

Fields: 
id
, userId (FK to users), parentAccountId (FK to accounts), displayName, avatarUrl, pin (optional 4-digit), createdAt
classrooms - Teacher-managed classes

Fields: 
id
, teacherAccountId (FK to accounts), name, classCode (unique 6-char), isActive, createdAt, updatedAt
classroom_students - Many-to-many relationship between classrooms and students

Fields: 
id
, classroomId, studentId, isActive (for teacher billing), joinedAt
progress - Granular progress tracking for students

Fields: 
id
, studentId, courseId, lessonId, status ('not_started' | 'in_progress' | 'completed'), completedAt, data (JSONB for detailed progress), updatedAt
oauth_accounts - For future OAuth2 integration

Fields: 
id
, userId, provider ('google' | 'github'), providerAccountId, accessToken, refreshToken, expiresAt, createdAt
Authentication System
[MODIFY] 
lib/auth/session.ts
Keep existing JWT-based session management
Add userType and studentId (if applicable) to session payload
Add email verification flow helpers
[NEW] 
lib/auth/verification.ts
Email verification token generation and validation
Resend integration for sending verification emails
Token expiry handling (24-hour validity)
[NEW] 
lib/auth/class-code.ts
Class code generation (6-character alphanumeric, avoiding ambiguous chars)
Class code validation and lookup
Student PIN validation (optional)
API Routes
[NEW] 
app/api/auth/signup/route.ts
Parent/Teacher signup with email/password
Create user + account in transaction
Send verification email
Return session token
[NEW] 
app/api/auth/signin/route.ts
Email/password login for parents/teachers
Check email verification status
Return session token
[NEW] 
app/api/auth/verify-email/route.ts
Verify email verification token
Mark email as verified
Redirect to dashboard
[NEW] 
app/api/auth/student-login/route.ts
Accept class code, return list of students in that classroom
Accept student selection + optional PIN
Create student session
[NEW] 
app/api/students/route.ts
CRUD operations for parent to manage their children
Add/remove students from parent account
[NEW] 
app/api/classrooms/route.ts
CRUD operations for teachers to manage classrooms
Generate new class codes
Add/remove students from classrooms
Mark students as active/inactive
[NEW] 
app/api/progress/route.ts
Save student progress (granular, per lesson/activity)
Retrieve student progress
Check if student has exceeded free tier (6 lessons)
Payment Integration
[MODIFY] 
lib/payments/stripe.ts
Adapt existing Stripe integration for Kidsemy pricing:

Individual/Parent Plans:

Monthly: $6/month recurring
Lifetime: $99 one-time payment (create as Stripe one-time payment, not subscription)
Teacher Plans:

Dynamic pricing: $27 per 10 active students (minimum $27)
Use Stripe metered billing or quantity-based subscriptions
Update quantity based on active student count
[NEW] 
app/api/stripe/create-checkout/route.ts
Create Stripe checkout session for selected plan
Handle both subscription and one-time payments
[MODIFY] 
app/api/stripe/webhook/route.ts
Handle checkout.session.completed - activate subscription
Handle customer.subscription.updated - update subscription status
Handle customer.subscription.deleted - mark as canceled
Handle invoice.payment_succeeded - for teacher billing updates
Database Queries
[MODIFY] 
lib/db/queries.ts
Add new query functions:

User Management:

createParentAccount(email, password, name) - Create parent user + account
createTeacherAccount(email, password, name) - Create teacher user + account
getUserByEmail(email) - Existing, ensure it works with new schema
verifyUserEmail(userId) - Mark email as verified
Student Management:

createStudent(parentAccountId, displayName, pin?) - Add child to parent account
getStudentsByParentAccount(accountId) - List all children
getStudentById(studentId) - Get student details
updateStudentPin(studentId, pin) - Set/update PIN
Classroom Management:

createClassroom(teacherAccountId, name) - Create classroom with unique code
getClassroomByCode(classCode) - Lookup classroom
getClassroomsByTeacher(teacherAccountId) - List teacher's classrooms
addStudentToClassroom(classroomId, studentId, isActive) - Enroll student
updateStudentActiveStatus(classroomId, studentId, isActive) - For billing
getStudentsInClassroom(classroomId) - List students with avatars/names
Progress Tracking:

saveProgress(studentId, courseId, lessonId, status, data) - Save granular progress
getStudentProgress(studentId, courseId?) - Retrieve progress
getCompletedLessonsCount(studentId, courseId) - Check free tier limit
Subscription Management:

updateAccountSubscription(accountId, stripeData) - Update subscription info
getAccountSubscription(accountId) - Get current subscription status
hasActiveSubscription(accountId) - Check if account can access paid content
UI Components & Pages
[NEW] 
app/(auth)/signup/page.tsx
Signup form with account type selection (Parent/Teacher)
Email/password fields with validation
Terms acceptance checkbox
Email verification notice after signup
[NEW] 
app/(auth)/signin/page.tsx
Email/password login form
"Forgot password" link (future)
Link to student login
[NEW] 
app/(auth)/student-login/page.tsx
Class code input (6 characters, auto-uppercase)
Student selection grid (avatars + names)
Optional PIN input (if student has PIN set)
Kid-friendly UI with large buttons and visual feedback
[NEW] 
app/(dashboard)/parent/page.tsx
List of children with progress overview
"Add Child" button
Subscription status and upgrade CTA if needed
Access to each child's detailed progress
[NEW] 
app/(dashboard)/teacher/page.tsx
List of classrooms
Create new classroom
View students per classroom with progress
Manage active/inactive students for billing
Subscription status and billing info
[NEW] 
app/(dashboard)/student/[id]/page.tsx
Student-facing learning interface
Course/lesson navigation
Progress indicators
Paywall modal if free tier exceeded (for accounts without subscription)
[NEW] 
app/pricing/page.tsx
Pricing cards for Individual (Monthly/Lifetime) and Teacher plans
Clear explanation of free tier ("Get Started for Free")
CTA buttons linking to Stripe checkout
Middleware & Authorization
[MODIFY] 
middleware.ts
Protect dashboard routes based on user type
Redirect unauthenticated users to signin
Redirect students to student-specific pages
Check email verification for parents/teachers
[NEW] 
lib/auth/authorization.ts
Role-based access control helpers
Check if user can access specific resources (e.g., parent can only manage their own children)
Check if student can access lesson (free tier or active subscription)
Configuration & Environment
[MODIFY] 
.env.example
Add new environment variables:

# Resend
RESEND_API_KEY=
RESEND_FROM_EMAIL=
# Stripe (existing)
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_MONTHLY_PRICE_ID=
STRIPE_LIFETIME_PRICE_ID=
STRIPE_TEACHER_PRICE_ID=
# App
BASE_URL=http://localhost:3000
Verification Plan
Automated Tests
Currently, there are no existing tests in the Kidsemy project. For MVP, I will focus on manual verification and propose adding automated tests in a future iteration.

Manual Verification
1. Parent Account Flow
Steps:

Navigate to /signup
Select "Parent" account type
Enter email, password, and name
Submit form
Check email for verification link (using Resend test mode or real email)
Click verification link
Verify redirect to parent dashboard
Add a child account with name and optional PIN
View child in dashboard
Click on child to access learning interface
Complete 6 lessons (free tier)
Verify paywall appears on 7th lesson
Navigate to /pricing and purchase monthly subscription
Complete Stripe checkout (use test card: 4242 4242 4242 4242)
Verify subscription status updates in dashboard
Verify paywall no longer appears
Expected Results:

Email verification works
Child accounts are created and linked to parent
Free tier limit enforced correctly
Stripe checkout completes successfully
Subscription unlocks paid content
2. Teacher Account Flow
Steps:

Sign up as Teacher
Verify email
Create a classroom
Note the generated class code
Add students manually (or via student self-enrollment)
Mark students as active/inactive
Navigate to billing section
Verify pricing calculation (e.g., 15 active students = $54/month)
Subscribe to teacher plan
Verify subscription status
Expected Results:

Classroom creation generates unique class code
Student management works correctly
Active student count affects pricing
Teacher subscription activates
3. Student Login Flow
Steps:

As teacher, create classroom and note class code
Add a student with a PIN
Log out
Navigate to /student-login
Enter class code
Verify student list appears with avatars/names
Select student
Enter PIN
Verify login success and redirect to learning interface
Test incorrect PIN (should fail)
Test student without PIN (should skip PIN step)
Expected Results:

Class code lookup works
Student selection UI is kid-friendly
PIN validation works correctly
Students can access their courses
4. Progress Tracking
Steps:

Log in as student
Start a lesson
Complete activities within lesson
Verify progress saves automatically
Log out and log back in
Verify progress persists
As parent, view child's progress
Verify progress displays correctly in parent dashboard
Expected Results:

Progress saves granularly
Progress persists across sessions
Parents can view children's progress
5. Subscription & Billing
Steps:

Test monthly subscription purchase
Test lifetime subscription purchase
Verify Stripe webhook updates subscription status
Test subscription cancellation via Stripe Customer Portal
Verify canceled subscription still allows access until period end
Test teacher billing with varying active student counts
Expected Results:

All payment flows work correctly
Webhooks update database accurately
Subscription status reflects correctly in UI
Future Enhancements (Not in MVP)
OAuth2 login (Google, GitHub)
Password reset flow
Parent/Teacher custom lessons and lesson plans
School/District licenses with multiple teachers
Automatic active student detection for teacher billing
Student analytics and reporting
Parent/Teacher notifications (email/in-app)
Student achievements and gamification
QR code login for students (alternative to class codes)
Database Migration Strategy
Run pnpm db:generate to create migration files from updated schema
Review generated SQL migrations
Run pnpm db:migrate to apply migrations
Run updated seed script to populate test data
Security Considerations
Password Hashing: Using bcryptjs with 10 salt rounds (existing)
JWT Tokens: Stored in httpOnly, secure, sameSite cookies (existing)
Email Verification: Required for parent/teacher accounts before full access
Class Codes: 6-character alphanumeric, avoiding ambiguous characters (0/O, 1/I/l)
Student PINs: Optional 4-digit, hashed before storage
COPPA Compliance: Students under 13 require parent account linkage
Data Privacy: Student data only accessible by linked parents/teachers
Stripe Security: Webhook signature verification, no card data stored locally