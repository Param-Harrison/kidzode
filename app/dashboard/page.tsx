import { redirect } from 'next/navigation';
import { getUser } from '@/lib/db/queries';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/sign-in');
  }

  if (user.userType === 'parent') {
    redirect('/dashboard/parent');
  } else if (user.userType === 'teacher') {
    redirect('/dashboard/teacher');
  } else {
    redirect('/learn');
  }
}
