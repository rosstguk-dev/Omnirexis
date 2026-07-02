import { FadeIn } from "@/components/motion/fade-in";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CtaButton } from "@/components/shared/cta-button";
import { Section } from "@/components/shared/section";
import { GlassCard } from "@/components/visuals/glass-card";
import { createMetadata, siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Omnirexis",
  description:
    "Omnirexis is a premium AI implementation and automation consultancy. We identify opportunities, implement best-in-class technologies, and deliver measurable commercial outcomes — not software.",
  path: "/about",
});

const principles = [
  {
    title: "Outcomes first, always",
    description:
      "We begin with commercial challenges — lost time, missed leads, rising costs — and work backwards to the right implementation. Technology serves the outcome, never the other way around.",
  },
  {
    title: "Best-in-class, never proprietary",
    description:
      "We don't build AI platforms. We carefully evaluate the market, select the best technologies for each client's needs, and implement them within your existing environment.",
  },
  {
    title: "Measure everything that matters",
    description:
      "Hours saved, costs reduced, revenue gained, satisfaction improved. If an implementation can't be measured, it doesn't belong in our roadmap.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Intelligence. Automated."
        description={siteConfig.mission}
      />

      <Section>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed tracking-[-0.01em] text-muted-foreground sm:text-2xl">
            {siteConfig.positioning}
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {principles.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <GlassCard className="h-full">
                <h2 className="text-lg font-semibold tracking-[-0.01em] text-[#081826]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="relative mt-20 overflow-hidden rounded-3xl bg-[#081826] p-10 text-center sm:p-16">
          <div className="ambient-glow pointer-events-none absolute inset-0" />
          <h2 className="relative text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
            Your implementation partner — not another software vendor.
          </h2>
          <p className="relative prose-narrow mx-auto mt-5 max-w-2xl text-white/50">
            Omnirexis was founded on a single conviction: growing businesses
            deserve expert help implementing AI — identifying the right
            opportunities, selecting the right tools, integrating with existing
            systems, and optimising for results that show up on your bottom line.
          </p>
          <div className="relative mt-8">
            <CtaButton />
          </div>
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}