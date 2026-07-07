import Link from "next/link";
import { PageHeader } from "@/components/sections/page-header";
import { Section } from "@/components/shared/section";
import { BookingCtaStack } from "@/components/shared/booking-cta-stack";
import { metadataFor } from "@/lib/page-metadata";

export const metadata = metadataFor("notFound");

export default function NotFoundPage() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Page not found"
        description="The page you are looking for may have moved or no longer exists. Explore our AI automation solutions or get in touch with our UK consultancy team."
      />
      <Section ariaLabelledby="not-found-actions">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <h2 id="not-found-actions" className="sr-only">
            Helpful links
          </h2>
          <nav
            aria-label="Helpful links"
            className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium"
          >
            <Link
              href="/"
              className="text-[#1E90FF] transition-colors hover:text-[#1878D8]"
            >
              Home
            </Link>
            <Link
              href="/solutions"
              className="text-[#1E90FF] transition-colors hover:text-[#1878D8]"
            >
              Solutions
            </Link>
            <Link
              href="/about"
              className="text-[#1E90FF] transition-colors hover:text-[#1878D8]"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#1E90FF] transition-colors hover:text-[#1878D8]"
            >
              Contact
            </Link>
          </nav>
          <BookingCtaStack
            theme="light"
            className="mt-10 w-full max-w-sm"
            buttonClassName="sm:w-full"
          />
        </div>
      </Section>
    </>
  );
}