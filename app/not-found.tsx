import Link from 'next/link';
import { CircleIcon, Home, BookOpen, Bug } from 'lucide-react';
import { NeoButton } from "@/components/ui/neobrutalism/neo-button"
import { NeoCard } from "@/components/ui/neobrutalism/neo-card"
import { TechGrid } from "@/components/ui/neobrutalism/tech-grid"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-primary/20 font-epilogue">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center relative overflow-hidden p-4">
        <TechGrid />
        
        <div className="relative z-10 max-w-lg w-full">
            <NeoCard className="bg-white border-[3px] border-foreground shadow-[8px_8px_0px_0px_currentColor] p-8 md:p-12 text-center transform hover:rotate-1 transition-transform duration-300">
                <div className="flex justify-center mb-6">
                    <div className="bg-orange-400 p-4 border-[3px] border-foreground shadow-[4px_4px_0px_0px_currentColor] rounded-full animate-bounce">
                        <Bug className="w-12 h-12 text-foreground" />
                    </div>
                </div>
            
                <h1 className="text-4xl md:text-6xl font-black uppercase font-lexend mb-4 leading-none tracking-tighter">
                    Bug Found!
                </h1>
                
                <div className="inline-block bg-secondary px-4 py-1 border-[2px] border-foreground shadow-[3px_3px_0px_0px_currentColor] mb-6 font-bold uppercase tracking-wider text-sm transform -rotate-1">
                    ERROR 404
                </div>

                <p className="text-lg font-bold mb-10 leading-relaxed text-muted-foreground">
                    Oops! Looks like this page wandered off to learn Python on its own. It's not here anymore.
                </p>

                <div className="flex flex-col gap-4">
                    <Link href="/" className="w-full">
                        <NeoButton className="w-full py-4 text-lg border-[3px] shadow-[4px_4px_0px_0px_currentColor] hover:shadow-none bg-primary text-primary-foreground flex items-center justify-center gap-2">
                            <Home className="w-5 h-5" />
                            Back to Home
                        </NeoButton>
                    </Link>
                    <Link href="/courses" className="w-full">
                        <NeoButton neoVariant="secondary" className="w-full py-4 text-lg border-[3px] shadow-[4px_4px_0px_0px_currentColor] hover:shadow-none flex items-center justify-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Explore Courses
                        </NeoButton>
                    </Link>
                </div>
            </NeoCard>
        </div>
      </div>
      <Footer />
    </main>
  );
}
