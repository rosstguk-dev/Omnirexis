import { PageHeader } from "@/components/sections/page-header";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd } from "@/lib/seo";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Omnirexis AI implementation — technology selection, integrations, ROI, ongoing optimisation, security and getting started.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageHeader
        eyebrow="FAQ"
        title="Everything you need to know"
        description="Honest, direct answers — so you can decide whether a strategy call is the right next step."
      />
      <FaqSection />
      <CtaBanner />
    </>
  );
}