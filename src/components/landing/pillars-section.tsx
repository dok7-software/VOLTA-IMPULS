import type { Dictionary, PillarIcon } from "@/core/i18n/types";
import { Container } from "@/components/landing/container";

function PillarIconSvg({ type }: { type: PillarIcon }) {
  const props = {
    width: 42,
    height: 42,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...props}>
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </svg>
      );
    case "flask":
      return (
        <svg {...props}>
          <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
          <path d="M6.453 15h11.094" />
          <path d="M8.5 2h7" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...props}>
          <path d="m11 17 2 2a1 1 0 1 0 3-3" />
          <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
          <path d="m21 3 1 11h-2" />
          <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
          <path d="M3 4h8" />
        </svg>
      );
  }
}

type PillarsSectionProps = {
  content: Dictionary["pillars"];
};

export function PillarsSection({ content }: PillarsSectionProps) {
  return (
    <section
      id="pilars"
      className="flex min-h-screen items-center bg-[#efe9dc] text-[#16202a]"
    >
      <Container className="w-full py-24 lg:py-30">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[46px]">
          {content.titlePrefix}{" "}
          <span className="text-brand-green-dark">{content.titleHighlight}</span>
        </h2>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-[#e4dccb] bg-[#fbf9f3] px-6 py-10 text-center"
            >
              <div
                className={`mb-5 flex justify-center ${
                  pillar.accent === "green" ? "text-brand-green-dark" : "text-[#3a2d52]"
                }`}
              >
                <PillarIconSvg type={pillar.icon} />
              </div>
              <h3
                className={`mb-3.5 font-heading text-lg font-bold sm:text-[21px] ${
                  pillar.accent === "green" ? "text-brand-green-dark" : "text-[#3a2d52]"
                }`}
              >
                {pillar.title}
              </h3>
              <p className="text-[15.5px] text-[#5a6470]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
