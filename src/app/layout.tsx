import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      className={`${plusJakarta.variable} ${sora.variable} ${spaceMono.variable} h-full`}
    >
      <body className="min-h-full font-body">{children}</body>
    </html>
  );
}
