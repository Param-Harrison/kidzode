import Link from "next/link"

export function Logo({ className = "", size = "default" }: { className?: string; size?: "sm" | "default" | "lg" }) {
  const sizes = {
    sm: "text-lg",
    default: "text-xl",
    lg: "text-2xl"
  }

  const iconSizes = {
    sm: "text-2xl",
    default: "text-3xl",
    lg: "text-4xl"
  }

  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <span className={`${sizes[size]} font-black uppercase tracking-tight`}>
        Kid<span className="text-red-500">zode</span>
      </span>
    </Link>
  )
}