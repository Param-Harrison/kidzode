"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db, User } from '@/lib/local-storage';
import { StudentHeader } from '@/components/learn/student-header';

export default function LearnLayout({
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
    } else if (currentUser.userType !== 'student') {
      // If user is logged in but not as a student, redirect to dashboard
      // Or maybe just let them learn as well? For now, implementing strict check as per original logic
      router.push('/dashboard');
    } else {
      setUser(currentUser);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <StudentHeader
        student={{
          displayName: user.name,
          avatarUrl: null, // Avatar support can be added later
        }}
      />
      <main className="flex-1 p-6">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
