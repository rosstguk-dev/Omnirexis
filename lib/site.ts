import type { Metadata } from "next";
import {
  Bot,
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
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
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
    "Helping businesses save time, reduce costs, increase revenue and improve customer experience through practical AI automation.",
  description:
    "Omnirexis is an AI automation consultancy that helps growing businesses implement practical AI — saving time, reducing costs, improving customer experience and unlocking measurable growth.",
  positioning:
    "We don't sell AI. We sell time savings, efficiency, customer experience improvements and business growth.",
  url: "https://omnirexis.com",
  email: "hello@omnirexis.com",
  phone: "+1 (415) 882-3400",
  linkedin: "https://linkedin.com/company/omnirexis",
  address: "100 Innovation Drive, Suite 400, San Francisco, CA 94105",
  businessHours: "Monday – Friday, 9:00 AM – 6:00 PM PST",
  ctaLabel: "Book Your Free AI Strategy Call",
  ctaHref: "/contact",
  ctaMicrocopy: "30-minute call · Senior strategist · No obligation",
  keywords: [
    "AI automation consultancy",
    "business process automation",
    "AI chatbots for business",
    "workflow automation",
    "AI voice receptionist",
    "lead qualification automation",
    "customer support automation",
    "sales automation",
    "AI consulting San Francisco",
    "SMB AI automation",
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
  "AI Automation",
  "Business Growth",
  "Customer Experience",
  "Workflow Optimisation",
  "Operational Efficiency",
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
  benefits: string;
  outcome: string;
};

export const solutions: Solution[] = [
  {
    icon: Bot,
    title: "AI Chatbots",
    summary:
      "Conversational agents trained on your business, live across web, messaging and social — 24 hours a day.",
    benefits:
      "Capture leads the moment they arrive, resolve routine enquiries without wait times, and give every visitor a consistent, on-brand experience.",
    outcome: "3× faster response · Always on",
  },
  {
    icon: Mic,
    title: "AI Voice Receptionists",
    summary:
      "Natural voice AI that answers calls, routes enquiries, books appointments and handles requests with clarity and professionalism.",
    benefits:
      "Every call gets answered — peak hours, evenings and weekends included. Your team receives only the conversations that need a human.",
    outcome: "Zero missed calls · Intelligent routing",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    summary:
      "End-to-end automation across operations, finance, admin and internal communications — built around how your team actually works.",
    benefits:
      "Remove manual handoffs, cut processing errors and return hours to your team every single week.",
    outcome: "20+ hours recovered weekly",
  },
  {
    icon: Target,
    title: "Lead Qualification",
    summary:
      "Automated scoring, routing and nurturing that surfaces your best opportunities and advances them through the pipeline.",
    benefits:
      "Sales spends time on deals that matter. Follow-ups happen on time. Nothing falls through the cracks.",
    outcome: "40% more qualified pipeline",
  },
  {
    icon: Headphones,
    title: "Customer Support Automation",
    summary:
      "Intelligent triage, automated resolution and smart escalation woven into your existing support workflow.",
    benefits:
      "Routine tickets resolve instantly. Agents focus on complex cases. Satisfaction scores climb without adding headcount.",
    outcome: "70% of tickets handled automatically",
  },
  {
    icon: Sparkles,
    title: "Internal AI Assistants",
    summary:
      "Private, secure AI tools for document drafting, knowledge retrieval, meeting summaries and day-to-day internal tasks.",
    benefits:
      "Accelerate how your team works — without exposing sensitive data or forcing a platform migration.",
    outcome: "Faster decisions · Less admin",
  },
  {
    icon: TrendingUp,
    title: "Sales Automation",
    summary:
      "Automated follow-ups, proposal support, CRM updates and pipeline management across the full sales cycle.",
    benefits:
      "Consistent outreach at scale. No dropped leads. A sales engine that grows without proportional hiring.",
    outcome: "28% higher close rates",
  },
  {
    icon: Cog,
    title: "Business Process Optimisation",
    summary:
      "Holistic redesign of core processes — analysed, automated and continuously improved with AI at the centre.",
    benefits:
      "Eliminate operational waste, increase throughput and build systems that get smarter over time.",
    outcome: "35% average cost reduction",
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
      "A focused conversation to understand how your business operates, where time is being lost and which outcomes matter most.",
  },
  {
    step: "02",
    title: "AI Opportunity Audit",
    description:
      "We map your workflows, quantify the commercial impact of manual processes and prioritise automations by ROI.",
  },
  {
    step: "03",
    title: "Solution Design",
    description:
      "A bespoke strategy document — scope, architecture, integrations, timeline and projected returns. No ambiguity.",
  },
  {
    step: "04",
    title: "Implementation",
    description:
      "Our engineers build, test and deploy production-grade systems integrated with the tools your team already uses.",
  },
  {
    step: "05",
    title: "Optimisation",
    description:
      "We monitor performance, refine what works and expand your automation footprint — so value compounds over time.",
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
    title: "Scalable Solutions",
    description:
      "Infrastructure designed to grow with you — from a single workflow to enterprise-scale operations.",
  },
  {
    icon: Users,
    title: "Human Support",
    description:
      "Senior strategists and engineers who know your business — not a ticket queue or a chatbot.",
  },
  {
    icon: Sparkles,
    title: "Rapid Deployment",
    description:
      "Most clients see measurable impact within weeks. We engineer for speed to value, not perfection paralysis.",
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
      "Within three weeks, Omnirexis automated our entire lead intake pipeline. Response times dropped from two days to under fifteen minutes — and we closed 28% more business that quarter.",
    author: "James Whitfield",
    role: "Chief Executive",
    company: "Northline Logistics",
    result: "+28% close rate",
  },
  {
    quote:
      "They built a support system that resolves seven in ten tickets without human intervention. Our team finally has the bandwidth to handle the cases that actually need them.",
    author: "Priya Nair",
    role: "Chief Operating Officer",
    company: "Summit Health Group",
    result: "70% tickets automated",
  },
  {
    quote:
      "The CRM automation paid for the entire engagement within sixty days. Omnirexis thinks like operators — that's genuinely rare in this industry.",
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
      "Any organisation losing time to repetitive tasks, slow lead response, manual customer support or disconnected systems. We partner with small and mid-market businesses across construction, healthcare, retail, professional services and more — wherever practical automation delivers measurable commercial value.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Focused automations such as chatbots or lead routing typically go live within two to four weeks. More complex workflow systems take six to ten weeks. We always deploy high-impact solutions first, so you see returns while the broader roadmap takes shape.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. We own the full technical lifecycle — design, build, integration and deployment. You contribute business context; we contribute engineering. Your team receives hands-on training and documentation written for operators, not developers.",
  },
  {
    question: "Will AI replace my staff?",
    answer:
      "Our work removes low-value repetition, not people. Clients typically redeploy recovered time into customer relationships, sales and strategic work. The goal is capacity — not headcount reduction.",
  },
  {
    question: "Can AI integrate with our existing software?",
    answer:
      "Yes. We connect to the platforms you already run — HubSpot, Salesforce, Zendesk, Slack, Google Workspace, Shopify, Xero and hundreds more. We enhance your stack; we don't ask you to replace it.",
  },
  {
    question: "How much can automation save?",
    answer:
      "Results vary by business, but clients typically recover twenty or more hours per week, reduce operational costs by twenty-five to forty percent, and see revenue impact within sixty days. We model projected returns during your AI Opportunity Audit before any commitment.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Every engagement includes post-launch optimisation. We monitor performance, tune automations and expand what's working. You have direct access to your strategist and engineering team — not a generic help desk.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a free AI Strategy Call. In thirty minutes, we'll understand your operations, identify your highest-value automation opportunities and outline a prioritised path to results. There is no obligation and no sales script.",
  },
  {
    question: "What happens on the strategy call?",
    answer:
      "A senior Omnirexis strategist maps your current workflows, quantifies where time and margin are being lost, and recommends automations ranked by commercial impact. You leave with clarity — and a concrete next step if you choose to proceed.",
  },
  {
    question: "Is our business data secure?",
    answer:
      "We apply enterprise-grade practices: encrypted data in transit and at rest, role-based access controls and compliance with applicable data protection standards. Your data is never sold, shared with third parties or used to train public models.",
  },
] as const;

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