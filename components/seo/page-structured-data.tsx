import { JsonLd } from "@/components/seo/json-ld";
import { pageStructuredData } from "@/lib/seo";

type PageStructuredDataProps = {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: ReadonlyArray<{ name: string; path: string }>;
};

export function PageStructuredData({
  path,
  title,
  description,
  breadcrumbs,
}: PageStructuredDataProps) {
  return (
    <JsonLd
      data={pageStructuredData({ path, title, description, breadcrumbs })}
    />
  );
}