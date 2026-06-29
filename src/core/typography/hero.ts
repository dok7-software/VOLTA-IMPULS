import { font } from "@/core/typography/fonts";

export const heroType = {
  badge: `${font.roboto} text-xs font-bold tracking-[0.16em] uppercase`,
  title: `${font.cyGrotesk} text-[clamp(1.25rem,3.5vw,3rem)] leading-[1.08] font-bold tracking-tight sm:text-4xl lg:text-5xl`,
  subtitle: `${font.clearSans} text-sm font-medium leading-snug sm:text-base lg:text-[17px]`,
  fundedBy: `${font.clearSans} text-xs tracking-[0.14em] uppercase`,
  fundingNote: `${font.neueMontreal} text-[11px] leading-snug italic`,
  programBy: `${font.clearSans} text-xs tracking-[0.14em] uppercase`,
  stat: `${font.roboto} text-[15px]`,
} as const;
