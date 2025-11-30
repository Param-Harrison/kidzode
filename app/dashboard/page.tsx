import { getUser } from '@/lib/db/queries';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Redirect to role-specific dashboard
  if (user.userType === 'parent') {
    redirect('/dashboard/parent');
  } else if (user.userType === 'teacher') {
    redirect('/dashboard/teacher');
  }

  // Default redirect
  redirect('/dashboard/parent');
}