import type { Metadata } from "next";
import Link from "next/link";
import { getAllLocations } from "@/lib/data/locations";
import { getAllServices } from "@/lib/data/services";
import { LocationSearchGrid } from "@/components/locations/location-search-grid";
import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  CONTACT_PATH,
  LOCATIONS_PATH,
  SITE_URL,
} from "@/lib/constants";

const locations = getAllLocations();
const LOCATION_COUNT = locations.length;

export const metadata: Metadata = {
  title: "Dallas 1031 Exchange Locations | Nationwide Property Sourcing",
  description:
    "Dallas 1031 exchange locations. We help Dallas investors find replacement properties in all 50 states. Serving Uptown, Legacy West, Las Colinas, and nationwide.",
  keywords: [
    "Dallas 1031 exchange locations",
    "1031 exchange locations",
    "Dallas replacement property",
    "nationwide 1031 exchange",
    "all 50 states",
  ],
  alternates: {
    canonical: `${SITE_URL}${LOCATIONS_PATH}`,
  },
  openGraph: {
    title: "Dallas 1031 Exchange Locations | Nationwide Property Sourcing",
    description:
      "Dallas 1031 exchange locations. We help Dallas investors find replacement properties in all 50 states.",
    url: `${SITE_URL}${LOCATIONS_PATH}`,
    siteName: COMPANY_NAME,
    images: [
      {
        url: `${SITE_URL}/1031-exchange-dallas-logo.png`,
        width: 1200,
        height: 630,
        alt: "Dallas 1031 Exchange Locations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas 1031 Exchange Locations | Nationwide Property Sourcing",
    description: "Dallas 1031 exchange locations. We help Dallas investors find replacement properties in all 50 states.",
    images: [`${SITE_URL}/1031-exchange-dallas-logo.png`],
  },
};

export default function LocationsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Dallas 1031 Exchange Locations",
    description: "List of locations where we help Dallas investors find 1031 exchange replacement properties",
    numberOfItems: LOCATION_COUNT,
    itemListElement: locations.map((location, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: location.name,
      url: `${SITE_URL}${LOCATIONS_PATH}/${location.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <div className="container space-y-16 py-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">
          Locations
        </p>
        <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
          Serving {PRIMARY_CITY} and North Texas Exchange Corridors
        </h1>
        <p className="max-w-3xl text-lg text-ink/85">
          Our team sources replacement properties and coordinates advisors
          across {LOCATION_COUNT} Dallas metro districts. Search by submarket to
          view local opportunities and recommended services.
        </p>
      </section>
      <LocationSearchGrid locations={locations} />
      <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-heading">
              Not seeing your target market?
            </h2>
            <p className="text-sm text-ink/80">
              We help Dallas investors find 1031 exchange properties in all 50 states. Share the city or district you are
              pursuing and we will build a search brief within one business day.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <Link
              href={`${CONTACT_PATH}?projectType=Other`}
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact exchange desk
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              View all {getAllServices().length} services
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

