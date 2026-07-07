import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type EnquiryCtaButtonProps = {
  size?: "default" | "lg";
  className?: string;
};

export function EnquiryCtaButton({
  size = "lg",
  className,
}: EnquiryCtaButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={siteConfig.enquiryCtaHref}
          className="inline-flex items-center justify-center"
        >
          {siteConfig.enquiryCtaLabel}
        </a>
      }
      variant="outline"
      size={size}
      className={cn(
        "rounded-xl border-[#1E90FF]/35 bg-transparent font-semibold tracking-[-0.01em] text-[#1E90FF] transition-all duration-300 hover:border-[#1E90FF]/60 hover:bg-[#1E90FF]/[0.04]",
        size === "lg" && "h-12 px-7 text-sm",
        size === "default" && "h-10 px-5 text-sm",
        className,
      )}
    />
  );
}