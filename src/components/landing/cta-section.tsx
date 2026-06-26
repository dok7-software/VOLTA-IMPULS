import type { Dictionary } from "@/core/i18n/types";
import { ButtonLink } from "@/components/landing/button-link";
import { Container } from "@/components/landing/container";
import { SectionLabel } from "@/components/landing/section-label";

type CtaSectionProps = {
  content: Dictionary["cta"];
};

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section
      id="contacte"
      className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_70%_50%,rgba(56,224,123,.10),transparent_55%),#0b0f14]"
    >
      <Container className="py-24 text-center lg:py-30">
        <SectionLabel className="mb-7 tracking-[0.22em]">{content.label}</SectionLabel>
        <h2 className="mb-8 font-heading text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-[62px]">
          {content.titleLine1}
          <br />
          <span className="text-brand-green">{content.titleHighlight}</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#aeb6c0] sm:text-lg">
          {content.description}
        </p>
        <ButtonLink href="#contacte" variant="secondary" className="px-10">
          {content.button}
        </ButtonLink>
      </Container>
    </section>
  );
}
