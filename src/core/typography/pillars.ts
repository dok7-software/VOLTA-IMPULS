import { font } from "@/core/typography/fonts";

export const pillarsType = {
  title: `${font.cyGrotesk} text-3xl font-bold tracking-tight sm:text-4xl lg:text-[46px]`,
  itemHeading: `${font.cyGrotesk} text-xl font-bold tracking-tight sm:text-2xl lg:text-[26px]`,
  itemBody: `${font.clearSansRegular} text-base leading-relaxed sm:text-[17px]`,
} as const;
