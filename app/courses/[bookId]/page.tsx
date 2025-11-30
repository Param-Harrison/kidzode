import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react"

// Mock data - in a real app this would come from book.json
const books: Record<string, any> = {
  basic: {
    title: "Coding Fundamentals",
    description: "Start your journey here! Learn the fundamentals of Python programming with fun examples.",
    lessons: [
      { id: "lesson-01-hello", title: "Lesson 1: Hello World", completed: false },
      { id: "lesson-02-variables", title: "Lesson 2: Variables and Data Types", completed: false },
      { id: "lesson-03-numbers", title: "Lesson 3: Numbers and Math", completed: false },
      { id: "lesson-04-strings", title: "Lesson 4: Working with Strings", completed: false },
      { id: "lesson-05-conditionals", title: "Lesson 5: If Statements", completed: false },
    ]
  },
  intermediate: {
    title: "Level Up Your Coding Skills",
    description: "Take your skills to the next level! Dive into data structures, functions, and more.",
    lessons: [
      { id: "lesson-int-01-loops", title: "Lesson 1: For Loops", completed: false },
      { id: "lesson-int-02-while", title: "Lesson 2: While Loops", completed: false },
      { id: "lesson-int-03-lists", title: "Lesson 3: Lists and Arrays", completed: false },
      { id: "lesson-int-04-functions", title: "Lesson 4: Functions", completed: false },
      { id: "lesson-int-05-dictionaries", title: "Lesson 5: Dictionaries", completed: false },
    ]
  },
  advanced: {
    title: "Become a Master Coder",
    description: "Become a Python master! Explore object-oriented programming and advanced concepts.",
    lessons: [
      { id: "lesson-adv-01-classes", title: "Lesson 1: Classes and Objects", completed: false },
      { id: "lesson-adv-02-inheritance", title: "Lesson 2: Inheritance", completed: false },
      { id: "lesson-adv-03-modules", title: "Lesson 3: Modules and Packages", completed: false },
      { id: "lesson-adv-04-exceptions", title: "Lesson 4: Exception Handling", completed: false },
      { id: "lesson-adv-05-files", title: "Lesson 5: File I/O", completed: false },
    ]
  }
}

export default async function BookPage({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params
  const book = books[bookId as keyof typeof books]

  if (!book) {
    return <div>Course not found</div>
  }

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
              <h1 className="text-3xl font-bold tracking-tight">{book.title}</h1>
              <p className="text-muted-foreground">{book.description}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {book.lessons.map((lesson: any, index: number) => (
              <Link key={lesson.id} href={`/courses/${bookId}/lessons/${lesson.id}`}>
                <div className="group flex items-center justify-between p-4 border-4 border-black rounded-lg hover:bg-primary hover:text-white transition-colors shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none bg-card">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 border-2 border-black font-bold">
                      {index + 1}
                    </div>
                    <div className="font-medium">{lesson.title}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {lesson.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
