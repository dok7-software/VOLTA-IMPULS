"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/core/i18n/config";
import type { Dictionary } from "@/core/i18n/types";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

type LandingHeaderProps = {
  locale: Locale;
  brand: string;
  nav: Dictionary["nav"];
};

export function LandingHeader({ locale, brand, nav }: LandingHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "border-white/10 bg-[#0b0f14]/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container>
        <nav className="flex h-24 items-center justify-between">
          <Link
            href={`/${locale}`}
            className="font-mono text-xl font-bold tracking-[0.18em] text-white"
          >
            {brand}
          </Link>
          <div className="flex items-center gap-8">
            <LocaleSwitcher locale={locale} />
            <ButtonLink href="#contacte" className="px-6 py-3 text-sm">
              {nav.cta}
            </ButtonLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
