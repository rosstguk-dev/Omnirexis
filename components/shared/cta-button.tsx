import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "lg";
  showIcon?: boolean;
  className?: string;
  label?: string;
};

export function CtaButton({
  variant = "primary",
  size = "lg",
  showIcon = true,
  className,
  label = siteConfig.ctaLabel,
}: CtaButtonProps) {
  const styles = {
    primary:
      "bg-[#1E90FF] text-white hover:bg-[#1878D8] glow-blue hover:glow-blue-strong",
    outline:
      "border-[#1E90FF]/35 bg-transparent text-[#1E90FF] hover:border-[#1E90FF]/60 hover:bg-[#1E90FF]/[0.04]",
    ghost: "text-[#1E90FF] hover:bg-[#1E90FF]/[0.06]",
  };

  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={siteConfig.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5"
        >
          {showIcon && <Calendar className="size-4" aria-hidden="true" />}
          {label}
          {variant === "primary" && (
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover/button:translate-x-0.5"
              aria-hidden="true"
            />
          )}
        </a>
      }
      variant={variant === "primary" ? "default" : variant}
      size={size}
      className={cn(
        "rounded-xl font-semibold tracking-[-0.01em] transition-all duration-300",
        size === "lg" && "h-12 px-7 text-sm",
        size === "default" && "h-10 px-5 text-sm",
        styles[variant],
        className,
      )}
    />
  );
}