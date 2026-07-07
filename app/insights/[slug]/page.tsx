import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User } from "lucide-react";
import { ArticleBody } from "@/components/insights/article-body";
import { ArticleCta } from "@/components/insights/article-cta";
import { ArticleFaq } from "@/components/insights/article-faq";
import { ArticleToc } from "@/components/insights/article-toc";
import { FadeIn } from "@/components/motion/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { Section } from "@/components/shared/section";
import {
  formatInsightDate,
  getAllInsightArticles,
  getInsightArticleBySlug,
  getRelatedArticles,
} from "@/lib/insights";
import { createMetadata } from "@/lib/site";
import {
  articleFaqJsonLd,
  articleJsonLd,
} from "@/lib/seo";
import type { Metadata } from "next";

type InsightArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllInsightArticles().map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);

  if (!article) {
    return createMetadata({
      title: "Article Not Found",
      description: "The requested insight article could not be found.",
      path: `/insights/${slug}`,
      noIndex: true,
    });
  }

  return createMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: `/insights/${article.slug}`,
    absoluteTitle: true,
  });
}

export default async function InsightArticlePage({
  params,
}: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const articlePath = `/insights/${article.slug}`;

  return (
    <>
      <JsonLd
        data={[articleJsonLd(article), articleFaqJsonLd(article)]}
      />
      <PageStructuredData
        path={articlePath}
        title={article.seoTitle}
        description={article.metaDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: articlePath },
        ]}
      />

      <section className="relative overflow-hidden bg-[#081826] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="ambient-glow pointer-events-none absolute inset-0" />
        <div className="section-container relative">
          <FadeIn>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-[#55D6FF]"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Insights
            </Link>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#55D6FF]/90">
              Insights
            </p>
            <h1 className="mt-4 max-w-4xl text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>
            <p className="prose-narrow mt-5 max-w-3xl text-base leading-relaxed text-white/55 sm:text-lg">
              {article.excerpt}
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/45">
              <div className="flex items-center gap-2">
                <dt className="sr-only">Author</dt>
                <User className="size-4 text-[#55D6FF]/70" aria-hidden="true" />
                <dd>{article.author}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">Published</dt>
                <dd>{formatInsightDate(article.publishedDate)}</dd>
              </div>
              <div className="flex items-center gap-2">
                <dt className="sr-only">Reading time</dt>
                <Clock className="size-4 text-[#55D6FF]/70" aria-hidden="true" />
                <dd>{article.readingTimeMinutes} min read</dd>
              </div>
            </dl>
          </FadeIn>
        </div>
      </section>

      <Section className="section-light">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            <ArticleBody sections={article.sections} />
            <ArticleFaq faqs={article.faqs} />
            <ArticleCta />
          </div>
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <ArticleToc sections={article.sections} />
            {relatedArticles.length > 0 && (
              <nav
                aria-label="Related articles"
                className="mt-6 rounded-2xl border border-[#081826]/[0.08] bg-white p-6"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#081826]/50">
                  Related reading
                </h2>
                <ul className="mt-4 space-y-3">
                  {relatedArticles.map((related) => (
                    <li key={related.slug}>
                      <Link
                        href={`/insights/${related.slug}`}
                        className="text-sm leading-snug text-[#081826]/80 transition-colors hover:text-[#1E90FF]"
                      >
                        {related.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 space-y-2 border-t border-[#081826]/[0.08] pt-4 text-sm">
                  <li>
                    <Link
                      href="/solutions"
                      className="text-[#1E90FF] transition-colors hover:text-[#1878D8]"
                    >
                      Our AI solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-[#1E90FF] transition-colors hover:text-[#1878D8]"
                    >
                      Contact Omnirexis
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </Section>
    </>
  );
}