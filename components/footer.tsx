import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t-[2px] border-foreground bg-background py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl">
            <Logo />
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Empowering young coders worldwide.
          </p>
        </div>
        
        <div className="flex gap-8 font-bold text-sm">
          <a href="https://github.com/Param-Harrison/kidzode" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">GitHub (Open Source)</a>
          <a href="https://x.com/learnwithparam" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">X (Twitter)</a>
          <a href="https://www.linkedin.com/in/paramanantham/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">LinkedIn</a>
        </div>
        
        <div className="text-sm font-medium">
          © {new Date().getFullYear()} Kidzode.
        </div>
      </div>
    </footer>
  );
}
