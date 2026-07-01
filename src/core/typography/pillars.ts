import { font } from "@/core/typography/fonts";

export const pillarsType = {
  title: `${font.cyGrotesk} text-[27px] font-bold tracking-tight sm:text-[32px] lg:text-[41px]`,
  itemHeading: `${font.cyGrotesk} text-[18px] font-bold tracking-tight sm:text-[22px] lg:text-[23px]`,
  itemBody: `${font.clearSansRegular} text-[14.5px] leading-relaxed sm:text-[15.5px]`,
} as const;
