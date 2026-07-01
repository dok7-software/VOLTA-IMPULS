import { font } from "@/core/typography/fonts";

export const footerType = {
  brand: `${font.cyGrotesk} text-[14.5px] font-bold tracking-[0.16em]`,
  body: `${font.clearSans} text-[12.5px]`,
  columnTitle: `${font.clearSans} text-[10px] tracking-[0.18em] uppercase`,
  link: `${font.clearSans} text-[12.5px]`,
  placeholder: `${font.clearSans} text-[10px]`,
  copyright: `${font.clearSans} text-[12.5px]`,
} as const;
