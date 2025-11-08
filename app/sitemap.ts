import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getAllServices } from "@/lib/data/services";
import { getAllLocations } from "@/lib/data/locations";
import { getAllArticles } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = getAllServices();
  const locations = getAllLocations();
  const articles = await getAllArticles();

  const serviceUrls = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const locationUrls = locations.map((location) => ({
    url: `${SITE_URL}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const toolUrls = [
    { slug: "boot-calculator", priority: 0.8 },
    { slug: "exchange-cost-estimator", priority: 0.8 },
    { slug: "identification-rules-checker", priority: 0.8 },
  ].map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: tool.priority,
  }));

  const articleUrls = articles.map((article) => {
    const slug = typeof article.slug === "object" && article.slug !== null && "current" in article.slug
      ? (article.slug as { current: string }).current
      : (typeof article.slug === "string" ? article.slug : "");
    return {
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(article.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    };
  });

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tools`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...serviceUrls,
    ...locationUrls,
    ...toolUrls,
    ...articleUrls,
  ];
}

