import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaButton } from "@/components/shared/cta-button";
import { GlassCard } from "@/components/visuals/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BusinessHours } from "@/components/shared/business-hours";
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
            Share a little about your business and where time is being lost.
            We&apos;ll come prepared with specific implementation
            recommendations for your discovery session.
          </p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-5 lg:gap-10">
          <FadeIn className="lg:col-span-3">
            <GlassCard variant="dark" hover={false} className="p-8 sm:p-10">
              <form className="space-y-5" action="#" method="post">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-white/70">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Alexandra Chen"
                      autoComplete="name"
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm text-white/70">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      autoComplete="organization"
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-white/70">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alexandra@northline.com"
                      autoComplete="email"
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm text-white/70">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07566 729429"
                      autoComplete="tel"
                      className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm text-white/70">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us which repetitive processes are costing your team the most time — lead follow-up, customer support, internal admin, or something else."
                    rows={5}
                    required
                    className="rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full rounded-xl bg-[#1E90FF] text-sm font-semibold text-white hover:bg-[#1878D8] sm:w-auto"
                >
                  {siteConfig.ctaLabel}
                </Button>
                <p className="text-xs leading-relaxed text-white/30">
                  By submitting this form, you agree to be contacted regarding
                  your enquiry. We never share your information with third
                  parties. Read our{" "}
                  <a href="/privacy" className="text-[#55D6FF]/80 underline-offset-2 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
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

              <CtaButton className="w-full" />
              <p className="text-center text-xs text-white/30">
                {siteConfig.ctaMicrocopy}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}