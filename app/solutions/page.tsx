import { SolutionCard } from "@/components/sections/solution-card";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaStrip } from "@/components/shared/cta-strip";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { createMetadata, siteConfig, solutions } from "@/lib/site";

export const metadata = createMetadata({
  title: "AI Automation Solutions",
  description:
    "AI chatbots, voice receptionists, workflow automation, lead qualification, customer support automation, internal AI assistants, sales automation and business process optimisation.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Automation engineered for commercial impact"
        description="Eight integrated capabilities — each designed to save time, reduce costs, improve customer experience or accelerate revenue."
      />

      <Section className="section-light" ariaLabelledby="capabilities-heading">
        <FadeIn>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="Capabilities"
            title="What we build"
            description={siteConfig.positioning}
          />
        </FadeIn>
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} solution={solution} index={i} />
          ))}
        </div>
        <CtaStrip
          title="Which solution is right for your business?"
          description="We'll recommend the right starting point based on your workflows, tools and commercial priorities — on a free strategy call."
        />
      </Section>

      <CtaBanner />
    </>
  );
}