import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import {
  CalculatorIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { SITE_URL, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "1031 Exchange Tools | 1031 Exchange of Dallas",
  description:
    "Interactive calculators and tools for 1031 exchanges in Dallas, TX. Calculate boot, estimate costs, and validate identification rules.",
  keywords: "1031 exchange tools, boot calculator, exchange cost estimator, identification rules checker, Dallas, TX",
  openGraph: {
    title: "1031 Exchange Tools | 1031 Exchange of Dallas",
    description: "Interactive calculators and tools for 1031 exchanges in Dallas, TX.",
    type: "website",
    url: `${SITE_URL}/tools`,
  },
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
};

const tools = [
  {
    slug: "boot-calculator",
    name: "Boot Calculator",
    description:
      "Calculate boot including cash received and mortgage relief. Estimate tax implications on boot for your 1031 exchange.",
    icon: CalculatorIcon,
  },
  {
    slug: "exchange-cost-estimator",
    name: "Exchange Cost Estimator",
    description:
      "Estimate qualified intermediary fees, escrow costs, title insurance, and recording fees for your exchange.",
    icon: CurrencyDollarIcon,
  },
  {
    slug: "identification-rules-checker",
    name: "Identification Rules Checker",
    description:
      "Validate your identification against the three property, 200 percent, or 95 percent rules.",
    icon: CheckCircleIcon,
  },
];

export default function ToolsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "1031 Exchange Tools",
    description: "Interactive calculators and tools for 1031 exchanges",
    url: `${SITE_URL}/tools`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_URL}/tools` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-6xl px-6 py-12 md:px-8 md:py-20">
        <Breadcrumbs items={breadcrumbItems} />
        <h1 className="mb-4 font-serif text-3xl font-bold text-heading md:text-4xl">
          1031 Exchange Tools
        </h1>
        <p className="mb-12 text-lg text-ink/85">
          Use our interactive calculators and tools to estimate costs, calculate boot, and validate
          identification rules for your 1031 exchange in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex flex-col rounded-2xl border border-outline/15 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-heading">{tool.name}</h2>
                <p className="flex-1 text-sm text-ink/70">{tool.description}</p>
                <span className="mt-4 text-sm font-medium text-primary transition group-hover:text-[#B68531]">
                  Open tool →
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-lg border border-outline/20 bg-panel p-6">
          <p className="text-sm text-ink/70">
            <strong>Educational content only.</strong> Not tax, legal, or investment advice.
            Results are estimates only. Consult a qualified intermediary and tax advisor before
            making decisions. Texas does not impose a state real estate transfer tax. Recording
            fees and title insurance premiums still apply.
          </p>
        </div>
      </div>
    </>
  );
}

