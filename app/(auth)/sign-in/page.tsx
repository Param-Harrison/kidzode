'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2, Mail, Lock } from 'lucide-react';
import { Logo } from '@/components/logo';
import { useRequireAuth } from '@/hooks/useRequireAuth';

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isLoading: authLoading, isAuthenticated } = useRequireAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // If already authenticated, the hook will handle redirect
  if (authLoading) {
    return (
      <div className="bg-card border-2 border-border shadow-neo rounded-xl p-8 text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto" />
      </div>
    );
  }

  if (isAuthenticated) {
    return null; // Will be redirected by hook
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to sign in');
      }

      // Check if there's a redirect URL (for lesson access)
      const redirectUrl = searchParams.get('redirect');
      if (redirectUrl) {
        router.push(redirectUrl);
      } else {
        // Redirect based on user type
        if (data.user.userType === 'parent') {
          router.push('/dashboard/parent');
        } else if (data.user.userType === 'teacher') {
          router.push('/dashboard/teacher');
        } else {
          router.push('/dashboard');
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-card border-2 border-border shadow-neo rounded-xl p-8 animate-in fade-in zoom-in duration-300">
      <div className="text-center mb-8">
        <div className="inline-block mb-4">
          <Logo size="lg" className="justify-center" />
        </div>
        <h1 className="text-2xl font-bold font-lexend">Welcome Back</h1>
        <p className="text-muted-foreground mt-2">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold mb-1" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>

        {error && (
          <div className="p-3 bg-destructive/10 text-destructive text-sm font-bold rounded-lg border border-destructive/20">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-primary text-primary-foreground font-bold rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Sign In'
          )}
        </button>
      </form>

      <div className="mt-6 space-y-4 text-center text-sm">
        <p className="text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-primary font-bold hover:underline">
            Sign Up
          </Link>
        </p>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground font-bold">Or</span>
          </div>
        </div>
        <Link
          href="/student-login"
          className="block w-full py-3 px-4 bg-secondary text-secondary-foreground font-bold rounded-lg border-2 border-border shadow-[2px_2px_0px_0px_#000] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all text-center"
        >
          Student Login
        </Link>
      </div>
    </div>
  );
}
