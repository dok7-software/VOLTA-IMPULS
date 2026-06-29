import { font } from "@/core/typography/fonts";

export const ctaType = {
  label: `${font.clearSans} text-sm tracking-[0.22em] uppercase`,
  title: `${font.cyGrotesk} text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[62px]`,
  description: `${font.clearSans} text-base leading-relaxed sm:text-lg`,
  formLabel: `${font.clearSans} text-sm font-medium`,
  formInput: `${font.clearSans} text-[15px]`,
  formConsent: `${font.clearSans} text-sm leading-snug`,
  formMessage: `${font.clearSans} text-sm font-medium`,
  formSubmit: `${font.roboto} text-base font-bold`,
} as const;
