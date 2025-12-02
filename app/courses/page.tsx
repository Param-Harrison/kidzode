import { Navbar } from "@/components/navbar"
import { CourseCard } from "@/components/course-card"
import { Footer } from "@/components/footer"
import { courses } from "@/lib/courses-data"

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
