import { locationImageMap, propertyTypeImageMap } from "./image-mappings";

/**
 * Get the image path for a location by slug
 * Returns the image path if it exists in the mapping, otherwise null
 * Works on both server and client
 * Strips -tx suffix from slug for image lookup (images use base slugs)
 */
export function getLocationImagePath(slug: string): string | null {
  // Strip -tx suffix for image lookup (image mappings use base slugs)
  const baseSlug = slug.replace(/-tx$/, "");
  const fileName = locationImageMap[baseSlug];
  if (!fileName) return null;
  return `/locations/${fileName}`;
}

/**
 * Get the image path for a property type by slug
 * Returns the image path if it exists in the mapping, otherwise null
 * Works on both server and client
 */
export function getPropertyTypeImagePath(slug: string): string | null {
  const fileName = propertyTypeImageMap[slug];
  if (!fileName) return null;
  return `/property-types/${fileName}`;
}


