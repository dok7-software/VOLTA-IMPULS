import type { Dictionary } from "@/core/i18n/types";
import { aboutType } from "@/core/typography";
import { CircularDiagram } from "@/components/landing/circular-diagram";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";

type AboutSectionProps = {
  content: Dictionary["about"];
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section
      id="programa"
      className="flex min-h-screen items-center overflow-hidden bg-brand-cream text-brand-ink"
    >
      <Container className="grid w-full items-center gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <h2 className={cn(aboutType.title, "mb-5 sm:mb-9")}>
            {content.label.split("Circular Impuls?").map((part, i, arr) => (
              i < arr.length - 1 ? (
                <span key={i}>{part}<span className="text-brand-green-dark">Circular Impuls?</span></span>
              ) : part
            ))}
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

        <div className="rounded-3xl border border-white/7 bg-[#0d1218] p-6 lg:p-8">
          <div className="flex h-48 items-center justify-center sm:h-64 lg:h-80">
            <CircularDiagram />
          </div>
          <div className="rounded-2xl bg-brand-cream p-4 text-brand-ink sm:p-5">
            <p className={cn(aboutType.cardTitle, "mb-1.5")}>{content.cardTitle}</p>
            <p className={cn(aboutType.cardText, "text-brand-ink")}>{content.cardText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
