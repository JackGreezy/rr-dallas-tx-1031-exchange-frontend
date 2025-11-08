import groq from "groq";
import { sanityClient } from "@/lib/sanity/client";

export type SanityImage = {
  asset: {
    _ref: string;
    url?: string;
  };
  alt?: string;
};

export type ArticleSummary = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  featuredImage?: SanityImage;
};

export type ArticleDetail = ArticleSummary & {
  content: unknown;
  updatedAt?: string;
};

const articleFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featuredImage{
    "asset": {
      "_ref": image.asset->_id,
      "url": image.asset->url
    },
    alt
  }
`;

export async function fetchArticles(limit = 12, offset = 0) {
  if (!sanityClient) {
    return [];
  }

  const query = groq`
    *[_type == "article" && published == true] | order(publishedAt desc) [${offset}...${offset + limit}]{
      ${articleFields}
    }
  `;

  const data = await sanityClient.fetch<ArticleSummary[]>(query);
  return data;
}

export async function fetchArticleCount() {
  if (!sanityClient) {
    return 0;
  }

  const query = groq`count(*[_type == "article" && published == true])`;
  const count = await sanityClient.fetch<number>(query);
  return count || 0;
}

export async function fetchArticleBySlug(slug: string) {
  if (!sanityClient) {
    return null;
  }

  const query = groq`
    *[_type == "article" && slug.current == $slug][0]{
      ${articleFields},
      content,
      updatedAt
    }
  `;

  const article = await sanityClient.fetch<ArticleDetail | null>(query, { slug });
  return article;
}

export async function getAllArticles() {
  if (!sanityClient) {
    return [];
  }

  const query = groq`
    *[_type == "article" && published == true] | order(publishedAt desc){
      ${articleFields},
      updatedAt,
      "slug": slug.current
    }
  `;

  const articles = await sanityClient.fetch<Array<ArticleSummary & { updatedAt?: string; slug: string | { current: string } }>>(query);
  return articles.map((article) => {
    const slugValue = typeof article.slug === "object" && article.slug !== null && "current" in article.slug 
      ? (article.slug as { current: string }).current 
      : (typeof article.slug === "string" ? article.slug : "");
    return {
      ...article,
      slug: slugValue,
    };
  });
}

