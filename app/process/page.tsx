import { PageHeader } from "@/components/sections/page-header";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FadeIn } from "@/components/motion/fade-in";
import { BookingCtaStack } from "@/components/shared/booking-cta-stack";
import { Section } from "@/components/shared/section";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Our Process",
  description:
    "How Omnirexis works — discovery call, AI opportunity audit, solution design, implementation, and optimisation and support for measurable business outcomes.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
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