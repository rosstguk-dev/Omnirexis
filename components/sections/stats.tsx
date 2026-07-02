import { AnimatedCounter } from "@/components/motion/animated-counter";
import { FadeIn } from "@/components/motion/fade-in";
import { metrics } from "@/lib/site";

export function Stats() {
  return (
    <section
      aria-label="Client performance metrics"
      className="border-y border-[#081826]/[0.06] bg-white py-20 sm:py-24"
    >
      <div className="section-container">
        <FadeIn className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1E90FF]">
            Proven impact
          </p>
          <p className="prose-narrow mx-auto mt-3 text-sm text-muted-foreground">
            Aggregate results across Omnirexis client engagements. Your outcomes
            will depend on scope — we model projections before you commit.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {metrics.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.06}>
              <div className="text-center">
                <AnimatedCounter value={stat.value} label={stat.label} />
                <p className="mx-auto mt-2 max-w-[14rem] text-xs leading-relaxed text-muted-foreground">
                  {stat.context}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}