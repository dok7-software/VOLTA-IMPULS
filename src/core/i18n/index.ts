// Re-export i18n types for use outside the i18n module.
export type { Dictionary } from "@/core/i18n/types";
export type { Locale } from "@/core/i18n/config";
export { locales, defaultLocale, isLocale } from "@/core/i18n/config";
export { getDictionary } from "@/core/i18n/get-dictionary";
