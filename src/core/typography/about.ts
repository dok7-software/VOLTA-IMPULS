import { font } from "@/core/typography/fonts";

export const aboutType = {
  label: `${font.clearSans} text-sm tracking-[0.2em] uppercase`,
  title: `${font.cyGrotesk} text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[50px]`,
  paragraph: `${font.clearSansRegular} text-[15px] sm:text-lg`,
  cardTitle: `${font.clearSans} text-lg font-bold`,
  cardText: `${font.clearSansRegular} text-[15px]`,
  diagram: `${font.cyGrotesk} text-xl font-bold tracking-[0.22em]`,
} as const;
