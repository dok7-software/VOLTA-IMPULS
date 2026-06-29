import Link from "next/link";
import type { Dictionary } from "@/core/i18n/types";
import { footerType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";

type LandingFooterProps = {
  brand: string;
  content: Dictionary["footer"];
};

function SocialIcon({ children }: { children: React.ReactNode }) {
  return (
    <Link
      href="#"
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/6 text-[#c4ccd5] transition-colors hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

export function LandingFooter({ brand, content }: LandingFooterProps) {
  return (
    <footer className={cn(footerType.body, "border-t border-white/6 bg-[#080b0f]")}>
      <Container className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-4 sm:gap-8 sm:py-16 lg:gap-12">
        {/* Col 1 — Brand */}
        <div className="flex flex-col items-start sm:col-span-1">
          <p className={cn(footerType.brand, "mb-4 text-white")}>{brand}</p>
          <p className="mb-5 max-w-60 text-[#7e8893]">{content.description}</p>
          <div className="flex gap-2.5">
            <SocialIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5v13.5H.25V8zm7.5 0h4.31v1.85h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9v8.59h-4.5v-7.62c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03v7.75h-4.5V8z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Col 2 — empty */}
        <div className="hidden sm:block" />

        {/* Col 3 — empty */}
        <div className="hidden sm:block" />

        {/* Col 4 — Contact */}
        <div className="flex flex-col items-start sm:col-span-1">
          <p className={cn(footerType.columnTitle, "mb-5 text-brand-green")}>
            {content.contactTitle}
          </p>
          <div className="flex flex-col items-start gap-3">
            {content.contact.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={cn(footerType.link, "text-[#9aa3ae] hover:text-white")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>

      <Container className="pb-8">
        <p className={cn(footerType.copyright, "border-t border-white/6 pt-6 text-center text-[#5d6772]")}>
          © {new Date().getFullYear()} {content.copyright}
        </p>
      </Container>
    </footer>
  );
}
