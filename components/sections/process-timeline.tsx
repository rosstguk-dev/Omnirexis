import { FadeIn } from "@/components/motion/fade-in";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProcessTimelineProps = {
  theme?: "light" | "dark";
};

export function ProcessTimeline({ theme = "light" }: ProcessTimelineProps) {
  const isDark = theme === "dark";

  return (
    <ol className="relative space-y-0">
      {processSteps.map((step, index) => (
        <FadeIn key={step.step} delay={index * 0.08}>
          <li className="relative flex gap-6 pb-12 last:pb-0 md:gap-10">
            {index < processSteps.length - 1 && (
              <span
                className={cn(
                  "absolute top-16 left-8 hidden h-[calc(100%-2rem)] w-px md:block",
                  isDark ? "bg-white/[0.08]" : "bg-[#081826]/[0.08]",
                )}
                aria-hidden="true"
              />
            )}
            <div className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl border border-[#1E90FF]/20 bg-gradient-to-br from-[#1E90FF]/15 to-[#55D6FF]/5 text-sm font-bold tracking-wider text-[#1E90FF]">
              {step.step}
            </div>
            <div className="pt-3">
              <h3
                className={cn(
                  "text-lg font-semibold tracking-[-0.01em]",
                  isDark ? "text-white" : "text-[#081826]",
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "prose-narrow mt-2 text-sm leading-relaxed",
                  isDark ? "text-white/50" : "text-muted-foreground",
                )}
              >
                {step.description}
              </p>
            </div>
          </li>
        </FadeIn>
      ))}
    </ol>
  );
}