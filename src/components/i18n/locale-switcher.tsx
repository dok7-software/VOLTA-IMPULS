import Link from "next/link";
import type { Locale } from "@/core/i18n/config";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  locale: Locale;
};

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  return (
    <div className="flex items-center gap-1 font-mono text-sm font-bold tracking-wider">
      <Link
        href="/es"
        className={cn(
          "px-1 transition-colors",
          locale === "es" ? "text-white" : "text-[#9aa3ae] hover:text-white",
        )}
      >
        ES
      </Link>
      <span className="text-[#9aa3ae]">|</span>
      <Link
        href="/ca"
        className={cn(
          "px-1 transition-colors",
          locale === "ca" ? "text-white" : "text-[#9aa3ae] hover:text-white",
        )}
      >
        CA
      </Link>
    </div>
  );
}
