import { font } from "@/core/typography/fonts";

export const methodologyType = {
  title: `${font.cyGrotesk} text-3xl font-bold tracking-tight sm:text-4xl lg:text-[46px]`,
  subtitle: `${font.clearSans} max-w-2xl text-lg leading-snug sm:text-xl`,
  stepNumber: `${font.clearSans} text-6xl leading-none font-bold lg:text-7xl`,
  stepTitle: `${font.clearSans} text-xl font-semibold sm:text-[25px]`,
  stepDescription: `${font.clearSansRegular} text-[16px] leading-relaxed`,
  stepNote: `${font.clearSansRegular} text-[14px] leading-relaxed italic`,
} as const;
