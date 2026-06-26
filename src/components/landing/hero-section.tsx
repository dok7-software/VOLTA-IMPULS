import Image from "next/image";
import type { Dictionary } from "@/core/i18n/types";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";

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
        <Container className="flex flex-1 flex-col justify-center py-10">
          <div className="w-full max-w-3xl md:ml-10 lg:ml-20 xl:ml-28">
            <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-brand-green/55 bg-[rgba(8,11,15,.35)] px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_10px_#38e07b]" />
              <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#cfe9d9] uppercase">
                {content.badge}
              </span>
            </div>

            <h1 className="mb-5 max-w-3xl font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[62px]">
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

            <p className="mb-12 max-w-xl text-lg font-medium text-[#dfe4ea] sm:text-[22px] sm:leading-snug">
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

        <Container className="shrink-0 pb-8">
          <div className="mb-6 flex w-full flex-wrap items-end justify-end gap-8 lg:gap-10">
            <div className="text-right">
              <p className="mb-2.5 font-mono text-xs tracking-[0.14em] text-[#c4ccd5] uppercase">
                {content.fundedBy}
              </p>
              <div className="mb-2 flex flex-wrap items-center justify-end gap-3">
                <FundingLogo src={content.fseLogo.src} alt={content.fseLogo.alt} />
                <FundingLogo
                  src={GENERALITAT_LOGO}
                  alt={content.generalitatLogoAlt}
                />
              </div>
              <p className="ml-auto max-w-80 text-[11px] leading-snug text-[#9aa3ae] italic">
                {content.fundingNote}
              </p>
            </div>
            <div className="text-right">
              <p className="mb-2.5 font-mono text-xs tracking-[0.14em] text-[#c4ccd5] uppercase">
                {content.programBy}
              </p>
              <p className="font-body text-xl font-semibold tracking-tight text-white lowercase">
                {content.programOrg}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-8 border-t border-white/12 pt-5 text-[15px] text-[#dfe4ea] sm:gap-12">
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
