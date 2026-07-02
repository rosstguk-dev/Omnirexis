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
    "Omnirexis believes AI should remove friction from businesses rather than create complexity. Practical automation that delivers measurable commercial value.",
  path: "/about",
});

const principles = [
  {
    title: "Remove friction, not add complexity",
    description:
      "AI should simplify how your business runs. We design systems your team adopts confidently — without disruptive platform migrations or steep learning curves.",
  },
  {
    title: "Solve problems, not sell technology",
    description:
      "We begin with commercial challenges — lost time, missed leads, rising costs — and engineer backwards to the right automation. The technology serves the outcome.",
  },
  {
    title: "Measure everything that matters",
    description:
      "Hours saved, costs reduced, revenue gained, satisfaction improved. If an automation can't be measured, it doesn't belong in our roadmap.",
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
            AI that works for business — not the other way around.
          </h2>
          <p className="relative prose-narrow mx-auto mt-5 max-w-2xl text-white/50">
            Omnirexis was founded on a single conviction: growing businesses
            deserve the same intelligent automation enterprises use — delivered
            with clarity, speed, and an unwavering focus on what shows up on
            your bottom line.
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