import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/shared/section";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { metadataFor, pageSeo } from "@/lib/page-metadata";
import { siteConfig } from "@/lib/site";

export const metadata = metadataFor("privacy");

const sections = [
  {
    title: "Information we collect",
    body: "When you contact Omnirexis — through our website form, email, phone or strategy call — we may collect your name, company name, email address, phone number and any information you choose to share about your business. We collect only what is necessary to respond to your enquiry and deliver our services.",
  },
  {
    title: "How we use your information",
    body: "We use your information to respond to enquiries, schedule and conduct strategy calls, deliver consultancy services, send relevant communications you have requested, and improve our website and service offering. We do not sell, rent or trade your personal data to third parties.",
  },
  {
    title: "Data security",
    body: "We apply appropriate technical and organisational measures to protect your data, including encryption in transit, access controls and secure storage practices. While no system is entirely immune from risk, we treat the security of your information as a core operational priority.",
  },
  {
    title: "Data retention",
    body: "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, comply with legal obligations, resolve disputes and enforce our agreements. Enquiry data from prospects who do not become clients is typically retained for up to twenty-four months.",
  },
  {
    title: "Your rights",
    body: "Depending on your jurisdiction, you may have the right to access, correct, delete or restrict the processing of your personal data, or to object to certain processing activities. To exercise any of these rights, contact us at the address below.",
  },
  {
    title: "Contact",
    body: `For privacy-related enquiries, contact ${siteConfig.legalName} at ${siteConfig.email}. Postal address: ${siteConfig.address}.`,
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageStructuredData
        path={pageSeo.privacy.path}
        title={pageSeo.privacy.title}
        description={pageSeo.privacy.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ]}
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: July 2026. How we handle your personal information with care and transparency."
      />
      <Section padding="sm">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="text-lg font-semibold tracking-[-0.01em] text-[#081826]">
                {section.title}
              </h2>
              <p className="prose-narrow mt-3 text-sm leading-relaxed text-muted-foreground">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}