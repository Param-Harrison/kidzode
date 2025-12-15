'use client';

import Link from 'next/link';
import { LogOut, User } from 'lucide-react';
import { Logo } from '@/components/logo';

type StudentHeaderProps = {
  student: {
    displayName: string;
    avatarUrl?: string | null;
  };
};

import { useAuth } from '@/hooks/useAuth';

export function StudentHeader({ student }: StudentHeaderProps) {
  const { logout } = useAuth();
  
  return (
    <header className="h-20 bg-card border-b-2 border-border sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/learn" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]" />
          <Logo size="lg" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-muted/50 px-4 py-2 rounded-full border-2 border-border">
            <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center border-2 border-border">
              {student.avatarUrl ? (
                <img
                  src={student.avatarUrl}
                  alt={student.displayName}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-secondary-foreground" />
              )}
            </div>
            <span className="font-bold font-lexend">{student.displayName}</span>
          </div>

          <button
            onClick={logout}
            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
            title="Sign Out"
          >
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
