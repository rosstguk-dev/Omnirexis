import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/omnirexis-logo.svg";
const LOGO_ALT = "Omnirexis - Intelligence. Automated.";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer" | "icon";
};

const logoClassNames = {
  header: "h-12 w-auto object-contain bg-transparent md:h-14",
  footer: "h-auto w-[200px] object-contain bg-transparent sm:w-[240px]",
  icon: "h-11 w-auto object-contain bg-transparent",
} as const;

export function Logo({ className, variant = "header" }: LogoProps) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={1083}
      height={721}
      decoding="async"
      className={cn("block max-w-none", logoClassNames[variant])}
    />
  );

  if (variant === "icon") {
    return (
      <span
        className={cn(
          "inline-flex shrink-0 items-center overflow-visible bg-transparent",
          className,
        )}
      >
        {image}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center overflow-visible bg-transparent transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={LOGO_ALT}
    >
      {image}
    </Link>
  );
}