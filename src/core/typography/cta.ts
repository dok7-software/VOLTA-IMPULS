import { font } from "@/core/typography/fonts";

export const ctaType = {
  label: `${font.clearSans} text-[12.5px] tracking-[0.22em] uppercase`,
  title: `${font.cyGrotesk} text-[27px] leading-tight font-bold tracking-tight sm:text-[32px] lg:text-[56px]`,
  description: `${font.clearSans} text-[14.5px] leading-relaxed sm:text-[16px]`,
  formLabel: `${font.clearSans} text-[12.5px] font-medium`,
  formInput: `${font.clearSans} text-[13.5px]`,
  formConsent: `${font.clearSans} text-[12.5px] leading-snug`,
  formMessage: `${font.clearSans} text-[12.5px] font-medium`,
  formSubmit: `${font.roboto} text-[15px] font-bold`,
} as const;
