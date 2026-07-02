import { FadeIn } from "@/components/motion/fade-in";
import { GlassCard } from "@/components/visuals/glass-card";
import type { Solution } from "@/lib/site";
import { cn } from "@/lib/utils";

type SolutionCardProps = {
  solution: Solution;
  index: number;
  theme?: "light" | "dark";
};

const detailSections = [
  { key: "problem", label: "The business problem" },
  { key: "outcome", label: "The outcome" },
  { key: "process", label: "The implementation process" },
  { key: "support", label: "Ongoing support" },
] as const;

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
            isDark ? "text-white/55" : "text-muted-foreground",
          )}
        >
          {solution.summary}
        </p>

        <div
          className={cn(
            "my-6 h-px w-full",
            isDark ? "bg-white/[0.06]" : "bg-[#081826]/[0.06]",
          )}
        />

        <div className="flex flex-1 flex-col gap-5">
          {detailSections.map((section) => (
            <div key={section.key}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1E90FF]">
                {section.label}
              </p>
              <p
                className={cn(
                  "mt-1.5 text-sm leading-relaxed",
                  isDark ? "text-white/50" : "text-muted-foreground",
                )}
              >
                {solution[section.key]}
              </p>
            </div>
          ))}
        </div>
      </GlassCard>
    </FadeIn>
  );
}