import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: ReactNode;
  variant?: "dark" | "cream";
  className?: string;
};

export function SectionLabel({
  children,
  variant = "dark",
  className,
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-sm tracking-[0.2em] uppercase",
        variant === "dark" && "text-brand-green",
        variant === "cream" && "text-brand-green-dark",
        className,
      )}
    >
      {children}
    </p>
  );
}
