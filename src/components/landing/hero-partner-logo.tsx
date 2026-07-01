import Image from "next/image";
import { cn } from "@/lib/utils";

type HeroPartnerLogoProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export function HeroPartnerLogo({
  src,
  alt,
  className,
  width = 220,
  height = 56,
}: HeroPartnerLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "w-auto object-contain",
        className ?? "h-8 max-w-44 sm:h-10 sm:max-w-52",
      )}
    />
  );
}
