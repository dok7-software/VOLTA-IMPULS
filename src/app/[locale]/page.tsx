import { notFound } from "next/navigation";
import { isLocale } from "@/core/i18n/config";
import { getDictionary } from "@/core/i18n/get-dictionary";
import { AboutSection } from "@/components/landing/about-section";
import { AreasSection } from "@/components/landing/areas-section";
import { CollaboratorsSection } from "@/components/landing/collaborators-section";
import { CtaSection } from "@/components/landing/cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ImpactSection } from "@/components/landing/impact-section";
import { LandingFooter } from "@/components/landing/footer";
import { MethodologySection } from "@/components/landing/methodology-section";
import { PillarsSection } from "@/components/landing/pillars-section";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <HeroSection content={dict.hero} />
      <AboutSection content={dict.about} />
      <AreasSection content={dict.areas} />
      <MethodologySection content={dict.methodology} />
      <PillarsSection content={dict.pillars} />
      <ImpactSection content={dict.impact} />
      <CtaSection locale={locale} content={dict.cta} />
      <CollaboratorsSection content={dict.collaborators} />
      <LandingFooter brand={dict.brand} content={dict.footer} />
    </>
  );
}
