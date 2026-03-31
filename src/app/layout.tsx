import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://hercaregynecology.com"
  ),
  title: {
    default: "HerCare Gynecology — Dr. Terri Alexander, MD",
    template: "%s | HerCare Gynecology",
  },
  description:
    "A new kind of gynecology practice in Naperville, IL — where integrative care, genuine listening, and evidence-based medicine meet to support your whole health and lifelong vitality.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "HerCare Gynecology",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
