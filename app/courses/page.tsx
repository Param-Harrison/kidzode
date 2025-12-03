import { Navbar } from "@/components/navbar"
import { CourseCard } from "@/components/course-card"
import { Footer } from "@/components/footer"
import { courses } from "@/lib/courses-data"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen font-epilogue">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 border-b-2 border-black bg-primary">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black uppercase font-lexend mb-6">
                Watch Your Kid Forget Games & Think Like an Engineer
              </h1>
              <p className="text-xl md:text-2xl font-bold max-w-3xl mx-auto">
                Through coding projects, kids develop logical thinking, analytical problem-solving skills, and learn life lessons that stick with them forever.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.slug} {...course} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
