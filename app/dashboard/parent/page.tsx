import { getAccountForUser, getStudentsByParentAccount, getUser } from '@/lib/db/queries';
import { redirect } from 'next/navigation';
import { ParentDashboardClient } from './client';

export default async function ParentDashboardPage() {
  const user = await getUser();
  if (!user) redirect('/sign-in');

  const account = await getAccountForUser(user.id);
  if (!account) {
    // Should not happen if user creation flow is correct
    return <div>Account not found</div>;
  }

  const students = await getStudentsByParentAccount(account.id);

  return (
    <ParentDashboardClient
      classCode={account.classCode || ''}
      students={students.map((s) => ({
        id: s.id,
        displayName: s.displayName,
        avatarUrl: s.avatarUrl,
        hasPin: !!s.pin,
      }))}
    />
  );
}
