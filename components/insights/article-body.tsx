import type { InsightSection } from "@/lib/insights";
import { InsightParagraphText } from "@/components/insights/insight-paragraph";

type ArticleBodyProps = {
  sections: InsightSection[];
};

export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="prose-narrow space-y-10">
      {sections.map((section) => {
        const HeadingTag = section.level === 2 ? "h2" : "h3";
        const headingClass =
          section.level === 2
            ? "text-2xl font-bold tracking-[-0.02em] text-[#081826] sm:text-[1.65rem]"
            : "text-xl font-semibold tracking-[-0.01em] text-[#081826]";

        return (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <HeadingTag className={headingClass}>{section.title}</HeadingTag>
            <div className="mt-4 space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <InsightParagraphText
                  key={`${section.id}-p-${index}`}
                  paragraph={paragraph}
                />
              ))}
            </div>
            {section.listItems && section.listItems.length > 0 && (
              <ul className="mt-4 list-disc space-y-3 pl-5">
                {section.listItems.map((item, index) => (
                  <li
                    key={`${section.id}-li-${index}`}
                    className="text-base leading-relaxed text-muted-foreground marker:text-[#1E90FF]"
                  >
                    <InsightParagraphText as="span" paragraph={item} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        );
      })}
    </div>
  );
}