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
      
      {/* Premium Hero Section - High Conversion Copy */}
      <div className="border-b-[3px] border-foreground relative overflow-hidden bg-primary/10 min-h-[auto] py-20 md:py-32 flex flex-col items-center justify-center">
        <TechGrid />

        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1.5 border-[2px] border-foreground shadow-[4px_4px_0px_0px_currentColor] mb-8 font-bold uppercase tracking-widest transform -rotate-1 text-xs">
            <Zap className="w-4 h-4 fill-primary text-primary" />
            Empowering Young Minds
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase font-lexend mb-8 leading-[1.1] tracking-tight max-w-5xl">
            From Playing Games <br />
            <span className="bg-background px-4 py-1 box-decoration-clone shadow-[6px_6px_0px_0px_currentColor] border-[3px] border-foreground text-foreground inline-block mt-3 transform rotate-1">to Thinking Like an Engineer</span>
          </h1>
          
          <p className="text-lg md:text-xl font-medium font-epilogue max-w-3xl mb-10 leading-relaxed text-muted-foreground">
            Our curriculum bridges the gap between <span className="underline decoration-dashed decoration-foreground/30 underline-offset-4">idle screen time</span> and <span className="bg-accent px-1 border border-foreground shadow-[2px_2px_0px_0px_currentColor]">active logical growth</span>. 
            <br className="hidden md:block" /> We turn curiosity into superpower.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm justify-center">
             <Link href="/courses" className="w-full">
              <NeoButton className="w-full bg-secondary text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg h-auto shadow-[6px_6px_0px_0px_currentColor] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] flex items-center justify-center gap-3 border-[3px] border-foreground transition-all">
                <Terminal className="w-5 h-5" />
                Start Free Lesson
              </NeoButton>
             </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
            {['LOGICAL REASONING', 'PROBLEM SOLVING', 'PYTHON MASTERY', 'CREATIVE BUILDING'].map(skill => (
              <span key={skill} className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-foreground/80">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32 border-b-[3px] border-foreground bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
             <div className="text-center mb-16 md:mb-20">
                <div className="inline-block bg-foreground text-background px-4 py-1 mb-4 font-bold uppercase tracking-widest text-xs transform -rotate-1">The Goal</div>
                <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-6 leading-tight">Beyond Code: <br/><span className="text-primary italic">Empowered Minds</span></h2>
                <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed text-muted-foreground">
                    We don't just teach Python. We provide the tools for <span className="text-foreground font-bold">structured logic</span> and <span className="text-foreground font-bold">creative problem-solving</span>. The results? A child who doesn't just use technology, but understands and creates it.
                </p>
             </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -left-6 -top-6 text-8xl font-black text-secondary/20 select-none -z-10">LOGIC</div>
                    <h2 className="text-3xl md:text-4xl font-black uppercase font-lexend mb-6 leading-tight relative z-10">
                        The Magic of <br/> <span className="underline decoration-[4px] decoration-secondary underline-offset-[6px]">Independent Thinking</span>
                    </h2>
                    <p className="text-lg font-medium leading-relaxed mb-8 text-muted-foreground">
                        Traditional learning rewards repetition. Kidzode rewards <strong>exploration</strong>. We turn every "bug" into a "learning moment," building resilience that lasts a lifetime.
                    </p>
                    <div className="grid gap-4">
                        {[
                            { text: "Structured Decision Making", icon: <CheckCircle className="w-6 h-6 text-primary filled-current" /> },
                            { text: "Mathematical Intuition", icon: <CheckCircle className="w-6 h-6 text-primary filled-current" /> },
                            { text: "The Persistence Mindset", icon: <CheckCircle className="w-6 h-6 text-primary filled-current" /> },
                            { text: "End-to-End Creation", icon: <CheckCircle className="w-6 h-6 text-primary filled-current" /> }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 text-lg font-bold uppercase tracking-tight text-foreground/90">
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid gap-6 relative">
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl -z-10" />
                    <NeoCard className="bg-muted/50 border-[3px] border-foreground border-dashed p-8 rotate-1 hover:rotate-0 transition-all">
                        <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-3">
                             <XCircle className="w-6 h-6 text-destructive" /> Passive Screen Time
                        </h3>
                        <p className="text-base font-medium opacity-80">Mindless scrolling, tutorial hell, and constant consumption without creation.</p>
                    </NeoCard>
                    <NeoCard className="bg-primary/20 border-[3px] border-foreground p-8 -rotate-1 md:scale-105 shadow-[8px_8px_0px_0px_currentColor] hover:scale-105 transition-all">
                         <h3 className="text-xl font-bold uppercase mb-2 flex items-center gap-3">
                             <CheckCircle className="w-6 h-6 text-foreground" /> The Kidzode Outcome
                        </h3>
                        <p className="text-lg font-bold">Active building, logical breakthroughs, and the pride of seeing your own code come to life.</p>
                    </NeoCard>
                </div>
            </div>
        </div>
      </section>

      <section id="courses" className="py-20 border-b-[3px] border-foreground bg-accent/10">
        <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-accent px-3 py-1 border-[2px] border-foreground font-bold mb-4 shadow-[3px_3px_0px_0px_currentColor] uppercase tracking-widest text-xs">
                Outcome Paths
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-4 leading-tight">
              Start Their <br/><span className="italic">First Project</span>
            </h2>
            <p className="text-lg font-medium text-muted-foreground max-w-xl leading-relaxed">
              From absolute zero to building real applications. Choose a path and watch them transition from screen-user to creator.
            </p>
          </div>
           <Link href="/courses">
            <NeoButton neoVariant="outline" className="px-6 py-4 text-lg h-auto border-[3px] shadow-[4px_4px_0px_0px_currentColor] hover:shadow-none transition-all">Explore All Paths <ArrowRight className="ml-2 w-5 h-5" /></NeoButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {courses.map((course) => (
            <div key={course.slug} className="transform hover:-translate-y-2 transition-transform duration-300">
                <ContentCard 
                    {...course} 
                    basePath="/courses" 
                />
            </div>
          ))}
        </div>
       </div>
      </section>

      <section className="w-full px-4 lg:px-8 py-20 bg-secondary/10 border-b-[3px] border-foreground relative overflow-hidden">
        <TechGrid />
        <div className="max-w-7xl mx-auto relative z-10">
             <div className="max-w-3xl mb-16">
                 <div className="flex items-center gap-3 mb-6">
                    <Zap className="h-6 w-6 text-primary fill-primary" />
                    <span className="font-bold tracking-widest uppercase text-xs">Design Patterns for Kids</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 font-lexend uppercase leading-tight">
                   Built for Young Minds
                 </h2>
                 <p className="text-lg md:text-xl leading-relaxed font-bold opacity-90">
                   We transform natural curiosity into analytical superpowers.
                 </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8 mb-16">
               {[
                 {
                   label: "CODE",
                   title: "Active Learning",
                   desc: "No passive videos. Kids type real code, make real mistakes, and experience real breakthroughs.",
                   color: "bg-background"
                 },
                 {
                   label: "LOGIC",
                   title: "Structured Thinking",
                   desc: "We focus on the 'Why' behind the 'How'. Building mental models that apply to math, science, and life.",
                   color: "bg-background"
                 },
                 {
                   label: "PRIDE",
                   title: "Instant Feedback",
                   desc: "Gamified validation and friendly hints keep them motivated and moving forward with confidence.",
                   color: "bg-primary/20"
                 }
               ].map((feat, i) => (
                   <NeoCard key={i} className={`${feat.color} border-[3px] border-foreground p-6 shadow-[5px_5px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all h-full`}>
                     <div className="flex flex-col gap-4 h-full">
                        <div className="bg-foreground text-background text-[10px] font-bold tracking-widest p-1.5 inline-block w-fit">
                          {feat.label}
                        </div>
                        <div>
                           <h3 className="text-xl font-black uppercase mb-2 leading-tight">{feat.title}</h3>
                           <p className="text-sm font-medium text-muted-foreground leading-relaxed">{feat.desc}</p>
                        </div>
                     </div>
                   </NeoCard>
               ))}
           </div>
           
           <div className="flex justify-center">
              <Link href="/courses">
                <NeoButton size="lg" className="px-10 py-6 text-xl h-auto shadow-[6px_6px_0px_0px_currentColor] border-[3px] border-foreground hover:shadow-none transition-all">    
                    Start Growth Journey <ArrowRight className="ml-2 w-5 h-5" />
                </NeoButton>
              </Link>
           </div>
        </div>
      </section>

      <section className="bg-primary/20 border-b-[3px] border-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_currentColor_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase font-lexend mb-8 leading-tight">
            Invest in Your <br />
            <span className="bg-background text-foreground px-4 shadow-[5px_5px_0px_0px_currentColor] border-[3px] border-foreground inline-block mt-3">Child's Future</span>
          </h2>
          <p className="text-xl font-bold mb-12 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Join thousands of parents globally who are witnessing their kids build, think, and solve problems with Kidzode.
          </p>
          <Link href="/courses">
            <NeoButton neoVariant="secondary" size="lg" className="text-xl px-10 py-6 h-auto shadow-[6px_6px_0px_0px_currentColor] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] border-[3px] border-foreground transition-all">
              Join the Beta - Start Free
            </NeoButton>
          </Link>
          <p className="mt-8 text-[10px] font-bold uppercase tracking-widest opacity-40">No Credit Card Required | Instant Access</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
