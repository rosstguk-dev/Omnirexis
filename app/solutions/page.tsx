import { SolutionCard } from "@/components/sections/solution-card";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TechnologyPartners } from "@/components/sections/technology-partners";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaStrip } from "@/components/shared/cta-strip";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { createMetadata, siteConfig, solutions } from "@/lib/site";

export const metadata = createMetadata({
  title: "Flagship Services",
  description:
    "Omnirexis offers four flagship services: AI Opportunity Audit, AI Voice Receptionists, Business Process Automation and AI Customer Experience — each designed to deliver measurable business outcomes.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Four flagship services built around your outcomes"
        description="Each service is designed to solve a real business problem, deliver measurable results, and include ongoing support — without unnecessary complexity."
      />

      <Section className="section-light" ariaLabelledby="capabilities-heading">
        <FadeIn>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="Capabilities"
            title="Our flagship services"
            description={siteConfig.positioning}
          />
        </FadeIn>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutions.map((solution, i) => (
            <SolutionCard key={solution.title} solution={solution} index={i} />
          ))}
        </div>
        <CtaStrip
          title="Which service is right for your business?"
          description="Most clients start with an AI Opportunity Audit. We'll recommend the right starting point based on your workflows, tools and commercial priorities — on a free strategy call."
        />
      </Section>

      <TechnologyPartners className="border-t border-[#081826]/[0.06] bg-[#f6f8fb]/50" />

      <CtaBanner />
    </>
  );
}