import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
  className,
  id,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-[11px] font-semibold uppercase tracking-[0.28em]",
            isDark ? "text-[#55D6FF]/90" : "text-[#1E90FF]",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn(
          "text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]",
          isDark ? "text-white" : "text-[#081826]",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "prose-narrow mt-5 text-base sm:text-lg",
            align === "center" && "mx-auto",
            isDark ? "text-white/55" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}