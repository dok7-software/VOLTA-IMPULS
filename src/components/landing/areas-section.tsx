import type { AreaIcon, Dictionary } from "@/core/i18n/types";
import { areasType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { SectionLabel } from "@/components/landing/section-label";
import { cn } from "@/lib/utils";

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

  if (type === "leaf") {
    return (
      <svg {...props}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#1e1729]"
    >
      <div className="pointer-events-none absolute -top-28 -right-28 h-120 w-120 rounded-full bg-[radial-gradient(circle,rgba(23,212,121,.10),transparent_70%)]" />

      <Container className="relative py-14 sm:py-20 lg:py-30">
        <div className="mb-10 text-center sm:mb-16">
          <SectionLabel className={cn(areasType.label, "mb-7")}>{content.label}</SectionLabel>
          <h2 className={cn(areasType.title, "mb-5 text-white")}>
            {content.titleLine1}
            <br />
            {content.titleLine2}
          </h2>
          <p className={cn(areasType.description, "mx-auto max-w-2xl text-[#97a0ab]")}>
            {content.description}
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2">
          {content.items.map((area) => (
            <article
              key={area.title}
              className="rounded-2xl border border-white/7 bg-[#262038] p-8 lg:p-9"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <AreaIconSvg type={area.icon} />
              </div>
              <h3 className={cn(areasType.itemTitle, "mb-1.5 text-white")}>
                {area.title}
              </h3>
              <p className={cn(areasType.itemSubtitle, "mb-6 text-brand-green")}>
                {area.subtitle}
              </p>
              <ul className="flex flex-col gap-4">
                {area.bullets.map((item, idx) => (
                  <li
                    key={idx}
                    className={cn(areasType.itemBullet, "flex gap-3 text-[#9aa3ae]")}
                  >
                    <span className="mt-0.5 shrink-0 text-brand-green">●</span>
                    <span>
                      {item.sector ? (
                        <>
                          <strong className={cn(areasType.itemSector, "text-[#dde2e8]")}>
                            {item.sector}:
                          </strong>{" "}
                        </>
                      ) : null}
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
