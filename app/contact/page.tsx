"use client";

import Link from "next/link";
import { useState, Suspense } from "react";
import {
  IBM_Plex_Serif,
  Inter,
  Source_Sans_3,
} from "next/font/google";
import { PRIMARY_CITY, PRIMARY_STATE_ABBR, COMPANY_PHONE, COMPANY_PHONE_DIGITS, COMPANY_EMAIL, SITE_URL } from "@/lib/constants";
import Breadcrumbs from "@/components/breadcrumbs";
import ContactFormFields from "@/components/contact/ContactFormFields";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-ibm-plex-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-source-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
});

function ContactPageContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" },
  ];

  if (isSubmitted) {
    return (
      <div
        className={`${sourceSans.className} ${ibmPlexSerif.variable} ${inter.variable} bg-[#FAFAFA] text-[#1E1E1E] min-h-screen`}
      >
        <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-8 lg:px-12">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 border border-outline/20">
              <svg className="w-8 h-8 text-primary-fg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className={`${ibmPlexSerif.className} text-3xl font-bold text-heading mb-4`}>Thank You!</h1>
            <p className="text-lg text-ink mb-8">
              We've received your message and will get back to you within one business day.
            </p>
            <Link
              href="/"
              className={`${inter.className} inline-flex items-center space-x-2 bg-primary text-primary-fg px-6 py-3 rounded-full hover:bg-[#B68531] transition-colors`}
            >
              <span>Return Home</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div
      className={`${sourceSans.className} ${ibmPlexSerif.variable} ${inter.variable} bg-[#FAFAFA] text-[#1E1E1E] min-h-screen`}
    >
      <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-12 sm:px-8 lg:px-12">
        <Breadcrumbs items={breadcrumbs} />
        <section className="space-y-8 pt-8">
          <div>
            <h1
              className={`${ibmPlexSerif.className} text-4xl text-[#153243] sm:text-5xl`}
            >
              Request 1031 Exchange Assistance
            </h1>
            <p className="mt-4 text-lg text-[#1E1E1E]/85">
              Share your transaction details and timeline. A specialist will respond within one business day.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <ContactFormFields 
                showHeading={false}
                onSuccess={() => setIsSubmitted(true)}
              />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2
                  className={`${ibmPlexSerif.className} text-2xl text-[#153243]`}
                >
                  Contact Information
                </h2>
                <div className="space-y-3 text-base text-[#1E1E1E]/85">
                  <p>
                    <span className="font-semibold">Phone:</span>{" "}
                    <a
                      href={`tel:+1${COMPANY_PHONE_DIGITS}`}
                      className="underline underline-offset-4 hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="underline underline-offset-4 hover:text-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Hours:</span> 24 hours a day, 7 days a week
                  </p>
                </div>
              </div>

              <div className="h-96 w-full overflow-hidden rounded-2xl border border-[#153243]/15 bg-[#153243]/5">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6d_s6H4ZO0QhJ0&q=${encodeURIComponent("9101 Lyndon B Johnson Fwy, Dallas, TX 75243")}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing 1031 Exchange Dallas location"
                />
              </div>

              <div className="rounded-lg border border-outline/20 bg-panel p-6">
                <h3 className={`${ibmPlexSerif.className} text-lg font-semibold text-heading mb-3`}>Next Steps</h3>
                <ul className="space-y-2 text-sm text-ink">
                  <li>• We'll review your requirements within 24 hours</li>
                  <li>• Initial consultation to discuss your exchange strategy</li>
                  <li>• Property identification begins within your timeline</li>
                  <li>• Coordination with qualified intermediaries and attorneys</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
