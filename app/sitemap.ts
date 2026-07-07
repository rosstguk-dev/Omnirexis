import type { MetadataRoute } from "next";
import { getAllInsightArticles } from "@/lib/insights";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/solutions",
  "/industries",
  "/process",
  "/insights",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/contact" || route === "/insights"
        ? ("weekly" as const)
        : ("monthly" as const),
    priority:
      route === ""
        ? 1
        : route === "/contact" ||
            route === "/solutions" ||
            route === "/about" ||
            route === "/insights"
          ? 0.9
          : route === "/faq"
            ? 0.85
            : 0.7,
  }));

  const articleEntries = getAllInsightArticles().map((article) => ({
    url: `${siteConfig.url}/insights/${article.slug}`,
    lastModified: new Date(article.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...articleEntries];
}