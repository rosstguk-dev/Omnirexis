import { PageHeader } from "@/components/sections/page-header";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { BookingCtaStack } from "@/components/shared/booking-cta-stack";
import { Section } from "@/components/shared/section";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { metadataFor, pageSeo } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";

export const metadata = metadataFor("process");

export default function ProcessPage() {
  return (
    <>
      <PageStructuredData
        path={pageSeo.process.path}
        title={pageSeo.process.title}
        description={pageSeo.process.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]}
      />
      <PageHeader
        eyebrow="How It Works"
        title="Your customer journey with Omnirexis"
        description="Five clear stages — from understanding your business to delivering ongoing support as you grow."
      />

      <Section ariaLabelledby="timeline-heading">
        <div className="mx-auto max-w-3xl">
          <ProcessTimeline />
        </div>
        <FadeIn className="mt-16 text-center">
          <BookingCtaStack
            theme="light"
            className="mx-auto max-w-sm"
            buttonClassName="sm:w-full"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            {siteConfig.ctaMicrocopy}
          </p>
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}