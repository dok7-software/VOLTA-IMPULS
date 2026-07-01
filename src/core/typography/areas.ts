import { font } from "@/core/typography/fonts";

export const areasType = {
  label: `${font.bricolage} text-[12.5px] tracking-[0.2em] uppercase`,
  title: `${font.cyGrotesk} text-[27px] leading-tight font-bold tracking-tight sm:text-[32px] lg:text-[41px]`,
  description: `${font.bricolage} text-[16px]`,
  itemTitle: `${font.bricolage} text-[18px] font-semibold sm:text-[21px]`,
  itemSubtitle: `${font.bricolage} text-[12.5px] font-semibold`,
  itemBullet: `${font.bricolage} text-[14px]`,
  itemSector: `${font.bricolage} font-semibold`,
} as const;
