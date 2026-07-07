import { createMetadata } from "@/lib/site";
import type { Metadata } from "next";

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export const pageSeo = {
  home: {
    title: "Omnirexis | AI Automation & Business AI Solutions UK",
    description:
      "Omnirexis helps businesses save time, reduce costs and increase revenue through practical AI automation, workflow optimisation and intelligent business solutions.",
    path: "",
    absoluteTitle: true,
  },
  solutions: {
    title: "AI Automation & Business AI Solutions",
    description:
      "Explore Omnirexis flagship services — AI opportunity audits, voice receptionists, workflow automation and customer experience solutions for UK businesses seeking measurable results.",
    path: "/solutions",
  },
  industries: {
    title: "AI Automation by Industry",
    description:
      "Sector-focused AI automation and workflow optimisation for construction, healthcare, professional services, retail, hospitality and more — tailored to how your UK business operates.",
    path: "/industries",
  },
  process: {
    title: "Our AI Implementation Process",
    description:
      "Discover how Omnirexis delivers AI consultancy — from discovery and opportunity audit through implementation, integration and ongoing optimisation for lasting business outcomes.",
    path: "/process",
  },
  about: {
    title: "About Omnirexis | UK AI Consultancy",
    description:
      "Omnirexis is a UK-focused business AI consultancy helping organisations implement practical automation, intelligent workflows and artificial intelligence for business without unnecessary complexity.",
    path: "/about",
  },
  faq: {
    title: "AI Automation FAQ",
    description:
      "Answers to common questions about Omnirexis AI automation, workflow integration, ROI, security, implementation timelines and getting started with business AI in the UK.",
    path: "/faq",
  },
  contact: {
    title: "Contact Omnirexis",
    description:
      "Book a free AI strategy call or send an enquiry. Speak with Omnirexis about AI automation, workflow optimisation and intelligent business solutions for your UK organisation.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "How Omnirexis collects, uses, stores and protects your personal information when you enquire about AI automation and business consultancy services.",
    path: "/privacy",
    noIndex: false,
  },
  terms: {
    title: "Terms of Service",
    description:
      "Terms governing use of the Omnirexis website and information about our AI automation and business consultancy services.",
    path: "/terms",
    noIndex: false,
  },
  notFound: {
    title: "Page Not Found",
    description:
      "The page you are looking for could not be found. Visit Omnirexis for AI automation and business AI solutions in the UK.",
    path: "/404",
    noIndex: true,
  },
} as const satisfies Record<string, PageSeoConfig>;

export function metadataFor(page: keyof typeof pageSeo): Metadata {
  const config = pageSeo[page];
  return createMetadata({
    title: config.title,
    description: config.description,
    path: config.path,
    absoluteTitle: "absoluteTitle" in config ? config.absoluteTitle : false,
    noIndex: "noIndex" in config ? config.noIndex : false,
  });
}