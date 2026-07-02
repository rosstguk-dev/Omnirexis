import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqSection } from "@/components/sections/faq-section";
import { Hero } from "@/components/sections/hero";
import { IndustryCard } from "@/components/sections/industry-card";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { SolutionCard } from "@/components/sections/solution-card";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyOmnirexis } from "@/components/sections/why-omnirexis";
import { CtaStrip } from "@/components/shared/cta-strip";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import {
  faqJsonLd,
  organizationJsonLd,
  professionalServiceJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import { createMetadata, industries, solutions } from "@/lib/site";

export const metadata = createMetadata({
  title: "AI Automation Consultancy",
  description:
    "Omnirexis helps businesses automate repetitive work, reduce costs, improve customer experience and unlock growth with practical AI solutions. Book your free AI Strategy Call.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          professionalServiceJsonLd(),
          faqJsonLd(),
        ]}
      />
      <Hero />
      <Stats />

      <Section className="section-light" ariaLabelledby="solutions-heading">
        <FadeIn>
          <SectionHeading
            id="solutions-heading"
            eyebrow="Solutions"
            title="Intelligent automation for every part of your business"
            description="From customer-facing AI to internal workflow engines — each capability is engineered for measurable commercial impact."
          />
        </FadeIn>
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {solutions.slice(0, 6).map((solution, i) => (
            <SolutionCard key={solution.title} solution={solution} index={i} />
          ))}
        </div>
        <CtaStrip
          title="Not sure where to begin?"
          description="On a strategy call, we'll identify the two or three automations that will deliver the fastest return for your specific business."
        />
        <FadeIn className="mt-8 text-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/solutions" className="inline-flex items-center gap-2">
                View all eight solutions
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
            variant="outline"
            size="lg"
            className="rounded-xl border-[#1E90FF]/30 text-[#1E90FF] hover:bg-[#1E90FF]/[0.04]"
          />
        </FadeIn>
      </Section>

      <Section ariaLabelledby="industries-heading">
        <FadeIn>
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries"
            title="Sector expertise. Universal standards."
            description="We bring deep operational understanding to the industries where automation delivers the clearest, fastest ROI."
          />
        </FadeIn>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.slice(0, 5).map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Button
            nativeButton={false}
            render={
              <Link href="/industries" className="inline-flex items-center gap-2">
                Explore all ten industries
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            }
            variant="outline"
            size="lg"
            className="rounded-xl border-[#1E90FF]/30 text-[#1E90FF] hover:bg-[#1E90FF]/[0.04]"
          />
        </FadeIn>
      </Section>

      <Section className="section-dark relative overflow-hidden" ariaLabelledby="process-heading">
        <div className="ambient-glow pointer-events-none absolute inset-0" />
        <div className="relative">
          <FadeIn>
            <SectionHeading
              id="process-heading"
              eyebrow="Process"
              title="From strategy call to measurable ROI"
              description="A transparent five-stage engagement — designed so you always know where you are, what's next, and what it's worth."
              theme="dark"
            />
          </FadeIn>
          <div className="mx-auto mt-16 max-w-2xl">
            <ProcessTimeline theme="dark" />
          </div>
          <CtaStrip
            theme="dark"
            title="Ready to start with step one?"
            description="Book your free AI Strategy Call and we'll map the highest-value opportunities in your business."
          />
        </div>
      </Section>

      <Testimonials />
      <WhyOmnirexis />
      <FaqSection limit={5} showViewAll />
      <CtaBanner />
    </>
  );
}