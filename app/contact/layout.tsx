import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | 1031 Exchange of Dallas",
  description:
    "Request 1031 exchange assistance. Share your transaction details and timeline. A specialist will respond within one business day.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact | 1031 Exchange of Dallas",
    description:
      "Request 1031 exchange assistance. Share your transaction details and timeline.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

