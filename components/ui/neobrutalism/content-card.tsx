import { NeoCard } from "./neo-card";
import { NeoButton } from "./neo-button";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";

interface ContentCardProps {
  title: string;
  subtitle: string;
  tags: string[];
  color?: "primary" | "secondary" | "accent";
  slug: string;
  price?: string;
  duration?: string;
  basePath: string;
  displayText?: string;
  date?: string;
  format?: string;
}

export function ContentCard({ 
  title, 
  subtitle, 
  tags, 
  color = "accent", 
  slug, 
  price,
  duration,
  basePath,
  displayText,
  date,
  format
}: ContentCardProps) {
  const bgColors = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    accent: "bg-accent",
  };

  return (
    <NeoCard className="flex flex-col gap-4 p-0 overflow-hidden h-full">
      <div className={`relative h-48 w-full border-b-[3px] border-black ${bgColors[color]} flex flex-col items-center justify-center p-6 text-center overflow-hidden`}>
        {date && (
             <div className="absolute top-4 left-4 z-10">
                <div className="bg-black text-white px-3 py-1 font-bold text-sm border-[3px] border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)]">
                    {date}
                </div>
            </div>
        )}

        {/* Abstract shape or initialization */}
        <div className="transform -rotate-6 border-[3px] border-black bg-white px-4 py-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] absolute select-none">
            <span className="text-5xl font-black uppercase tracking-tighter block text-black">
                {displayText || title.substring(0, 2)}
            </span>
        </div>
        
        {(price || duration) && (
            <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
                {price && (
                     <div className="bg-black text-white px-3 py-1 font-bold text-sm border-[3px] border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.5)]">
                        {price}
                    </div>
                )}
            </div>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4 flex-grow bg-white">
        <h3 className="text-2xl font-bold font-lexend uppercase leading-tight">{title}</h3>
        
        {duration && (
            <div className="flex items-center gap-2 text-sm font-bold text-black/80 mb-4">
                <Clock className="w-4 h-4" />
                <span className="mt-1">{duration}</span>
            </div>
        )}

        <p className="text-muted-foreground font-medium line-clamp-3 mb-4">{subtitle}</p>
        
        <div className="flex flex-wrap gap-2 mb-auto">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="border-[3px] border-black px-2 py-1 text-xs font-bold bg-white text-black shadow-[3px_3px_0px_0px_#000]">
              {tag}
            </span>
          ))}
        </div>

        <Link href={`${basePath}/${slug}`} className="w-full mt-6">
          <NeoButton className="w-full py-4 text-lg h-auto group">
            View Details 
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </NeoButton>
        </Link>
      </div>
    </NeoCard>
  );
}