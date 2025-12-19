"use client";

import Link from "next/link"
import { NeoButton } from "@/components/ui/neobrutalism/neo-button"
import { Logo } from "@/components/logo"
import { useAuth } from "@/hooks/useAuth"
import { Loader2, User, LogOut, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navbar() {
  const { user, isLoading, isAuthenticated, logout } = useAuth()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + '/')
  }

  if (isLoading) {
    return (
      <nav className="sticky top-0 z-50 w-full border-b-2 border-black bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-xl">
            <Logo />
          </div>
          <div className="flex items-center">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b-[2px] border-foreground bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="text-xl">
          <Logo />
        </div>

        {/* Desktop Menu - Elegant Left Alignment */}
        <div className="hidden md:flex items-center gap-6 flex-1 ml-10">
          <Link href="/courses" className={`font-bold transition-all decoration-2 underline-offset-4 ${
            isActive("/courses") 
              ? "underline decoration-[#D34E4E]" 
              : "hover:underline decoration-foreground"
          }`}>
            Courses
          </Link>
        </div>

      {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated && user ? (
            <>
              {/* User menu */}
              <div className="flex items-center gap-4 pl-3">
                <div className="flex items-center gap-3 bg-muted/50 px-4 py-2 rounded-full border-[2px] border-foreground">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center border-[2px] border-foreground">
                    <User className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="font-bold font-lexend">{user.name || user.email}</span>
                </div>
                
                <button
                  onClick={logout}
                  className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-6 h-6" />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link href="/login">
                <NeoButton neoVariant="outline" size="sm">
                  Sign In
                </NeoButton>
              </Link>
              <Link href="/login">
                <NeoButton neoVariant="secondary" size="sm">
                  Get Started
                </NeoButton>
              </Link>
            </>
          )}
        </div>

    {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-[2px] border-foreground bg-background p-4 flex flex-col gap-4 absolute w-full left-0 top-16 shadow-[0px_4px_0px_0px_currentColor] z-50">
          <Link href="/courses" className="font-bold text-lg" onClick={() => setIsOpen(false)}>
            Courses
          </Link>
          
          {isAuthenticated && user ? (
            <>
              <NeoButton neoVariant="outline" className="w-full" onClick={() => { logout(); setIsOpen(false); }}>
                Sign Out
              </NeoButton>
            </>
          ) : (
            <>
              <Link href="/login" className="font-bold text-lg" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <NeoButton neoVariant="secondary" className="w-full">
                  Get Started
                </NeoButton>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  )
}
