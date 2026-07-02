import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/solutions",
  "/industries",
  "/process",
  "/about",
  "/faq",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/contact" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/contact"
          ? 0.95
          : 0.8,
  }));
}