import Image from "next/image";
import type { Dictionary } from "@/core/i18n/types";
import { heroType } from "@/core/typography";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";

const GENERALITAT_LOGO = "/images/generalitat.png";

type HeroSectionProps = {
  content: Dictionary["hero"];
};

function FundingLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center rounded-md bg-white px-3 py-2">
      <Image
        src={src}
        alt={alt}
        width={180}
        height={40}
        className="h-10 w-auto max-w-44 object-contain"
      />
    </div>
  );
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative -mt-24 flex min-h-screen flex-col overflow-hidden bg-[#0b0f14] pt-24">
      <Image
        src="/images/hero.png"
        alt={content.imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,11,15,.45)] via-[rgba(8,11,15,.35)] to-[rgba(8,11,15,.78)]" />

      <div className="relative flex flex-1 flex-col">
        <Container variant="tight" className="flex flex-1 flex-col justify-center py-10">
          <div className="w-full max-w-3xl md:ml-10 lg:ml-20 xl:ml-28">
            <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-green/55 bg-[rgba(8,11,15,.35)] px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_10px_#17d479]" />
              <span className={cn(heroType.badge, "text-[#cfe9d9]")}>
                {content.badge}
              </span>
            </div>

            <h1 className={cn(heroType.title, "mb-5 max-w-3xl text-white")}>
              {content.titleLine1}
              <br />
              {content.titleArticle}
              <span className="text-brand-green">{content.titleHighlight}</span>
              {content.titleLine2 ? (
                <>
                  {" "}
                  {content.titleLine2}
                </>
              ) : null}
            </h1>

            <p className={cn(heroType.subtitle, "mb-12 max-w-xl text-[#dfe4ea]")}>
              {content.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="#contacte" variant="secondary">
                {content.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="#programa" variant="outline-light">
                {content.ctaSecondary}
              </ButtonLink>
            </div>
          </div>
        </Container>

        <Container variant="tight" className="shrink-0 pb-8">
          <div className="mb-6 flex w-full flex-wrap items-end justify-end gap-8 lg:gap-10">
            <div className="text-right">
              <p className={cn(heroType.fundedBy, "mb-2.5 text-[#c4ccd5]")}>
                {content.fundedBy}
              </p>
              <div className="mb-2 flex flex-wrap items-center justify-end gap-3">
                <FundingLogo src={content.fseLogo.src} alt={content.fseLogo.alt} />
                <FundingLogo
                  src={GENERALITAT_LOGO}
                  alt={content.generalitatLogoAlt}
                />
              </div>
              <p className={cn(heroType.fundingNote, "ml-auto max-w-80 text-[#9aa3ae]")}>
                {content.fundingNote}
              </p>
            </div>
            <div className="text-right">
              <p className={cn(heroType.programBy, "mb-2.5 text-[#c4ccd5]")}>
                {content.programBy}
              </p>
              <p className={cn(heroType.programOrg, "text-white")}>
                {content.programOrg}
              </p>
            </div>
          </div>

          <div
            className={cn(
              heroType.stat,
              "flex flex-wrap gap-8 border-t border-white/12 pt-5 text-[#dfe4ea] sm:gap-12",
            )}
          >
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <span className="font-bold text-brand-green">{stat.value}</span> ·{" "}
                {stat.label}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
