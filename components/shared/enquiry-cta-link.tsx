import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type EnquiryCtaLinkProps = {
  className?: string;
  theme?: "light" | "dark";
};

export function EnquiryCtaLink({
  className,
  theme = "dark",
}: EnquiryCtaLinkProps) {
  return (
    <a
      href={`#${siteConfig.enquirySectionId}`}
      className={cn(
        "text-sm font-medium underline-offset-4 transition-colors hover:underline",
        theme === "dark"
          ? "text-white/45 hover:text-[#55D6FF]"
          : "text-muted-foreground hover:text-[#1E90FF]",
        className,
      )}
    >
      {siteConfig.enquiryCtaLabel}
    </a>
  );
}