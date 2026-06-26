import type { Dictionary } from "@/core/i18n/types";
import { Container } from "@/components/landing/container";
import { SectionLabel } from "@/components/landing/section-label";

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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-linear-to-br from-[#2a2040] via-[#1d1730] to-[#241733]"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-110 w-110 rounded-full bg-[radial-gradient(circle,rgba(173,86,224,.22),transparent_70%)]" />

      <Container className="relative grid items-center gap-12 pt-16 pb-8 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionLabel className="mb-7">{content.label}</SectionLabel>
          <h2 className="mb-5 font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-[44px]">
            {content.title}
          </h2>
          <p className="text-lg text-[#b9b2cc]">{content.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {content.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-[rgba(15,12,26,.45)] p-8 text-center sm:p-10"
            >
              <p className="font-heading text-6xl leading-none font-extrabold text-brand-green lg:text-7xl">
                {stat.value}
                <span className="text-3xl">{stat.unit}</span>
              </p>
              <p className="mt-3.5 text-[15px] text-[#c4bdd4]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="relative flex flex-wrap gap-4 pb-16">
        {content.badges.map((badge) => (
          <div
            key={badge}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/6 px-5 py-3.5 text-[15px] text-[#e6e1f0]"
          >
            <CheckIcon />
            {badge}
          </div>
        ))}
      </Container>
    </section>
  );
}
