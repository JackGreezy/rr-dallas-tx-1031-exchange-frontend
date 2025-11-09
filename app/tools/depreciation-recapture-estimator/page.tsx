import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import { DepreciationRecaptureEstimator } from "@/components/tools/DepreciationRecaptureEstimator";
import { SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR, CONTACT_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Depreciation Recapture Estimator | 1031 Exchange of Dallas",
  description:
    "Estimate depreciation recapture and capital gains tax on your relinquished property for 1031 exchanges in Dallas, TX. Calculate tax implications before exchanging.",
  keywords: "depreciation recapture, 1031 exchange, capital gains tax, unrecaptured section 1250 gain, Dallas, TX",
  openGraph: {
    title: "Depreciation Recapture Estimator | 1031 Exchange of Dallas",
    description: "Estimate depreciation recapture and capital gains tax on your relinquished property for 1031 exchanges.",
    type: "website",
    url: `${SITE_URL}/tools/depreciation-recapture-estimator`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools/depreciation-recapture-estimator`,
  },
};

export default function DepreciationRecaptureEstimatorPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "Depreciation Recapture Estimator", href: "/tools/depreciation-recapture-estimator" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Depreciation Recapture Estimator",
    description: "Estimate depreciation recapture and capital gains tax on your relinquished property for 1031 exchanges",
    url: `${SITE_URL}/tools/depreciation-recapture-estimator`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
        { "@type": "ListItem", position: 3, name: "Depreciation Recapture Estimator", item: `${SITE_URL}/tools/depreciation-recapture-estimator` },
      ],
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "Depreciation Recapture Estimator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-20">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="mb-4 font-serif text-3xl font-bold text-heading md:text-4xl">
          Depreciation Recapture Estimator
        </h1>
        <p className="mb-8 text-lg text-ink/85">
          Estimate depreciation recapture and capital gains tax on your relinquished property before
          completing a 1031 exchange in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. Understanding these tax
          implications helps you plan your exchange strategy effectively.
        </p>

        <DepreciationRecaptureEstimator />

        <div className="mt-8 rounded-lg border border-outline/20 bg-panel p-6">
          <p className="text-sm text-ink/70">
            <strong>Educational content only.</strong> Not tax, legal, or investment advice.
            Results are estimates only. Consult a qualified intermediary and tax advisor before
            making decisions. Texas does not impose a state real estate transfer tax. Recording
            fees and title insurance premiums still apply.
          </p>
        </div>

        <div className="mt-12 border-t border-outline/20 pt-8">
          <h2 className="mb-4 font-serif text-2xl font-bold text-heading">Related Resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/services/depreciation-recapture-planning"
                className="text-heading underline underline-offset-4 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Depreciation Recapture Planning Services
              </Link>
            </li>
            <li>
              <Link
                href="/services/tax-strategy-consultation"
                className="text-heading underline underline-offset-4 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Tax Strategy Consultation
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-heading underline underline-offset-4 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contact Us for Exchange Support
              </Link>
            </li>
          </ul>
        </div>

        <section className="mt-12 rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-heading">
                Need help understanding depreciation recapture?
              </h2>
              <p className="text-sm text-ink/80">
                Our team works with tax advisors to help you understand recapture implications and
                plan your 1031 exchange strategy in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <Link
                href={`${CONTACT_PATH}?projectType=${encodeURIComponent("Depreciation Recapture Analysis")}`}
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get tax analysis
              </Link>
              <Link
                href={CONTACT_PATH}
                className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

