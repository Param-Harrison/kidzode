import { getUser } from '@/lib/db/queries';
import { DashboardProgress } from '@/components/dashboard/progress';

export default async function DashboardProgressPage() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return <DashboardProgress user={user} />;
}