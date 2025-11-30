import { db } from './drizzle';
import { users, accounts, students, classrooms, classroomStudents } from './schema';
import { hashPassword } from '@/lib/auth/session';
import { UserType, AccountType } from './schema';

async function seed() {
  console.log('🌱 Seeding database...');

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
    })
    .returning();

  console.log('✅ Created parent user: parent@test.com / parent123');

  // Create children for the parent
  const [child1User] = await db
    .insert(users)
    .values({
      userType: UserType.STUDENT,
      name: 'Alice',
    })
    .returning();

  await db.insert(students).values({
    userId: child1User.id,
    parentAccountId: parentAccount.id,
    displayName: 'Alice',
    pin: '1234',
  });

  const [child2User] = await db
    .insert(users)
    .values({
      userType: UserType.STUDENT,
      name: 'Bob',
    })
    .returning();

  await db.insert(students).values({
    userId: child2User.id,
    parentAccountId: parentAccount.id,
    displayName: 'Bob',
  });

  console.log('✅ Created 2 children: Alice (PIN: 1234), Bob (no PIN)');

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

  const [student1] = await db
    .insert(students)
    .values({
      userId: student1User.id,
      displayName: 'Charlie',
      pin: '5678',
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

  const [student2] = await db
    .insert(students)
    .values({
      userId: student2User.id,
      displayName: 'Diana',
    })
    .returning();

  await db.insert(classroomStudents).values({
    classroomId: classroom.id,
    studentId: student2.id,
    isActive: true,
  });

  console.log('✅ Added 2 students to classroom: Charlie (PIN: 5678), Diana (no PIN)');

  console.log('\n🎉 Seed completed successfully!');
  console.log('\n📝 Test Accounts:');
  console.log('   Parent: parent@test.com / parent123');
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
