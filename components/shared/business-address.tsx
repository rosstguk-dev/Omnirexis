import { businessAddressLines } from "@/lib/site";
import { cn } from "@/lib/utils";

type BusinessAddressProps = {
  className?: string;
  lineClassName?: string;
};

export function BusinessAddress({
  className,
  lineClassName,
}: BusinessAddressProps) {
  return (
    <address className={cn("not-italic", className)}>
      {businessAddressLines.map((line) => (
        <span key={line} className={cn("block", lineClassName)}>
          {line}
        </span>
      ))}
    </address>
  );
}