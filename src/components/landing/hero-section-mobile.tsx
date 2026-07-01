import type { Dictionary } from "@/core/i18n/types";
import { heroType } from "@/core/typography";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { HeroPartnerLogo } from "@/components/landing/hero-partner-logo";
import { cn } from "@/lib/utils";

type HeroSectionMobileProps = {
  content: Dictionary["hero"];
};

export function HeroSectionMobile({ content }: HeroSectionMobileProps) {
  return (
    <div className="relative z-10 flex h-svh flex-col overflow-y-auto sm:hidden">
      <Container variant="tight" className="flex flex-col pt-16 pb-4">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-green/55 bg-[rgba(8,11,15,.35)] px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-green shadow-[0_0_10px_#17d479]" />
          <span className={cn(heroType.badge, "text-[#cfe9d9]")}>{content.badge}</span>
        </div>

        <h1 className={cn(heroType.title, "mt-4 mb-2 max-w-xl text-white")}>
          {content.titleLine1}
          <br />
          {content.titleArticle}
          <span className="text-brand-green">{content.titleHighlight}</span>
          {content.titleLine2 ? <> {content.titleLine2}</> : null}
        </h1>

        <p className={cn(heroType.subtitle, "mb-2 max-w-xl text-[#dfe4ea]")}>
          {content.subtitle}
        </p>
        <p className={cn(heroType.subtitle, "mb-5 max-w-xl text-[#dfe4ea]")}>
          {content.subtitleLine2}
        </p>

        <ButtonLink href="#contacte" variant="secondary" className="w-full justify-center">
          {content.ctaPrimary}
        </ButtonLink>
      </Container>

      <Container variant="tight" className="mt-auto shrink-0 space-y-4 pb-5">
        <div>
          <p className={cn(heroType.fundedBy, "mb-2 text-[#c4ccd5]")}>{content.fundedBy}</p>
          <div className="flex flex-col items-start gap-2">
            <HeroPartnerLogo
              src={content.fseLogo.src}
              alt={content.fseLogo.alt}
              className="h-[39px] max-w-[207px]"
            />
            <HeroPartnerLogo
              src={content.generalitatLogo.src}
              alt={content.generalitatLogo.alt}
              className="h-[33px] max-w-[154px]"
            />
          </div>
          <p
            className={cn(
              heroType.fundingNote,
              "mt-2 max-w-sm whitespace-pre-line text-[#9aa3ae]",
            )}
          >
            {content.fundingNote}
          </p>
        </div>

        <div className="border-t border-white/12 pt-4">
          <p className={cn(heroType.programBy, "mb-2 text-[#c4ccd5]")}>{content.programBy}</p>
          <div className="flex flex-col items-start gap-2.5">
            <HeroPartnerLogo
              src={content.pimecLogo.src}
              alt={content.pimecLogo.alt}
              className="h-7 max-w-36"
            />
            <HeroPartnerLogo
              src={content.programaPrimerLogo.src}
              alt={content.programaPrimerLogo.alt}
              className="h-8 max-w-36"
            />
            <HeroPartnerLogo
              src={content.xeLogo.src}
              alt={content.xeLogo.alt}
              className="h-8 max-w-36"
            />
          </div>
        </div>

        <div
          className={cn(
            heroType.stat,
            "grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/12 pt-4 text-[#dfe4ea]",
          )}
        >
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <span className="font-bold text-brand-green">{stat.value}</span> · {stat.label}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
