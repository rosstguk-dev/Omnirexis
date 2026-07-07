import Link from "next/link";
import type { InsightParagraph } from "@/lib/insights";

type InsightParagraphProps = {
  paragraph: InsightParagraph;
  as?: "p" | "span";
};

export function InsightParagraphText({
  paragraph,
  as = "p",
}: InsightParagraphProps) {
  const className = "text-base leading-relaxed text-muted-foreground";
  const content = paragraph.segments.map((segment, index) =>
    typeof segment === "string" ? (
      <span key={`${index}-${segment.slice(0, 12)}`}>{segment}</span>
    ) : (
      <Link
        key={`${index}-${segment.href}`}
        href={segment.href}
        className="font-medium text-[#1E90FF] transition-colors hover:text-[#1878D8]"
      >
        {segment.text}
      </Link>
    ),
  );

  if (as === "span") {
    return <span className={className}>{content}</span>;
  }

  return <p className={className}>{content}</p>;
}