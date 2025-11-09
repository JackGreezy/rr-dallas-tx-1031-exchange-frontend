import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Dallas 1031 Exchange | Get Started",
  description:
    "Contact Dallas 1031 exchange specialists. Share your transaction details and timeline. We help Dallas investors find replacement properties in all 50 states. Response within one business day.",
  keywords: [
    "contact 1031 exchange",
    "Dallas 1031 exchange contact",
    "1031 exchange consultation",
    "replacement property help",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Dallas 1031 Exchange | Get Started",
    description:
      "Contact Dallas 1031 exchange specialists. We help Dallas investors find replacement properties in all 50 states.",
    url: `${SITE_URL}/contact`,
    siteName: "1031 Exchange of Dallas",
    images: [
      {
        url: `${SITE_URL}/1031-exchange-dallas-logo.png`,
        width: 1200,
        height: 630,
        alt: "Contact Dallas 1031 Exchange",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dallas 1031 Exchange | Get Started",
    description: "Contact Dallas 1031 exchange specialists. We help Dallas investors find replacement properties in all 50 states.",
    images: [`${SITE_URL}/1031-exchange-dallas-logo.png`],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

