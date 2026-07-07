import { PageHeader } from "@/components/sections/page-header";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd } from "@/lib/seo";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { metadataFor, pageSeo } from "@/lib/page-metadata";

export const metadata = metadataFor("faq");

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <PageStructuredData
        path={pageSeo.faq.path}
        title={pageSeo.faq.title}
        description={pageSeo.faq.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />
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