import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Cinzel,
} from "next/font/google";

import "./globals.css";

import SiteChrome from "@/components/SiteChrome";
import InspectPanel from "@/components/InspectPanel";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palden Tamang — Software Engineer",
  description:
    "Portfolio of Palden Tamang — software engineer interested in backend systems, system design, and cybersecurity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${cinzel.variable}`}
      >
        <SiteChrome>
          {children}
        </SiteChrome>

        <InspectPanel />
      </body>
    </html>
  );
}