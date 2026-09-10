import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

export function SiteLayout({
  children,
}: {
  children: ReactNode;
  inkHero?: boolean;
}) {
  return (
    <div className="min-h-svh bg-ink text-bone">
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
