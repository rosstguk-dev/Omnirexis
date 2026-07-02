"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { technologies, technologyDisclaimer } from "@/lib/technologies";
import { cn } from "@/lib/utils";

type TechnologyPartnersProps = {
  theme?: "light" | "dark";
  className?: string;
};

function TechnologyLogo({ name, logoSlug }: { name: string; logoSlug?: string }) {
  if (!logoSlug) {
    return (
      <span className="text-center text-sm font-semibold tracking-[-0.02em] text-[#081826]/80">
        {name}
      </span>
    );
  }

  return (
    <Image
      src={`https://cdn.simpleicons.org/${logoSlug}/081826`}
      alt={`${name} logo`}
      width={96}
      height={32}
      className="h-7 w-auto max-w-[5.5rem] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 sm:h-8 sm:max-w-[6.5rem]"
      unoptimized
    />
  );
}

export function TechnologyPartners({
  theme = "light",
  className,
}: TechnologyPartnersProps) {
  const isDark = theme === "dark";

  return (
    <section
      aria-labelledby="technology-heading"
      className={cn("section-padding", className)}
    >
      <div className="section-container">
        <FadeIn>
          <SectionHeading
            id="technology-heading"
            eyebrow="Technology"
            title="Powered by Industry-Leading AI Technology"
            description="Omnirexis carefully selects the world's leading AI platforms and integrates them into bespoke business solutions — chosen for fit, not favouritism."
            theme={theme}
          />
        </FadeIn>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-7">
          {technologies.map((tech, index) => (
            <motion.li
              key={tech.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <a
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex h-full min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border px-4 py-5 transition-all duration-500 ease-out sm:min-h-[6.25rem] sm:px-5",
                  isDark
                    ? "border-white/[0.08] bg-white/[0.03] hover:-translate-y-0.5 hover:border-[#1E90FF]/25 hover:bg-white/[0.06] hover:shadow-[0_12px_40px_rgba(30,144,255,0.1)]"
                    : "border-[#081826]/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(8,24,38,0.04)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#1E90FF]/20 hover:shadow-[0_12px_40px_rgba(30,144,255,0.08)]",
                )}
              >
                <TechnologyLogo name={tech.name} logoSlug={tech.logoSlug} />
                <span
                  className={cn(
                    "mt-3 text-center text-[10px] font-medium tracking-wide transition-colors duration-300 sm:text-[11px]",
                    isDark
                      ? "text-white/35 group-hover:text-[#55D6FF]/80"
                      : "text-muted-foreground group-hover:text-[#1E90FF]",
                  )}
                >
                  {tech.name}
                </span>
              </a>
            </motion.li>
          ))}
        </ul>

        <FadeIn delay={0.2}>
          <p
            className={cn(
              "prose-narrow mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed sm:text-sm",
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