import type { Dictionary } from "@/core/i18n/types";
import { CircularDiagram } from "@/components/landing/circular-diagram";
import { Container } from "@/components/landing/container";
import { SectionLabel } from "@/components/landing/section-label";

type AboutSectionProps = {
  content: Dictionary["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="programa"
      className="flex min-h-screen items-center bg-brand-cream text-[#16202a]"
    >
      <Container className="grid w-full items-center gap-16 py-24 lg:grid-cols-2 lg:gap-20 lg:py-30">
        <div>
          <SectionLabel variant="cream" className="mb-7">
            {content.label}
          </SectionLabel>
          <h2 className="mb-9 font-heading text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[50px]">
            {content.titlePrefix}{" "}
            <span className="text-brand-green-dark">{content.titleHighlight}</span>
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mb-6 text-lg text-[#4b5560] last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-3xl border border-white/7 bg-[#0d1218] p-8 lg:p-10">
          <div className="flex h-72 items-center justify-center sm:h-90">
            <CircularDiagram />
          </div>
          <div className="rounded-2xl bg-brand-cream p-5 text-[#16202a] sm:p-6">
            <p className="mb-1.5 font-heading text-lg font-bold">{content.cardTitle}</p>
            <p className="text-[15px] text-[#5a6470]">{content.cardText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
