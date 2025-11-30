'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useAuth } from "@/hooks/useAuth"
import { Loader2, User } from "lucide-react"

export function Navbar() {
  const { user, isLoading, isAuthenticated } = useAuth()

  if (isLoading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background">
        <div className="container max-w-6xl mx-auto flex h-16 items-center px-4 md:px-6">
          <div className="flex-1">
            <Logo size="default" />
          </div>
          <div className="flex items-center justify-end flex-1">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background">
      <div className="container max-w-6xl mx-auto flex h-16 items-center px-4 md:px-6">
        {/* Logo */}
        <div className="flex-1">
          <Logo size="default" />
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <Link href="/courses" className="text-sm font-medium transition-colors">
            Courses
          </Link>
          <Link href="/#about" className="text-sm font-medium transition-colors">
            About
          </Link>
          <Link href="/pricing" className="text-sm font-medium transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          {isAuthenticated && user ? (
            <>
              {/* Show Dashboard link for authenticated users */}
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                  Dashboard
                </Button>
              </Link>

              {/* User menu - could be expanded with dropdown */}
              <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">{user.name || user.email}</span>
                </div>
                <Link href="/dashboard/settings">
                  <Button variant="ghost" size="sm">
                    Settings
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Show login/signup for unauthenticated users */}
              <Link href="/sign-in">
                <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="neo" size="sm">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
