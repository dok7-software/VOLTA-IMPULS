import { font } from "@/core/typography/fonts";

export const methodologyType = {
  title: `${font.cyGrotesk} text-3xl font-bold tracking-tight sm:text-4xl lg:text-[46px]`,
  subtitle: `${font.clearSans} max-w-2xl text-lg leading-snug sm:text-xl`,
  stepNumber: `${font.clearSans} text-5xl leading-none font-bold sm:text-6xl lg:text-7xl`,
  stepTitle: `${font.clearSans} text-[19px] font-semibold sm:text-xl sm:text-[25px]`,
  stepDescription: `${font.clearSansRegular} text-[14.5px] leading-relaxed sm:text-[16px]`,
  stepNote: `${font.clearSansRegular} text-[14px] leading-relaxed italic`,
} as const;
