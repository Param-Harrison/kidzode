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
      <div
        className={`
          ${sizes[size]}
          font-black
          uppercase
          tracking-tight
          px-4 py-2
          border-2 border-black
          shadow-[3px_3px_0px_0px_#FF5555]
          hover:shadow-[5px_5px_0px_0px_#FF5555]
          hover:translate-x-[-2px]
          hover:translate-y-[-2px]
          transition-all duration-200
          inline-block
          relative
          overflow-hidden
        `}
        style={{ backgroundColor: '#5A0E24', color: '#FFFFFF' }}
      >
        <span className="relative z-10">Kid</span>
        <span className="relative z-10" style={{ color: '#FF5555' }}>zode</span>
      </div>
    </Link>
  )
}