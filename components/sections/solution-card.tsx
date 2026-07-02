import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/visuals/glass-card";
import type { Solution } from "@/lib/site";
import { cn } from "@/lib/utils";

type SolutionCardProps = {
  solution: Solution;
  index: number;
  theme?: "light" | "dark";
};

export function SolutionCard({
  solution,
  index,
  theme = "light",
}: SolutionCardProps) {
  const isDark = theme === "dark";

  return (
    <FadeIn delay={index * 0.05}>
      <GlassCard variant={isDark ? "dark" : "light"} className="group flex h-full flex-col">
        <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E90FF] to-[#55D6FF] text-white shadow-[0_4px_20px_rgba(30,144,255,0.25)] transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(30,144,255,0.35)]">
          <solution.icon className="size-5" aria-hidden="true" />
        </div>

        <h3
          className={cn(
            "text-[1.05rem] font-semibold tracking-[-0.01em]",
            isDark ? "text-white" : "text-[#081826]",
          )}
        >
          {solution.title}
        </h3>

        <p
          className={cn(
            "mt-2 text-sm leading-relaxed",
            isDark ? "text-white/45" : "text-muted-foreground",
          )}
        >
          {solution.summary}
        </p>

        <div
          className={cn(
            "my-5 h-px w-full",
            isDark ? "bg-white/[0.06]" : "bg-[#081826]/[0.06]",
          )}
        />

        <p
          className={cn(
            "flex-1 text-sm leading-relaxed",
            isDark ? "text-white/55" : "text-muted-foreground",
          )}
        >
          {solution.benefits}
        </p>

        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E90FF]">
          {solution.outcome}
        </p>
      </GlassCard>
    </FadeIn>
  );
}