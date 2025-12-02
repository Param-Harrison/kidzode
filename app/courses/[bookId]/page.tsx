import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle, Trophy, Book, Hammer, Zap, FileText } from "lucide-react"
import { Footer } from "@/components/footer"
import fs from "fs/promises"
import path from "path"
import { CourseLessonsList } from "@/components/CourseLessonsList"

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
              <CourseLessonsList bookId={bookId} book={book} />
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
