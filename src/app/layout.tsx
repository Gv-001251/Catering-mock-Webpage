import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Watermark from "@/components/Watermark";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A2923",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pavithram Caterers & Wedding Planners | Luxury Wedding Feasts & Complete Arrangements",
  description:
    "A refined concept presentation by Lumer Labs for Pavithram Caterers and Wedding Planners. 30+ years of Kumbakonam culinary heritage, authentic South Indian wedding feasts, and complete turnkey mandapam wedding arrangements.",
  keywords: [
    "Pavithram Caterers and Wedding Planners",
    "Pavithram Caterers",
    "Wedding Planners Chennai",
    "Kumbakonam Catering",
    "South Indian Wedding Caterers Chennai",
    "Mandapam Floral Decoration Chennai",
    "Artisanal Seer Bakshanam",
    "Brahmin Wedding Feast",
    "Lumer Labs Concept",
  ],
  authors: [{ name: "Lumer Labs", url: "https://lumerlabs.com" }],
  openGraph: {
    title: "Pavithram Caterers & Wedding Planners — Premium Concept by Lumer Labs",
    description:
      "Hospitality, Rooted in Tradition. Discover our concept redesign for Pavithram Caterers and Wedding Planners featuring authentic South Indian wedding catering and turnkey wedding arrangements.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-gold/30 selection:text-forest-dark relative">
        {children}
        <Watermark />
      </body>
    </html>
  );
}
