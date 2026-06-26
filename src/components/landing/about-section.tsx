import type { Dictionary } from "@/core/i18n/types";
import { aboutType } from "@/core/typography";
import { CircularDiagram } from "@/components/landing/circular-diagram";
import { Container } from "@/components/landing/container";
import { SectionLabel } from "@/components/landing/section-label";
import { cn } from "@/lib/utils";

type AboutSectionProps = {
  content: Dictionary["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="programa"
      className="flex min-h-screen items-center bg-brand-cream text-brand-ink"
    >
      <Container className="grid w-full items-center gap-16 py-24 lg:grid-cols-2 lg:gap-20 lg:py-30">
        <div>
          <SectionLabel variant="cream" className={cn(aboutType.label, "mb-7")}>
            {content.label}
          </SectionLabel>
          <h2 className={cn(aboutType.title, "mb-9")}>
            {content.titlePrefix}{" "}
            <span className="text-brand-green-dark">{content.titleHighlight}</span>
          </h2>
          {content.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className={cn(aboutType.paragraph, "mb-6 text-brand-ink last:mb-0")}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-3xl border border-white/7 bg-[#0d1218] p-8 lg:p-10">
          <div className="flex h-72 items-center justify-center sm:h-90">
            <CircularDiagram />
          </div>
          <div className="rounded-2xl bg-brand-cream p-5 text-brand-ink sm:p-6">
            <p className={cn(aboutType.cardTitle, "mb-1.5")}>{content.cardTitle}</p>
            <p className={cn(aboutType.cardText, "text-brand-ink")}>{content.cardText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
