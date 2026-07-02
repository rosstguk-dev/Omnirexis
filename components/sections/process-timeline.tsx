"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/visuals/glass-card";
import { processSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

type ProcessTimelineProps = {
  theme?: "light" | "dark";
};

export function ProcessTimeline({ theme = "light" }: ProcessTimelineProps) {
  const isDark = theme === "dark";

  return (
    <ol className="relative space-y-5">
      <span
        className={cn(
          "pointer-events-none absolute top-8 bottom-8 left-[1.65rem] hidden w-px md:block",
          isDark
            ? "bg-gradient-to-b from-[#1E90FF]/40 via-[#55D6FF]/20 to-[#1E90FF]/10"
            : "bg-gradient-to-b from-[#1E90FF]/30 via-[#55D6FF]/15 to-[#1E90FF]/5",
        )}
        aria-hidden="true"
      />

      {processSteps.map((step, index) => (
        <motion.li
          key={step.step}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative"
        >
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.3 }}>
            <GlassCard
              variant={isDark ? "dark" : "light"}
              className="relative overflow-hidden pl-[4.5rem] sm:pl-24"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="absolute top-7 left-5 flex size-12 items-center justify-center rounded-2xl border border-[#1E90FF]/25 bg-gradient-to-br from-[#1E90FF]/20 to-[#55D6FF]/10 shadow-[0_4px_24px_rgba(30,144,255,0.18)] sm:top-8 sm:left-7 sm:size-14"
              >
                <span className="text-xs font-bold tracking-[0.14em] text-[#55D6FF] sm:text-sm">
                  {step.step}
                </span>
                <motion.span
                  className="absolute inset-0 rounded-2xl border border-[#1E90FF]/30"
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.4,
                  }}
                  aria-hidden="true"
                />
              </motion.div>

              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1E90FF]/80">
                  Step {Number(step.step)}
                </p>
                <h3
                  className={cn(
                    "mt-2 text-lg font-semibold tracking-[-0.01em] sm:text-xl",
                    isDark ? "text-white" : "text-[#081826]",
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "prose-narrow mt-2 text-sm leading-relaxed sm:text-[0.95rem]",
                    isDark ? "text-white/50" : "text-muted-foreground",
                  )}
                >
                  {step.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </motion.li>
      ))}
    </ol>
  );
}