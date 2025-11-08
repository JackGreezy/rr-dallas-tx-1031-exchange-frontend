import type { Metadata } from "next";
import Link from "next/link";
import {
  COMPANY_NAME,
  CONTACT_PATH,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
  SERVICES_PATH,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: `About ${COMPANY_NAME} | Dallas 1031 Exchange Support`,
  description:
    "Learn how 1031 Exchange of Dallas coordinates secure intake, property matching workflows, and third-party Qualified Intermediary relationships for high-net-worth investors.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const differentiators = [
  {
    title: "Secure intake workflow",
    description:
      "Client data enters through encrypted forms and document vaults. We never email wire instructions or sensitive data without multi-factor verification.",
  },
  {
    title: "Exchange-aligned property matching",
    description:
      "We source and score replacement assets based on timeline certainty, like-kind eligibility, and underwriting benchmarks specific to Dallas, TX.",
  },
  {
    title: "Qualified Intermediary coordination",
    description:
      "Our team stays in sync with your chosen Qualified Intermediary, attorneys, CPAs, and lenders from contract execution through funding.",
  },
  {
    title: "Compliance-first documentation",
    description:
      "Every identification letter, inspection report, and closing statement is catalogued for Form 8824 support and future audit readiness.",
  },
];

const commitments = [
  "We are not a Qualified Intermediary, law firm, broker, or CPA. Our role is advisory and operational.",
  "We never custody exchange proceeds. Funds remain with your Qualified Intermediary at all times.",
  "We work with licensed professionals and lenders who understand Dallas, TX regulatory deadlines and local market nuance.",
  "We provide transparent status reports so investors and advisors track 45 and 180 day milestones together.",
];

export default function AboutPage() {
  return (
    <div className="container space-y-16 py-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">About</p>
        <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
          Purpose-built support for Dallas 1031 exchanges
        </h1>
        <p className="max-w-3xl text-lg text-ink/85">
          {COMPANY_NAME} operates as a secure project desk for investors,
          developers, and advisors completing tax-deferred exchanges across{" "}
          {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. We choreograph every step between
          property sale, replacement sourcing, and closing so deadlines stay on
          track and documentation remains audit ready.
        </p>
      </section>
      <section className="grid gap-6 md:grid-cols-2">
        {differentiators.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]"
          >
            <h2 className="text-xl font-semibold text-heading">{item.title}</h2>
            <p className="mt-3 text-sm text-ink/80">{item.description}</p>
          </article>
        ))}
      </section>
      <section className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
        <h2 className="text-xl font-semibold text-heading">
          How engagements run
        </h2>
        <ol className="space-y-3 text-sm text-ink/85">
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-fg">
              1
            </span>
            <div>
              <p className="font-semibold text-heading">Secure intake</p>
              <p>
                Share transaction goals, proceeds estimates, and advisor roster
                through our encrypted portal. We set up calendar alerts for every
                milestone on day one.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-fg">
              2
            </span>
            <div>
              <p className="font-semibold text-heading">Property matching</p>
              <p>
                We present short lists that blend on-market, off-market, and DST
                positions, each scored for closing certainty, returns, and
                compliance with Dallas timelines.
              </p>
            </div>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-fg">
              3
            </span>
            <div>
              <p className="font-semibold text-heading">Execution and reporting</p>
              <p>
                We run weekly status calls, maintain shared task trackers, and log
                every document for your Qualified Intermediary, lender, and tax
                advisor.
              </p>
            </div>
          </li>
        </ol>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-heading">
          Our commitments
        </h2>
        <ul className="space-y-2 text-sm text-ink/80">
          {commitments.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-heading">
              Build your exchange plan
            </h2>
            <p className="text-sm text-ink/80">
              Outline your relinquished property, target asset type, and desired
              debt structure. We will verify deadlines, loop in your advisors, and
              present an identification roadmap.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <Link
              href={`${CONTACT_PATH}?projectType=Strategy%20Session`}
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Schedule a strategy call
            </Link>
            <Link
              href={SERVICES_PATH}
              className="inline-flex items-center rounded-full border border-outline/30 px-5 py-3 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

