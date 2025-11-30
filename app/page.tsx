import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RandomBgHero } from "@/components/random-bg-hero"
import { BouncyShapes } from "@/components/bouncy-shapes"
import { CourseCard } from "@/components/course-card"
import { CheckCircle, XCircle, Code, Zap, Trophy } from "lucide-react"
import { Footer } from "@/components/footer"

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

export default function Home() {
  return (
    <div className="flex flex-col font-epilogue">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section - Hook */}
        <RandomBgHero>
          <BouncyShapes minShapes={4} maxShapes={6} />
          <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 md:space-y-8 text-center py-8 md:py-12">
              <div className="inline-block bg-white px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_#000] transform -rotate-2">
                <span className="font-bold uppercase tracking-wider text-sm">Kids Love Coding!</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase font-lexend leading-tight max-w-4xl">
                Your Child Can <br />
                <span className="bg-primary px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_#000] inline-block transform rotate-1 mt-2">
                  Master Python
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl font-bold max-w-2xl leading-relaxed">
                Interactive lessons. Real coding. Instant feedback. <br />
                Watch your kid build amazing projects!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/courses">
                  <Button variant="neo" className="h-12 px-8 text-base font-bold bg-primary text-black">
                    Start Learning Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </RandomBgHero>

        {/* Problem Section */}
        <section className="py-16 md:py-24 border-b-2 border-black bg-gray-50">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6">
                Most Coding Courses <br />
                <span className="text-destructive">Bore Kids to Death</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                They're either too complicated or too simple. Kids lose interest fast.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(239,68,68,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <XCircle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Too Much Theory</h3>
                <p className="text-muted-foreground">Endless videos with no hands-on practice</p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(239,68,68,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <XCircle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">No Real Projects</h3>
                <p className="text-muted-foreground">Boring examples that don't excite kids</p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(239,68,68,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <XCircle className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Zero Feedback</h3>
                <p className="text-muted-foreground">Kids don't know if they're doing it right</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-24 border-b-2 border-black">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6">
                The <span className="text-primary">Kidzode</span> Way
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn by doing. Build real projects. Get instant feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 border-4 border-black">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Interactive Editor</h3>
                <p className="text-muted-foreground">Write code, run it instantly, see results immediately</p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 border-4 border-black">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Instant Feedback</h3>
                <p className="text-muted-foreground">Automated tests show exactly what works and what doesn't</p>
              </div>

              <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(34,197,94,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 border-4 border-black">
                  <Trophy className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fun Projects</h3>
                <p className="text-muted-foreground">Build games, tools, and apps kids actually want to make</p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 md:py-24 border-b-2 border-black bg-yellow-50">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6">
                Start Your Journey
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Three courses. One goal: Make your kid a confident coder.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.slug} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 border-b-2 border-black bg-white">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6">
                Built for Kids
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We believe every child can learn to code - they just need the right approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="bg-primary border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  <h3 className="text-2xl font-black uppercase mb-4">Learn Through Play</h3>
                  <p className="font-medium">
                    Kids learn best when they're having fun. Our lessons use games, stories, and challenges that keep them engaged while building real coding skills.
                  </p>
                </div>
                <div className="bg-primary border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  <h3 className="text-2xl font-black uppercase mb-4">Build Real Projects</h3>
                  <p className="font-medium">
                    From day one, kids create actual working programs - games, animations, and tools they can share with friends and family.
                  </p>
                </div>
                <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                  <h3 className="text-2xl font-black uppercase mb-4">Instant Feedback</h3>
                  <p className="font-medium">
                    No more wondering if they got it right. Our system provides immediate feedback and gentle hints to keep frustration away.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] transform rotate-3 mb-6">
                  <div className="p-8">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <div className="text-4xl font-black">500+</div>
                    <div className="text-xl font-bold">Young Coders</div>
                  </div>
                </div>
                <p className="text-lg font-medium">
                  Parents rate us <span className="bg-primary px-2 py-1 border-2 border-black transform rotate-1">4.9/5</span> for engaging content and visible progress!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 border-b-2 border-black bg-primary">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6">
                Simple Pricing
              </h2>
              <p className="text-xl font-medium text-primary-foreground max-w-2xl mx-auto">
                Invest in your child's future. No hidden fees, cancel anytime.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto justify-center">
              <div className="flex-1 bg-white border-4 border-black p-8 flex flex-col items-center relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black uppercase mb-2">Monthly</h3>
                <div className="text-5xl font-black mb-2">$5</div>
                <p className="text-sm font-bold mb-6 opacity-80">per month</p>
                <ul className="text-left space-y-3 mb-8 text-sm font-medium w-full">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Access to All Courses</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> New Lessons Added Monthly</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Progress Tracking</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Cancel Anytime</li>
                </ul>
                <Link href="/courses">
                  <Button variant="neo" className="w-full bg-black text-white py-3 text-sm font-bold">
                    Start Free Trial
                  </Button>
                </Link>
              </div>

              <div className="flex-1 bg-black text-white border-4 border-black p-8 flex flex-col items-center relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]">
                <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 border-2 border-black">BEST VALUE</div>
                <h3 className="text-2xl font-black uppercase mb-2">Lifetime</h3>
                <div className="text-5xl font-black mb-2">$99</div>
                <p className="text-sm font-bold mb-6 opacity-80">one-time payment</p>
                <ul className="text-left space-y-3 mb-8 text-sm font-medium w-full">
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> All Courses Forever</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Future Courses Included</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Priority Support</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-400" /> Certificate of Completion</li>
                </ul>
                <Link href="/courses">
                  <Button variant="neo" className="w-full bg-primary text-black py-3 text-sm font-bold">
                    Lock Lifetime Access
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black text-white py-16 md:py-24 border-b-2 border-black">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6">
              Ready to See Your Kid Code?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join hundreds of kids already learning Python the fun way.
            </p>
            <Link href="/courses">
              <Button
                variant="neo"
                className="h-14 px-10 text-lg font-bold bg-primary text-black shadow-[4px_4px_0px_0px_#fff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Start Learning Now - It's Free!
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
