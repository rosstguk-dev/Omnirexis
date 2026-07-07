import type { InsightSection } from "@/lib/insights";

type ArticleTocProps = {
  sections: InsightSection[];
};

export function ArticleToc({ sections }: ArticleTocProps) {
  const tocItems = sections.filter((section) => section.level === 2);

  if (tocItems.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-[#081826]/[0.08] bg-white p-6">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#081826]/50">
        Contents
      </h2>
      <ol className="mt-4 space-y-2.5">
        {tocItems.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm leading-snug text-[#081826]/80 transition-colors hover:text-[#1E90FF]"
            >
              <span className="mr-2 text-[#1E90FF]/70">{index + 1}.</span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}