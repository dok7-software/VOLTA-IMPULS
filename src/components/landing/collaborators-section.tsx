import type { Dictionary } from "@/core/i18n/types";
import { heroType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { HeroPartnerLogo } from "@/components/landing/hero-partner-logo";
import { cn } from "@/lib/utils";

type CollaboratorsSectionProps = {
  content: Dictionary["collaborators"];
};

export function CollaboratorsSection({ content }: CollaboratorsSectionProps) {
  return (
    <section className="border-t border-white/8 bg-[#0b0f14]">
      <Container className="flex flex-col items-center gap-6 py-8 sm:flex-row sm:justify-center sm:gap-8 lg:gap-10 lg:py-10">
        <p className={cn(heroType.fundedBy, "shrink-0 text-center text-[#c4ccd5] sm:text-left")}>
          {content.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          <HeroPartnerLogo
            src={content.pallarsActiuLogo.src}
            alt={content.pallarsActiuLogo.alt}
            width={246}
            height={74}
            className="h-[64px] max-w-[min(100%,14.08rem)] sm:h-[70px] lg:h-[77px]"
          />
          <span className="hidden h-[64px] w-px bg-white/12 sm:block lg:h-[77px]" aria-hidden />
          <HeroPartnerLogo
            src={content.phimisterLogo.src}
            alt={content.phimisterLogo.alt}
            width={282}
            height={88}
            className="h-[70px] max-w-[min(100%,15.84rem)] sm:h-[77px] lg:h-[85px]"
          />
        </div>
      </Container>
    </section>
  );
}
