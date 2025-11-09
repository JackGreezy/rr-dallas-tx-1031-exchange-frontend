import type { Metadata } from "next";
import {
  IBM_Plex_Serif,
  Inter,
  Source_Sans_3,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { COMPANY_NAME, SITE_URL, COMPANY_PHONE, COMPANY_PHONE_DIGITS, COMPANY_EMAIL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import StickyCall from "@/components/StickyCall";
import { CallRailScripts } from "@/components/integrations/callrail-scripts";
import { HubSpotScripts } from "@/components/integrations/hubspot-scripts";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Dallas 1031 Exchange Services`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description:
    "Dallas 1031 exchange services. Help Dallas investors find replacement properties in all 50 states. Compliant exchanges, expert coordination, timeline control.",
  keywords: [
    "1031 exchange",
    "Dallas 1031 exchange",
    "Texas 1031 exchange",
    "like-kind exchange",
    "replacement property",
    "qualified intermediary",
    "tax deferred exchange",
    "Dallas real estate",
    "1031 exchange services",
    "property exchange",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Dallas 1031 Exchange Services`,
    description: "Dallas 1031 exchange services. Help Dallas investors find replacement properties in all 50 states. Compliant exchanges, expert coordination.",
    images: [
      {
        url: `${SITE_URL}/1031-exchange-dallas-logo.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Dallas 1031 Exchange Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} | Dallas 1031 Exchange Services`,
    description: "Dallas 1031 exchange services. Help Dallas investors find replacement properties in all 50 states.",
    images: [`${SITE_URL}/1031-exchange-dallas-logo.png`],
    creator: "@1031exchangedallas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicon/android-chrome-512x512.png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  verification: {
    // Add Google Search Console verification if available
    // google: 'verification-code',
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#organization`,
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/1031-exchange-dallas-logo.png`,
  image: `${SITE_URL}/1031-exchange-dallas-logo.png`,
  telephone: `+1-${COMPANY_PHONE_DIGITS.slice(0, 3)}-${COMPANY_PHONE_DIGITS.slice(3, 6)}-${COMPANY_PHONE_DIGITS.slice(6)}`,
  email: COMPANY_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "9101 Lyndon B Johnson Fwy",
    addressLocality: PRIMARY_CITY,
    addressRegion: PRIMARY_STATE_ABBR,
    postalCode: "75243",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.9126,
    longitude: -96.6389,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${sourceSans.variable} ${ibmPlexSerif.variable} ${inter.variable} min-h-screen bg-paper text-ink antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <StickyCall phone={COMPANY_PHONE} />
        <Analytics />
        <CallRailScripts />
        <HubSpotScripts />
      </body>
    </html>
  );
}
