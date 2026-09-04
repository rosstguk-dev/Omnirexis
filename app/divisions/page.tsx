import Link from "next/link";
import { ArrowRight, Bot, Network, PhoneCall, RefreshCw, Route, TrendingUp, Workflow } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/visuals/glass-card";
import { metadataFor, pageSeo } from "@/lib/page-metadata";
import { divisionsJsonLd } from "@/lib/seo";

export const metadata = metadataFor("divisions");

const operatingModel = [
  { icon: Network, title: "One central business", description: "OMNIREXIS remains the umbrella business, providing the shared standards, technology and operational foundation behind every division." },
  { icon: Workflow, title: "One joined-up journey", description: "Every enquiry uses the same OMNIREXIS contact details, enquiry system, CRM and booking process, whichever division you need." },
  { icon: RefreshCw, title: "Built to expand", description: "Specialist divisions sit beneath OMNIREXIS without fragmenting the brand or creating separate websites, inboxes or systems." },
] as const;

const divisions = [
  {
    icon: Bot,
    name: "OMNIREXIS Automation",
    label: "Business automation",
    description: "Practical AI workflows, CRM automation, enquiry handling, follow-up and repetitive admin systems designed to save time and reduce missed opportunities.",
    cta: "Discuss an automation opportunity",
    href: "/contact?division=automation",
  },
  {
    icon: PhoneCall,
    name: "OMNIREXIS Voice",
    label: "AI voice & calls",
    description: "Intelligent call handling for missed calls, common enquiries, lead capture, bookings and routing, helping businesses respond even when the team cannot pick up.",
    cta: "Discuss voice automation",
    href: "/contact?division=voice",
  },
  {
    icon: TrendingUp,
    name: "OMNIREXIS Growth",
    label: "Revenue systems",
    description: "Lead capture, qualification, nurturing and sales follow-up systems built around one outcome: turning more genuine enquiries into conversations and customers.",
    cta: "Discuss a growth system",
    href: "/contact?division=growth",
  },
  {
    icon: Route,
    name: "OMNIREXIS Leisure Systems",
    label: "Specialist leisure operations",
    description: "Practical operations and compliance systems for independent gyms, spas, hotel leisure clubs and health clubs, grounded in real leisure-sector experience.",
    cta: "Explore Leisure Systems",
    href: "/divisions/leisure-systems",
  },
] as const;

export default function DivisionsPage() {
  return (
    <>
      <PageStructuredData path={pageSeo.divisions.path} title={pageSeo.divisions.title} description={pageSeo.divisions.description} breadcrumbs={[{ name: "Home", path: "/" }, { name: "Divisions", path: "/divisions" }]} />
      <JsonLd data={divisionsJsonLd()} />

      <PageHeader eyebrow="Business divisions" title="One OMNIREXIS. Four focused ways to improve how your business runs." description="OMNIREXIS is the central business behind a focused group of practical divisions. Each solves a different commercial or operational problem while sharing the same systems, standards and point of contact." />

      <Section className="section-light" ariaLabelledby="structure-heading">
        <FadeIn><SectionHeading id="structure-heading" eyebrow="How we are structured" title="Specialist divisions, connected by one business" description="Choose the problem you need solved. Behind the scenes, every division is powered by the same OMNIREXIS operating system and commercial approach." /></FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {operatingModel.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <GlassCard className="h-full">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#1E90FF]/10 text-[#1E90FF]"><item.icon className="size-5" aria-hidden="true" /></div>
                <h2 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#081826]">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5f73]">{item.description}</p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="section-dark relative overflow-hidden" ariaLabelledby="divisions-heading">
        <div className="ambient-glow pointer-events-none absolute inset-0" />
        <div className="relative">
          <FadeIn><SectionHeading id="divisions-heading" eyebrow="Our divisions" title="Focused systems. Clear business outcomes." description="From automation and calls to revenue follow-up and specialist leisure operations, each division exists to solve a recognisable business problem." theme="dark" align="left" /></FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {divisions.map((division, index) => (
              <FadeIn key={division.name} delay={index * 0.06}>
                <Link href={division.href} className="group block h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-[#55D6FF]/35 hover:bg-white/[0.06] sm:p-9">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#1E90FF]/15 text-[#55D6FF]"><division.icon className="size-5" aria-hidden="true" /></div>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#55D6FF]">{division.label}</p>
                  <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-white">{division.name}</h2>
                  <p className="mt-4 text-base leading-relaxed text-white/55">{division.description}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#55D6FF]">{division.cta}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
