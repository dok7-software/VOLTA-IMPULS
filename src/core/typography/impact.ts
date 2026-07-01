import { font } from "@/core/typography/fonts";

export const impactType = {
  label: `${font.inter} text-[12.5px] tracking-[0.2em] uppercase`,
  title: `${font.cyGrotesk} text-[27px] leading-tight font-bold tracking-tight sm:text-[32px] lg:text-[40px]`,
  description: `${font.inter} text-[16px]`,
  statValue: `${font.inter} text-[40px] leading-none font-extrabold sm:text-[50px] lg:text-[58px]`,
  statUnit: `${font.inter} text-[27px]`,
  statLabel: `${font.inter} text-[13.5px]`,
  badge: `${font.inter} text-[13.5px]`,
} as const;
