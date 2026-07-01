import { font } from "@/core/typography/fonts";

export const heroType = {
  badge: `${font.roboto} text-[11px] font-bold tracking-[0.16em] uppercase`,
  title: `${font.cyGrotesk} text-[clamp(1.1rem,3.2vw,2.75rem)] leading-[1.08] font-bold tracking-tight sm:text-[2rem] lg:text-[2.75rem]`,
  subtitle: `${font.clearSans} text-[13px] font-medium leading-snug sm:text-[15px] lg:text-[15.5px]`,
  fundedBy: `${font.clearSans} text-[11px] tracking-[0.14em] uppercase`,
  fundingNote: `${font.neueMontreal} text-[10px] leading-snug italic`,
  programBy: `${font.clearSans} text-[11px] tracking-[0.14em] uppercase`,
  stat: `${font.roboto} text-[13.5px]`,
} as const;
