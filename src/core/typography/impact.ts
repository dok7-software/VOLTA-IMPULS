import { font } from "@/core/typography/fonts";

export const impactType = {
  label: `${font.inter} text-sm tracking-[0.2em] uppercase`,
  title: `${font.cyGrotesk} text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-[44px]`,
  description: `${font.inter} text-lg`,
  statValue: `${font.inter} text-5xl leading-none font-extrabold sm:text-6xl lg:text-7xl`,
  statUnit: `${font.inter} text-3xl`,
  statLabel: `${font.inter} text-[15px]`,
  badge: `${font.inter} text-[15px]`,
} as const;
