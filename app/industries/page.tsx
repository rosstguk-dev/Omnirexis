import { IndustryCard } from "@/components/sections/industry-card";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaStrip } from "@/components/shared/cta-strip";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { metadataFor, pageSeo } from "@/lib/page-metadata";
import { industries } from "@/lib/site";

export const metadata = metadataFor("industries");

export default function IndustriesPage() {
  return (
    <>
      <PageStructuredData
        path={pageSeo.industries.path}
        title={pageSeo.industries.title}
        description={pageSeo.industries.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ]}
      />
      <PageHeader
        eyebrow="Industries"
        title="Implementation expertise for how your sector operates"
        description="Generic automation fails. We assess your workflows, select the right platforms, and implement integrations around the pressures and opportunities unique to your industry."
      />

      <Section className="section-light" ariaLabelledby="sectors-heading">
        <FadeIn>
          <SectionHeading
            id="sectors-heading"
            eyebrow="Sectors"
            title="Ten industries. One commitment to ROI."
            description="Whether you run job sites, clinics or e-commerce operations — we implement automation that fits your reality and integrates with the tools you already use."
          />
        </FadeIn>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.title} industry={industry} index={i} />
          ))}
        </div>
        <CtaStrip
          title="Don't see your industry listed?"
          description="Most automation principles transfer across sectors. Book a call and we'll assess what's possible for your specific operation."
        />
      </Section>

      <CtaBanner />
    </>
  );
}