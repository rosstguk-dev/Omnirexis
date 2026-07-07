import { CtaButton } from "@/components/shared/cta-button";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaStripProps = {
  title: string;
  description?: string;
  className?: string;
  theme?: "light" | "dark";
};

export function CtaStrip({
  title,
  description,
  className,
  theme = "light",
}: CtaStripProps) {
  const isDark = theme === "dark";

  return (
    <FadeIn className={cn("mt-16", className)}>
      <div
        className={cn(
          "flex flex-col items-start justify-between gap-6 rounded-2xl border p-8 sm:flex-row sm:items-center sm:p-10",
          isDark
            ? "border-white/10 bg-white/[0.03]"
            : "border-[#1E90FF]/10 bg-[#1E90FF]/[0.03]",
        )}
      >
        <div>
          <p
            className={cn(
              "text-lg font-semibold tracking-tight sm:text-xl",
              isDark ? "text-white" : "text-[#081826]",
            )}
          >
            {title}
          </p>
          {description && (
            <p
              className={cn(
                "mt-2 max-w-lg text-sm leading-relaxed",
                isDark ? "text-white/50" : "text-muted-foreground",
              )}
            >
              {description}
            </p>
          )}
          <p
            className={cn(
              "mt-3 text-xs",
              isDark ? "text-white/30" : "text-muted-foreground",
            )}
          >
            {siteConfig.ctaMicrocopy}
          </p>
        </div>
        <CtaButton className="shrink-0" />
      </div>
    </FadeIn>
  );
}