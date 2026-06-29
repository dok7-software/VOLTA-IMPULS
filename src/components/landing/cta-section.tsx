import type { Locale } from "@/core/i18n/config";
import type { Dictionary } from "@/core/i18n/types";
import { ctaType } from "@/core/typography";
import { Container } from "@/components/landing/container";
import { InscriptionForm } from "@/components/landing/inscription-form";
import { SectionLabel } from "@/components/landing/section-label";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  locale: Locale;
  content: Dictionary["cta"];
};

export function CtaSection({ locale, content }: CtaSectionProps) {
  return (
    <section
      id="contacte"
      className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_70%_50%,rgba(23,212,121,.10),transparent_55%),#0b0f14]"
    >
      <Container className="py-14 sm:py-20 lg:py-30">
        <div className="text-center">
          <SectionLabel className={cn(ctaType.label, "mb-5 sm:mb-7")}>{content.label}</SectionLabel>
          <h2 className={cn(ctaType.title, "mb-5 text-white sm:mb-8")}>
            {content.titleLine1}
            <br />
            <span className="text-brand-green">{content.titleHighlight}</span>
          </h2>
          <p className={cn(ctaType.description, "mx-auto mb-8 max-w-2xl text-[#aeb6c0] sm:mb-10")}>
            {content.description}
          </p>
        </div>

        <InscriptionForm locale={locale} form={content.form} />
      </Container>
    </section>
  );
}
