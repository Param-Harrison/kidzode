import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ComponentProps<typeof Button>;

interface NeoButtonProps extends ButtonProps {
  neoVariant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
}

export const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ className, neoVariant = "primary", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      accent: "bg-accent text-accent-foreground hover:bg-accent/90",
      outline: "bg-background text-foreground hover:bg-muted",
      ghost: "bg-transparent hover:bg-muted shadow-none border-transparent hover:border-black",
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "border-[3px] border-black shadow-[5px_5px_0px_0px_#000] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:translate-x-[4px] active:translate-y-[4px] active:shadow-none font-bold rounded-none",
          variants[neoVariant],
          className
        )}
        {...props}
      />
    );
  }
);
NeoButton.displayName = "NeoButton";