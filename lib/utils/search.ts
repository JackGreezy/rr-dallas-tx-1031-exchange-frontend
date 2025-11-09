import { services } from "@/lib/data/services";
import { locations } from "@/lib/data/locations";
import { propertyTypesData } from "@/data/property-types";

type Searchable = {
  slug: string;
  name: string;
  shortDescription?: string;
};

const serviceIndex: Searchable[] = services.map((service) => ({
  slug: service.slug,
  name: service.name,
  shortDescription: service.shortDescription,
}));

const locationIndex: Searchable[] = locations.map((location) => ({
  slug: location.slug,
  name: location.name,
}));

const normalize = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, " ");

const includesTerm = (baseline: string, term: string) =>
  normalize(baseline).includes(normalize(term));

export const findServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

export const findLocationBySlug = (slug: string) =>
  locations.find((location) => location.slug === slug);

export const findPropertyTypeBySlug = (slug: string) =>
  propertyTypesData.find((propertyType) => propertyType.slug === slug);

export const searchServices = (query: string) => {
  const normalized = normalize(query);

  const exact =
    serviceIndex.find(
      (item) =>
        normalize(item.name) === normalized || normalize(item.slug) === normalized
    ) ?? null;

  const matches = serviceIndex.filter(
    (item) =>
      includesTerm(item.name, normalized) ||
      (item.shortDescription && includesTerm(item.shortDescription, normalized))
  );

  return {
    exact,
    matches,
  };
};

export const searchLocations = (query: string) => {
  const normalized = normalize(query);

  const exact =
    locationIndex.find(
      (item) =>
        normalize(item.name) === normalized || normalize(item.slug) === normalized
    ) ?? null;

  const matches = locationIndex.filter((item) =>
    includesTerm(item.name, normalized)
  );

  return {
    exact,
    matches,
  };
};

export const normalizeProjectType = (value: string | null | undefined) =>
  value ? value.replace(/\+/g, " ").trim() : "";

