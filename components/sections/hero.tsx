"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroVideo } from "@/components/sections/hero-video";
import { NeuralBackground } from "@/components/visuals/neural-background";
import { CtaButton } from "@/components/shared/cta-button";
import { Button } from "@/components/ui/button";
import { siteConfig, trustBadges } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] overflow-hidden bg-[#081826]"
    >
      <HeroVideo />
      <div className="pointer-events-none absolute inset-0 z-[1] opacity-40">
        <NeuralBackground />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-36 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#55D6FF]/90">
            {siteConfig.tagline}
          </p>

          <h1
            id="hero-heading"
            className="text-[2.5rem] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
          >
            AI Implementation That Delivers{" "}
            <span className="text-gradient">Real Results.</span>
          </h1>

          <p className="prose-narrow mt-7 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            A premium AI implementation consultancy. We identify where AI
            creates value, configure best-in-class platforms, integrate with
            your existing systems, and optimise for ongoing impact — saving
            time, reducing costs, growing revenue, and improving every customer
            interaction.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CtaButton />
            <Button
              nativeButton={false}
              render={
                <Link href="/solutions">Explore Our Solutions</Link>
              }
              variant="outline"
              size="lg"
              className="h-12 rounded-xl border-white/15 bg-white/[0.04] px-7 text-sm font-semibold text-white backdrop-blur-sm hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            />
          </div>
          <p className="mt-4 text-xs text-white/35">{siteConfig.ctaMicrocopy}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-20 flex flex-wrap gap-2.5"
          role="list"
          aria-label="Core capabilities"
        >
          {trustBadges.map((badge) => (
            <span
              key={badge}
              role="listitem"
              className="rounded-full border border-[#1E90FF]/15 bg-[#1E90FF]/[0.06] px-4 py-2 text-[11px] font-medium tracking-wide text-[#55D6FF]/90 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}