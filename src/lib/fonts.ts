import {
  Bricolage_Grotesque,
  Inter,
  Roboto,
} from "next/font/google";
import localFont from "next/font/local";

export const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fontBricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const fontNeueMontreal = localFont({
  src: "../fonts/Neue Montreal Regular 400.woff2",
  weight: "400",
  variable: "--font-neue-montreal",
});

export const fontClearSans = localFont({
  src: "../fonts/ClearSans-Bold.woff2",
  weight: "700",
  variable: "--font-clear-sans",
});

export const fontClearSansRegular = localFont({
  src: "../fonts/ClearSans-Regular.ttf",
  weight: "400",
  variable: "--font-clear-sans-regular",
});

export const fontCyGrotesk = localFont({
  src: "../fonts/CyGrotesk-GrandBold.woff2",
  weight: "700",
  variable: "--font-cy-grotesk",
});

export const fontVariables = [
  fontRoboto.variable,
  fontInter.variable,
  fontBricolage.variable,
  fontNeueMontreal.variable,
  fontClearSans.variable,
  fontClearSansRegular.variable,
  fontCyGrotesk.variable,
].join(" ");
