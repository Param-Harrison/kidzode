import { getUser } from '@/lib/db/queries';
import { DashboardStudents } from '@/components/dashboard/students';

export default async function DashboardStudentsPage() {
  const user = await getUser();

  if (!user || user.userType !== 'parent') {
    return null;
  }

  return <DashboardStudents user={user} />;
}