'use client';

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArticleSummary } from "@/lib/sanity/queries";
import { BLOG_PATH, PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";

type BlogListProps = {
  articles: ArticleSummary[];
  pageSizeDesktop?: number;
  pageSizeMobile?: number;
};

export function BlogList({
  articles,
  pageSizeDesktop = 6,
  pageSizeMobile = 3,
}: BlogListProps) {
  const [pageSize, setPageSize] = useState(pageSizeDesktop);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const calculate = () => {
      setPageSize(window.innerWidth < 768 ? pageSizeMobile : pageSizeDesktop);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [pageSizeDesktop, pageSizeMobile]);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [articles.length, page, pageSize]);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(articles.length / pageSize)),
    [articles.length, pageSize]
  );

  const startIndex = (page - 1) * pageSize;
  const visibleArticles = articles.slice(startIndex, startIndex + pageSize);

  return (
    <div className="space-y-8">
      {visibleArticles.length === 0 ? (
        <div className="rounded-3xl border border-outline/20 bg-gradient-to-br from-heading/5 to-primary/5 p-8 text-center">
          <p className="text-base text-ink/80">
            No articles are available yet. Check back soon for {PRIMARY_CITY}, {PRIMARY_STATE_ABBR} exchange
            updates.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => (
            <article
              key={article._id}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)] transition hover:-translate-y-1 hover:shadow-[0_32px_72px_rgba(21,50,67,0.12)]"
            >
              <div className="space-y-3">
                {article.featuredImage?.asset.url ? (
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-outline/10 bg-panel">
                    <Image
                      src={article.featuredImage.asset.url}
                      alt={article.featuredImage.alt || article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : null}
                <time className="text-xs uppercase tracking-[0.18em] text-primary/80">
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <h3 className="text-lg font-semibold text-heading">
                  {article.title}
                </h3>
                <p className="text-sm text-ink/80">{article.excerpt}</p>
              </div>
              <Link
                href={`${BLOG_PATH}/${article.slug}`}
                className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      )}
      {totalPages > 1 ? (
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-ink/80">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 font-medium transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>
          <p>
            Page {page} of {totalPages}
          </p>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 font-medium transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}

