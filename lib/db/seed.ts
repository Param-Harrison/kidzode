import { db } from './drizzle';
import { users, accounts, students, classrooms, classroomStudents } from './schema';
import { hashPassword } from '@/lib/auth/session';
import { UserType, AccountType } from './schema';
import { sql } from 'drizzle-orm';

async function seed() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  console.log('🧹 Clearing existing data...');
  await db.execute(sql`TRUNCATE TABLE users, accounts, students, classrooms, classroom_students, progress, ratings, bookmarks, feedback, activity_logs, oauth_accounts RESTART IDENTITY CASCADE`);
  console.log('✅ Database cleared');

  // Create a parent user with account
  const parentPasswordHash = await hashPassword('parent123');
  const [parentUser] = await db
    .insert(users)
    .values({
      email: 'parent@test.com',
      passwordHash: parentPasswordHash,
      name: 'Test Parent',
      userType: UserType.PARENT,
      emailVerified: true,
    })
    .returning();

  const [parentAccount] = await db
    .insert(accounts)
    .values({
      ownerId: parentUser.id,
      accountType: AccountType.INDIVIDUAL,
      subscriptionType: 'free',
      classCode: 'FAM123', // Family Code for parent
    })
    .returning();

  console.log('✅ Created parent user: parent@test.com / parent123');
  console.log(`   Family Code: FAM123`);

  // Create children for the parent
  const [child1User] = await db
    .insert(users)
    .values({
      userType: UserType.STUDENT,
      name: 'Alice',
    })
    .returning();

  const alicePin = await hashPassword('1234');
  await db.insert(students).values({
    userId: child1User.id,
    parentAccountId: parentAccount.id,
    displayName: 'Alice',
    pin: alicePin,
  });

  const [child2User] = await db
    .insert(users)
    .values({
      userType: UserType.STUDENT,
      name: 'Bob',
    })
    .returning();

  const bobPin = await hashPassword('5678');
  await db.insert(students).values({
    userId: child2User.id,
    parentAccountId: parentAccount.id,
    displayName: 'Bob',
    pin: bobPin,
  });

  console.log('✅ Created 2 children: Alice (PIN: 1234), Bob (PIN: 5678)');

  // Create a teacher user with account
  const teacherPasswordHash = await hashPassword('teacher123');
  const [teacherUser] = await db
    .insert(users)
    .values({
      email: 'teacher@test.com',
      passwordHash: teacherPasswordHash,
      name: 'Test Teacher',
      userType: UserType.TEACHER,
      emailVerified: true,
    })
    .returning();

  const [teacherAccount] = await db
    .insert(accounts)
    .values({
      ownerId: teacherUser.id,
      accountType: AccountType.TEACHER,
      subscriptionType: 'free',
    })
    .returning();

  console.log('✅ Created teacher user: teacher@test.com / teacher123');

  // Create a classroom
  const [classroom] = await db
    .insert(classrooms)
    .values({
      teacherAccountId: teacherAccount.id,
      name: 'Grade 5 Python',
      classCode: 'ABC123',
    })
    .returning();

  console.log(`✅ Created classroom: Grade 5 Python (Code: ${classroom.classCode})`);

  // Create some students for the classroom
  const [student1User] = await db
    .insert(users)
    .values({
      userType: UserType.STUDENT,
      name: 'Charlie',
    })
    .returning();

  const charliePin = await hashPassword('5678');
  const [student1] = await db
    .insert(students)
    .values({
      userId: student1User.id,
      displayName: 'Charlie',
      pin: charliePin,
    })
    .returning();

  await db.insert(classroomStudents).values({
    classroomId: classroom.id,
    studentId: student1.id,
    isActive: true,
  });

  const [student2User] = await db
    .insert(users)
    .values({
      userType: UserType.STUDENT,
      name: 'Diana',
    })
    .returning();

  const dianaPin = await hashPassword('9012');
  const [student2] = await db
    .insert(students)
    .values({
      userId: student2User.id,
      displayName: 'Diana',
      pin: dianaPin,
    })
    .returning();

  await db.insert(classroomStudents).values({
    classroomId: classroom.id,
    studentId: student2.id,
    isActive: true,
  });

  console.log('✅ Added 2 students to classroom: Charlie (PIN: 5678), Diana (PIN: 9012)');

  console.log('\n🎉 Seed completed successfully!');
  console.log('\n📝 Test Accounts:');
  console.log('   Parent: parent@test.com / parent123');
  console.log('   Family Code: FAM123');
  console.log('   Teacher: teacher@test.com / teacher123');
  console.log('   Classroom Code: ABC123');
}

seed()
  .catch((error) => {
    console.error('❌ Seed process failed:', error);
    process.exit(1);
  })
  .finally(() => {
    console.log('\n👋 Seed process finished. Exiting...');
    process.exit(0);
  });
