import { Navbar } from "@/components/navbar"
import { CourseCard } from "@/components/course-card"

const courses = [
  {
    title: "Coding Fundamentals",
    subtitle: "Start your journey here! Learn the fundamentals of Python programming with fun, interactive examples.",
    tags: ["Beginner", "5 Lessons", "Interactive"],
    color: "secondary" as const,
    slug: "basic",
  },
  {
    title: "Level Up Skills",
    subtitle: "Take your skills to the next level! Dive into data structures, functions, and more advanced concepts.",
    tags: ["Intermediate", "5 Lessons", "Hands-on"],
    color: "accent" as const,
    slug: "intermediate",
  },
  {
    title: "Master Coder",
    subtitle: "Become a Python master! Explore object-oriented programming and advanced programming concepts.",
    tags: ["Advanced", "5 Lessons", "Projects"],
    color: "primary" as const,
    slug: "advanced",
  },
]

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase font-lexend">Python Curriculum</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose your path and start building amazing projects!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-8">
            {courses.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t-2 border-border">
        <div className="container max-w-6xl mx-auto flex flex-col sm:flex-row gap-2 items-center justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 Kidsemy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
