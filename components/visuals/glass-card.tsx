import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hover?: boolean;
};

export function GlassCard({
  children,
  className,
  variant = "light",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-7 transition-all duration-500 ease-out sm:p-8",
        variant === "light"
          ? "border-[#081826]/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(8,24,38,0.04)] backdrop-blur-xl"
          : "border-white/[0.08] bg-white/[0.04] backdrop-blur-xl",
        hover &&
          "hover:-translate-y-0.5 hover:border-[#1E90FF]/20 hover:shadow-[0_12px_40px_rgba(30,144,255,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}