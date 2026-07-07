import { CtaButton } from "@/components/shared/cta-button";
import { EnquiryCtaButton } from "@/components/shared/enquiry-cta-button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type BookingCtaGroupProps = {
  align?: "left" | "center";
  theme?: "light" | "dark";
  showMicrocopy?: boolean;
  showEnquiryButton?: boolean;
  className?: string;
  buttonClassName?: string;
  enquiryButtonClassName?: string;
  buttonSize?: "default" | "lg";
};

export function BookingCtaGroup({
  align = "center",
  theme = "dark",
  showMicrocopy = true,
  showEnquiryButton = true,
  className,
  buttonClassName,
  enquiryButtonClassName,
  buttonSize = "lg",
}: BookingCtaGroupProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center" : "items-stretch",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center",
          align === "center" && "sm:justify-center",
        )}
      >
        <CtaButton
          className={cn("w-full sm:w-auto", buttonClassName)}
          size={buttonSize}
        />
        {showEnquiryButton && (
          <EnquiryCtaButton
            className={cn("w-full sm:w-auto", enquiryButtonClassName)}
            size={buttonSize}
          />
        )}
      </div>
      {showMicrocopy && (
        <p
          className={cn(
            "text-xs",
            align === "center" && "text-center",
            theme === "dark" ? "text-white/30" : "text-muted-foreground",
          )}
        >
          {siteConfig.ctaMicrocopy}
        </p>
      )}
    </div>
  );
}