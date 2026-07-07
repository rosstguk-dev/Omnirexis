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
        : route === "/contact" || route === "/solutions" || route === "/about"
          ? 0.9
          : route === "/faq"
            ? 0.85
            : 0.7,
  }));
}