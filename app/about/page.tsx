import { FadeIn } from "@/components/motion/fade-in";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BookingCtaStack } from "@/components/shared/booking-cta-stack";
import { Section } from "@/components/shared/section";
import { GlassCard } from "@/components/visuals/glass-card";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About Omnirexis",
  description:
    "Omnirexis exists because most businesses know AI is important but don't know where to start. We remove complexity, implement practical AI solutions, and deliver measurable outcomes — not technology for its own sake.",
  path: "/about",
});

const principles = [
  {
    title: "The problem we solve",
    description:
      "Most businesses know AI is important. They see competitors moving faster, teams buried in repetitive work, and customers expecting instant responses — yet they don't know where to start, what to trust, or what will actually pay off.",
  },
  {
    title: "What we do",
    description:
      "We remove that complexity. Omnirexis selects the right AI technologies, implements them within your existing systems, and manages them so they keep delivering — solving real business problems without unnecessary disruption.",
  },
  {
    title: "What we don't do",
    description:
      "We don't sell AI and we don't develop proprietary software. We don't push platforms, chase trends, or implement technology for its own sake. Every recommendation exists because it creates measurable value for your business — full stop.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We don't sell AI. We deliver outcomes."
        description="Omnirexis exists because most businesses know AI is important — but don't know where to start. We're here to change that."
      />

      <Section>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xl leading-relaxed tracking-[-0.01em] text-muted-foreground sm:text-2xl">
            Our role is simple: remove the noise, select what works, implement it
            properly, and manage it so the results keep compounding. We configure
            proven platforms — we never ask clients to fund custom software
            development.
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
            Everything we implement earns its place.
          </h2>
          <p className="relative prose-narrow mx-auto mt-5 max-w-2xl text-white/50">
            We are selective by design. Every tool, workflow and integration we
            recommend is chosen because it creates measurable value — time saved,
            costs reduced, revenue grown, or customer experience improved. If it
            can&apos;t be measured, it doesn&apos;t make the cut.
          </p>
          <BookingCtaStack
            className="relative mx-auto mt-8 max-w-sm"
            buttonClassName="sm:w-full"
          />
        </FadeIn>
      </Section>

      <CtaBanner />
    </>
  );
}