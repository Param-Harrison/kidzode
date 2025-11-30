import { getUser } from '@/lib/db/queries';
import { DashboardClassrooms } from '@/components/dashboard/classrooms';

export default async function DashboardClassroomsPage() {
  const user = await getUser();

  if (!user || user.userType !== 'teacher') {
    return null;
  }

  return <DashboardClassrooms user={user} />;
}