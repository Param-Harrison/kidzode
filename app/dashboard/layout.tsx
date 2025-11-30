import { redirect } from 'next/navigation';
import { getUser } from '@/lib/db/queries';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect('/sign-in');
  }

  // Students have their own layout/interface
  if (user.userType === 'student') {
    redirect('/learn');
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar userType={user.userType as 'parent' | 'teacher'} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header user={user} />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
