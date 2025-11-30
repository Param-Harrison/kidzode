import { getAccountForUser, getClassroomsByTeacher, getUser } from '@/lib/db/queries';
import { redirect } from 'next/navigation';
import { TeacherDashboardClient } from './client';

export default async function TeacherDashboardPage() {
  const user = await getUser();
  if (!user) redirect('/sign-in');

  const account = await getAccountForUser(user.id);
  if (!account) {
    return <div>Account not found</div>;
  }

  const classrooms = await getClassroomsByTeacher(account.id);

  return (
    <TeacherDashboardClient
      classrooms={classrooms.map((c) => ({
        id: c.id,
        name: c.name,
        classCode: c.classCode,
        isActive: c.isActive,
        studentCount: c.classroomStudents.length,
        activeStudentCount: c.classroomStudents.filter((cs) => cs.isActive).length,
      }))}
    />
  );
}
