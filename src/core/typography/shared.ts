import { font } from "@/core/typography/fonts";

export const sharedType = {
  brand: `${font.cyGrotesk} text-[18px] font-bold tracking-[0.18em]`,
  button: `${font.roboto} text-[15px] font-bold`,
  buttonSm: `${font.roboto} text-[13px] font-bold`,
  localeSwitcher: `${font.roboto} text-[13px] font-bold tracking-wider`,
} as const;
