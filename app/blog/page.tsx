import type { Metadata } from "next";
import Link from "next/link";
import { fetchArticles } from "@/lib/sanity/queries";
import { BlogList } from "@/components/blog/blog-list";
import { COMPANY_NAME, PRIMARY_CITY, PRIMARY_STATE_ABBR, CONTACT_PATH, SERVICES_PATH, SITE_URL } from "@/lib/constants";

const MAX_ARTICLES = 60;

export const metadata: Metadata = {
  title: `Insights | ${COMPANY_NAME}`,
  description:
    "Stay updated on Dallas 1031 exchange strategies, deadlines, and underwriting trends from the 1031 Exchange of Dallas team.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default async function BlogPage() {
  const articles = await fetchArticles(MAX_ARTICLES, 0);

  return (
    <div className="container space-y-12 py-16">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">Insights</p>
        <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
          Dallas {PRIMARY_CITY === "Dallas" ? "" : `${PRIMARY_CITY} `}1031 Exchange Commentary
        </h1>
        <p className="max-w-3xl text-lg text-ink/85">
          Practical updates on exchange timelines, property underwriting, and local
          regulatory changes across {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. Our team
          writes for investors, developers, and advisors who require actionable
          intelligence.
        </p>
      </header>
      <BlogList articles={articles} />
      <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <h2 className="text-2xl font-semibold text-heading">
              Ready to structure your next exchange?
            </h2>
            <p className="text-sm text-ink/80">
              Tell us about your sale and replacement goals in {PRIMARY_CITY}, {PRIMARY_STATE_ABBR}. We will coordinate with your Qualified Intermediary, lender, and advisors.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <Link
              href={CONTACT_PATH}
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact exchange desk
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

