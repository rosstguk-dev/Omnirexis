import { ArticleCard } from "@/components/insights/article-card";
import { PageHeader } from "@/components/sections/page-header";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Section } from "@/components/shared/section";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { getAllInsightArticles } from "@/lib/insights";
import { metadataFor, pageSeo } from "@/lib/page-metadata";

export const metadata = metadataFor("insights");

export default function InsightsPage() {
  const articles = getAllInsightArticles();

  return (
    <>
      <PageStructuredData
        path={pageSeo.insights.path}
        title={pageSeo.insights.title}
        description={pageSeo.insights.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
      />
      <PageHeader
        eyebrow="Insights"
        title="Practical AI automation guidance for UK businesses"
        description="Clear, honest articles on workflow automation, AI receptionists, and business AI solutions — written for owners and operators, not technologists."
      />
      <Section className="section-light">
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}