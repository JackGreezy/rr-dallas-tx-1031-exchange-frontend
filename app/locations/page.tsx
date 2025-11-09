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
} from "@/lib/constants";

const locations = getAllLocations();
const LOCATION_COUNT = locations.length;

export const metadata: Metadata = {
  title: `1031 Exchange Locations | ${COMPANY_NAME}`,
  description:
    "Review core Dallas and North Texas submarkets supported by 1031 Exchange of Dallas, including Uptown, Legacy West, Las Colinas, and more.",
  alternates: {
    canonical: LOCATIONS_PATH,
  },
};

export default function LocationsPage() {
  return (
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
  );
}

