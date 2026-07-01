"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/core/i18n/types";
import { methodologyType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { cn } from "@/lib/utils";

type Step = Dictionary["methodology"]["steps"][number];

function StepCard({ step }: { step: Step }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <p
        className={cn(
          methodologyType.stepNumber,
          "mb-4 transition-colors duration-700 sm:mb-6",
          active ? "text-brand-green-dark" : "text-[#c3b9a3]",
        )}
      >
        {step.number}
      </p>

      <div className="mb-7 h-1 overflow-hidden rounded-sm bg-[#d8cfbb]">
        <div
          className="h-full rounded-sm bg-brand-green-dark transition-all duration-1000 ease-out"
          style={{ width: active ? `${step.progress}%` : "0%" }}
        />
      </div>

      <h3 className={cn(methodologyType.stepTitle, "mb-3.5")}>
        {step.title}
      </h3>
      <p className={cn(methodologyType.stepDescription, "mb-3 text-brand-ink")}>
        {step.description}
      </p>
      {step.note && (
        <p className={cn(methodologyType.stepNote, "text-brand-ink/70")}>
          {step.note}
        </p>
      )}
    </div>
  );
}

type MethodologySectionProps = {
  content: Dictionary["methodology"];
};

export function MethodologySection({ content }: MethodologySectionProps) {
  return (
    <section
      id="metodologia"
      className="flex min-h-screen items-center bg-brand-cream text-brand-ink"
    >
      <Container className="w-full py-12 sm:py-16 lg:py-24">
        <h2 className={cn(methodologyType.title, "mb-3 sm:mb-5")}>
          {content.titlePrefix}{" "}
          <span className="text-brand-green-dark">{content.titleHighlight}</span>
        </h2>
        <p className={cn(methodologyType.subtitle, "mb-8 text-brand-ink sm:mb-12")}>
          {content.subtitle}
        </p>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-10 lg:gap-12">
          {content.steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}
