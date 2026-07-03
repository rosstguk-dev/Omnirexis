import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  clientExpectations,
  clientExpectationsDisclaimer,
  clientExpectationsIntro,
} from "@/lib/site";

export function Testimonials() {
  return (
    <section
      aria-labelledby="client-expectations-heading"
      className="section-dark relative overflow-hidden section-padding"
    >
      <div className="ambient-glow pointer-events-none absolute inset-0" />
      <div className="section-container relative">
        <FadeIn>
          <SectionHeading
            id="client-expectations-heading"
            eyebrow="Client outcomes"
            title="What Our Clients Can Expect"
            description={clientExpectationsIntro}
            theme="dark"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {clientExpectations.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm">
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-[0.925rem] leading-[1.7] text-white/65">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.24}>
          <p className="prose-narrow mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-white/35 sm:text-sm">
            {clientExpectationsDisclaimer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}