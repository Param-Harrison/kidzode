import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { courses } from "@/lib/courses-data"
import { TechGrid } from "@/components/ui/neobrutalism/tech-grid"
import Link from "next/link"
import { CheckCircle, Terminal } from "lucide-react"
import { NeoButton } from "@/components/ui/neobrutalism/neo-button"

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen font-epilogue">
      <Navbar />
      <main className="flex-1">
        {/* Premium Header with similar punch to Home */}
    <section className="relative overflow-hidden py-24 md:py-32 border-b-[3px] border-foreground bg-primary/70">
      <TechGrid />
      <div className="container max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase font-lexend mb-8 leading-[1.1] tracking-tight">
            Outcome-Driven <br />
            <span className="bg-background text-foreground px-4 py-1 inline-block transform -rotate-1 shadow-[5px_5px_0px_0px_currentColor] border-[3px] border-foreground mt-4">Curriculum</span>
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Witness the transition from passive screen-user to <span className="underline decoration-dashed decoration-foreground/30 underline-offset-4">logical engineer</span>. Every lesson is a project, every project is a breakthrough.
          </p>
        </div>
      </div>
    </section>

    <div className="container max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
      <div className="grid gap-12">
        {courses.map((course) => {
          // Extract metadata from tags
          const ageRangeTag = course.tags.find(tag => tag.includes('Ages')) || "Ages 8+";
          const levelTag = course.tags.find(tag => ['Beginner', 'Intermediate', 'Advanced'].includes(tag)) || "Beginner";
          
          return (
          <div key={course.slug} className="group relative">
             <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur" />
             <div className="relative bg-card border-[3px] border-foreground rounded-xl overflow-hidden shadow-[6px_6px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex flex-col md:flex-row">
                 {/* Course Visual */}
                 <div className="md:w-2/5 border-b-[3px] md:border-b-0 md:border-r-[3px] border-foreground min-h-[240px] md:min-h-auto bg-primary/10 flex items-center justify-center p-8 relative overflow-hidden">
                     <TechGrid /> 
                     <div className="relative z-10 p-4 bg-background border-[3px] border-foreground shadow-[4px_4px_0px_0px_currentColor] rotate-3 group-hover:rotate-0 transition-transform duration-500 text-center">
                        <div className="text-4xl mb-2">
                           {course.badge.split(' ')[0]}
                        </div>
                        <div className="text-xs font-black uppercase tracking-widest leading-tight">
                            {course.badge.split(' ').slice(1).join(' ')}
                        </div>
                     </div>
                 </div>

                 {/* Content */}
                 <div className="md:w-3/5 p-8 md:p-10 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-widest border-[2px] border-foreground">
                        {levelTag}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{ageRangeTag}</span>
                    </div>

                    <h2 className="text-2xl md:text-4xl font-black font-lexend mb-4 leading-tight uppercase">{course.title}</h2>
                    <p className="text-muted-foreground text-lg font-medium mb-8 leading-relaxed flex-grow">
                      {course.subtitle}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                       {course.highlights.map((highlight, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary filled-current" />
                            <span className="font-bold text-sm">{highlight}</span>
                         </div>
                       ))}
                    </div>

                    <div className="mt-auto pt-6 border-t-[3px] border-muted">
                        <Link href={`/courses/${course.slug}`} className="w-full">
                          <NeoButton className="w-full bg-secondary text-foreground px-8 py-6 text-lg h-auto shadow-[6px_6px_0px_0px_currentColor] hover:bg-secondary hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center justify-center gap-3 border-[3px] border-foreground transition-all">
                              <Terminal className="w-5 h-5" />
                              {course.displayText}
                           </NeoButton>
                        </Link>
                    </div>
                 </div>
             </div>
          </div>
        )})}
      </div>
    </div>
    
     <section className="bg-secondary/10 border-t-[3px] border-foreground py-20 relative overflow-hidden mt-12">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6 leading-tight">
            Incremental Learning
          </h2>
          <p className="text-xl font-bold mb-10 max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Learn one concept at a time and build on it.  
          </p>
          <div className="inline-flex gap-4">
            <Link href="/courses/foundation">
              <NeoButton neoVariant="secondary" className="px-8 py-8 border-[3px] border-foreground shadow-[4px_4px_0px_0px_currentColor]">
                Start Learning
              </NeoButton>
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </div>
  )
}
