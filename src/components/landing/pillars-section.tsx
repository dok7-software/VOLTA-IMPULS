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
      <Container className="w-full py-12 sm:py-16 lg:py-24">
        <div>
          <h2 className={cn(pillarsType.title, "mb-6 text-center sm:mb-10 lg:mb-14")}>
            {content.titlePrefix}{" "}
            <span className="text-brand-green-dark">{content.titleHighlight}</span>
          </h2>

          <div className="grid gap-7 sm:grid-cols-3">
            {content.items.map((item, i) => (
              <article
                key={i}
                className="rounded-2xl border border-[#e4dccb] bg-[#fbf9f3] px-5 py-7 lg:px-7 lg:py-9"
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
