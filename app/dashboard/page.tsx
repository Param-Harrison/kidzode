import { getUser } from '@/lib/db/queries';
import { DashboardOverview } from '@/components/dashboard/overview';

export default async function DashboardPage() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return <DashboardOverview user={user} />;
}