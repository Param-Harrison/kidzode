import { getUser } from '@/lib/db/queries';
import { DashboardBilling } from '@/components/dashboard/billing';

export default async function DashboardBillingPage() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  return <DashboardBilling user={user} />;
}