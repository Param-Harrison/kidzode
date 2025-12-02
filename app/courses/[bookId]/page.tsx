import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle, Trophy, Book, Hammer, Zap, FileText } from "lucide-react"
import { Footer } from "@/components/footer"
import fs from "fs/promises"
import path from "path"

export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params

  try {
    const bookPath = path.join(process.cwd(), "public", "courses", bookId, "book.json")
    const bookContent = await fs.readFile(bookPath, "utf-8")
    const book = JSON.parse(bookContent)

    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container max-w-6xl mx-auto py-12 px-4 md:px-6">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-4">
              <Link href="/courses">
                <Button variant="outline" size="icon" className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <div className="flex flex-col space-y-1">
                <h1 className="text-3xl font-bold tracking-tight">{book.name}</h1>
                <p className="text-muted-foreground">Complete all lessons to unlock your superpower!</p>
              </div>
            </div>

            <div className="space-y-12">
              {book.projects?.map((project: any, projectIndex: number) => (
                <div key={project.id} className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 border-b-2 border-black pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground px-4 py-1.5 border-2 border-black font-bold text-sm rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        Project {projectIndex + 1}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{project.name}</h2>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {project.lessons.map((lesson: any, lessonIndex: number) => (
                      <Link key={lesson.id} href={`/courses/${bookId}/lessons/${lesson.id}`}>
                        <div className="group h-full flex flex-col justify-between p-5 border-2 border-black rounded-xl hover:bg-green-50 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none bg-card">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted border-2 border-black font-bold text-sm group-hover:bg-white transition-colors">
                                {lessonIndex + 1}
                              </div>
                              <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-black transition-colors" />
                            </div>
                            <div>
                              <div className="font-bold text-lg leading-tight group-hover:text-primary transition-colors mb-1">
                                {lesson.name}
                              </div>
                              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider flex items-center gap-1.5">
                                {lesson.type === 'concept' && (
                                  <>
                                    <Book className="h-3 w-3" />
                                    Concept
                                  </>
                                )}
                                {lesson.type === 'build' && (
                                  <>
                                    <Hammer className="h-3 w-3" />
                                    Build
                                  </>
                                )}
                                {lesson.type === 'challenge' && (
                                  <>
                                    <Zap className="h-3 w-3" />
                                    Challenge
                                  </>
                                )}
                                {!lesson.type && (
                                  <>
                                    <FileText className="h-3 w-3" />
                                    Lesson
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Fallback for old structure without projects */}
              {!book.projects && book.children?.map((lesson: any, index: number) => (
                <Link key={lesson.id} href={`/courses/${bookId}/lessons/${lesson.id}`}>
                  <div className="group flex items-center justify-between p-4 border-2 border-black rounded-lg hover:bg-green-50 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none bg-card">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border-2 border-black font-bold group-hover:bg-white transition-colors">
                        {index + 1}
                      </div>
                      <div className="font-medium group-hover:text-black">{lesson.name}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-black" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  } catch (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 container max-w-6xl mx-auto py-12 px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Course not found</h1>
            <p className="text-muted-foreground mb-8">This course is coming soon!</p>
            <Link href="/courses">
              <Button className="border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Back to Courses
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
