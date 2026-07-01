import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale, isLocale } from "@/core/i18n/config";
import { getDictionary } from "@/core/i18n/get-dictionary";
import { SetHtmlLang } from "@/components/i18n/set-html-lang";
import { LandingHeader } from "@/components/landing/header";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);

  return (
    <>
      <SetHtmlLang locale={locale as Locale} />
      <div className="relative bg-[#0b0f14] text-[#e8ebef] antialiased">
        <LandingHeader locale={locale as Locale} brand={dict.brand} nav={dict.nav} />
        {children}
      </div>
    </>
  );
}
