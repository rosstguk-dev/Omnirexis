import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/shared/section";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms governing use of the ${siteConfig.name} website and consultancy services.`,
  path: "/terms",
});

const sections = [
  {
    title: "Agreement to terms",
    body: `By accessing the ${siteConfig.name} website at ${siteConfig.url}, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.`,
  },
  {
    title: "Website use",
    body: "You may use this website for lawful purposes only. You may not attempt to gain unauthorised access to any part of the site, interfere with its operation, scrape content at scale, or use the site in any way that could damage, disable or impair our services.",
  },
  {
    title: "Intellectual property",
    body: `All content on this website — including text, graphics, logos and imagery — is the property of ${siteConfig.legalName} or its licensors and is protected by applicable intellectual property laws. Third-party platform names and logos belong to their respective owners. You may not reproduce, distribute or create derivative works without our prior written consent.`,
  },
  {
    title: "Consultancy services",
    body: "Professional services provided by Omnirexis are governed by separate written agreements issued at the point of engagement. These website terms do not constitute a binding consultancy contract. Project scope, deliverables, fees and timelines are defined exclusively in individual client agreements.",
  },
  {
    title: "Disclaimer",
    body: "Information on this website is provided for general guidance. While we make reasonable efforts to ensure accuracy, we make no warranties — express or implied — regarding the completeness or suitability of website content for any particular purpose. Performance metrics cited represent aggregate client experiences and are not guarantees of future results.",
  },
  {
    title: "Limitation of liability",
    body: "To the fullest extent permitted by law, Omnirexis shall not be liable for any indirect, incidental, special or consequential damages arising from your use of this website.",
  },
  {
    title: "Contact",
    body: `Questions about these terms may be directed to ${siteConfig.email}.`,
  },
] as const;

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: July 2026. The terms governing your use of our website."
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