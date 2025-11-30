import { redirect } from 'next/navigation';
import { getUser, getStudentById } from '@/lib/db/queries';
import { StudentHeader } from '@/components/learn/student-header';
import { verifyToken } from '@/lib/auth/session';
import { cookies } from 'next/headers';

export default async function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie) redirect('/student-login');

  const session = await verifyToken(sessionCookie.value);
  if (!session || !session.studentId) {
    // If user is logged in but not as a student, redirect to dashboard
    if (session?.user) redirect('/dashboard');
    redirect('/student-login');
  }

  const student = await getStudentById(session.studentId);
  if (!student) redirect('/student-login');

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StudentHeader
        student={{
          displayName: student.displayName,
          avatarUrl: student.avatarUrl,
        }}
      />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
