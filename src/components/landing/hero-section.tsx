import Image from "next/image";
import type { Dictionary } from "@/core/i18n/types";
import { heroType } from "@/core/typography";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { HeroPartnerLogo } from "@/components/landing/hero-partner-logo";
import { HeroSectionMobile } from "@/components/landing/hero-section-mobile";
import { cn } from "@/lib/utils";

const heroContentClassName = "w-full max-w-3xl md:ml-10 lg:ml-20 xl:ml-28";

type HeroSectionProps = {
  content: Dictionary["hero"];
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative flex flex-col overflow-x-hidden bg-[#0b0f14] sm:overflow-hidden">
      <Image
        src="/images/hero.png"
        alt={content.imageAlt}
        fill
        priority
        className="object-cover object-center sm:object-bottom"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,11,15,.45)] via-[rgba(8,11,15,.35)] to-[rgba(8,11,15,.78)]" />

      <HeroSectionMobile content={content} />

      <div className="relative hidden flex-col sm:flex">
        <Container
          variant="tight"
          className="relative z-10 flex flex-col py-8 pt-24 lg:py-10 lg:pt-28"
        >
          <div className={cn(heroContentClassName, "shrink-0")}>
            <div className="ml-12 inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-green/55 bg-[rgba(8,11,15,.35)] px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_10px_#17d479]" />
              <span className={cn(heroType.badge, "text-[#cfe9d9]")}>{content.badge}</span>
            </div>
          </div>

          <div className={cn(heroContentClassName, "mt-3 shrink-0 lg:mt-4")}>
            <h1 className={cn(heroType.title, "mb-3 max-w-3xl text-white lg:mb-4")}>
              {content.titleLine1}
              <br />
              {content.titleArticle}
              <span className="text-brand-green">{content.titleHighlight}</span>
              {content.titleLine2 ? <> {content.titleLine2}</> : null}
            </h1>

            <p className={cn(heroType.subtitle, "mb-3 max-w-2xl text-[#dfe4ea]")}>
              {content.subtitle}
            </p>

            <p className={cn(heroType.subtitle, "mb-6 max-w-2xl text-[#dfe4ea] lg:mb-8")}>
              {content.subtitleLine2}
            </p>

            <ButtonLink href="#contacte" variant="secondary">
              {content.ctaPrimary}
            </ButtonLink>
          </div>
        </Container>

        <Container variant="tight" className="shrink-0 pb-6 lg:pb-8">
          <div className="mb-4 flex flex-wrap items-start justify-end gap-6 lg:mb-6 lg:gap-10">
            <div className="text-left">
              <p className={cn(heroType.fundedBy, "mb-2.5 text-[#c4ccd5]")}>
                {content.fundedBy}
              </p>
              <div className="mb-2 flex flex-col items-start gap-3">
                <HeroPartnerLogo
                  src={content.fseLogo.src}
                  alt={content.fseLogo.alt}
                  className="h-[52px] max-w-[283px]"
                />
                <HeroPartnerLogo
                  src={content.generalitatLogo.src}
                  alt={content.generalitatLogo.alt}
                  className="h-[48px] max-w-[211px] sm:h-[52px]"
                />
              </div>
              <p
                className={cn(
                  heroType.fundingNote,
                  "mt-2 max-w-[26rem] whitespace-pre-line text-[#9aa3ae]",
                )}
              >
                {content.fundingNote}
              </p>
            </div>

            <div className="text-left">
              <p className={cn(heroType.programBy, "mb-2.5 text-[#c4ccd5]")}>
                {content.programBy}
              </p>
              <HeroPartnerLogo
                src={content.pimecLogo.src}
                alt={content.pimecLogo.alt}
                className="h-9"
              />
              <div className="mt-4 flex flex-col items-start gap-4">
                <HeroPartnerLogo
                  src={content.programaPrimerLogo.src}
                  alt={content.programaPrimerLogo.alt}
                  className="h-[45px] max-w-[240px]"
                />
                <HeroPartnerLogo
                  src={content.xeLogo.src}
                  alt={content.xeLogo.alt}
                  className="h-[45px] max-w-[240px]"
                />
              </div>
            </div>
          </div>

          <div
            className={cn(
              heroType.stat,
              "flex flex-wrap gap-8 border-t border-white/12 pt-5 text-[#dfe4ea] lg:gap-12",
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
    </section>
  );
}
