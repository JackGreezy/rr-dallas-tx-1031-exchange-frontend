import { locationImageMap, propertyTypeImageMap } from "./image-mappings";

/**
 * Get the image path for a location by slug
 * Returns the image path if it exists in the mapping, otherwise null
 * Works on both server and client
 */
export function getLocationImagePath(slug: string): string | null {
  const fileName = locationImageMap[slug];
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


