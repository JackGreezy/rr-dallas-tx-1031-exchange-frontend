import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllServices, type Service } from "@/lib/data/services";
import { findServiceBySlug } from "@/lib/utils/search";
import { RelatedServices } from "@/components/services/related-services";

const services = getAllServices();
const servicesCount = services.length;
import {
  COMPANY_NAME,
  COMPANY_PHONE,
  CONTACT_PATH,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SERVICES_PATH,
  SITE_URL,
} from "@/lib/constants";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const title = `${service.name} | Dallas 1031 Exchange Services`;
  const description = `${service.shortDescription} We help Dallas investors find replacement properties in all 50 states.`;
  const url = `${SITE_URL}${SERVICES_PATH}/${service.slug}`;

  return {
    title,
    description,
    keywords: [
      service.name.toLowerCase(),
      "1031 exchange services",
      "Dallas 1031 exchange",
      "replacement property",
      "like-kind exchange",
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY_NAME,
      images: [
        {
          url: `${SITE_URL}/1031-exchange-dallas-logo.png`,
          width: 1200,
          height: 630,
          alt: `${service.name} - ${COMPANY_NAME}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/1031-exchange-dallas-logo.png`],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.related
    .map((relatedSlug) => findServiceBySlug(relatedSlug))
    .filter((s): s is Service => s !== undefined);

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
        name: "Services",
        item: `${SITE_URL.replace(/\/$/, "")}${SERVICES_PATH}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${SITE_URL.replace(/\/$/, "")}${SERVICES_PATH}/${service.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${SERVICES_PATH}/${service.slug}#service`,
    name: service.name,
    serviceType: service.category,
    description: `${service.shortDescription} We help Dallas investors find replacement properties in all 50 states.`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#organization`,
      name: COMPANY_NAME,
      url: SITE_URL,
      telephone: COMPANY_PHONE,
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
    url: `${SITE_URL.replace(/\/$/, "")}${SERVICES_PATH}/${service.slug}`,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
    },
  };

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
              <Link href={SERVICES_PATH} className="hover:text-primary">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink">{service.name}</li>
          </ol>
        </nav>
        <header className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">
            {service.category}
          </p>
          <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
            {service.name}
          </h1>
          <p className="max-w-3xl text-lg text-ink/85">{service.overview}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={`${CONTACT_PATH}?projectType=${encodeURIComponent(service.name)}`}
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Start with this service
            </Link>
            <Link
              href={CONTACT_PATH}
              className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact our team
            </Link>
          </div>
        </header>
        <section className="grid gap-8 lg:grid-cols-2">
          <CardBlock title="Why it matters" items={service.valuePoints} />
          <CardBlock title="Deliverables" items={service.deliverables} />
        </section>
        <section className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
          <h2 className="text-xl font-semibold text-heading">
            Milestone Schedule
          </h2>
          <ul className="grid gap-3 text-sm text-ink/85 md:grid-cols-3">
            {service.timeline.map((step) => (
              <li
                key={step.label}
                className="rounded-2xl border border-outline/20 bg-panel p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {step.label}
                </p>
                <p>{step.detail}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-heading">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-3xl border border-outline/15 bg-white p-5 shadow-[0_20px_56px_rgba(21,50,67,0.08)]"
              >
                <summary className="cursor-pointer text-sm font-semibold text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-ink/85">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        {relatedServices.length > 0 ? (
          <RelatedServices services={relatedServices.slice(0, 4)} />
        ) : null}
        <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-heading">
                Ready to start with {service.name}?
              </h2>
              <p className="text-sm text-ink/80">
                Share your exchange details and timeline. Our team coordinates property identification and advisor alignment in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <Link
                href={`${CONTACT_PATH}?projectType=${encodeURIComponent(service.name)}`}
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Start with this service
              </Link>
              <Link
                href={SERVICES_PATH}
                className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View all {servicesCount} services
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
    </>
  );
}

function CardBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
      <h2 className="text-xl font-semibold text-heading">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-ink/85">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

