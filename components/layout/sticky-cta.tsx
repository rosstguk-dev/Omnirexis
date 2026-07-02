"use client";

import { useEffect, useState } from "react";
import { CtaButton } from "@/components/shared/cta-button";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#081826]/95 p-3 backdrop-blur-xl sm:hidden"
      role="complementary"
      aria-label="Book a strategy call"
    >
      <CtaButton className="w-full" size="default" />
    </div>
  );
}