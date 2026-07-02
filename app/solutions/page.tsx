import { SolutionCard } from "@/components/sections/solution-card";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaStrip } from "@/components/shared/cta-strip";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { createMetadata, siteConfig, solutions } from "@/lib/site";

export const metadata = createMetadata({
  title: "AI Implementation Services",
  description:
    "Omnirexis implements AI chatbots, voice receptionists, workflow automation, lead qualification, customer support automation, internal assistants, sales automation and business process optimisation — using the best-fit technologies for each client.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="AI implementations with commercial impact built in"
        description="Eight outcome-led capabilities — each implemented with the right technology to save time, reduce costs, improve customer experience or accelerate revenue."
      />

      <Section className="section-light" ariaLabelledby="capabilities-heading">
        <FadeIn>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="Capabilities"
            title="What we deliver"
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