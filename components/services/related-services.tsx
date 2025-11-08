'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { CONTACT_PATH, SERVICES_PATH } from "@/lib/constants";
import { Service } from "@/lib/data/services";

type RelatedServicesProps = {
  services: Service[];
};

export function RelatedServices({ services }: RelatedServicesProps) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return services;
    const normalized = query.trim().toLowerCase();
    return services.filter((service) =>
      service.name.toLowerCase().includes(normalized)
    );
  }, [query, services]);

  const showEmpty = query.trim().length > 0 && filtered.length === 0;

  return (
    <section className="space-y-4 rounded-3xl border border-outline/15 bg-white p-6 shadow-[0_20px_56px_rgba(21,50,67,0.08)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-primary">
            Related Services
          </p>
          <h2 className="text-xl font-semibold text-heading">
            Continue building your exchange plan
          </h2>
        </div>
        <label className="flex flex-col gap-2 text-xs font-medium text-heading sm:text-sm">
          Filter list
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter related services"
            className="w-full rounded-full border border-outline/30 bg-white px-4 py-2 text-sm text-ink shadow-[inset_0_1px_1px_rgba(21,50,67,0.08)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </label>
      </div>
      {showEmpty ? (
        <div className="rounded-2xl border border-outline/20 bg-panel p-4 text-sm text-ink/85">
          <p>
            We can help with "{query}". Send a note to our exchange desk to
            design a tailored workflow.
          </p>
          <Link
            href={`${CONTACT_PATH}?projectType=${encodeURIComponent(query)}`}
            className="mt-3 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Contact team
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((service) => (
            <article
              key={service.slug}
              className="space-y-3 rounded-2xl border border-outline/20 bg-panel p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary/80">
                {service.category}
              </p>
              <h3 className="text-base font-semibold text-heading">
                {service.name}
              </h3>
              <p className="text-sm text-ink/80">
                {service.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`${SERVICES_PATH}/${service.slug}`}
                  className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  View detail
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
      )}
    </section>
  );
}

