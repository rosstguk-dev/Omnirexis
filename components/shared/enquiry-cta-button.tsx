import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type EnquiryCtaButtonProps = {
  size?: "default" | "lg";
  className?: string;
  theme?: "dark" | "light";
};

export function EnquiryCtaButton({
  size = "lg",
  className,
  theme = "dark",
}: EnquiryCtaButtonProps) {
  return (
    <Button
      nativeButton={false}
      render={
        <a
          href={siteConfig.enquiryCtaHref}
          className="inline-flex w-full items-center justify-center"
        >
          {siteConfig.enquiryCtaLabel}
        </a>
      }
      variant="outline"
      size={size}
      className={cn(
        "rounded-xl border-[#1E90FF]/60 bg-transparent font-semibold tracking-[-0.01em] transition-all duration-300 hover:border-[#1E90FF] hover:bg-[#1E90FF]/10",
        theme === "dark"
          ? "text-white hover:text-[#55D6FF]"
          : "text-[#1E90FF] hover:text-[#1878D8]",
        size === "lg" && "h-12 px-7 text-sm",
        size === "default" && "h-10 px-5 text-sm",
        className,
      )}
    />
  );
}