import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactForm } from "@/components/contact/contact-form";
import { BookingCtaGroup } from "@/components/shared/booking-cta-group";
import { BusinessHours } from "@/components/shared/business-hours";
import { GlassCard } from "@/components/visuals/glass-card";
import { createMetadata, phoneTelHref, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Book Your Free AI Strategy Call",
  description:
    "Contact Omnirexis to book your free AI Strategy Call. Tell us about your business and discover how the right AI implementation can save time, reduce costs and grow revenue.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="relative min-h-screen" aria-labelledby="contact-heading">
      <Image
        src="/images/contact-bg.jpg"
        alt=""
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
            Book a free strategy call with a senior Omnirexis strategist, or
            send an enquiry if you&apos;re not ready to schedule yet. Either
            way, we&apos;ll help you understand where AI implementation can
            create measurable value.
          </p>
        </FadeIn>

        <div
          id={siteConfig.enquirySectionId}
          className="mx-auto mt-16 grid max-w-5xl scroll-mt-28 gap-8 lg:grid-cols-5 lg:gap-10"
        >
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

              <BookingCtaGroup
                buttonClassName="w-full"
                buttonSize="default"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}