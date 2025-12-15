"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/lib/local-storage';
import { ParentDashboardClient } from './client';

export default function ParentDashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = db.users.getCurrent();
    if (!user) {
      router.push('/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  // Mock students for now - since everything is local, maybe we don't need sub-students?
  // Or we can just show the current user as a student?
  // For the purpose of this refactor, let's keep it simple.
  const mockStudents = [
    {
      id: 1,
      displayName: "My Student",
      avatarUrl: null,
      hasPin: false,
    }
  ];

  return (
    <ParentDashboardClient
      classCode={'DEMO-CODE'}
      students={mockStudents}
    />
  );
}
