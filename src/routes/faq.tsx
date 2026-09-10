import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CtaBand } from "@/components/site/cta-band";
import { SiteLayout } from "@/components/site/layout";
import { PageHero } from "@/components/site/page-hero";
import { FAQS } from "@/lib/site";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        kicker="FAQ"
        title="Straight questions. Useful answers."
        lede="A little clarity before the first conversation. If yours is not here, bring it to the call."
      />
      <div className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <Accordion type="single" collapsible className="max-w-3xl">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={String(i)}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <CtaBand />
    </SiteLayout>
  );
}
