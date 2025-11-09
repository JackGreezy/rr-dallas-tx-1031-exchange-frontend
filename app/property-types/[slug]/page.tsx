import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { propertyTypesData } from "@/data/property-types";
import { findPropertyTypeBySlug } from "@/lib/utils/search";
import { getAllServices } from "@/lib/data/services";
import { getPropertyTypeImagePath } from "@/lib/utils/images";
import {
  COMPANY_NAME,
  COMPANY_PHONE,
  CONTACT_PATH,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  PROPERTY_TYPES_PATH,
  SITE_URL,
} from "@/lib/constants";

const propertyTypesCount = propertyTypesData.length;
const services = getAllServices();

type PropertyTypePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return propertyTypesData.map((propertyType) => ({
    slug: propertyType.slug,
  }));
}

export async function generateMetadata({
  params,
}: PropertyTypePageProps): Promise<Metadata> {
  const { slug } = await params;
  const propertyType = findPropertyTypeBySlug(slug);

  if (!propertyType) {
    notFound();
  }

  return {
    title: `${propertyType.name} 1031 Exchange Properties | ${COMPANY_NAME}`,
    description: `Explore ${propertyType.name.toLowerCase()} replacement properties for your 1031 exchange in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}. Find like-kind properties that meet IRS requirements.`,
    alternates: {
      canonical: `${SITE_URL}${PROPERTY_TYPES_PATH}/${propertyType.slug}`,
    },
  };
}

export default async function PropertyTypePage({
  params,
}: PropertyTypePageProps) {
  const { slug } = await params;
  const propertyType = findPropertyTypeBySlug(slug);

  if (!propertyType) {
    notFound();
  }

  // Find related services that might be relevant to this property type
  const relatedServices = services
    .filter((service) => {
      const serviceLower = service.name.toLowerCase();
      const propertyTypeLower = propertyType.name.toLowerCase();
      return (
        serviceLower.includes(propertyTypeLower) ||
        propertyTypeLower.includes(serviceLower.split(" ")[0]) ||
        service.keywords.some((keyword) =>
          keyword.toLowerCase().includes(propertyTypeLower)
        )
      );
    })
    .slice(0, 4);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Property Types",
        item: `${SITE_URL.replace(/\/$/, "")}${PROPERTY_TYPES_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: propertyType.name,
        item: `${SITE_URL.replace(/\/$/, "")}${PROPERTY_TYPES_PATH}/${propertyType.slug}`,
      },
    ],
  };

  const propertyTypeJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${propertyType.name} 1031 Exchange Properties`,
    description: `${propertyType.name} replacement properties for 1031 exchanges in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
    provider: {
      "@type": "Organization",
      name: COMPANY_NAME,
      areaServed: `${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`,
      telephone: COMPANY_PHONE,
    },
    url: `${SITE_URL.replace(/\/$/, "")}${PROPERTY_TYPES_PATH}/${propertyType.slug}`,
  };

  const heroImagePath = getPropertyTypeImagePath(propertyType.slug);

  return (
    <>
      <div className="container space-y-16 py-16">
        <nav className="text-xs text-ink/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href={PROPERTY_TYPES_PATH} className="hover:text-primary">
                Property Types
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink">{propertyType.name}</li>
          </ol>
        </nav>
        {heroImagePath && (
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
            <Image
              src={heroImagePath}
              alt={`${propertyType.name} properties in ${PRIMARY_CITY}, ${PRIMARY_STATE_ABBR}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">
            Property Type
          </p>
          <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
            {propertyType.name} Exchange Properties
          </h1>
          <p className="max-w-3xl text-lg text-ink/85">
            Explore {propertyType.name.toLowerCase()} replacement properties for
            your 1031 exchange in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. We help
            identify like-kind properties that meet IRS requirements and align
            with your exchange timeline.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`${CONTACT_PATH}?projectType=${encodeURIComponent(propertyType.name)}`}
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Find {propertyType.name} Properties
            </Link>
            <Link
              href={CONTACT_PATH}
              className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact our team
            </Link>
          </div>
        </header>
        <section className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
            <h2 className="text-xl font-semibold text-heading">
              Why {propertyType.name} for 1031 Exchanges
            </h2>
            <ul className="space-y-3 text-sm text-ink/85">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Like-kind eligibility verified for IRS compliance
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Properties screened for exchange timeline alignment
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Replacement value matching and due diligence support
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Coordination with qualified intermediaries and advisors
                </span>
              </li>
            </ul>
          </div>
          <div className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
            <h2 className="text-xl font-semibold text-heading">
              Exchange Process
            </h2>
            <ul className="space-y-3 text-sm text-ink/85">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Property identification within 45-day window
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Like-kind verification and documentation
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Closing coordination within 180-day deadline
                </span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                />
                <span>
                  Post-exchange compliance and reporting support
                </span>
              </li>
            </ul>
          </div>
        </section>
        {relatedServices.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-heading">
              Related services for {propertyType.name}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedServices.map((service) => (
                <article
                  key={service.slug}
                  className="rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
                    {service.category}
                  </p>
                  <h3 className="text-lg font-semibold text-heading">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink/80">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      View service
                    </Link>
                    <Link
                      href={`${CONTACT_PATH}?projectType=${encodeURIComponent(service.name)}`}
                      className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 text-xs font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Prefill contact
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-heading">
                Ready to find {propertyType.name} replacement properties?
              </h2>
              <p className="text-sm text-ink/80">
                Share your exchange details and timeline. Our team helps identify
                {propertyType.name.toLowerCase()} properties that meet IRS
                like-kind requirements in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <Link
                href={`${CONTACT_PATH}?projectType=${encodeURIComponent(propertyType.name)}`}
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Find {propertyType.name} Properties
              </Link>
              <Link
                href={PROPERTY_TYPES_PATH}
                className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View all {propertyTypesCount} property types
              </Link>
            </div>
          </div>
        </section>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyTypeJsonLd) }}
      />
    </>
  );
}

