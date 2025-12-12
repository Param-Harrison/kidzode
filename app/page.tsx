import { Navbar } from "@/components/navbar"
import { NeoButton } from "@/components/ui/neobrutalism/neo-button"
import { NeoCard } from "@/components/ui/neobrutalism/neo-card"
import { TechGrid } from "@/components/ui/neobrutalism/tech-grid"
import { ContentCard } from "@/components/ui/neobrutalism/content-card"
import Link from "next/link"
import { CheckCircle, XCircle, Zap, Terminal, ShieldAlert, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { courses } from "@/lib/courses-data"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background font-epilogue">
      <Navbar />
      
      {/* Updated Hero Section */}
      <div className="border-b-[3px] border-black relative overflow-hidden bg-primary min-h-[auto] py-8 md:py-0 md:min-h-[90vh] flex flex-col items-center justify-center">
        <TechGrid />

        <div className="container mx-auto px-4 py-4 md:py-20 flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 border-[3px] border-black shadow-[5px_5px_0px_0px_#000] mb-8 font-bold uppercase tracking-wider transform -rotate-2">
            <ShieldAlert className="w-5 h-5" />
            Warning: High Intensity Coding Fun
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black uppercase font-lexend mb-8 leading-none tracking-tighter">
             Your Child Can <br />
            <span className="bg-accent px-2 box-decoration-clone shadow-[5px_5px_0px_0px_#000] border-[3px] border-black text-black block mt-2 w-fit mx-auto transform -rotate-1">Master Python.</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold font-epilogue max-w-4xl mb-12 leading-relaxed opacity-90 text-muted-foreground">
            The era of boring tutorials is over.<br/>
            We teach kids to build real games, apps, and projects that excite them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-2xl justify-center">
             <Link href="/courses">
              <NeoButton className="w-full sm:w-auto bg-accent text-black hover:bg-accent px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl h-auto shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-3 border-[3px] border-black">
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
                Start Learning Free
              </NeoButton>
             </Link>
             <Link href="/courses">
              <NeoButton className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl h-auto shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-2 border-[3px] border-black">
                View Courses
              </NeoButton>
            </Link>
          </div>
          
          <p className="mt-8 text-sm font-bold opacity-60 uppercase tracking-widest">
            Trusted by 1,240+ parents and kids worldwide
          </p>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-16 md:py-32 border-b-[3px] border-black bg-white">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12 md:mb-20">
                <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-4 md:mb-6">The Future Belongs to Builders</h2>
                <p className="text-lg md:text-2xl font-bold max-w-3xl mx-auto leading-relaxed">
                    Coding is commoditizing basics. The value is now in <span className="bg-primary px-1 border border-black">Creativity</span>, <span className="bg-secondary px-1 border border-black">Problem Solving</span>, and <span className="bg-accent px-1 border border-black">Building Real Stuff</span>.
                    <br className="hidden md:block"/> Don't just watch. Code.
                </p>
             </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase font-lexend mb-8 leading-tight">
                        Escape the <br/> <span className="underline decoration-wavy decoration-red-500">Content Trap</span>
                    </h2>
                    <p className="text-xl font-medium leading-relaxed mb-6">
                        Kids can't learn coding by watching 10-minute videos. They can't master programming without building real projects.
                    </p>
                    <p className="text-xl font-medium leading-relaxed mb-6">
                        We are a platform for <strong>young creators</strong> who are tired of boring tutorials. We build, we play, and we ship.
                    </p>
                    <p className="text-xl font-bold">
                        Ready to build something amazing?
                    </p>
                </div>
                <div className="grid gap-6">
                    <NeoCard className="bg-gray-100 border-[3px] border-black border-dashed opacity-80 hover:opacity-100 transition-all">
                        <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                             <XCircle className="w-6 h-6 text-red-500" /> The Content Trap
                        </h3>
                        <p className="font-medium">Passive watching. Tutorial hell. "Learning" by copying code.</p>
                    </NeoCard>
                    <NeoCard className="bg-primary border-[3px] border-black md:scale-105 shadow-[8px_8px_0px_0px_#000]">
                         <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                             <CheckCircle className="w-6 h-6" /> The Kidzode Way
                        </h3>
                        <p className="font-bold">Active building. Real projects. Instant feedback & fun challenges.</p>
                    </NeoCard>
                </div>
            </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 border-b-[3px] border-black">
        <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <div className="inline-block bg-accent px-3 py-1 border-[3px] border-black font-bold mb-4 shadow-[5px_5px_0px_0px_#000]">
                LEVEL UP FAST
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase font-lexend mb-4">
              Coding Adventures
            </h2>
            <p className="text-xl font-medium text-muted-foreground max-w-xl">
              Three exciting paths. From first steps to amazing projects. Zero boredom.
            </p>
          </div>
           <Link href="/courses">
            <NeoButton neoVariant="outline" className="px-8 py-4 text-lg h-auto">View All Courses <ArrowRight className="ml-2 w-5 h-5" /></NeoButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <ContentCard 
                key={course.slug} 
                {...course} 
                basePath="/courses" 
            />
          ))}
        </div>
       </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-6 lg:px-8 py-24 bg-secondary border-b-[3px] border-black relative overflow-hidden">
        <TechGrid />
        <div className="max-w-7xl mx-auto relative z-10">
             <div className="max-w-3xl mb-12">
                 <div className="flex items-center gap-3 mb-4">
                    <Zap className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold tracking-wide uppercase">Why Kids Love Kidzode</span>
                 </div>
                 <h2 className="text-4xl font-black tracking-tight sm:text-5xl mb-6 font-lexend uppercase">
                   Built for Young Minds
                 </h2>
                 <p className="text-xl leading-8 opacity-90 mb-10 font-bold">
                   We make coding fun, interactive, and rewarding.
                 </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6 mb-12">
               <NeoCard className="bg-white border-[3px] shadow-[5px_5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
                 <div className="flex gap-4 items-start">
                    <div className="bg-black text-white p-3 text-center min-w-[80px] border-[2px] border-black">
                     <div className="text-xs font-bold uppercase opacity-80">INTERACTIVE</div>
                     <div className="text-lg font-black">CODE</div>
                   </div>
                   <div>
                      <h3 className="text-lg font-black uppercase mb-1 leading-tight">Write Real Code</h3>
                      <p className="text-sm font-medium text-muted-foreground">Type, run, and see results instantly. No boring videos.</p>
                   </div>
                 </div>
               </NeoCard>
               
               <NeoCard className="bg-white border-[3px] shadow-[5px_5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
                 <div className="flex gap-4 items-start">
                    <div className="bg-black text-white p-3 text-center min-w-[80px] border-[2px] border-black">
                     <div className="text-xs font-bold uppercase opacity-80">PROJECTS</div>
                     <div className="text-lg font-black">BUILD</div>
                   </div>
                   <div>
                      <h3 className="text-lg font-black uppercase mb-1 leading-tight">Create Cool Stuff</h3>
                      <p className="text-sm font-medium text-muted-foreground">Games, apps, and animations kids actually want to make.</p>
                   </div>
                 </div>
               </NeoCard>
               
               <NeoCard className="bg-white border-[3px] shadow-[5px_5px_0px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all">
                 <div className="flex gap-4 items-start">
                    <div className="bg-black text-white p-3 text-center min-w-[80px] border-[2px] border-black">
                     <div className="text-xs font-bold uppercase opacity-80">FEEDBACK</div>
                     <div className="text-lg font-black">INSTANT</div>
                   </div>
                   <div>
                      <h3 className="text-lg font-black uppercase mb-1 leading-tight">Know You're Right</h3>
                      <p className="text-sm font-medium text-muted-foreground">Get immediate feedback and gentle hints when stuck.</p>
                   </div>
                 </div>
               </NeoCard>
           </div>
           
           <div className="flex justify-center">
              <Link href="/courses">
                <NeoButton size="lg" className="px-12 py-6 text-xl h-auto">    
                    Start Your Coding Adventure <ArrowRight className="ml-2 w-5 h-5" />
                </NeoButton>
              </Link>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary border-b-[3px] border-black py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase font-lexend mb-8">
            Ready to See Your Kid Code?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-3xl mx-auto">
            Join 1,240+ kids already building amazing projects with Kidzode.
          </p>
          <Link href="/courses">
            <NeoButton neoVariant="secondary" size="lg" className="text-lg px-12 py-8 h-auto shadow-[5px_5px_0px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              Start Learning Now - It's Free!
            </NeoButton>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
