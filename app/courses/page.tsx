import { Navbar } from "@/components/navbar"
import { CourseCard } from "@/components/course-card"
import { Footer } from "@/components/footer"

const courses = [
  {
    title: "Pixel Heroes",
    subtitle: "Watch your child build their first talking robot and magic fortune teller. They'll learn to break problems into small steps and think systematically.",
    tags: ["Ages 8-10", "Beginner", "12 Real Projects", "Logical Thinking Foundation"],
    color: "primary" as const,
    slug: "pixel-heroes",
    badge: "Rainbow Star Badge"
  },
  {
    title: "Code Ninjas",
    subtitle: "Your child masters problem-solving by building quiz creators and weather apps. They develop analytical skills that help in math and science class.",
    tags: ["Ages 9-11", "Intermediate", "12 Building Projects", "Analytical Brain Development"],
    color: "secondary" as const,
    slug: "code-ninjas",
    badge: "Ninja Headband"
  },
  {
    title: "Future Builders",
    subtitle: "Kids create real tools like study timers and habit trackers. They learn life skills in discipline, planning, and turning ideas into reality.",
    tags: ["Ages 11-13", "Advanced", "12 Advanced Tools", "Life Skills Through Code"],
    color: "accent" as const,
    slug: "future-builders",
    badge: "Glowing Crown"
  }
]

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 container max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase font-lexend">Watch Your Kid Forget Games & Think Like an Engineer</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through coding projects, kids develop logical thinking, analytical problem-solving skills, and learn life lessons that stick with them forever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {courses.map((course) => (
              <CourseCard key={course.slug} {...course} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
