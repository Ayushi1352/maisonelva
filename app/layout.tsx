import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import { MaisonElvaTemplateData, RootLayoutProps, ThemeStyle } from "@/types/templates.types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/data";
import "./globals.css";

const templateData: MaisonElvaTemplateData = rawData;
const theme = templateData.common.theme;

// Fonts from templates.json (common.theme); colours live in globals.css.
const themeStyle: ThemeStyle = {
  "--font-primary": theme.fontPrimary,
  "--font-heading": theme.fontHeading,
  "--font-navigation": theme.fontNavigation,
  "--font-secondary": theme.fontSecondary,
  "--font-display": theme.fontDisplay,
  "--font-editorial": theme.fontEditorial,
  "--font-decorative": theme.fontDecorative,
  "--font-ui": theme.fontUi,
};

export const metadata: Metadata = {
  title: {
    default: templateData.common.metadata.title,
    template: `%s | ${site.navbar.brand.name}`,
  },
  description: templateData.common.metadata.description,
  icons: {
    icon: templateData.common.metadata.icon,
    shortcut: templateData.common.metadata.icon,
    apple: templateData.common.metadata.icon,
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang={templateData.common.metadata.language}
      data-scroll-behavior="smooth"
      style={themeStyle}
      // Root font size: 16px, and from 1024px it follows the viewport width (16px at 1920px) so the 1920px design
      // scales as a whole. Capped at 16px: wider screens and a zoomed-out browser keep the 1920px design, centred.
      className="h-full text-[16px] motion-reduce:scroll-auto lg:text-[length:min(16px,calc(100vw/120))]"
    >
      <head>
        <link rel="stylesheet" href={theme.fontStylesheet} />
      </head>
      <body className="min-h-full antialiased [&_img]:select-none">
        {/*
          The whole site sits in one frame, at most 1920px wide and centred. On wider screens or when the
          browser is zoomed out the page stays in the middle instead of stretching.
          --section-gap is the one vertical gap between every page section (and before the footer):
          64px mobile, 80px tablet, then 9rem of the scaled desktop design (144px at 1920px).
        */}
        <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col overflow-x-clip bg-[var(--color-bg-main)] [--section-gap:4rem] md:[--section-gap:5rem] lg:[--section-gap:9rem]">
          <Navbar data={site.navbar} />
          <main className="flex flex-1 flex-col gap-[var(--section-gap)]">
            <ScrollToTop>
              {children}
              <ScrollReveal />
            </ScrollToTop>
          </main>
          <Footer data={site.footer} />
        </div>
      </body>
    </html>
  );
}
