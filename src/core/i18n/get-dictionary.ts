import { defaultLocale, isLocale, type Locale } from "@/core/i18n/config";
import ca from "@/core/i18n/locales/ca";
import es from "@/core/i18n/locales/es";
import type { Dictionary } from "@/core/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { ca, es };

export function getDictionary(locale: string): Dictionary {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}
