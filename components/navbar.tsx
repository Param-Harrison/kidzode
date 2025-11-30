import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Navbar() {
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
          <Link href="/#pricing" className="text-sm font-medium transition-colors">
            Pricing
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Login
          </Button>
          <Link href="/courses">
            <Button variant="neo" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
