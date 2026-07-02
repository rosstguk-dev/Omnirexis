import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-dark relative overflow-hidden section-padding"
    >
      <div className="ambient-glow pointer-events-none absolute inset-0" />
      <div className="section-container relative">
        <FadeIn>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Client results"
            title="Trusted by operators who measure what matters"
            description="Leaders who chose expert implementation over hype — and saw it on the balance sheet."
            theme="dark"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.author} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm">
                <blockquote className="flex-1 text-[0.925rem] leading-[1.7] text-white/65">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-white/[0.08] pt-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white">{item.author}</p>
                      <p className="mt-0.5 text-sm text-white/40">
                        {item.role}, {item.company}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#1E90FF]/25 bg-[#1E90FF]/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#55D6FF]">
                      {item.result}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}