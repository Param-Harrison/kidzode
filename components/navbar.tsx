'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useAuth } from "@/hooks/useAuth"
import { Loader2, User, LogOut } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  const { user, isLoading, isAuthenticated } = useAuth()
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  if (isLoading) {
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background">
        <div className="container max-w-7xl mx-auto flex h-20 items-center px-6">
          <div className="flex-1">
            <Logo size="default" />
          </div>
          <div className="flex items-center justify-end flex-1">
            <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background">
      <div className="container max-w-7xl mx-auto flex h-20 items-center px-6">
        {/* Left Side: Logo + Nav */}
        <div className="flex items-center gap-6 flex-1">
          <Logo size="default" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/courses"
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-none border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_#000] transition-all duration-200 ${
                isActive('/courses')
                  ? 'bg-primary text-black border-2 border-black shadow-[4px_4px_0px_0px_#000]'
                  : 'text-black/70 hover:text-black hover:bg-primary/20'
              }`}
            >
              Courses
            </Link>
          </nav>
          
          {isAuthenticated && user ? (
            <>
              {/* Dashboard link */}
              <Link href="/dashboard" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`font-semibold rounded-lg transition-all duration-200 ${
                    isActive('/dashboard')
                      ? 'bg-primary text-primary-foreground border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                      : 'hover:bg-muted/50'
                  }`}
                >
                  Dashboard
                </Button>
              </Link>

              {/* User menu */}
              <div className="flex items-center gap-2 pl-3 border-l border-border/40">
                <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium max-w-[120px] truncate">
                    {user.name || user.email}
                  </span>
                </div>
                
                <form action="/api/auth/signout" method="POST">
                  <Button
                    type="submit"
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-destructive rounded-lg transition-all duration-200 hover:bg-muted/50"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="ml-2 hidden sm:inline">Sign Out</span>
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <>
              {/* Show login/signup for unauthenticated users */}
              <Link href="/sign-in">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="font-semibold hidden sm:inline-flex"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button 
                  variant="neo" 
                  size="sm"
                  className="font-semibold shadow-[2px_2px_0px_0px_#000] hover:shadow-[1px_1px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
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
