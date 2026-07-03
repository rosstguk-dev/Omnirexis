import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: "compact" | "default" | "large";
  priority?: boolean;
};

const logoAlt = "Omnirexis - Intelligence. Automated.";

const sizeStyles = {
  compact: {
    clip: "h-9 w-[148px] overflow-hidden sm:w-[168px]",
    image: "w-[148px] sm:w-[168px]",
    sizes: "(max-width: 640px) 148px, 168px",
  },
  default: {
    clip: "h-12 w-[180px] overflow-hidden sm:h-14 sm:w-[210px]",
    image: "w-[180px] sm:w-[210px]",
    sizes: "(max-width: 640px) 180px, 210px",
  },
  large: {
    clip: "h-auto w-[200px] sm:w-[240px]",
    image: "h-auto w-[200px] sm:w-[240px]",
    sizes: "(max-width: 640px) 200px, 240px",
  },
} as const;

export function Logo({
  className,
  size = "default",
  priority = false,
}: LogoProps) {
  const styles = sizeStyles[size];

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex shrink-0 transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={logoAlt}
    >
      <span className={cn("relative block", styles.clip)}>
        <Image
          src="/images/omnirexis-logo.png"
          alt={logoAlt}
          width={1254}
          height={1254}
          priority={priority}
          className={cn("h-auto max-w-none object-contain", styles.image)}
          sizes={styles.sizes}
        />
      </span>
    </Link>
  );
}