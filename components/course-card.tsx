import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CourseCardProps {
  title: string
  subtitle: string
  tags: string[]
  color?: "primary" | "secondary" | "accent"
  slug: string,
  isPublished: boolean
}

export function CourseCard({ title, subtitle, tags, color = "accent", slug, isPublished }: CourseCardProps) {
  const bgColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  }

  return (
    <Card className="flex flex-col gap-0 p-0 overflow-hidden h-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-[1.02] hover:border-primary transition-all duration-200">
      <div className={`relative h-48 w-full border-b-2 border-black ${bgColors[color]} flex items-center justify-center p-6`}>
        <div className="text-6xl font-black opacity-20 uppercase tracking-tighter text-center font-lexend">
          {title.substring(0, 2)}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-4 flex-grow bg-white">
        <h3 className="text-2xl font-bold font-lexend uppercase leading-tight">{title}</h3>
        <p className="text-muted-foreground font-medium line-clamp-3 flex-grow">{subtitle}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="border-2 border-black px-2 py-1 text-xs font-bold bg-white text-black shadow-[2px_2px_0px_0px_#000]">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/courses/${slug}`} className="w-full mt-auto">
          <Button variant="neo" className="w-full py-4 text-lg h-auto font-bold bg-primary text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
            {isPublished ? "Start Learning": "Join the waitlist"}
          </Button>
        </Link>
      </div>
    </Card>
  )
}
