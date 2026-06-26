import Link from "next/link";
import { sharedType } from "@/core/typography";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        sharedType.button,
        "inline-flex items-center justify-center rounded-full px-6 py-3.5 transition-opacity hover:opacity-90",
        variant === "primary" && "bg-brand-green text-brand-ink",
        variant === "secondary" && "bg-brand-green px-7 py-4 text-brand-ink",
        variant === "outline-light" &&
          "border border-white/40 font-semibold text-white",
        className,
      )}
    >
      {children}
    </Link>
  );
}
