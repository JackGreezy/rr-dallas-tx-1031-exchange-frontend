'use client';

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CONTACT_PATH, SERVICES_PATH } from "@/lib/constants";
import { Service } from "@/lib/data/services";
import { searchServices } from "@/lib/utils/search";

type ServiceSearchGridProps = {
  services: Service[];
  compact?: boolean;
};

export function ServiceSearchGrid({ services, compact }: ServiceSearchGridProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) {
      return services;
    }

    const { matches } = searchServices(query);
    if (matches.length === 0) {
      return [];
    }
    const resultSlugs = new Set(matches.map((match) => match.slug));
    return services.filter((service) => resultSlugs.has(service.slug));
  }, [query, services]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) return;

    const { exact } = searchServices(query);
    if (exact) {
      router.push(`${SERVICES_PATH}/${exact.slug}`);
      return;
    }

    router.push(`${CONTACT_PATH}?projectType=${encodeURIComponent(query)}`);
  };

  const handleClear = () => {
    setQuery("");
  };

  const showEmptyState = query.trim().length > 0 && filtered.length === 0;

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <label className="flex grow flex-col gap-2 text-sm font-medium text-heading">
          Search services
          <div className="relative flex items-center">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by timeline, asset type, or strategy"
              className="w-full rounded-full border border-outline/30 bg-white px-5 py-3 pr-16 text-base text-ink shadow-[inset_0_1px_1px_rgba(21,50,67,0.08)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            {query ? (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-3 rounded-full bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70 transition hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Clear
              </button>
            ) : null}
          </div>
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Search
        </button>
      </form>
      {showEmptyState ? (
        <div className="rounded-3xl border border-outline/20 bg-panel p-6 text-sm text-ink/85">
          <p className="font-semibold text-heading">
            We can help with "{query}".
          </p>
          <p className="mt-2">
            Send the details to our exchange team and we will prepare a custom
            identification plan.
          </p>
          <Link
            href={`${CONTACT_PATH}?projectType=${encodeURIComponent(query)}`}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Contact our specialists
          </Link>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            compact ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {filtered.map((service) => (
            <article
              key={service.slug}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)] transition hover:-translate-y-1 hover:shadow-[0_32px_72px_rgba(21,50,67,0.12)]"
            >
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
                  {service.category}
                </p>
                <h4 className="text-lg font-semibold text-heading">
                  {service.name}
                </h4>
                <p className="text-sm text-ink/85">
                  {service.shortDescription}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`${SERVICES_PATH}/${service.slug}`}
                  className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  View service
                </Link>
                <Link
                  href={`${CONTACT_PATH}?projectType=${encodeURIComponent(service.name)}`}
                  className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Prefill contact
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

