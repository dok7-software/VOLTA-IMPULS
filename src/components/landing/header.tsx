"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Locale } from "@/core/i18n/config";
import type { Dictionary } from "@/core/i18n/types";
import { sharedType } from "@/core/typography";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { LocaleSwitcher } from "@/components/i18n/locale-switcher";
import { cn } from "@/lib/utils";

type LandingHeaderProps = {
  locale: Locale;
  brand: string;
  nav: Dictionary["nav"];
};

export function LandingHeader({ locale, brand, nav }: LandingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0f14]/95 backdrop-blur-md">
        <Container variant="tight">
          <nav className="flex h-14 items-center justify-between sm:h-20">
            <Link
              href={`/${locale}`}
              className={cn(sharedType.brand, "whitespace-nowrap text-[13px] tracking-[0.08em] text-white sm:text-xl sm:tracking-[0.18em]")}
            >
              {brand}
            </Link>

            {/* Desktop nav */}
            <div className="hidden shrink-0 items-center gap-8 sm:flex">
              <LocaleSwitcher locale={locale} />
              <ButtonLink href="#contacte" className={cn(sharedType.buttonSm, "px-6 py-3 text-sm")}>
                {nav.cta}
              </ButtonLink>
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
            >
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-transform duration-300",
                  menuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-opacity duration-300",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 bg-white transition-transform duration-300",
                  menuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-[#0b0f14] pt-16 transition-[opacity,visibility] duration-300 sm:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-10 px-6">
          <LocaleSwitcher locale={locale} />
          <ButtonLink
            href="#contacte"
            className={cn(sharedType.button, "w-full max-w-xs px-8 py-4 text-center text-base")}
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
