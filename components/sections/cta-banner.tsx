import { FadeIn } from "@/components/motion/fade-in";
import { CtaButton } from "@/components/shared/cta-button";
import { siteConfig } from "@/lib/site";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-[#081826] px-8 py-16 text-center sm:px-14 sm:py-20">
            <div className="ambient-glow pointer-events-none absolute inset-0" />
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-15" />
            <div className="relative">
              <h2
                id="cta-heading"
                className="text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl"
              >
                The businesses that implement AI first
                <br className="hidden sm:block" /> pull ahead. Permanently.
              </h2>
              <p className="prose-narrow mx-auto mt-5 max-w-xl text-base text-white/50 sm:text-lg">
                Book a free AI Strategy Call with a senior Omnirexis
                strategist. Understand what the right implementation is worth to
                your business — before you spend a dollar.
              </p>
              <div className="mt-9 flex flex-col items-center gap-3">
                <CtaButton />
                <p className="text-xs text-white/30">{siteConfig.ctaMicrocopy}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}