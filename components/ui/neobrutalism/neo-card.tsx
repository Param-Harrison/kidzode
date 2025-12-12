import { cn } from "@/lib/utils";
import React from "react";

export const NeoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "border-[3px] border-black bg-card text-card-foreground shadow-[5px_5px_0px_0px_#000] p-6 rounded-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
NeoCard.displayName = "NeoCard";