import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/data/services";
import { getAllLocations } from "@/lib/data/locations";

const services = getAllServices();
import { ServiceSearchGrid } from "@/components/services/service-search-grid";
import { DeadlineCalculator } from "@/components/widgets/deadline-calculator";
import { IdentificationRulesExplainer } from "@/components/widgets/identification-rules";
import { IdentificationLetterHelper } from "@/components/widgets/identification-letter-helper";
import { TimelineTracker } from "@/components/widgets/timeline-tracker";
import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SERVICES_PATH,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dallas 1031 Exchange Services | Nationwide Property Sourcing",
  description:
    "Dallas 1031 exchange services. Replacement property sourcing, timelines, financing, compliance. We help Dallas investors find properties in all 50 states.",
  keywords: [
    "1031 exchange services",
    "Dallas 1031 exchange",
    "replacement property sourcing",
    "1031 exchange coordination",
    "nationwide property sourcing",
  ],
  alternates: {
    canonical: `${SITE_URL}${SERVICES_PATH}`,
  },
  openGraph: {
    title: "Dallas 1031 Exchange Services | Nationwide Property Sourcing",
    description:
      "Dallas 1031 exchange services. Replacement property sourcing, timelines, financing, compliance. We help Dallas investors find properties in all 50 states.",
    url: `${SITE_URL}${SERVICES_PATH}`,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/1031-exchange-dallas-logo.png`,
        width: 1200,
        height: 630,
        alt: "Dallas 1031 Exchange Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas 1031 Exchange Services | Nationwide Property Sourcing",
    description: "Dallas 1031 exchange services. We help Dallas investors find properties in all 50 states.",
    images: [`${SITE_URL}/1031-exchange-dallas-logo.png`],
  },
};

export default function ServicesPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dallas 1031 Exchange Services",
    description: "List of 1031 exchange services we provide to help Dallas investors find replacement properties in all 50 states",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${SITE_URL}${SERVICES_PATH}/${service.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="container space-y-20 py-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">
          Services
        </p>
        <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
          1031 Exchange Services for Dallas Investors
        </h1>
        <p className="max-w-3xl text-lg text-ink/85">
          Redeploy capital with confidence. Our {services.length} service tracks
          cover replacement property discovery, underwriting, financing, and
          compliance. We help Dallas investors find replacement properties in all 50 states. Filter by
          timeline or asset type to find the program that fits your exchange.
        </p>
      </section>
      <ServiceSearchGrid services={services} />
      <section className="grid gap-8 lg:grid-cols-2">
        <DeadlineCalculator />
        <TimelineTracker />
      </section>
      <section className="grid gap-8 lg:grid-cols-2">
        <IdentificationRulesExplainer />
        <IdentificationLetterHelper />
      </section>
      <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-heading">
              Need a curated replacement list?
            </h2>
            <p className="text-sm text-ink/80">
              Tell us what you are selling and we will prepare a Three Property
              or 200 Percent identification package built for your timeline.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <Link
              href="/contact?projectType=Custom%20Identification%20Plan"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Request a plan
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View all {getAllLocations().length} locations
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

