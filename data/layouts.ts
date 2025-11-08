import type { PageLayoutVariant, LayoutAssignments } from "./types";
import { servicesData } from "./services";
import { locationsData } from "./locations";

export const serviceVariants: PageLayoutVariant[] = [
  {
    key: "classic",
    label: "Classic",
    description: "Traditional layout with hero, description, FAQs, and related services.",
    sections: ["hero", "description", "value-points", "faqs", "related-services"],
    features: {
      heroStyle: "gradient",
      stickyCta: true,
      schema: ["Service", "BreadcrumbList"],
    },
  },
  {
    key: "timeline-first",
    label: "Timeline First",
    description: "Emphasizes deadlines and process steps with timeline visualization.",
    sections: ["hero", "timeline", "description", "faqs", "related-services"],
    features: {
      heroStyle: "abstract",
      toc: false,
      stickyCta: true,
      schema: ["Service", "BreadcrumbList"],
    },
  },
  {
    key: "faq-focused",
    label: "FAQ Focused",
    description: "Expanded FAQ section with accordion interface and detailed answers.",
    sections: ["hero", "description", "faqs", "value-points", "related-services"],
    features: {
      heroStyle: "gradient",
      sidebar: false,
      stickyCta: false,
      schema: ["Service", "FAQPage", "BreadcrumbList"],
    },
  },
  {
    key: "comparison",
    label: "Comparison",
    description: "Side by side comparison of service options and alternatives.",
    sections: ["hero", "description", "comparison", "faqs", "related-services"],
    features: {
      heroStyle: "image",
      sidebar: true,
      stickyCta: true,
      schema: ["Service", "BreadcrumbList"],
    },
  },
  {
    key: "process-driven",
    label: "Process Driven",
    description: "Step by step process breakdown with visual workflow.",
    sections: ["hero", "process", "description", "faqs", "related-services"],
    features: {
      heroStyle: "abstract",
      toc: true,
      stickyCta: true,
      schema: ["Service", "BreadcrumbList"],
    },
  },
  {
    key: "minimal",
    label: "Minimal",
    description: "Clean, focused layout with essential information only.",
    sections: ["hero", "description", "faqs"],
    features: {
      heroStyle: "gradient",
      stickyCta: false,
      schema: ["Service", "BreadcrumbList"],
    },
  },
];

export const locationVariants: PageLayoutVariant[] = [
  {
    key: "map-first",
    label: "Map First",
    description: "Interactive map at top with location details below.",
    sections: ["hero", "map", "description", "popular-paths", "faqs"],
    features: {
      heroStyle: "map",
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "classic",
    label: "Classic",
    description: "Standard location page with description, highlights, and services.",
    sections: ["hero", "description", "highlights", "popular-paths", "faqs"],
    features: {
      heroStyle: "gradient",
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "services-focused",
    label: "Services Focused",
    description: "Emphasizes recommended services for the location.",
    sections: ["hero", "popular-paths", "description", "faqs"],
    features: {
      heroStyle: "image",
      sidebar: false,
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "data-driven",
    label: "Data Driven",
    description: "Market statistics and analytics with location context.",
    sections: ["hero", "description", "market-data", "popular-paths", "faqs"],
    features: {
      heroStyle: "abstract",
      toc: true,
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "narrative",
    label: "Narrative",
    description: "Story focused layout with rich location context.",
    sections: ["hero", "description", "highlights", "faqs"],
    features: {
      heroStyle: "image",
      stickyCta: false,
      schema: ["Place", "BreadcrumbList"],
    },
  },
  {
    key: "compact",
    label: "Compact",
    description: "Condensed layout for quick location overview.",
    sections: ["hero", "description", "popular-paths", "faqs"],
    features: {
      heroStyle: "gradient",
      stickyCta: true,
      schema: ["Place", "BreadcrumbList"],
    },
  },
];

function assignLayoutsRoundRobin<T extends { slug: string }>(
  items: T[],
  variants: PageLayoutVariant[]
): Record<string, string> {
  const assignments: Record<string, string> = {};
  let variantIndex = 0;

  items.forEach((item, index) => {
    if (index > 0 && index % variants.length === 0) {
      variantIndex = (variantIndex + 1) % variants.length;
    }
    assignments[item.slug] = variants[variantIndex].key;
    variantIndex = (variantIndex + 1) % variants.length;
  });

  return assignments;
}

export const assignments: LayoutAssignments = {
  services: assignLayoutsRoundRobin(servicesData, serviceVariants),
  locations: assignLayoutsRoundRobin(locationsData, locationVariants),
};

