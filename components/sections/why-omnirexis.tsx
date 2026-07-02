import { FadeIn } from "@/components/motion/fade-in";
import { CtaStrip } from "@/components/shared/cta-strip";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/visuals/glass-card";
import { siteConfig, whyOmnirexis } from "@/lib/site";

export function WhyOmnirexis() {
  return (
    <section
      aria-labelledby="why-heading"
      className="section-dark relative overflow-hidden section-padding"
    >
      <div className="ambient-glow pointer-events-none absolute inset-0" />
      <div className="section-container relative">
        <FadeIn>
          <SectionHeading
            id="why-heading"
            eyebrow="Why Omnirexis"
            title="We sell outcomes, not technology"
            description={siteConfig.positioning}
            theme="dark"
          />
        </FadeIn>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyOmnirexis.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <GlassCard variant="dark" className="h-full">
                <div className="mb-4 text-[#55D6FF]">
                  <item.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="font-semibold tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {item.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <CtaStrip
          theme="dark"
          title="See which outcomes are within reach for your business"
          description="A thirty-minute strategy call is all it takes to identify your highest-value automation opportunities."
        />
      </div>
    </section>
  );
}