import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaButton } from "@/components/shared/cta-button";
import { GlassCard } from "@/components/visuals/glass-card";
import { ContactForm } from "@/components/contact/contact-form";
import { BusinessAddress } from "@/components/shared/business-address";
import { BusinessHours } from "@/components/shared/business-hours";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { metadataFor, pageSeo } from "@/lib/page-metadata";
import { phoneTelHref, siteConfig } from "@/lib/site";

export const metadata = metadataFor("contact");

export default function ContactPage() {
  return (
    <>
      <PageStructuredData
        path={pageSeo.contact.path}
        title={pageSeo.contact.title}
        description={pageSeo.contact.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <section className="relative min-h-screen" aria-labelledby="contact-heading">
      <Image
        src="/images/contact-bg.jpg"
        alt="Abstract technology background for Omnirexis contact page"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-[#081826]/88" />

      <div className="section-container relative pt-32 pb-28 sm:pt-40 sm:pb-36">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#55D6FF]/90">
            Contact
          </p>
          <h1
            id="contact-heading"
            className="mt-4 text-[2.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl"
          >
            Book Your Free AI Strategy Call
          </h1>
          <p className="prose-narrow mx-auto mt-5 text-base text-white/55 sm:text-lg">
            Share a little about your business and where time is being lost.
            We&apos;ll come prepared with specific implementation
            recommendations for your discovery session.
          </p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-5 lg:gap-10">
          <FadeIn className="lg:col-span-3">
            <GlassCard variant="dark" hover={false} className="p-8 sm:p-10">
              <ContactForm />
            </GlassCard>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.12}>
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: siteConfig.phone,
                  href: phoneTelHref(),
                },
                {
                  label: "Address",
                  icon: MapPin,
                },
                {
                  label: "Business hours",
                  icon: Clock,
                },
              ].map((item) => (
                <GlassCard key={item.label} variant="dark" hover={false}>
                  <div className="flex items-start gap-4">
                    <item.icon
                      className="mt-0.5 size-[18px] shrink-0 text-[#55D6FF]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.label}
                      </p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-sm text-white/45 transition-colors hover:text-[#55D6FF]"
                        >
                          {item.value}
                        </a>
                      ) : item.label === "Address" ? (
                        <BusinessAddress
                          className="mt-1"
                          lineClassName="text-sm text-white/45"
                        />
                      ) : item.label === "Business hours" ? (
                        <BusinessHours
                          className="mt-1"
                          daysClassName="text-sm text-white/45"
                          hoursClassName="text-sm text-white/45"
                        />
                      ) : (
                        <p className="mt-1 text-sm text-white/45">
                          {"value" in item ? item.value : null}
                        </p>
                      )}
                    </div>
                  </div>
                </GlassCard>
              ))}

              <GlassCard variant="dark" hover={false}>
                <div className="flex items-start gap-4">
                  <LinkedInIcon className="mt-0.5 size-[18px] shrink-0 text-[#55D6FF]" />
                  <div>
                    <p className="text-sm font-medium text-white">LinkedIn</p>
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-white/45 transition-colors hover:text-[#55D6FF]"
                    >
                      linkedin.com/company/omnirexis
                    </a>
                  </div>
                </div>
              </GlassCard>

              <CtaButton className="w-full" />
              <p className="text-center text-xs text-white/30">
                {siteConfig.ctaMicrocopy}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
    </>
  );
}