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

function TechnologyLogo({ name, logoId }: { name: string; logoId: string }) {
  return (
    <div className="flex h-10 w-full items-center justify-center">
      <Image
        src={`/logos/${logoId}.svg`}
        alt={`${name} logo`}
        width={120}
        height={32}
        className="max-h-8 w-auto max-w-[7.5rem] object-contain opacity-45 transition-all duration-300 group-hover:opacity-90 group-hover:drop-shadow-[0_0_10px_rgba(30,144,255,0.35)]"
      />
    </div>
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
            description="Omnirexis carefully selects the world's leading AI platforms and integrates them into tailored business implementations — chosen for fit, not favouritism."
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
              className="flex"
            >
              <a
                href={tech.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tech.name} (opens in new tab)`}
                className={cn(
                  "group flex w-full flex-col items-center justify-center rounded-2xl border px-4 py-6 transition-all duration-500 ease-out",
                  "min-h-[7.5rem]",
                  isDark
                    ? "border-white/[0.08] bg-white/[0.03] hover:-translate-y-0.5 hover:border-[#1E90FF]/30 hover:bg-white/[0.05] hover:shadow-[0_0_28px_rgba(30,144,255,0.14)]"
                    : "border-[#081826]/[0.06] bg-white/80 shadow-[0_1px_2px_rgba(8,24,38,0.04)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-[#1E90FF]/25 hover:shadow-[0_0_28px_rgba(30,144,255,0.12)]",
                )}
              >
                <TechnologyLogo name={tech.name} logoId={tech.logoId} />
                <span
                  className={cn(
                    "mt-4 text-center text-[10px] font-medium leading-none tracking-wide transition-colors duration-300 sm:text-[11px]",
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