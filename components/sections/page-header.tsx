import { FadeIn } from "@/components/motion/fade-in";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#081826] pt-32 pb-24 sm:pt-40 sm:pb-28">
      <div className="ambient-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />

      <div className="section-container relative">
        <FadeIn className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#55D6FF]/90">
              {eyebrow}
            </p>
          )}
          <h1 className="text-[2.25rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          <p className="prose-narrow mx-auto mt-6 text-base leading-relaxed text-white/55 sm:text-lg">
            {description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}