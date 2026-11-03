import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Google_Sans, Libre_Caslon_Text, Marcellus, Newsreader, Playfair_Display, Poppins } from "next/font/google";
import rawData from "@/data/templates.json";
import type { JewelleryTemplateData } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-playfair" });
const caslon = Libre_Caslon_Text({ subsets: ["latin"], weight: ["400", "700"], style: ["normal"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-caslon" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-cormorant" });
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-newsreader" });
const marcellus = Marcellus({ subsets: ["latin"], weight: ["400"], style: ["normal"], display: "swap", fallback: ["Georgia", "serif"], variable: "--font-marcellus" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], style: ["normal"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-poppins" });
const gsans = Google_Sans({ subsets: ["latin"], weight: ["400", "500"], style: ["normal"], display: "swap", fallback: ["Arial", "sans-serif"], variable: "--font-gsans" });

const templateData: JewelleryTemplateData = rawData;
const sectionData = templateData.categories.Jewellery.sections;
const commonData = templateData.common;

const fontVariables = {
  "--font-primary": commonData.theme.fonts.primary,
  "--font-heading": commonData.theme.fonts.heading,
  "--font-navigation": commonData.theme.fonts.navigation,
  "--font-secondary": commonData.theme.fonts.secondary,
  "--font-display": commonData.theme.fonts.display,
  "--font-editorial": commonData.theme.fonts.editorial,
  "--font-decorative": commonData.theme.fonts.decorative,
  "--font-ui": commonData.theme.fonts.ui,
} as CSSProperties;

export const metadata: Metadata = {
  title: {
    default: commonData.metadata.title,
    template: `%s | ${commonData.metadata.siteName}`,
  },
  description: commonData.metadata.description,
  icons: {
    icon: commonData.metadata.icon,
    shortcut: commonData.metadata.icon,
    apple: commonData.metadata.icon,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={commonData.metadata.lang}
      data-scroll-behavior="smooth"
      style={fontVariables}
      // Root font size: 16px, and from 1024px it follows the viewport width (16px at 1920px) so the 1920px design
      // scales as a whole. Capped at 16px: wider screens and a zoomed-out browser keep the 1920px design, centred.
      className={`${playfair.variable} ${caslon.variable} ${cormorant.variable} ${newsreader.variable} ${marcellus.variable} ${poppins.variable} ${gsans.variable} h-full text-[16px] motion-reduce:scroll-auto lg:text-[length:min(16px,calc(100vw/120))]`}
    >
      <body className="min-h-full antialiased [&_img]:select-none">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. On wider screens or when the
          browser is zoomed out the page stays in the middle instead of stretching.
          --section-gap is the one vertical gap between every page section (and before the footer):
          64px mobile, 80px tablet, then 9rem of the scaled desktop design (144px at 1920px).
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col overflow-x-clip bg-[var(--color-bg-main)] [--section-gap:4rem] md:[--section-gap:5rem] lg:[--section-gap:9rem]">
          <Header data={sectionData.Header?.variants?.JewelleryHeader1} />
          <ScrollToTop>
            {children}
            <ScrollReveal />
          </ScrollToTop>
          <Footer data={commonData.Footer} />
        </div>
      </body>
    </html>
  );
}
