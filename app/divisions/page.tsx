import Link from "next/link";
import { ArrowRight, Network, RefreshCw, Route, Workflow } from "lucide-react";
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
  {
    icon: Network,
    title: "One central business",
    description:
      "OMNIREXIS remains the umbrella business, providing the shared standards, technology and operational foundation behind every division.",
  },
  {
    icon: Workflow,
    title: "One joined-up journey",
    description:
      "Every enquiry uses the same OMNIREXIS contact details, enquiry system, CRM and booking process, whichever division you need.",
  },
  {
    icon: RefreshCw,
    title: "Built to expand",
    description:
      "New specialist divisions can be added beneath OMNIREXIS over time without fragmenting the brand or creating separate websites.",
  },
] as const;

export default function DivisionsPage() {
  return (
    <>
      <PageStructuredData
        path={pageSeo.divisions.path}
        title={pageSeo.divisions.title}
        description={pageSeo.divisions.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Divisions", path: "/divisions" },
        ]}
      />
      <JsonLd data={divisionsJsonLd()} />

      <PageHeader
        eyebrow="Business divisions"
        title="One OMNIREXIS. Specialist expertise where it matters."
        description="OMNIREXIS is the central business behind a growing family of focused divisions. Each one serves a distinct operational need while sharing the same trusted team, systems and way of working."
      />

      <Section className="section-light" ariaLabelledby="structure-heading">
        <FadeIn>
          <SectionHeading
            id="structure-heading"
            eyebrow="How we are structured"
            title="Specialist divisions, connected by one business"
            description="Our divisions give clients focused sector expertise without creating disconnected brands, contacts or processes."
          />
        </FadeIn>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {operatingModel.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <GlassCard className="h-full">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[#1E90FF]/10 text-[#1E90FF]">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h2 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#081826]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5f73]">
                  {item.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        className="section-dark relative overflow-hidden"
        ariaLabelledby="divisions-heading"
      >
        <div className="ambient-glow pointer-events-none absolute inset-0" />
        <div className="relative">
          <FadeIn>
            <SectionHeading
              id="divisions-heading"
              eyebrow="Our divisions"
              title="Focused systems for real operations"
              description="Our first division brings the OMNIREXIS approach to the day-to-day realities of running a leisure facility."
              theme="dark"
              align="left"
            />
          </FadeIn>

          <FadeIn className="mt-12" delay={0.1}>
            <Link
              href="/divisions/leisure-systems"
              className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition-all duration-300 hover:border-[#55D6FF]/35 hover:bg-white/[0.06] sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#1E90FF]/15 text-[#55D6FF]">
                      <Route className="size-5" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#55D6FF]">
                      Founding division
                    </p>
                  </div>
                  <h2 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                    OMNIREXIS Leisure Systems
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55">
                    Practical operations and compliance systems for independent
                    gyms, spas, hotel leisure clubs and health clubs.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#55D6FF]">
                  Explore Leisure Systems
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
