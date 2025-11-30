import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from './useAuth';

export function useRequireAuth(redirectTo?: string) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      // User is authenticated, redirect to intended destination
      const destination = redirectTo || searchParams.get('redirect') ||
        (user?.userType === 'parent' ? '/dashboard/parent' :
         user?.userType === 'teacher' ? '/dashboard/teacher' : '/dashboard');
      router.push(destination);
    }
  }, [isLoading, isAuthenticated, user, router, redirectTo, searchParams]);

  return { user, isLoading, isAuthenticated };
}