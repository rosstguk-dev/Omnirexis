import type { Metadata } from "next";
import {
  Building2,
  Car,
  ChefHat,
  Clock,
  Cog,
  DollarSign,
  Dumbbell,
  Factory,
  Headphones,
  HeartPulse,
  Home,
  LineChart,
  Mic,
  Scale,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  type LucideIcon,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const siteConfig = {
  name: "Omnirexis",
  legalName: "Omnirexis Inc.",
  tagline: "Intelligence. Automated.",
  mission:
    "We help businesses identify AI opportunities, implement the right technologies, integrate them with existing systems, and optimise for lasting results — saving time, reducing costs, growing revenue and improving customer experience.",
  description:
    "Omnirexis is a premium AI implementation, automation and integration consultancy. We identify opportunities, design practical implementation plans, configure best-in-class AI platforms, integrate with your existing systems, and deliver measurable business outcomes.",
  positioning:
    "We are not a software company. We select proven AI platforms, integrate them into your business, and deliver outcomes you can measure — time saved, costs reduced, revenue grown, and customer experience improved.",
  url: "https://omnirexis.com",
  logo: "/images/omnirexis-logo.svg",
  logoIcon: "/images/omnirexis-icon.svg",
  email: "hello@omnirexis.com",
  phone: "07566 729429",
  phoneInternational: "+44 7566 729429",
  linkedin: "https://linkedin.com/company/omnirexis",
  address: "100 Innovation Drive, Suite 400, San Francisco, CA 94105",
  ctaLabel: "Book Your Free AI Strategy Call",
  ctaHref:
    "https://meetings-eu1.hubspot.com/ross-gallagher/free-ai-strategy-call",
  ctaMicrocopy: "30-minute call · Senior strategist · No obligation",
  keywords: [
    "AI implementation consultancy",
    "AI automation consultancy",
    "business process automation",
    "AI integration services",
    "workflow automation consulting",
    "AI strategy consulting",
    "customer experience automation",
    "sales automation consulting",
    "AI consulting San Francisco",
    "SMB AI implementation",
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const trustBadges = [
  "AI Implementation",
  "Measurable Outcomes",
  "System Integration",
  "Ongoing Optimisation",
  "Business-First Consulting",
] as const;

export const metrics = [
  { value: "20+", label: "Hours saved per week", context: "Commonly reported by clients; varies by scope" },
  { value: "25–40%", label: "Operational cost reduction", context: "Typical range reported within 90 days of go-live" },
  { value: "3×", label: "Faster lead response", context: "Frequently achieved vs. manual intake processes" },
  { value: "60", label: "Days to positive ROI", context: "Typical payback period; modelled before you commit" },
] as const;

export type Solution = {
  icon: LucideIcon;
  title: string;
  summary: string;
  problem: string;
  outcome: string;
  process: string;
  support: string;
};

export const solutions: Solution[] = [
  {
    icon: Search,
    title: "AI Opportunity Audit",
    summary:
      "We analyse your business to identify where AI can save time, reduce costs and generate new revenue opportunities.",
    problem:
      "You know AI could help, but you're not sure where to start. Time is lost to manual work, leads go cold, and teams repeat the same tasks — without a clear picture of what automation is actually worth.",
    outcome:
      "A prioritised roadmap showing where AI can save time, cut costs and unlock new revenue — with projected returns for each opportunity, ranked by impact.",
    process:
      "We review how your business operates, map your key workflows and quantify where time and money are being lost. You receive a clear, honest report — before any commitment to implement.",
    support:
      "Your strategist remains available to reassess priorities as your business evolves. Many clients move straight from the audit into implementation — with a roadmap already in place.",
  },
  {
    icon: Mic,
    title: "AI Voice Receptionists",
    summary:
      "We implement AI voice receptionists using leading platforms such as Retell AI, ElevenLabs and Twilio — answering calls, qualifying leads, handling common questions and booking appointments around the clock.",
    problem:
      "Calls go unanswered during busy periods, evenings and weekends. Leads hang up. Your team spends hours on routine enquiries instead of the work that actually grows the business.",
    outcome:
      "Calls handled around the clock — including busy periods, evenings and weekends. Leads qualified automatically. Appointments booked without adding headcount. Your team steps in only when a human is needed.",
    process:
      "We assess your call flows, select the right voice AI platform for your business, configure it with your FAQs and booking rules, integrate with your calendar and CRM, and test thoroughly before go-live.",
    support:
      "We monitor call quality, update responses as your business changes, and refine routing so performance improves month on month.",
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    summary:
      "We implement workflow automation using platforms such as n8n, Zapier and Make — connecting repetitive admin, emails, CRM updates, reporting, customer follow-ups and internal workflows.",
    problem:
      "Your team loses hours every week to repetitive admin — updating spreadsheets, sending follow-up emails, copying data between systems and preparing reports that nobody should be doing by hand.",
    outcome:
      "Clients commonly recover significant weekly hours. Fewer manual errors. Faster follow-ups. Lower operational costs — without sacrificing quality.",
    process:
      "We map your repetitive workflows, identify the highest-impact automations, connect your existing tools via proven integration platforms and roll out step by step — always starting with what delivers returns fastest.",
    support:
      "We monitor your automations, fix bottlenecks and expand what's working. As your business changes, your workflows evolve with it.",
  },
  {
    icon: Headphones,
    title: "AI Customer Experience",
    summary:
      "We implement AI chat, knowledge assistants and automated customer support using established platforms — improving response times and customer satisfaction across the channels you already use.",
    problem:
      "Customers wait too long for answers. Support teams are overwhelmed with the same questions. Slow response times damage satisfaction — and cost you sales.",
    outcome:
      "Faster responses, improved satisfaction and more enquiries handled efficiently — without proportional increases in support headcount.",
    process:
      "We review your customer touchpoints, select suitable chat and knowledge platforms, connect them to your existing support channels and configure them around your products, policies and brand voice.",
    support:
      "We track resolution rates and satisfaction, update content as your business changes and continuously improve how your customers are served.",
  },
];

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight: string;
};

export const industries: Industry[] = [
  {
    icon: Building2,
    title: "Construction",
    description:
      "We implement tools to coordinate subcontractors, automate quote follow-ups and keep site reporting flowing — without the admin burden.",
    highlight: "Project coordination · Quote automation",
  },
  {
    icon: Wrench,
    title: "Trades",
    description:
      "We implement voice AI and workflow automation to capture enquiries, book jobs, and streamline dispatch, invoicing and customer updates.",
    highlight: "Call handling · Job booking",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "We integrate automation across supply chain communications, quality reporting, inventory alerts and internal knowledge access.",
    highlight: "Supply chain · Quality reporting",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "We implement patient intake, appointment scheduling and routine enquiry automation — reducing admin while protecting care quality.",
    highlight: "Patient intake · Scheduling",
  },
  {
    icon: Scale,
    title: "Professional Services",
    description:
      "We implement client onboarding, document preparation and follow-up automation so your team stays focused on billable work.",
    highlight: "Onboarding · Document automation",
  },
  {
    icon: ChefHat,
    title: "Hospitality",
    description:
      "We implement reservation handling, guest enquiry automation and review response workflows — elevating every touchpoint without stretching your team.",
    highlight: "Reservations · Guest communications",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description:
      "We implement membership enquiry handling, class booking automation and retention follow-ups — keeping your pipeline full and members engaged.",
    highlight: "Membership · Retention",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "We implement product enquiry handling, order update automation and personalised follow-up campaigns that drive repeat revenue.",
    highlight: "Enquiries · Order automation",
  },
  {
    icon: Home,
    title: "Property",
    description:
      "We implement viewing scheduling, tenant request triage and lead qualification — working around the clock via proven AI and automation platforms.",
    highlight: "Viewings · Lead qualification",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "We implement service booking, parts enquiry handling and sales follow-up automation across every customer touchpoint in your dealership.",
    highlight: "Service booking · Sales pipeline",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "Understand the business, current systems and objectives.",
  },
  {
    step: "02",
    title: "AI Opportunity Audit",
    description:
      "Identify the highest ROI opportunities.",
  },
  {
    step: "03",
    title: "Solution Design",
    description:
      "Select the most appropriate AI technologies and design the implementation plan.",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "Configure, integrate and deploy the solution with minimal disruption.",
  },
  {
    step: "05",
    title: "Optimisation & Support",
    description:
      "Monitor performance, improve results and provide ongoing support as the business grows.",
  },
] as const;

export const whyOmnirexis = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Reclaim the hours your team loses to repetitive work — and redirect that capacity toward growth.",
  },
  {
    icon: DollarSign,
    title: "Reduce Costs",
    description:
      "Cut operational overhead without compromising quality. Automation scales; headcount doesn't have to.",
  },
  {
    icon: LineChart,
    title: "Increase Revenue",
    description:
      "Respond faster, nurture smarter and convert more — with proven AI tools integrated across your commercial funnel.",
  },
  {
    icon: HeartPulse,
    title: "Improve Customer Experience",
    description:
      "Instant, consistent, professional interactions at every touchpoint — day or night.",
  },
  {
    icon: Zap,
    title: "Automate Repetitive Tasks",
    description:
      "Remove the manual handoffs, data entry and routine processes that quietly drain your margins.",
  },
  {
    icon: Cog,
    title: "Right-Sized Technology",
    description:
      "We select and implement tools that fit your scale today and grow with you — never overselling platforms you don't need.",
  },
  {
    icon: Users,
    title: "Human Support",
    description:
      "Senior strategists and implementation specialists who know your business — not a ticket queue or a chatbot.",
  },
  {
    icon: Sparkles,
    title: "Speed to Value",
    description:
      "Clients often see measurable impact within weeks. We implement using established platforms — focused on commercial results, not endless configuration.",
  },
  {
    icon: Target,
    title: "Measurable ROI",
    description:
      "Every engagement ties to outcomes you can track, report and present to your board.",
  },
] as const;

export const clientExpectationsIntro =
  "Omnirexis helps businesses implement practical AI systems using the tools and platforms they already rely on. Instead of selling hype, we focus on measurable improvements: faster response times, less manual admin, better lead handling, stronger follow-up, and clearer workflows.";

export const clientExpectations = [
  {
    title: "Faster Lead Response",
    description:
      "AI-assisted workflows can help enquiries get routed, prioritised and followed up more quickly.",
  },
  {
    title: "Less Manual Admin",
    description:
      "We identify repetitive tasks and build automation around your existing systems where possible.",
  },
  {
    title: "Practical Implementation",
    description:
      "No unnecessary platform migration. No confusing jargon. Just useful AI systems designed around how the business already works.",
  },
] as const;

export const clientExpectationsDisclaimer =
  "Example outcomes are illustrative. Actual results depend on the business, systems, data quality and implementation scope.";

export const faqs = [
  {
    question: "What businesses benefit most from AI automation?",
    answer:
      "Any organisation losing time to repetitive tasks, slow lead response, manual customer support or disconnected systems. We partner with small and mid-market businesses across construction, healthcare, retail, professional services and more — wherever practical implementation delivers measurable commercial value.",
  },
  {
    question: "Do you build your own AI software?",
    answer:
      "No.\n\nWe specialise in selecting, implementing and managing the world's leading AI technologies to deliver tailored business implementations.\n\nThis approach allows us to configure proven, reliable and scalable solutions using existing platforms — without our clients funding unnecessary software development.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Focused services such as AI Voice Receptionists or Business Process Automation typically go live within two to four weeks. More complex customer experience integrations take six to ten weeks. We always deploy high-impact work first, so you see returns while the broader roadmap takes shape.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. We manage the full implementation lifecycle — opportunity assessment, solution design, platform configuration, integration and deployment. You contribute business context; we handle the technology selection and setup. Your team receives hands-on training and documentation written for operators, not developers.",
  },
  {
    question: "Will AI replace my staff?",
    answer:
      "Our work removes low-value repetition, not people. Clients typically redeploy recovered time into customer relationships, sales and strategic work. The goal is capacity — not headcount reduction.",
  },
  {
    question: "Can AI integrate with our existing software?",
    answer:
      "Yes — and we insist on it. We connect to the platforms you already run — HubSpot, Salesforce, Zendesk, Slack, Google Workspace, Shopify, Xero and hundreds more. We enhance your stack; we never ask you to replace it.",
  },
  {
    question: "How much can automation save?",
    answer:
      "Results vary by business and scope. Many clients recover significant weekly hours, reduce operational costs materially, and see commercial impact within the first few months. We model projected returns during your AI Opportunity Audit before any commitment — so expectations are clear upfront.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Every engagement includes post-launch optimisation. We monitor performance, tune automations and expand what's working. You have direct access to your strategist and implementation team — not a generic help desk.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free AI Strategy Call. In thirty minutes, we'll understand your operations, identify your highest-value automation opportunities and outline a prioritised path to results. There is no obligation and no sales script.",
  },
  {
    question: "What happens on the strategy call?",
    answer:
      "A senior Omnirexis strategist maps your current workflows, quantifies where time and margin are being lost, and recommends implementations ranked by commercial impact. You leave with clarity — and a concrete next step if you choose to proceed.",
  },
  {
    question: "Is our business data secure?",
    answer:
      "We apply enterprise-grade practices: encrypted data in transit and at rest, role-based access controls and compliance with applicable data protection standards. Your data is never sold, shared with third parties or used to train public models.",
  },
] as const;

export const businessHoursSchedule = [
  { days: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
  { days: "Saturday – Sunday", hours: "9:00 AM – 5:00 PM" },
] as const;

export function phoneTelHref(phone = siteConfig.phone) {
  const normalized = phone.replace(/\s/g, "");
  if (normalized.startsWith("0")) {
    return `tel:+44${normalized.slice(1)}`;
  }
  return `tel:${normalized}`;
}

export const footerLinks = {
  company: navLinks,
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
} as const;

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  const pageDescription = description ?? siteConfig.description;
  const canonical = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteConfig.keywords],
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      type: "website",
      url: canonical,
      locale: "en_US",
      images: [{ url: "/images/hero-bg.jpg", width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ["/images/hero-bg.jpg"],
    },
    robots: { index: true, follow: true },
  };
}