import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/omnirexis-logo.svg";
const LOGO_ALT = "Omnirexis - Intelligence. Automated.";
const LOGO_WIDTH = 3175;
const LOGO_HEIGHT = 653;

type LogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

const logoClassNames = {
  header: "h-9 w-auto object-contain bg-transparent md:h-11",
  footer: "h-12 w-auto object-contain bg-transparent md:h-16",
} as const;

export function Logo({ className, variant = "header" }: LogoProps) {
  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      decoding="async"
      className={cn("block max-w-none", logoClassNames[variant])}
    />
  );

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