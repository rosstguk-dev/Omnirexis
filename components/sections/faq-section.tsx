import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { CtaButton } from "@/components/shared/cta-button";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site";

type FaqSectionProps = {
  limit?: number;
  showCta?: boolean;
  showViewAll?: boolean;
};

export function FaqSection({
  limit,
  showCta = true,
  showViewAll = false,
}: FaqSectionProps) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section
      aria-labelledby="faq-heading"
      className="section-light section-padding"
    >
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <SectionHeading
              id="faq-heading"
              eyebrow="FAQ"
              title="Straight answers for business leaders"
              description="Clear, honest responses — so you can make an informed decision about working with us."
              align="left"
            />
            {showCta && (
              <div className="mt-8 hidden lg:block">
                <CtaButton />
                <p className="mt-3 text-xs text-muted-foreground">
                  Prefer a conversation? We&apos;re happy to walk through any of
                  this on a call.
                </p>
              </div>
            )}
          </FadeIn>

          <FadeIn delay={0.12}>
            <Accordion className="w-full">
              {items.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-[0.95rem] font-medium tracking-[-0.01em] text-[#081826] hover:text-[#1E90FF]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="prose-narrow text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {showViewAll && limit && (
              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1E90FF] transition-colors hover:text-[#1878D8]"
              >
                View all questions
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            )}

            {showCta && (
              <div className="mt-8 lg:hidden">
                <CtaButton className="w-full" />
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}