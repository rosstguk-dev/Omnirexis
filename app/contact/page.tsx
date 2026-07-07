import Image from "next/image";
import { Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { BusinessHours } from "@/components/shared/business-hours";
import { CtaButton } from "@/components/shared/cta-button";
import { GlassCard } from "@/components/visuals/glass-card";
import { createMetadata, phoneTelHref, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Omnirexis to book your free AI Strategy Call or send an enquiry. Tell us about your business and discover how the right AI implementation can save time, reduce costs and grow revenue.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section
        className="relative overflow-hidden bg-[#081826]"
        aria-labelledby="contact-heading"
      >
        <Image
          src="/images/contact-bg.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-[#081826]/75" />
        <div className="ambient-glow pointer-events-none absolute inset-0" />

        <div className="section-container relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#55D6FF]/90">
              Contact
            </p>
            <h1
              id="contact-heading"
              className="mt-4 text-[2.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl"
            >
              Let&apos;s Talk About Your Business
            </h1>
            <p className="prose-narrow mx-auto mt-5 text-base text-white/55 sm:text-lg">
              Whether you&apos;re exploring AI for the first time or looking to
              automate existing processes, we&apos;d love to hear about your
              goals.
            </p>
            <div className="mt-9 flex justify-center">
              <CtaButton />
            </div>
            <p className="mt-4 text-xs text-white/30">
              {siteConfig.ctaMicrocopy}
            </p>
          </FadeIn>
        </div>
      </section>

      <section
        className="section-light section-padding"
        aria-labelledby="enquiry-form-heading"
      >
        <div className="section-container">
          <FadeIn className="mx-auto max-w-2xl">
            <h2 id="enquiry-form-heading" className="sr-only">
              Send an enquiry
            </h2>
            <GlassCard variant="dark" hover={false} className="p-8 sm:p-10">
              <ContactForm />
            </GlassCard>
          </FadeIn>

          <FadeIn className="mx-auto mt-16 max-w-2xl" delay={0.08}>
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-[#081826]">
              Contact Details
            </h2>
            <div className="mt-6 space-y-6">
              <div className="flex items-start gap-4">
                <Phone
                  className="mt-0.5 size-[18px] shrink-0 text-[#1E90FF]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-[#081826]">Phone</p>
                  <a
                    href={phoneTelHref()}
                    className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-[#1E90FF]"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-[#081826]">
                  Business Hours
                </p>
                <BusinessHours
                  className="mt-3"
                  daysClassName="text-sm text-muted-foreground"
                  hoursClassName="text-sm text-muted-foreground"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}