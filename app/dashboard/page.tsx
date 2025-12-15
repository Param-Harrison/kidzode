"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/local-storage';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const user = db.users.getCurrent();
    if (!user) {
      router.push('/login');
      return;
    }

    if (user.userType === 'parent') {
      router.push('/dashboard/parent');
    } else if (user.userType === 'teacher') {
      router.push('/dashboard/teacher');
    } else {
      router.push('/dashboard/parent');
    }
  }, [router]);

  return <div className="p-8 text-center">Redirecting to your dashboard...</div>;
}