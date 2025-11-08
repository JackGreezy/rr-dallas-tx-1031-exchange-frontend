import type { Metadata } from "next";
import {
  IBM_Plex_Serif,
  Inter,
  Source_Sans_3,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { COMPANY_NAME, SITE_URL, COMPANY_PHONE } from "@/lib/constants";
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
  title: `${COMPANY_NAME} | Qualified Intermediary Network Texas`,
  description:
    "Trusted 1031 exchange team supporting Dallas investors with compliant replacement property identification and timeline control.",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
