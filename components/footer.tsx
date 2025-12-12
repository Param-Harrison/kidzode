import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="border-t-2 border-black bg-background py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-xl">
            <Logo />
          </div>
          <p className="text-sm font-medium text-muted-foreground">
            Empowering young coders worldwide.
          </p>
        </div>
        
        <div className="flex gap-8 font-bold">
          <a href="https://twitter.com/kidzode" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">Twitter</a>
          <a href="https://linkedin.com/company/kidzode" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">LinkedIn</a>
          <a href="https://skool.com/kidzode" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-2 underline-offset-4">Community</a>
        </div>
        
        <div className="text-sm font-medium">
          © {new Date().getFullYear()} Kidzode.
        </div>
      </div>
    </footer>
  );
}
