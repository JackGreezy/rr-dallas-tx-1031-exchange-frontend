import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchArticleBySlug, fetchArticles } from "@/lib/sanity/queries";
import { RichText } from "@/components/blog/portable-text";
import {
  COMPANY_NAME,
  CONTACT_PATH,
  SERVICES_PATH,
  SITE_URL,
  PRIMARY_CITY,
  PRIMARY_STATE_ABBR,
} from "@/lib/constants";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await fetchArticles(120, 0);
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return {};
  }

  const url = `${SITE_URL.replace(/\/$/, "")}/blog/${article.slug}`;

  return {
    title: `${article.title} | ${COMPANY_NAME}`,
    description: article.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      images: article.featuredImage?.asset.url
        ? [
            {
              url: article.featuredImage.asset.url,
              alt: article.featuredImage.alt ?? article.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL.replace(/\/$/, "")}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_URL.replace(/\/$/, "")}/blog/${article.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
    },
    mainEntityOfPage: `${SITE_URL.replace(/\/$/, "")}/blog/${article.slug}`,
  };

  return (
    <>
      <article className="container space-y-12 py-16">
        <nav className="text-xs text-ink/70">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-primary">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink">{article.title}</li>
          </ol>
        </nav>
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-primary/80">
            Insights from {COMPANY_NAME}
          </p>
          <h1 className="text-4xl font-semibold text-heading sm:text-5xl">
            {article.title}
          </h1>
          <time className="block text-sm text-ink/70">
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          {article.featuredImage?.asset.url ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-outline/20 bg-panel">
              <Image
                src={article.featuredImage.asset.url}
                alt={article.featuredImage.alt || article.title}
                fill
                className="object-cover"
              />
            </div>
          ) : null}
        </header>
        <div className="prose prose-slate max-w-none space-y-6 text-base leading-7 text-ink/85">
          <RichText value={article.content} />
        </div>
        <section className="rounded-3xl border border-outline/15 bg-white p-8 shadow-[0_20px_60px_rgba(21,50,67,0.12)]">
          <div className="flex flex-col gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold text-heading">
                Ready to structure your next exchange?
              </h2>
              <p className="text-sm text-ink/80">
                Tell us about your sale and replacement goals in {PRIMARY_CITY},{" "}
                {PRIMARY_STATE_ABBR}. We will coordinate with your Qualified
                Intermediary, lender, and advisors.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <Link
                href={`${CONTACT_PATH}?projectType=${encodeURIComponent(`Follow-up on ${article.title}`)}`}
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
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}

