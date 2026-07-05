import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "header" | "footer" | "icon";
  priority?: boolean;
};

const logoVariants = {
  header: {
    src: "/images/omnirexis-logo-header.svg",
    alt: "Omnirexis",
    width: 1254,
    height: 800,
    imageClassName: "h-[38px] w-auto max-h-[48px] sm:h-[40px] lg:h-[44px]",
  },
  footer: {
    src: "/images/omnirexis-logo.svg",
    alt: "Omnirexis - Intelligence. Automated.",
    width: 1254,
    height: 1254,
    imageClassName: "h-auto w-[200px] sm:w-[240px]",
  },
  icon: {
    src: "/images/omnirexis-icon.svg",
    alt: "Omnirexis",
    width: 660,
    height: 660,
    imageClassName: "h-9 w-9",
  },
} as const;

export function Logo({
  className,
  variant = "header",
  priority = false,
}: LogoProps) {
  const config = logoVariants[variant];
  const isLinked = variant !== "icon";

  const image = (
    <Image
      src={config.src}
      alt={config.alt}
      width={config.width}
      height={config.height}
      priority={priority}
      className={cn("max-w-none object-contain", config.imageClassName)}
    />
  );

  if (!isLinked) {
    return (
      <span className={cn("inline-flex shrink-0 items-center", className)}>
        {image}
      </span>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={config.alt}
    >
      {image}
    </Link>
  );
}