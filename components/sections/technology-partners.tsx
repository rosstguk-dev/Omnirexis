"use client";

import { useState, useSyncExternalStore, type CSSProperties } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  technologies,
  technologyDisclaimer,
  technologySubheading,
  type Technology,
} from "@/lib/technologies";
import { cn } from "@/lib/utils";

type TechnologyPartnersProps = {
  theme?: "light" | "dark";
  className?: string;
};

function subscribeMediaQuery(query: string, callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useMediaQuery(query: string, fallback = false) {
  return useSyncExternalStore(
    (callback) => subscribeMediaQuery(query, callback),
    () => window.matchMedia(query).matches,
    () => fallback,
  );
}

function LogoMark({ tech }: { tech: Technology }) {
  if (tech.wordmark) {
    return (
      <span
        className={cn(
          "block h-8 whitespace-nowrap text-sm font-semibold leading-8 tracking-[-0.03em]",
          "text-[#9AA8B4] transition-all duration-300",
          "group-hover:text-[#1E90FF] group-hover:drop-shadow-[0_0_12px_rgba(30,144,255,0.45)]",
        )}
      >
        {tech.name}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        "block h-8 w-[7.5rem] shrink-0 bg-[#9AA8B4] transition-all duration-300",
        "group-hover:bg-[#1E90FF] group-hover:drop-shadow-[0_0_12px_rgba(30,144,255,0.45)]",
        "[mask-image:var(--logo-mask)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:contain]",
        "[-webkit-mask-image:var(--logo-mask)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:center] [-webkit-mask-size:contain]",
      )}
      style={
        {
          "--logo-mask": `url(/logos/${tech.logoId}.svg)`,
        } as CSSProperties
      }
    />
  );
}

function PartnerLink({
  tech,
  duplicateIndex,
}: {
  tech: Technology;
  duplicateIndex: number;
}) {
  return (
    <li
      className="flex shrink-0 snap-center list-none"
      aria-hidden={duplicateIndex > 0 ? true : undefined}
    >
      <a
        href={tech.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicateIndex > 0 ? -1 : 0}
        aria-label={`${tech.name} (opens in new tab)`}
        className="group flex h-16 items-center justify-center px-8 sm:px-10 md:px-12"
      >
        <LogoMark tech={tech} />
      </a>
    </li>
  );
}

function MarqueeContent({ duplicateSets = 2 }: { duplicateSets?: number }) {
  const items = Array.from({ length: duplicateSets }, (_, setIndex) =>
    technologies.map((tech) => ({ tech, setIndex })),
  ).flat();

  return (
    <>
      {items.map(({ tech, setIndex }) => (
        <PartnerLink
          key={`${tech.name}-${setIndex}`}
          tech={tech}
          duplicateIndex={setIndex}
        />
      ))}
    </>
  );
}

export function TechnologyPartners({
  theme = "light",
  className,
}: TechnologyPartnersProps) {
  const isDark = theme === "dark";
  const isMobile = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const [paused, setPaused] = useState(false);
  const showMarquee = !isMobile && !prefersReducedMotion;

  const fadeFrom = isDark ? "from-[#081826]" : "from-[#f6f8fb]";
  const glassBg = isDark
    ? "border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl"
    : "border-[#081826]/[0.06] bg-white/55 backdrop-blur-2xl shadow-[0_8px_40px_rgba(8,24,38,0.04)]";

  return (
    <section
      aria-labelledby="technology-heading"
      className={cn("section-padding py-32 sm:py-40", className)}
    >
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            id="technology-heading"
            eyebrow="Technology"
            title="Powered by Industry-Leading AI Technology"
            description={technologySubheading}
            theme={theme}
          />
        </FadeIn>

        <FadeIn delay={0.1} className="relative mt-16 sm:mt-20">
          <div
            className={cn(
              "relative overflow-hidden rounded-3xl border px-2 py-10 sm:px-4 sm:py-12 md:py-14",
              glassBg,
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent sm:w-24 md:w-32",
                fadeFrom,
              )}
              aria-hidden="true"
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent sm:w-24 md:w-32",
                fadeFrom,
              )}
              aria-hidden="true"
            />

            {showMarquee ? (
              <div
                className={cn("marquee overflow-hidden", paused && "marquee-paused")}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
                onFocusCapture={() => setPaused(true)}
                onBlurCapture={() => setPaused(false)}
              >
                <ul
                  className="marquee-track flex w-max items-center"
                  role="list"
                  aria-label="Technology partners"
                >
                  <MarqueeContent duplicateSets={2} />
                </ul>
              </div>
            ) : prefersReducedMotion ? (
              <ul
                className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 px-4 sm:gap-x-12"
                role="list"
                aria-label="Technology partners"
              >
                {technologies.map((tech) => (
                  <PartnerLink
                    key={tech.name}
                    tech={tech}
                    duplicateIndex={0}
                  />
                ))}
              </ul>
            ) : (
              <div
                className="scrollbar-none snap-x snap-mandatory overflow-x-auto overscroll-x-contain touch-pan-x"
                aria-label="Technology partners — swipe to explore"
              >
                <ul className="flex w-max items-center" role="list">
                  <MarqueeContent duplicateSets={2} />
                </ul>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p
            className={cn(
              "prose-narrow mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed sm:mt-12 sm:text-sm",
              isDark ? "text-white/35" : "text-muted-foreground",
            )}
          >
            {technologyDisclaimer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}