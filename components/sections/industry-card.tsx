import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/visuals/glass-card";
import type { Industry } from "@/lib/site";

type IndustryCardProps = {
  industry: Industry;
  index: number;
};

export function IndustryCard({ industry, index }: IndustryCardProps) {
  return (
    <FadeIn delay={index * 0.04}>
      <GlassCard className="group flex h-full flex-col">
        <div className="mb-5 flex size-10 items-center justify-center rounded-xl border border-[#1E90FF]/15 bg-[#1E90FF]/[0.04] text-[#1E90FF] transition-colors duration-500 group-hover:border-[#1E90FF]/30 group-hover:bg-[#1E90FF]/[0.08]">
          <industry.icon className="size-[18px]" aria-hidden="true" />
        </div>
        <h3 className="text-[0.95rem] font-semibold tracking-[-0.01em] text-[#081826]">
          {industry.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {industry.description}
        </p>
        <p className="mt-4 text-[11px] font-medium tracking-wide text-[#1E90FF]/80">
          {industry.highlight}
        </p>
      </GlassCard>
    </FadeIn>
  );
}