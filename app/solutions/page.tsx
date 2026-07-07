import { SolutionCard } from "@/components/sections/solution-card";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { TechnologyPartners } from "@/components/sections/technology-partners";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaStrip } from "@/components/shared/cta-strip";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { metadataFor, pageSeo } from "@/lib/page-metadata";
import { siteConfig, solutions } from "@/lib/site";

export const metadata = metadataFor("solutions");

export default function SolutionsPage() {
  return (
    <>
      <PageStructuredData
        path={pageSeo.solutions.path}
        title={pageSeo.solutions.title}
        description={pageSeo.solutions.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ]}
      />
      <PageHeader
        eyebrow="Solutions"
        title="Four flagship services built around your outcomes"
        description="Each service solves a real business problem using established AI and automation platforms — with measurable results, clear implementation, and ongoing support."
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