import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import type { InsightArticle } from "@/lib/insights";
import { formatInsightDate } from "@/lib/insights";

type ArticleCardProps = {
  article: InsightArticle;
  index?: number;
};

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <FadeIn delay={index * 0.06}>
      <article className="group flex h-full flex-col rounded-2xl border border-[#081826]/[0.08] bg-white p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(8,24,38,0.06)]">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#1E90FF]/80">
          {formatInsightDate(article.publishedDate)}
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#081826] group-hover:text-[#1E90FF]">
          <Link href={`/insights/${article.slug}`}>{article.title}</Link>
        </h2>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" aria-hidden="true" />
            {article.readingTimeMinutes} min read
          </span>
          <Link
            href={`/insights/${article.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1E90FF] transition-colors hover:text-[#1878D8]"
          >
            Read article
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}