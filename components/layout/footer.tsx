import Link from "next/link";
import { LinkedInIcon } from "@/components/icons/linkedin";
import { Logo } from "@/components/layout/logo";
import { CtaButton } from "@/components/shared/cta-button";
import { BusinessHours } from "@/components/shared/business-hours";
import { footerLinks, phoneTelHref, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#081826] text-white/60">
      <div className="section-container py-20 sm:py-24">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:flex sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="text-lg font-semibold tracking-[-0.01em] text-white sm:text-xl">
              Ready to see what AI implementation is worth to you?
            </p>
            <p className="mt-2 max-w-md text-sm text-white/45">
              Book a free strategy call. Walk away with a prioritised
              implementation roadmap — whether you work with us or not.
            </p>
          </div>
          <CtaButton className="mt-6 shrink-0 sm:mt-0" size="default" />
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" showTagline />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              {siteConfig.mission}
            </p>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Omnirexis on LinkedIn"
              className="mt-6 inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-white/50 transition-colors hover:border-[#1E90FF]/30 hover:text-[#55D6FF]"
            >
              <LinkedInIcon className="size-4" />
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#55D6FF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Contact
            </h3>
            <ul className="space-y-0.5 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-[#55D6FF]"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={phoneTelHref()}
                  className="transition-colors hover:text-[#55D6FF]"
                >
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <BusinessHours
              className="mt-4"
              daysClassName="text-sm text-white/45"
              hoursClassName="text-sm text-white/40"
            />
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#55D6FF]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.08] pt-8 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName} All rights
            reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}