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
    "Omnirexis is a premium AI implementation and automation consultancy. We identify opportunities, design tailored solutions, implement best-in-class AI technologies, integrate with your existing systems, and deliver measurable business outcomes.",
  positioning:
    "We don't build AI platforms. We select the best technologies for your business, implement them properly, and deliver outcomes you can measure — time saved, costs reduced, revenue grown, and customer experience improved.",
  url: "https://omnirexis.com",
  email: "hello@omnirexis.com",
  phone: "07566 729429",
  phoneInternational: "+44 7566 729429",
  linkedin: "https://linkedin.com/company/omnirexis",
  address: "100 Innovation Drive, Suite 400, San Francisco, CA 94105",
  ctaLabel: "Book Your Free AI Strategy Call",
  ctaHref: "/contact",
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
  { value: "20+", label: "Hours saved per week", context: "Average across client engagements" },
  { value: "35%", label: "Operational cost reduction", context: "Measured within 90 days of deployment" },
  { value: "3×", label: "Faster lead response", context: "Compared to manual intake processes" },
  { value: "60", label: "Days to positive ROI", context: "Median payback period across projects" },
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
      "A prioritised roadmap showing exactly where AI will save time, cut costs and unlock new revenue — with projected returns for each opportunity, ranked by impact.",
    process:
      "We review how your business operates, map your key workflows and quantify where time and money are being lost. You receive a clear, honest report — before any commitment to implement.",
    support:
      "Your strategist remains available to reassess priorities as your business evolves. Many clients move straight from the audit into implementation — with a roadmap already in place.",
  },
  {
    icon: Mic,
    title: "AI Voice Receptionists",
    summary:
      "Intelligent AI receptionists that answer calls, qualify leads, answer common questions and book appointments 24/7.",
    problem:
      "Calls go unanswered during busy periods, evenings and weekends. Leads hang up. Your team spends hours on routine enquiries instead of the work that actually grows the business.",
    outcome:
      "Every call answered. Leads qualified automatically. Appointments booked without adding headcount. Your team handles only the conversations that genuinely need a human.",
    process:
      "We assess your call flows, select the right voice AI for your business, configure it with your FAQs and booking rules, integrate with your calendar and CRM, and test thoroughly before go-live.",
    support:
      "We monitor call quality, update responses as your business changes, and refine routing so performance improves month on month.",
  },
  {
    icon: Zap,
    title: "Business Process Automation",
    summary:
      "Automate repetitive admin, emails, CRM updates, reporting, customer follow-ups and internal workflows.",
    problem:
      "Your team loses hours every week to repetitive admin — updating spreadsheets, sending follow-up emails, copying data between systems and preparing reports that nobody should be doing by hand.",
    outcome:
      "Twenty or more hours returned to your team each week. Fewer errors. Faster follow-ups. Lower operational costs — without sacrificing quality.",
    process:
      "We map your repetitive workflows, identify the highest-impact automations, connect your existing tools and deploy step by step — always starting with what delivers returns fastest.",
    support:
      "We monitor your automations, fix bottlenecks and expand what's working. As your business changes, your workflows evolve with it.",
  },
  {
    icon: Headphones,
    title: "AI Customer Experience",
    summary:
      "Implement AI chat, knowledge assistants and automated customer support to improve response times and customer satisfaction.",
    problem:
      "Customers wait too long for answers. Support teams are overwhelmed with the same questions. Slow response times damage satisfaction — and cost you sales.",
    outcome:
      "Faster responses, higher satisfaction scores and more enquiries converted — without hiring more support staff.",
    process:
      "We review your customer touchpoints, implement chat and knowledge tools suited to your business, connect them to your existing support channels and configure them around your products and policies.",
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
      "Coordinate subcontractors, automate quote follow-ups and keep site reporting flowing — without the admin burden.",
    highlight: "Project coordination · Quote automation",
  },
  {
    icon: Wrench,
    title: "Trades",
    description:
      "Capture every enquiry with voice AI, book jobs through chat and automate dispatch, invoicing and customer updates.",
    highlight: "Call handling · Job booking",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Streamline supply chain communications, quality reporting, inventory alerts and internal knowledge access.",
    highlight: "Supply chain · Quality reporting",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Automate patient intake, appointment scheduling and routine enquiries — reducing admin while protecting care quality.",
    highlight: "Patient intake · Scheduling",
  },
  {
    icon: Scale,
    title: "Professional Services",
    description:
      "Accelerate client onboarding, document preparation and follow-up sequences so your team stays focused on billable work.",
    highlight: "Onboarding · Document automation",
  },
  {
    icon: ChefHat,
    title: "Hospitality",
    description:
      "Manage reservations, guest enquiries and review responses — elevating every touchpoint without stretching your team.",
    highlight: "Reservations · Guest communications",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description:
      "Handle membership enquiries, class bookings and retention follow-ups — keeping your pipeline full and members engaged.",
    highlight: "Membership · Retention",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Resolve product enquiries, automate order updates and run personalised follow-up campaigns that drive repeat revenue.",
    highlight: "Enquiries · Order automation",
  },
  {
    icon: Home,
    title: "Property",
    description:
      "Schedule viewings, triage tenant requests and qualify sales and lettings leads — automatically and around the clock.",
    highlight: "Viewings · Lead qualification",
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Automate service bookings, parts enquiries and sales follow-up across every customer touchpoint in your dealership.",
    highlight: "Service booking · Sales pipeline",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A focused conversation to understand how your business operates, where time is being lost and which commercial outcomes matter most.",
  },
  {
    step: "02",
    title: "AI Opportunity Audit",
    description:
      "We map your workflows, quantify the cost of manual processes and prioritise the automations with the strongest return on investment.",
  },
  {
    step: "03",
    title: "Solution Design",
    description:
      "A tailored implementation plan — recommended technologies, integrations, timeline and projected returns. Every decision tied to a business outcome.",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "We configure, integrate and deploy the right AI tools within your existing stack — tested, documented and ready for your team to use with confidence.",
  },
  {
    step: "05",
    title: "Optimisation",
    description:
      "We monitor performance, refine what works and expand your automation footprint — so value compounds long after go-live.",
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
      "Respond faster, nurture smarter and convert more — with AI working across your entire commercial funnel.",
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
      "Most clients see measurable impact within weeks. We implement for commercial results, not endless configuration.",
  },
  {
    icon: Target,
    title: "Measurable ROI",
    description:
      "Every engagement ties to outcomes you can track, report and present to your board.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Within three weeks, Omnirexis implemented automation across our entire lead intake pipeline. Response times dropped from two days to under fifteen minutes — and we closed 28% more business that quarter.",
    author: "James Whitfield",
    role: "Chief Executive",
    company: "Northline Logistics",
    result: "+28% close rate",
  },
  {
    quote:
      "They integrated the right support tools and configured them around our workflows. Seven in ten tickets now resolve without human intervention — our team finally handles the cases that actually need them.",
    author: "Priya Nair",
    role: "Chief Operating Officer",
    company: "Summit Health Group",
    result: "70% tickets automated",
  },
  {
    quote:
      "The CRM automation paid for the entire engagement within sixty days. Omnirexis thinks like operators, not software vendors — that's genuinely rare in this industry.",
    author: "Daniel Ortiz",
    role: "Founder",
    company: "Brightpath Retail",
    result: "60-day payback",
  },
] as const;

export const faqs = [
  {
    question: "What businesses benefit most from AI automation?",
    answer:
      "Any organisation losing time to repetitive tasks, slow lead response, manual customer support or disconnected systems. We partner with small and mid-market businesses across construction, healthcare, retail, professional services and more — wherever practical implementation delivers measurable commercial value.",
  },
  {
    question: "Do you build your own AI software?",
    answer:
      "No. Omnirexis is an implementation consultancy, not a software company. We evaluate the market, select the best-fit AI technologies for your requirements, and implement them within your business. You benefit from enterprise-grade tools without building or maintaining proprietary systems.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Focused services such as AI Voice Receptionists or Business Process Automation typically go live within two to four weeks. More complex customer experience integrations take six to ten weeks. We always deploy high-impact work first, so you see returns while the broader roadmap takes shape.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. We own the full implementation lifecycle — opportunity assessment, solution design, integration and deployment. You contribute business context; we handle the technology. Your team receives hands-on training and documentation written for operators, not developers.",
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
      "Results vary by business, but clients typically recover twenty or more hours per week, reduce operational costs by twenty-five to forty percent, and see revenue impact within sixty days. We model projected returns during your AI Opportunity Audit before any commitment.",
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