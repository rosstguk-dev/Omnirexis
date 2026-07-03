import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
};

export function Logo({
  className,
  variant = "dark",
  showTagline = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#1E90FF] to-[#55D6FF] text-sm font-bold text-white shadow-sm shadow-[#1E90FF]/30 transition-transform group-hover:scale-105">
        O
      </span>
      <div className="flex flex-col">
        <span
          className={cn(
            "text-lg font-bold tracking-tight",
            variant === "light" ? "text-white" : "text-[#081826]",
          )}
        >
          {siteConfig.name}
        </span>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] font-medium uppercase tracking-[0.2em]",
              variant === "light" ? "text-white/50" : "text-muted-foreground",
            )}
          >
            {siteConfig.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}