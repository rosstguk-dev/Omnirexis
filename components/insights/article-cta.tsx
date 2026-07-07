import Link from "next/link";
import { BookingCtaStack } from "@/components/shared/booking-cta-stack";
import { siteConfig } from "@/lib/site";

export function ArticleCta() {
  return (
    <aside className="relative mt-16 overflow-hidden rounded-3xl bg-[#081826] p-8 sm:p-10">
      <div className="ambient-glow pointer-events-none absolute inset-0" />
      <div className="relative">
        <h2 className="text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">
          Ready to explore AI automation for your business?
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
          Book a free strategy call with a senior Omnirexis consultant — or send
          an enquiry and we will respond promptly.
        </p>
        <BookingCtaStack
          className="relative mt-6 max-w-sm"
          buttonClassName="sm:w-full"
        />
        <div className="relative mt-4">
          <Link
            href="/contact"
            className="text-sm font-medium text-[#55D6FF] transition-colors hover:text-white"
          >
            Contact Us
          </Link>
          <span className="mx-2 text-white/30" aria-hidden="true">
            ·
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-white/45 transition-colors hover:text-[#55D6FF]"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </aside>
  );
}