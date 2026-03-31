import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
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
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            name: "HerCare Gynecology",
            alternateName: "HerCare Gynecology by Dr. Terri Alexander",
            medicalSpecialty: "Gynecology",
            url: "https://hercaregynecology.com",
            telephone: "(630) 000-0000",
            email: "hello@hercaregynecology.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Naperville",
              addressRegion: "IL",
              addressCountry: "US",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "17:00",
            },
            description:
              "A new kind of gynecology practice in Naperville, IL — where integrative care, genuine listening, and evidence-based medicine meet to support your whole health and lifelong vitality.",
          }}
        />
        {children}
      </body>
    </html>
  );
}
