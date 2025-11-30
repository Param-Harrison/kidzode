'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/logo';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  LogOut,
  CreditCard,
  GraduationCap,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarProps = {
  userType: 'parent' | 'teacher' | 'student';
};

export function Sidebar({ userType }: SidebarProps) {
  const pathname = usePathname();

  const links = [
    {
      href: '/dashboard/classrooms',
      label: 'Classrooms',
      icon: GraduationCap,
      roles: ['teacher'],
    },
    {
      href: '/dashboard/billing',
      label: 'Billing',
      icon: CreditCard,
      roles: ['parent', 'teacher'],
    },
    {
      href: '/dashboard/settings',
      label: 'Settings',
      icon: Settings,
      roles: ['parent', 'teacher'],
    },
  ];

  const filteredLinks = links.filter((link) => link.roles.includes(userType));

  return (
    <aside className="w-64 bg-card border-r-2 border-border hidden md:flex flex-col h-screen sticky top-0">
      <div className="h-16 flex items-center px-6 border-b-2 border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]" />
          <Logo size="default" />
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {filteredLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-all',
                isActive
                  ? 'bg-primary text-primary-foreground border-2 border-black shadow-[2px_2px_0px_0px_#000]'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="w-5 h-5" />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t-2 border-border">
        <form action="/api/auth/signout" method="POST">
          <button
            type="submit"
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg font-bold text-destructive hover:bg-destructive/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </form>
      </div>
    </aside>
  );
}
