import { PageHeader } from "@/components/sections/page-header";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaButton } from "@/components/shared/cta-button";
import { Section } from "@/components/shared/section";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Our Process",
  description:
    "How Omnirexis delivers AI automation — discovery call, AI opportunity audit, solution design, implementation and ongoing optimisation.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="Clarity at every stage"
        description="No black boxes. No surprise invoices. A proven five-step model built for transparency, speed and measurable returns."
      />

      <Section ariaLabelledby="timeline-heading">
        <div className="mx-auto max-w-2xl">
          <ProcessTimeline />
        </div>
        <FadeIn className="mt-16 text-center">
          <CtaButton />
          <p className="mt-4 text-sm text-muted-foreground">
            {siteConfig.ctaMicrocopy}
          </p>
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}