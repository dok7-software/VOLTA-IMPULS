import type { AreaIcon, Dictionary } from "@/core/i18n/types";
import { Container } from "@/components/landing/container";
import { SectionLabel } from "@/components/landing/section-label";

function AreaIconSvg({ type }: { type: AreaIcon }) {
  const props = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "sun") {
    return (
      <svg {...props}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg {...props}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

type AreasSectionProps = {
  content: Dictionary["areas"];
};

export function AreasSection({ content }: AreasSectionProps) {
  return (
    <section
      id="ambits"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1218]"
    >
      <div className="pointer-events-none absolute -top-28 -right-28 h-120 w-120 rounded-full bg-[radial-gradient(circle,rgba(56,224,123,.10),transparent_70%)]" />

      <Container className="relative py-24 lg:py-30">
        <SectionLabel className="mb-7">{content.label}</SectionLabel>
        <h2 className="mb-5 font-heading text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-[46px]">
          {content.titleLine1}
          <br />
          {content.titleLine2}
        </h2>
        <p className="mb-16 max-w-2xl text-lg text-[#97a0ab]">{content.description}</p>

        <div className="grid gap-7 lg:grid-cols-3">
          {content.items.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-white/7 bg-[#151a21] p-8 lg:p-9"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <AreaIconSvg type={area.icon} />
              </div>
              <h3 className="mb-1.5 font-heading text-xl font-semibold text-white sm:text-[23px]">
                {area.title}
              </h3>
              <p className="mb-6 text-sm font-semibold text-brand-green">{area.subtitle}</p>
              <ul className="flex flex-col gap-4">
                {area.bullets.map((item) => (
                  <li
                    key={item.sector}
                    className="flex gap-3 text-[15.5px] text-[#9aa3ae]"
                  >
                    <span className="text-brand-green">●</span>
                    <span>
                      <strong className="font-semibold text-[#dde2e8]">
                        {item.sector}:
                      </strong>{" "}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
