'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Location } from "@/lib/data/locations";
import { searchLocations } from "@/lib/utils/search";
import { CONTACT_PATH, LOCATIONS_PATH, PRIMARY_STATE_ABBR } from "@/lib/constants";
import { getLocationImagePath } from "@/lib/utils/images";

type LocationSearchGridProps = {
  locations: Location[];
  compact?: boolean;
};

export function LocationSearchGrid({
  locations,
  compact,
}: LocationSearchGridProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return locations;
    const { matches } = searchLocations(query);
    if (matches.length === 0) {
      return [];
    }
    const lookup = new Set(matches.map((match) => match.slug));
    return locations.filter((location) => lookup.has(location.slug));
  }, [locations, query]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query) return;
    const { exact } = searchLocations(query);
    if (exact) {
      router.push(`${LOCATIONS_PATH}/${exact.slug}`);
      return;
    }
    router.push(`${CONTACT_PATH}?projectType=${encodeURIComponent(query)}`);
  };

  const showEmpty = query.trim().length > 0 && filtered.length === 0;

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <label className="flex grow flex-col gap-2 text-sm font-medium text-heading">
          Search locations
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by city, district, or project"
            className="w-full rounded-full border border-outline/30 bg-white px-5 py-3 text-base text-ink shadow-[inset_0_1px_1px_rgba(21,50,67,0.08)] focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Search
        </button>
      </form>
      {showEmpty ? (
        <div className="rounded-3xl border border-outline/20 bg-panel p-6 text-sm text-ink/85">
          <p className="font-semibold text-heading">
            We can help with "{query}".
          </p>
          <p className="mt-2">
            Tell us where you plan to reinvest and we will prepare a site list
            aligned with your exchange deadlines.
          </p>
          <Link
            href={`${CONTACT_PATH}?projectType=${encodeURIComponent(query)}`}
            className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
          {filtered.map((location) => {
            const imagePath = getLocationImagePath(location.slug);
            return (
              <article
                key={location.slug}
                className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-outline/15 bg-white overflow-hidden shadow-[0_20px_56px_rgba(21,50,67,0.08)] transition hover:-translate-y-1 hover:shadow-[0_32px_72px_rgba(21,50,67,0.12)]"
              >
                {imagePath && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={imagePath}
                      alt={`${location.name}, ${PRIMARY_STATE_ABBR}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-heading">
                    {location.name}
                  </h3>
                  <p className="text-sm text-ink/80">{location.description}</p>
                  <ul className="space-y-2 text-xs text-ink/70">
                    {location.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-4">
                  <Link
                    href={`${LOCATIONS_PATH}/${location.slug}`}
                    className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-fg transition hover:bg-[#B68531] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    View location
                  </Link>
                  <Link
                    href={`${CONTACT_PATH}?projectType=${encodeURIComponent(location.name)}`}
                    className="inline-flex items-center rounded-full border border-outline/30 px-4 py-2 text-sm font-medium text-ink transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    Prefill contact
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

