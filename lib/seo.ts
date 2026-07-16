import type { InsightArticle } from "@/lib/insights";
import {
  businessHoursSchedule,
  faqs,
  postalAddressSchema,
  siteConfig,
  solutions,
} from "@/lib/site";

const weekdayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function absoluteUrl(path = "") {
  return `${siteConfig.url}${path}`;
}

function parseTimeTo24Hour(time: string) {
  const match = time.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return time;

  let hours = Number(match[1]);
  const minutes = match[2];
  const period = match[3].toUpperCase();

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

export function openingHoursSpecification() {
  return businessHoursSchedule.map((slot) => {
    const [opens, closes] = slot.hours
      .split("–")
      .map((value) => parseTimeTo24Hour(value));
    const dayOfWeek =
      slot.days === "Monday – Friday"
        ? weekdayNames.slice(0, 5)
        : weekdayNames.slice(5);

    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek,
      opens,
      closes,
    };
  });
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneInternational,
    address: postalAddressSchema(),
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: siteConfig.socialProfiles,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneInternational,
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: ["English"],
      areaServed: "GB",
      hoursAvailable: businessHoursSchedule
        .map((slot) => `${slot.days}: ${slot.hours}`)
        .join("; "),
    },
    openingHoursSpecification: openingHoursSpecification(),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl(siteConfig.logo),
    logo: absoluteUrl(siteConfig.logo),
    description: siteConfig.description,
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Invoice",
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    address: postalAddressSchema(),
    openingHoursSpecification: openingHoursSpecification(),
    sameAs: siteConfig.socialProfiles,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneInternational,
      contactType: "customer service",
      email: siteConfig.email,
      availableLanguage: ["English"],
      areaServed: "GB",
    },
    knowsAbout: [
      "AI Automation UK",
      "AI Consultant UK",
      "Business AI Solutions",
      "Workflow Automation",
      "AI Receptionist",
      "AI Consultancy Manchester",
      "AI Solutions for Small Businesses",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
      itemListElement: solutions.map((solution, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: solution.title,
          description: solution.summary,
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function webPageJsonLd({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#localbusiness`,
    },
    inLanguage: "en-GB",
  };
}

export function breadcrumbJsonLd(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function professionalServiceJsonLd() {
  return localBusinessJsonLd();
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(article: InsightArticle) {
  const url = absoluteUrl(`/insights/${article.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    url,
    datePublished: article.publishedDate,
    dateModified: article.publishedDate,
    author: {
      "@type": "Organization",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logo),
      },
    },
    image: absoluteUrl(siteConfig.ogImage),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
    },
    inLanguage: "en-GB",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
  };
}

export function articleFaqJsonLd(article: InsightArticle) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function pageStructuredData({
  path,
  title,
  description,
  breadcrumbs,
}: {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: ReadonlyArray<{ name: string; path: string }>;
}) {
  const data: Record<string, unknown>[] = [
    webPageJsonLd({ path, title, description }),
  ];

  if (breadcrumbs && breadcrumbs.length > 1) {
    data.push(breadcrumbJsonLd(breadcrumbs));
  }

  return data;
}