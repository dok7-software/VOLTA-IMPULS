import { font } from "@/core/typography/fonts";

export const methodologyType = {
  title: `${font.cyGrotesk} text-[27px] font-bold tracking-tight sm:text-[32px] lg:text-[41px]`,
  subtitle: `${font.clearSans} max-w-2xl text-[16px] leading-snug sm:text-[18px]`,
  stepNumber: `${font.clearSans} text-[40px] leading-none font-bold sm:text-[50px] lg:text-[58px]`,
  stepTitle: `${font.clearSans} text-[17px] font-semibold sm:text-[22px]`,
  stepDescription: `${font.clearSansRegular} text-[13px] leading-relaxed sm:text-[14.5px]`,
  stepNote: `${font.clearSansRegular} text-[12.5px] leading-relaxed italic`,
} as const;
