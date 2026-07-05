import { CtaButton } from "@/components/shared/cta-button";
import { EnquiryCtaLink } from "@/components/shared/enquiry-cta-link";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type BookingCtaGroupProps = {
  align?: "left" | "center";
  theme?: "light" | "dark";
  showMicrocopy?: boolean;
  showEnquiryLink?: boolean;
  className?: string;
  buttonClassName?: string;
  buttonSize?: "default" | "lg";
};

export function BookingCtaGroup({
  align = "center",
  theme = "dark",
  showMicrocopy = true,
  showEnquiryLink = true,
  className,
  buttonClassName,
  buttonSize = "lg",
}: BookingCtaGroupProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center" : "items-start",
        className,
      )}
    >
      <CtaButton className={buttonClassName} size={buttonSize} />
      {showMicrocopy && (
        <p
          className={cn(
            "text-xs",
            theme === "dark" ? "text-white/30" : "text-muted-foreground",
          )}
        >
          {siteConfig.ctaMicrocopy}
        </p>
      )}
      {showEnquiryLink && <EnquiryCtaLink theme={theme} />}
    </div>
  );
}