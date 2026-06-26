import type { Dictionary } from "@/core/i18n/types";
import { Container } from "@/components/landing/container";

type MethodologySectionProps = {
  content: Dictionary["methodology"];
};

export function MethodologySection({ content }: MethodologySectionProps) {
  return (
    <section
      id="metodologia"
      className="flex min-h-screen items-center bg-brand-cream text-[#16202a]"
    >
      <Container className="w-full py-24 lg:py-30">
        <h2 className="mb-16 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-[46px]">
          {content.titlePrefix}{" "}
          <span className="text-brand-green-dark">{content.titleHighlight}</span>
        </h2>

        <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
          {content.steps.map((step, index) => (
            <div key={step.number}>
              <p
                className={`mb-6 font-heading text-6xl leading-none font-bold lg:text-7xl ${
                  index === 0 ? "text-brand-green-dark" : "text-[#c3b9a3]"
                }`}
              >
                {step.number}
              </p>
              <div
                className="mb-7 h-1 rounded-sm"
                style={{
                  background:
                    step.progress === 100
                      ? "#1fa85c"
                      : `linear-gradient(90deg, #1fa85c ${step.progress}%, #d8cfbb ${step.progress}%)`,
                }}
              />
              <h3 className="mb-3.5 font-heading text-xl font-semibold sm:text-[25px]">
                {step.title}
              </h3>
              <p className="text-[17px] text-[#5a6470]">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
