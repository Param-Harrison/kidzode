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
      <span
        className={`
          ${sizes[size]}
          font-black
          uppercase
          tracking-tight
          bg-yellow-300
          px-3 py-1
          border-2 border-black
          shadow-[2px_2px_0px_0px_#000]
          hover:shadow-[4px_4px_0px_0px_#000]
          hover:translate-x-[-2px]
          hover:translate-y-[-2px]
          transition-all duration-150
          inline-block
        `}
      >
        Kid<span className="text-red-500">zode</span>
      </span>
    </Link>
  )
}