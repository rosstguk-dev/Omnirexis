import { PageHeader } from "@/components/sections/page-header";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BookingCtaGroup } from "@/components/shared/booking-cta-group";

import { Section } from "@/components/shared/section";
import { createMetadata } from "@/lib/site";

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
        <BookingCtaGroup theme="light" className="mt-16" />
      </Section>

      <CtaBanner />
    </>
  );
}