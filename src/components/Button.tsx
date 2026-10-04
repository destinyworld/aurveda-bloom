import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost" | "icon";
  children: ReactNode;
};

export function Button({ asChild, variant = "primary", className, children, ...props }: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50",
        variant === "primary" && "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-primary/90",
        variant === "secondary" && "border border-border bg-card text-foreground hover:bg-accent",
        variant === "ghost" && "text-foreground hover:bg-accent",
        variant === "icon" && "size-11 shrink-0 border border-border bg-card p-0 text-foreground hover:bg-accent",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
