import type { ReactNode } from "react";

export function PageHero({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-ink">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-aurora" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <p className="font-mono text-xs font-medium tracking-kicker text-pine uppercase">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-4xl font-sans text-4xl leading-display font-medium tracking-tight text-bone sm:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {lede}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
