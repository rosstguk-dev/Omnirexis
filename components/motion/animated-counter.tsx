"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  label: string;
};

export function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/^([\d.]+)(.*)$/);
    if (!numericMatch) return;

    const target = parseFloat(numericMatch[1]);
    const suffix = numericMatch[2];
    const isDecimal = numericMatch[1].includes(".");
    const duration = 1400;
    const start = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;
      setDisplay(
        (isDecimal ? current.toFixed(1) : Math.round(current).toString()) +
          suffix,
      );
      if (progress < 1) requestAnimationFrame(animate);
    };

    setDisplay(isDecimal ? "0.0" + suffix : "0" + suffix);
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <div ref={ref}>
      <p className="text-3xl font-bold tracking-[-0.03em] text-gradient sm:text-4xl lg:text-5xl">
        {display}
      </p>
      <p className="mt-2 text-sm font-medium tracking-[-0.01em] text-[#081826]">
        {label}
      </p>
    </div>
  );
}