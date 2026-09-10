import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string; invert?: boolean }) {
  return (
    <img
      src="/brand/symbol.svg"
      alt=""
      className={cn("h-7 w-auto", className)}
    />
  );
}

export function Wordmark({
  className,
}: {
  invert?: boolean;
  className?: string;
}) {
  return (
    <img
      src="/brand/logo.svg"
      alt="Omnirexis"
      className={cn("h-8 w-auto max-w-48 sm:h-9 sm:max-w-56", className)}
    />
  );
}
