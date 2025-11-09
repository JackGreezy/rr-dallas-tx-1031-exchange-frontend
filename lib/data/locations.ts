import { PRIMARY_CITY, PRIMARY_STATE_ABBR } from "@/lib/constants";
import { locationsBatch01 } from "@/data/batches/locations/batch-01";
import { locationsBatch02 } from "@/data/batches/locations/batch-02";
import { locationsBatch03 } from "@/data/batches/locations/batch-03";

export type Location = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  highlights: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
  coordinates: { lat: number; lng: number };
};

// Coordinates mapping for locations
const locationCoordinates: Record<string, { lat: number; lng: number }> = {
  "uptown-dallas": { lat: 32.7976, lng: -96.801 },
  "downtown-dallas": { lat: 32.7767, lng: -96.797 },
  "deep-ellum": { lat: 32.7837, lng: -96.7849 },
  "design-district": { lat: 32.8067, lng: -96.8078 },
  "bishop-arts": { lat: 32.7473, lng: -96.8287 },
  "plano": { lat: 33.0198, lng: -96.6989 },
  "frisco": { lat: 33.1507, lng: -96.8236 },
  "irving": { lat: 32.8140, lng: -96.9489 },
  "arlington": { lat: 32.7357, lng: -97.1081 },
  "addison": { lat: 32.9618, lng: -96.8292 },
  "richardson": { lat: 32.9483, lng: -96.7299 },
  "carrollton": { lat: 32.9537, lng: -96.8903 },
  "mckinney": { lat: 33.1972, lng: -96.6397 },
  "allen": { lat: 33.1032, lng: -96.6706 },
  "lewisville": { lat: 33.0462, lng: -96.9942 },
  "flower-mound": { lat: 33.0146, lng: -97.0969 },
  "coppell": { lat: 32.9546, lng: -97.0150 },
  "garland": { lat: 32.9126, lng: -96.6389 },
  "mesquite": { lat: 32.7668, lng: -96.5992 },
  "fort-worth": { lat: 32.7555, lng: -97.3308 },
  "dallas": { lat: 32.7767, lng: -96.7970 },
  "nationwide": { lat: 39.8283, lng: -98.5795 }, // Center of US
};

// Helper function to extract text from HTML
const stripHtml = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
};

// Helper function to get first sentence from text
const getFirstSentence = (text: string): string => {
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  return sentences ? sentences[0].trim() : text.substring(0, 100) + "...";
};

// Name mapping for locations that need special formatting
const locationNameMap: Record<string, string> = {
  "uptown-dallas": "Uptown Dallas",
  "downtown-dallas": "Downtown Dallas",
  "deep-ellum": "Deep Ellum",
  "design-district": "Design District",
  "bishop-arts": "Bishop Arts",
  "fort-worth": "Fort Worth",
  "flower-mound": "Flower Mound",
};

// Helper function to create Location from batch data
const createLocationFromBatch = (
  slug: string,
  batchData: {
    mainDescription: string;
    popularPaths: Array<{ type: string; slug: string; name: string; whyPopular: string }>;
    faqs: Array<{ question: string; answer: string }>;
  }
): Location => {
  const name = locationNameMap[slug] || slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  const descriptionText = stripHtml(batchData.mainDescription);
  const firstParagraph = descriptionText.split(".")[0] + ".";
  const headline = getFirstSentence(descriptionText);
  
  // Extract highlights from popularPaths (first 3)
  const highlights = batchData.popularPaths
    .slice(0, 3)
    .map((path) => path.whyPopular.split(".")[0] + ".")
    .filter(Boolean);
  
  // Extract service slugs from popularPaths
  const services = batchData.popularPaths
    .filter((path) => path.type === "service")
    .map((path) => path.slug)
    .slice(0, 4);
  
  return {
    slug,
    name,
    headline: headline.length > 100 ? headline.substring(0, 100) + "..." : headline,
    description: firstParagraph.length > 200 ? firstParagraph.substring(0, 200) + "..." : firstParagraph,
    highlights: highlights.length > 0 ? highlights : [
      `1031 exchange opportunities in ${name}, ${PRIMARY_STATE_ABBR}.`,
      `Nationwide property identification support for ${name} investors.`,
      `Comprehensive exchange coordination and deadline management.`,
    ],
    services: services.length > 0 ? services : [
      "replacement-property-identification",
      "forty-five-day-deadline-management",
      "nationwide-property-sourcing",
    ],
    faqs: batchData.faqs || [],
    coordinates: locationCoordinates[slug] || { lat: 32.7767, lng: -96.7970 }, // Default to Dallas
  };
};

// Combine all batch data
const allBatchData = {
  ...locationsBatch01,
  ...locationsBatch02,
  ...locationsBatch03,
};

// Generate Location objects from batch data
// Append state abbreviation to slugs (except for "nationwide")
export const locations: Location[] = Object.entries(allBatchData).map(([baseSlug, data]) => {
  // Use base slug for coordinates lookup and name mapping
  const location = createLocationFromBatch(baseSlug, data);
  // Append -tx to slug for URLs (except nationwide)
  const urlSlug = baseSlug === "nationwide" ? baseSlug : `${baseSlug}-tx`;
  return {
    ...location,
    slug: urlSlug,
  };
});

export function getAllLocations(): Location[] {
  return locations;
}
