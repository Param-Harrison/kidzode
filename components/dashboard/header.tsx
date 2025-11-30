'use client';

import { User } from 'lucide-react';

type HeaderProps = {
  user: {
    name: string | null;
    email: string | null;
    userType: string;
  };
};

export function Header({ user }: HeaderProps) {
  return (
    <header className="h-16 bg-card border-b-2 border-border flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="md:hidden">
        {/* Mobile Menu Trigger Placeholder */}
        <div className="w-8 h-8 bg-muted rounded-md border-2 border-border" />
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold">{user.name}</p>
          <p className="text-xs text-muted-foreground capitalize">{user.userType}</p>
        </div>
        <div className="w-10 h-10 bg-secondary/20 rounded-full border-2 border-border flex items-center justify-center">
          <User className="w-5 h-5 text-secondary-foreground" />
        </div>
      </div>
    </header>
  );
}
