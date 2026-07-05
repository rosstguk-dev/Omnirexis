import { ContactForm } from "@/components/contact/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/visuals/glass-card";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type EnquirySectionProps = {
  className?: string;
};

export function EnquirySection({ className }: EnquirySectionProps) {
  return (
    <section
      id={siteConfig.enquirySectionId}
      aria-labelledby="enquiry-heading"
      className={cn("section-light section-padding scroll-mt-28", className)}
    >
      <div className="section-container">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionHeading
            id="enquiry-heading"
            eyebrow="Enquiry"
            title="Send us a message"
            description="Not ready to book a call yet? Tell us about your business and what you'd like help with — we'll respond with practical next steps."
          />
        </FadeIn>
        <FadeIn className="mx-auto mt-12 max-w-2xl" delay={0.08}>
          <GlassCard variant="dark" hover={false} className="p-8 sm:p-10">
            <ContactForm />
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}