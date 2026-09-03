import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Dumbbell,
  FileCheck2,
  FileText,
  Hotel,
  ListChecks,
  ShieldCheck,
  Sparkles,
  Waves,
  Wrench,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import { PageStructuredData } from "@/components/seo/page-structured-data";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { GlassCard } from "@/components/visuals/glass-card";
import { metadataFor, pageSeo } from "@/lib/page-metadata";
import { leisureSystemsJsonLd } from "@/lib/seo";

export const metadata = metadataFor("leisureSystems");

const contactHref = "/contact?division=leisure-systems";

const audiences = [
  { icon: Dumbbell, label: "Independent gyms" },
  { icon: Waves, label: "Spas" },
  { icon: Hotel, label: "Hotel leisure clubs" },
  { icon: Building2, label: "Health clubs" },
] as const;

const capabilities = [
  {
    icon: ClipboardCheck,
    title: "Daily operational checks",
    description: "Opening, closing, cleaning, pool and plant checks in one clear workflow.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance and audit records",
    description: "Time-stamped records that are easy to review, evidence and export.",
  },
  {
    icon: Wrench,
    title: "Incident and maintenance reporting",
    description: "Capture issues promptly, assign ownership and keep a visible action trail.",
  },
  {
    icon: CalendarDays,
    title: "Rotas and staff hours",
    description: "Editable rotas with calculated staff hours for practical day-to-day planning.",
  },
  {
    icon: ListChecks,
    title: "Jobs and outstanding actions",
    description: "Give staff clear responsibilities and managers a live view of what remains open.",
  },
  {
    icon: FileText,
    title: "Procedure access",
    description: "Keep SOP, EAP and COSHH documents organised and accessible to the right people.",
  },
  {
    icon: FileCheck2,
    title: "Management reporting",
    description: "Weekly and monthly reporting that turns operational activity into a useful overview.",
  },
  {
    icon: Bot,
    title: "AI-assisted communication",
    description: "Use AI-assisted reminders, summaries and communications to keep work moving.",
  },
] as const;

const packageItems = [
  "Operations and compliance discovery",
  "Custom daily checks and workflows",
  "Rota, task and procedure structure",
  "Reporting dashboard and CSV exports",
  "Team launch and manager handover",
  "30 days of implementation support",
] as const;

function LeisureCta({ label }: { label: string }) {
  return (
    <Link
      href={contactHref}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#1E90FF] px-7 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(30,144,255,0.2)] transition-all hover:bg-[#1878D8] hover:shadow-[0_8px_36px_rgba(30,144,255,0.28)]"
    >
      {label}
      <ArrowRight className="size-4" aria-hidden="true" />
    </Link>
  );
}

export default function LeisureSystemsPage() {
  return (
    <>
      <PageStructuredData
        path={pageSeo.leisureSystems.path}
        title={pageSeo.leisureSystems.title}
        description={pageSeo.leisureSystems.description}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Divisions", path: "/divisions" },
          {
            name: "OMNIREXIS Leisure Systems",
            path: "/divisions/leisure-systems",
          },
        ]}
      />
      <JsonLd data={leisureSystemsJsonLd()} />

      <section className="relative overflow-hidden bg-[#081826] pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="ambient-glow pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
        <div className="section-container relative">
          <FadeIn className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#55D6FF]/90">
              An OMNIREXIS division
            </p>
            <h1 className="mt-5 text-[2.5rem] font-bold leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              OMNIREXIS
              <span className="block text-gradient">Leisure Systems</span>
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/65 sm:text-xl">
              We install one practical system for daily checks, compliance,
              staff tasks, rotas, procedures and reporting—built around how the
              facility actually works.
            </p>
            <div className="mt-9">
              <LeisureCta label="Discuss your facility" />
            </div>
          </FadeIn>

          <FadeIn className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" delay={0.12}>
            {audiences.map((audience) => (
              <div
                key={audience.label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm text-white/70 backdrop-blur"
              >
                <audience.icon className="size-4 text-[#55D6FF]" aria-hidden="true" />
                {audience.label}
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <Section className="section-light" ariaLabelledby="capabilities-heading">
        <FadeIn>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="One operational system"
            title="The essentials your team uses every day"
            description="Configured around your facility, your procedures and your people—not a generic checklist dropped into the business."
          />
        </FadeIn>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, index) => (
            <FadeIn key={capability.title} delay={(index % 4) * 0.05}>
              <GlassCard className="h-full p-6 sm:p-7">
                <div className="flex size-10 items-center justify-center rounded-xl bg-[#1E90FF]/10 text-[#1E90FF]">
                  <capability.icon className="size-[18px]" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-[#081826]">
                  {capability.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4a5f73]">
                  {capability.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="bg-white" ariaLabelledby="package-heading">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <FadeIn>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1E90FF]">
              Founding package
            </p>
            <h2
              id="package-heading"
              className="mt-4 text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#081826] sm:text-4xl lg:text-[2.75rem]"
            >
              Leisure Operations-in-a-Box
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#4a5f73] sm:text-lg">
              A focused implementation that turns your current operating model
              into a practical, joined-up system your team can start using.
            </p>
            <div className="mt-8 flex items-end gap-3">
              <span className="text-5xl font-bold tracking-[-0.04em] text-[#081826]">£995</span>
              <span className="pb-1 text-sm text-[#4a5f73]">one-off implementation</span>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1E90FF]/[0.07] px-4 py-2 text-sm font-medium text-[#176fbb]">
              <Clock3 className="size-4" aria-hidden="true" />
              30 days of implementation support included
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-[#081826]/[0.07] bg-[#f6f8fb] p-8 shadow-[0_16px_50px_rgba(8,24,38,0.07)] sm:p-10">
              <h3 className="text-lg font-semibold text-[#081826]">What is included</h3>
              <ul className="mt-6 space-y-4">
                {packageItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#344b5f]">
                    <CheckCircle2 className="mt-0.5 size-[18px] shrink-0 text-[#1E90FF]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-10 rounded-2xl border border-[#1E90FF]/15 bg-[#eef6ff] p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
          <div>
            <div className="flex items-center gap-2 text-[#1E90FF]">
              <Sparkles className="size-5" aria-hidden="true" />
              <h3 className="font-semibold text-[#081826]">Support that keeps improving</h3>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#4a5f73]">
              Ongoing hosting, support and continuous improvement from £149 per month.
            </p>
          </div>
          <div className="mt-6 shrink-0 sm:mt-0">
            <LeisureCta label="Enquire about the package" />
          </div>
        </FadeIn>
      </Section>

      <section className="section-padding-sm bg-[#081826]" aria-labelledby="connected-heading">
        <div className="section-container">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#1E90FF]/15 text-[#55D6FF]">
              <CheckCircle2 className="size-6" aria-hidden="true" />
            </div>
            <h2 id="connected-heading" className="mt-6 text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
              Specialist delivery. One OMNIREXIS relationship.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/55">
              Leisure Systems uses the same OMNIREXIS contact details, enquiry
              system, CRM and booking process. There is no separate website,
              email address, telephone number or disconnected hand-off.
            </p>
            <div className="mt-8">
              <LeisureCta label="Start a Leisure Systems enquiry" />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
