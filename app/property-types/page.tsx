import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { propertyTypesData } from "@/data/property-types";
import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  PROPERTY_TYPES_PATH,
  SITE_URL,
  CONTACT_PATH,
} from "@/lib/constants";
import { getPropertyTypeImagePath } from "@/lib/utils/images";

export const metadata: Metadata = {
  title: `1031 Exchange Property Types | ${COMPANY_NAME}`,
  description: `Explore replacement property types for 1031 exchanges in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. Find multifamily, office, retail, industrial, and other like-kind properties.`,
  alternates: {
    canonical: `${SITE_URL}${PROPERTY_TYPES_PATH}`,
  },
};

export default function PropertyTypesPage() {
  return (
    <div className="container space-y-20 py-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">
          Property Types
        </p>
        <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
          1031 Exchange Property Types
        </h1>
        <p className="max-w-3xl text-lg text-ink/85">
          Explore replacement property types for your 1031 exchange in{" "}
          {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. We help identify like-kind
          properties across {propertyTypesData.length} property categories that
          meet IRS requirements and align with your exchange timeline.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {propertyTypesData.map((propertyType) => {
          const imagePath = getPropertyTypeImagePath(propertyType.slug);
          return (
            <article
              key={propertyType.slug}
              className="flex h-full flex-col gap-4 rounded-2xl border border-outline/15 bg-white overflow-hidden shadow-[0_16px_48px_rgba(21,50,67,0.08)]"
            >
              {imagePath && (
                <div className="relative h-48 w-full">
                  <Image
                    src={imagePath}
                    alt={`${propertyType.name} properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h2 className="text-lg font-semibold text-heading">
                  {propertyType.name}
                </h2>
                <p className="flex-1 text-sm text-ink/85">
                  Explore {propertyType.name.toLowerCase()} replacement properties
                  for your 1031 exchange. Properties are screened for like-kind
                  eligibility and exchange timeline alignment.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`${PROPERTY_TYPES_PATH}/${propertyType.slug}`}
                    className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    View {propertyType.name}
                  </Link>
                  <Link
                    href={`${CONTACT_PATH}?projectType=${encodeURIComponent(propertyType.name)}`}
                    className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 text-xs font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
        <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-heading">
              Need help finding replacement properties?
            </h2>
            <p className="text-sm text-ink/80">
              Share your exchange details and timeline. Our team helps identify
              like-kind properties that meet IRS requirements in {PRIMARY_CITY},{" "}
              {PRIMARY_STATE_ABBR}.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <Link
              href={CONTACT_PATH}
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

