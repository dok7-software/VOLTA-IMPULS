import { font } from "@/core/typography/fonts";

export const aboutType = {
  label: `${font.clearSans} text-[12.5px] tracking-[0.2em] uppercase`,
  title: `${font.cyGrotesk} text-[27px] leading-tight font-bold tracking-tight sm:text-[32px] lg:text-[45px]`,
  paragraph: `${font.clearSansRegular} text-[13.5px] sm:text-[16px]`,
  cardTitle: `${font.clearSans} text-[16px] font-bold`,
  cardText: `${font.clearSansRegular} text-[13.5px]`,
  diagram: `${font.cyGrotesk} text-[18px] font-bold tracking-[0.22em]`,
} as const;
