"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { CtaButton } from "@/components/shared/cta-button";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BusinessHours } from "@/components/shared/business-hours";
import { navLinks, phoneTelHref, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 xl:hidden"
          >
            <Menu className="size-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        }
      />
      <SheetContent
        side="right"
        className="w-full max-w-sm border-white/10 bg-[#081826] text-white"
      >
        <SheetHeader>
          <SheetTitle>
            <Logo size="compact" />
          </SheetTitle>
        </SheetHeader>
        <nav
          aria-label="Mobile navigation"
          className="mt-8 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-[#1E90FF]/20 text-[#55D6FF]"
                  : "text-white/80 hover:bg-white/5 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6">
            <CtaButton className="w-full" size="default" />
          </div>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/35">
              Contact
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a
                href={`mailto:${siteConfig.email}`}
                className="block text-white/70 transition-colors hover:text-[#55D6FF]"
              >
                {siteConfig.email}
              </a>
              <a
                href={phoneTelHref()}
                className="block text-white/70 transition-colors hover:text-[#55D6FF]"
              >
                {siteConfig.phone}
              </a>
            </div>
            <BusinessHours
              className="mt-4"
              daysClassName="text-sm text-white/55"
              hoursClassName="text-sm text-white/40"
            />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}