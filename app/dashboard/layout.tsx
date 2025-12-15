"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db, User } from '@/lib/local-storage';
import { Sidebar } from '@/components/dashboard/sidebar';
import { Header } from '@/components/dashboard/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const currentUser = db.users.getCurrent();
    
    if (!currentUser) {
      router.push('/login');
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (!user) return null;

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
