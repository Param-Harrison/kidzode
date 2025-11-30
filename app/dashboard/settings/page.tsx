import { getUser } from '@/lib/db/queries';
import { DashboardSettings } from '@/components/dashboard/settings';

export default async function DashboardSettingsPage() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return <DashboardSettings user={user} />;
}