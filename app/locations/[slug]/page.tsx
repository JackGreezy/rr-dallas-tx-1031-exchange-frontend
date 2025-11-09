import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllLocations } from "@/lib/data/locations";
import { getAllServices } from "@/lib/data/services";
import { findLocationBySlug } from "@/lib/utils/search";
import { getLocationImagePath } from "@/lib/utils/images";

const locations = getAllLocations();
const locationsCount = locations.length;
const services = getAllServices();
import {
  COMPANY_NAME,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SERVICES_PATH,
  LOCATIONS_PATH,
  CONTACT_PATH,
  SITE_URL,
} from "@/lib/constants";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = findLocationBySlug(slug);
  if (!location) {
    notFound();
  }

  return {
    title: `${location.name} 1031 Exchange Support | ${COMPANY_NAME}`,
    description: location.description,
    alternates: {
      canonical: `${SITE_URL}${LOCATIONS_PATH}/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = findLocationBySlug(slug);
  if (!location) {
    notFound();
  }

  const relatedServices = location.services
    .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
    .filter(Boolean);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(location.name)}&output=embed`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${SITE_URL.replace(/\/$/, "")}${LOCATIONS_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: `${SITE_URL.replace(/\/$/, "")}${LOCATIONS_PATH}/${location.slug}`,
      },
    ],
  };

  const heroImagePath = getLocationImagePath(location.slug);

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
              <Link href={LOCATIONS_PATH} className="hover:text-primary">
                Locations
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink">{location.name}</li>
          </ol>
        </nav>
        {heroImagePath && (
          <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
            <Image
              src={heroImagePath}
              alt={`${location.name}, ${PRIMARY_STATE_ABBR}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            />
          </div>
        )}
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">
            {PRIMARY_CITY} Metro
          </p>
          <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
            {location.name} Exchange Opportunities
          </h1>
          <p className="max-w-3xl text-lg text-ink/85">{location.description}</p>
        </header>
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
            <h2 className="text-xl font-semibold text-heading">
              Why investors focus on {location.name}, {PRIMARY_STATE_ABBR}
            </h2>
            <ul className="space-y-3 text-sm text-ink/85">
              {location.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-block h-2 w-2 rounded-full bg-primary"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-outline/15 bg-white shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
            <iframe
              src={mapSrc}
              title={`Map of ${location.name}`}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-heading">
            Recommended services for {location.name}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedServices.map((service) => (
              <article
                key={service!.slug}
                className="rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
                  {service!.category}
                </p>
                <h3 className="text-lg font-semibold text-heading">
                  {service!.name}
                </h3>
                <p className="mt-2 text-sm text-ink/80">
                  {service!.shortDescription}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`${SERVICES_PATH}/${service!.slug}`}
                    className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-xs font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    View service
                  </Link>
                  <Link
                    href={`${CONTACT_PATH}?projectType=${encodeURIComponent(service!.name)}`}
                    className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 text-xs font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Prefill contact
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-heading">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {location.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-3xl border border-outline/15 bg-white p-5 shadow-[0_20px_56px_rgba(21,50,67,0.08)]"
              >
                <summary className="cursor-pointer text-sm font-semibold text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-ink/85">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <div className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-heading">
                Ready to map your exchange in {location.name}?
              </h2>
              <p className="text-sm text-ink/80">
                Share your target asset and deadlines. Our team coordinates tours
                and underwriting within {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <Link
                href={`${CONTACT_PATH}?projectType=${encodeURIComponent(location.name)}`}
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contact our team
              </Link>
              <Link
                href={LOCATIONS_PATH}
                className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View all {locationsCount} locations
              </Link>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

