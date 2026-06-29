import type { Dictionary } from "@/core/i18n/types";
import { pillarsType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";

type PillarsSectionProps = {
  content: Dictionary["pillars"];
};

export function PillarsSection({ content }: PillarsSectionProps) {
  return (
    <section
      id="pilars"
      className="flex min-h-screen items-center bg-[#efe9dc] text-brand-ink"
    >
      <Container className="w-full py-14 sm:py-20 lg:py-30">
        <div>
          <h2 className={cn(pillarsType.title, "mb-8 text-center sm:mb-12 lg:mb-16")}>
            {content.titlePrefix}{" "}
            <span className="text-brand-green-dark">{content.titleHighlight}</span>
          </h2>

          <div className="grid gap-7 sm:grid-cols-3">
            {content.items.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-[#e4dccb] bg-[#fbf9f3] px-6 py-8 lg:px-8 lg:py-10"
              >
                <h3 className={cn(pillarsType.itemHeading, "mb-4 text-brand-ink")}>
                  {item.heading}
                </h3>
                <p className={cn(pillarsType.itemBody, "text-brand-ink/75")}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
