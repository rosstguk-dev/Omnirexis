import { CtaButton } from "@/components/shared/cta-button";
import { ContactCtaButton } from "@/components/shared/contact-cta-button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type BookingCtaGroupProps = {
  align?: "left" | "center";
  theme?: "light" | "dark";
  showMicrocopy?: boolean;
  showContactButton?: boolean;
  className?: string;
  buttonClassName?: string;
  contactButtonClassName?: string;
  buttonSize?: "default" | "lg";
};

export function BookingCtaGroup({
  align = "center",
  theme = "dark",
  showMicrocopy = true,
  showContactButton = true,
  className,
  buttonClassName,
  contactButtonClassName,
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
        {showContactButton && (
          <ContactCtaButton
            className={cn("w-full sm:w-auto", contactButtonClassName)}
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