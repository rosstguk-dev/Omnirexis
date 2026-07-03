import { businessHoursSchedule, faqs, siteConfig, solutions } from "@/lib/site";

const weekdayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

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

function openingHoursSpecification() {
  return businessHoursSchedule.map((slot) => {
    const [opens, closes] = slot.hours.split("–").map((value) => parseTimeTo24Hour(value));
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
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneInternational,
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Innovation Drive, Suite 400",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
    sameAs: [siteConfig.linkedin],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneInternational,
      contactType: "sales",
      email: siteConfig.email,
      availableLanguage: "English",
      hoursAvailable: businessHoursSchedule
        .map((slot) => `${slot.days}: ${slot.hours}`)
        .join("; "),
    },
    openingHoursSpecification: openingHoursSpecification(),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: `${siteConfig.description} We configure and integrate best-in-class AI platforms — we do not develop proprietary AI software.`,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: solutions.map((s) => s.title),
    telephone: siteConfig.phoneInternational,
    openingHoursSpecification: openingHoursSpecification(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Innovation Drive, Suite 400",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94105",
      addressCountry: "US",
    },
  };
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