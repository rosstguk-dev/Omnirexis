import { CtaButton } from "@/components/shared/cta-button";
import { EnquiryCtaButton } from "@/components/shared/enquiry-cta-button";
import { cn } from "@/lib/utils";

type BookingCtaStackProps = {
  size?: "default" | "lg";
  theme?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  buttonClassName?: string;
};

export function BookingCtaStack({
  size = "lg",
  theme = "dark",
  align = "center",
  className,
  buttonClassName,
}: BookingCtaStackProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4",
        align === "center" ? "items-center" : "items-stretch",
        className,
      )}
    >
      <CtaButton
        className={cn("w-full", buttonClassName)}
        size={size}
      />
      <EnquiryCtaButton
        className={cn("w-full", buttonClassName)}
        size={size}
        theme={theme}
      />
    </div>
  );
}