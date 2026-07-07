import { FadeIn } from "@/components/motion/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { InsightFaq } from "@/lib/insights";

type ArticleFaqProps = {
  faqs: InsightFaq[];
};

export function ArticleFaq({ faqs }: ArticleFaqProps) {
  return (
    <FadeIn>
      <section aria-labelledby="article-faq-heading" className="mt-16">
        <h2
          id="article-faq-heading"
          className="text-2xl font-bold tracking-[-0.02em] text-[#081826]"
        >
          Frequently asked questions
        </h2>
        <Accordion className="mt-6 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`article-faq-${index}`}>
              <AccordionTrigger className="text-left text-[0.95rem] font-medium tracking-[-0.01em] text-[#081826] hover:text-[#1E90FF]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="prose-narrow text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </FadeIn>
  );
}