import type { Dictionary } from "@/core/i18n/types";
import { impactType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { SectionLabel } from "@/components/landing/section-label";
import { cn } from "@/lib/utils";

function CheckIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-brand-green"
    >
      <path d="M20 6 9 17l-4-4" />
    </svg>
  );
}

type ImpactSectionProps = {
  content: Dictionary["impact"];
};

export function ImpactSection({ content }: ImpactSectionProps) {
  return (
    <section
      id="impacte"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#583357]"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-110 w-110 rounded-full bg-[radial-gradient(circle,rgba(100,62,87,.35),transparent_70%)]" />

      <Container className="relative py-24 lg:py-30">
        {content.label && (
          <SectionLabel className={cn(impactType.label, "mb-7")}>{content.label}</SectionLabel>
        )}
        <h2 className={cn(impactType.title, "mb-12 max-w-3xl text-white")}>
          {content.title}
        </h2>

        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#4a2b49] sm:grid sm:grid-cols-2">
          {content.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "px-8 py-12 text-center sm:px-10 sm:py-14",
                index === 0 && "border-b border-white/10 sm:border-r sm:border-b-0",
              )}
            >
              <p className={cn(impactType.statValue, "text-brand-green")}>
                {stat.value}
                <span className={impactType.statUnit}>{stat.unit}</span>
              </p>
              <p className={cn(impactType.statLabel, "mx-auto mt-3.5 max-w-xs text-[#c4bdd4]")}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {content.badges.map((badge) => (
            <div
              key={badge}
              className={cn(
                impactType.badge,
                "flex items-center gap-2.5 rounded-full border border-white/10 bg-[#4a2b49] px-5 py-3.5 text-[#e6e1f0]",
              )}
            >
              <CheckIcon />
              {badge}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
