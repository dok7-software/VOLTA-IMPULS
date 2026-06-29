import Image from "next/image";
import type { Dictionary } from "@/core/i18n/types";
import { heroType } from "@/core/typography";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";

const heroContentClassName =
  "w-full max-w-3xl md:ml-10 lg:ml-20 xl:ml-28";

type HeroSectionProps = {
  content: Dictionary["hero"];
};

function HeroPartnerLogo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={220}
      height={56}
      className={cn("h-8 w-auto max-w-44 object-contain sm:h-10 sm:max-w-52", className)}
    />
  );
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative -mt-16 flex h-dvh max-h-dvh flex-col overflow-hidden bg-[#0b0f14] pt-16 sm:-mt-24 sm:pt-24">
      <Image
        src="/images/hero.png"
        alt={content.imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(8,11,15,.45)] via-[rgba(8,11,15,.35)] to-[rgba(8,11,15,.78)]" />

      <div className="relative flex min-h-0 flex-1 flex-col">
        <Container
          variant="tight"
          className="flex flex-col py-4 @max-h-[820px]:py-3 sm:min-h-0 sm:flex-1 sm:py-8 lg:py-10"
        >
          <div className={cn(heroContentClassName, "shrink-0 pt-14 pb-14 sm:py-0")}>
            <div className="ml-4 inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-green/55 bg-[rgba(8,11,15,.35)] px-4 py-2 sm:ml-12 sm:px-5 sm:py-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_10px_#17d479]" />
              <span className={cn(heroType.badge, "text-[#cfe9d9]")}>
                {content.badge}
              </span>
            </div>
          </div>

          <div className={cn(heroContentClassName, "mt-2 shrink-0 pb-2 sm:mt-3 sm:pb-0 lg:mt-4")}>
            <h1 className={cn(heroType.title, "mb-2 max-w-3xl text-white sm:mb-3 lg:mb-4")}>
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

            <p className={cn(heroType.subtitle, "mb-2 max-w-2xl text-[#dfe4ea] sm:mb-3")}>
              {content.subtitle}
            </p>

            <p className={cn(heroType.subtitle, "mb-4 max-w-2xl text-[#dfe4ea] sm:mb-6 lg:mb-8")}>
              {content.subtitleLine2}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <ButtonLink href="#contacte" variant="secondary">
                {content.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="#programa" variant="outline-light">
                {content.ctaSecondary}
              </ButtonLink>
            </div>
          </div>

        </Container>

        <Container variant="tight" className="mt-16 shrink-0 pb-3 sm:mt-0 sm:pb-6 lg:pb-8">
          <div className="mb-3 grid w-full grid-cols-2 items-end gap-3 @max-h-[820px]:mb-2 sm:mb-4 sm:flex sm:flex-wrap sm:items-end sm:justify-end sm:gap-6 lg:mb-6 lg:gap-10">
            <div className="text-left">
              <p className={cn(heroType.fundedBy, "mb-1.5 text-[#c4ccd5] sm:mb-2.5")}>
                {content.fundedBy}
              </p>
              <div className="mb-1 flex flex-wrap items-center justify-start gap-2 sm:mb-2 sm:gap-4">
                <HeroPartnerLogo
                  src={content.fseLogo.src}
                  alt={content.fseLogo.alt}
                  className="h-6 w-auto max-w-36 sm:h-8 sm:max-w-44"
                />
                <HeroPartnerLogo
                  src={content.generalitatLogo.src}
                  alt={content.generalitatLogo.alt}
                  className="h-6 w-auto max-w-36 sm:h-10 sm:max-w-44 sm:h-11"
                />
              </div>
              <p
                className={cn(
                  heroType.fundingNote,
                  "hidden max-w-[24rem] whitespace-pre-line text-[#9aa3ae] sm:block sm:max-w-[26rem]",
                )}
              >
                {content.fundingNote}
              </p>
            </div>
            <div className="text-right">
              <p className={cn(heroType.programBy, "mb-1.5 text-[#c4ccd5] sm:mb-2.5")}>
                {content.programBy}
              </p>
              <HeroPartnerLogo
                src={content.pimecLogo.src}
                alt={content.pimecLogo.alt}
                className="ml-auto h-6 sm:ml-0 sm:h-9"
              />
            </div>
          </div>

          <div
            className={cn(
              heroType.stat,
              "flex flex-wrap gap-4 border-t border-white/12 pt-3 text-[#dfe4ea] @max-h-[820px]:gap-3 @max-h-[820px]:pt-2.5 sm:gap-8 sm:pt-5 lg:gap-12",
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
