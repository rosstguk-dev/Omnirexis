export type InsightLink = {
  text: string;
  href: string;
};

export type InsightParagraph = {
  segments: Array<string | InsightLink>;
};

export type InsightSection = {
  id: string;
  title: string;
  level: 2 | 3;
  paragraphs: InsightParagraph[];
  listItems?: InsightParagraph[];
};

export type InsightFaq = {
  question: string;
  answer: string;
};

export type InsightArticle = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedDate: string;
  readingTimeMinutes: number;
  author: "Omnirexis";
  sections: InsightSection[];
  faqs: InsightFaq[];
  relatedSlugs: string[];
};

export const insightsAuthor = "Omnirexis" as const;

export const insightArticles: InsightArticle[] = [
  {
    slug: "how-ai-can-save-uk-businesses-10-hours-every-week",
    title: "How AI Can Save UK Businesses 10+ Hours Every Week",
    seoTitle:
      "How AI Can Save UK Businesses 10+ Hours Every Week | Omnirexis Insights",
    metaDescription:
      "Discover how AI automation UK businesses use to reclaim admin time — from workflow automation and AI receptionists to practical business AI solutions that free your team for higher-value work.",
    excerpt:
      "Repetitive admin quietly consumes working weeks. Here is how UK businesses use AI automation to recover meaningful time without replacing people or rebuilding their tech stack.",
    publishedDate: "2026-06-10",
    readingTimeMinutes: 8,
    author: "Omnirexis",
    relatedSlugs: [
      "what-is-ai-automation-practical-guide",
      "real-roi-of-ai-automation-small-businesses",
    ],
    sections: [
      {
        id: "where-the-hours-go",
        title: "Where the hours actually go",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Most UK business owners do not need a complex time study to know where hours disappear. Enquiry triage, follow-up emails, CRM updates, appointment scheduling, quote chasing, and internal reporting repeat across teams — often handled manually because nothing is connected properly.",
            ],
          },
          {
            segments: [
              "AI automation does not remove the work. It removes the repetitive handoffs between systems and people. That distinction matters: ",
              {
                text: "workflow automation",
                href: "/solutions",
              },
              " targets the tasks that drain capacity but rarely require senior judgement.",
            ],
          },
        ],
      },
      {
        id: "high-impact-automations",
        title: "High-impact automations that recover time quickly",
        level: 2,
        paragraphs: [
          {
            segments: [
              "The fastest wins usually sit at the edges of your customer journey — where speed and consistency matter most. Three areas consistently deliver early time savings for ",
              {
                text: "AI solutions for small businesses",
                href: "/solutions",
              },
              " and mid-market operators alike.",
            ],
          },
        ],
        listItems: [
          {
            segments: [
              "Lead intake and routing: capture web form, email, and call enquiries, qualify them, and assign the right owner without manual copying between tools.",
            ],
          },
          {
            segments: [
              "Appointment and callback scheduling: connect calendars, send confirmations, and handle rescheduling without back-and-forth messages.",
            ],
          },
          {
            segments: [
              "Post-enquiry follow-up: trigger timely reminders and status updates so opportunities do not stall while your team is on site or in meetings.",
            ],
          },
        ],
      },
      {
        id: "ai-receptionist",
        title: "AI receptionist: answering when your team cannot",
        level: 3,
        paragraphs: [
          {
            segments: [
              "An ",
              {
                text: "AI receptionist",
                href: "/solutions",
              },
              " handles routine calls — opening hours, service areas, booking requests, and common FAQs — while escalating complex conversations to a human. For trades, clinics, and service businesses, that alone can recover hours previously lost to voicemail callbacks and missed opportunities.",
            ],
          },
        ],
      },
      {
        id: "workflow-not-replacement",
        title: "Workflow automation without replacing your team",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Effective ",
              {
                text: "AI automation UK",
                href: "/process",
              },
              " implementations connect tools you already use. Platforms such as n8n, Zapier, and Make move data between CRM, email, spreadsheets, and accounting systems so your people stop acting as the integration layer.",
            ],
          },
          {
            segments: [
              "A practical ",
              {
                text: "AI consultant UK",
                href: "/about",
              },
              " teams work with will map your current process first, identify bottlenecks with the highest time cost, and implement automations in priority order — not as a single big-bang project.",
            ],
          },
        ],
      },
      {
        id: "getting-started",
        title: "A sensible starting point",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Start with one workflow that frustrates your team every week. Document the steps, measure how long it takes, and automate only the predictable parts. Expand from there once the first automation is stable and trusted.",
            ],
          },
          {
            segments: [
              "If you want a structured view of where time is being lost across your operation, an ",
              {
                text: "AI Opportunity Audit",
                href: "/solutions",
              },
              " prioritises improvements by commercial impact before any implementation spend.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is 10+ hours per week realistic for a small business?",
        answer:
          "It can be, depending on how much repetitive admin your team handles today. Businesses with heavy enquiry volume, manual CRM updates, or frequent scheduling back-and-forth often recover meaningful weekly hours once core workflows are automated. Results vary by scope, systems, and data quality.",
      },
      {
        question: "Do we need to replace our existing software?",
        answer:
          "No. Practical AI automation integrates with the platforms you already run — CRM, email, calendars, and industry tools. The goal is to connect them, not migrate away from them.",
      },
      {
        question: "How long before we see time savings?",
        answer:
          "Focused automations such as enquiry routing or an AI receptionist often go live within two to four weeks. You typically notice time savings as soon as the first workflow runs reliably in production.",
      },
      {
        question: "Will automation work for our industry?",
        answer:
          "Most service-led UK businesses share similar admin patterns — intake, scheduling, follow-up, and reporting. Omnirexis implements sector-aware workflows across construction, trades, professional services, healthcare, and more.",
      },
    ],
  },
  {
    slug: "what-is-ai-automation-practical-guide",
    title: "What Is AI Automation? A Practical Guide for Business Owners",
    seoTitle:
      "What Is AI Automation? A Practical Guide for Business Owners | Omnirexis",
    metaDescription:
      "A clear guide to AI automation for UK business owners — what it is, how workflow automation works, where an AI consultant UK can help, and how to evaluate business AI solutions without hype.",
    excerpt:
      "AI automation is not one product. It is a set of practical approaches — voice AI, chat, and workflow connections — that remove repetitive work and improve response times.",
    publishedDate: "2026-06-17",
    readingTimeMinutes: 9,
    author: "Omnirexis",
    relatedSlugs: [
      "how-ai-can-save-uk-businesses-10-hours-every-week",
      "how-to-stop-missing-customer-enquiries-with-ai",
    ],
    sections: [
      {
        id: "definition",
        title: "What AI automation actually means",
        level: 2,
        paragraphs: [
          {
            segments: [
              "AI automation combines artificial intelligence with connected workflows to handle tasks that follow predictable rules — answering common questions, classifying enquiries, extracting data from messages, and triggering the next step in a process.",
            ],
          },
          {
            segments: [
              "For business owners, the useful framing is simple: less manual repetition, faster customer response, and fewer errors caused by copying information between systems. That is the core promise of ",
              {
                text: "business AI solutions",
                href: "/solutions",
              },
              " done well.",
            ],
          },
        ],
      },
      {
        id: "three-layers",
        title: "Three layers of AI automation",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Most implementations draw on one or more of these layers. You do not need all three on day one.",
            ],
          },
        ],
        listItems: [
          {
            segments: [
              "Conversational AI: voice and chat interfaces that handle routine customer interactions — including an AI receptionist for phone calls.",
            ],
          },
          {
            segments: [
              "Process automation: rules-based workflows that move data, send notifications, and update records across your existing software.",
            ],
          },
          {
            segments: [
              "Knowledge assistance: AI that surfaces answers from your policies, product information, and internal documentation for staff or customers.",
            ],
          },
        ],
      },
      {
        id: "workflow-automation",
        title: "Workflow automation in plain language",
        level: 3,
        paragraphs: [
          {
            segments: [
              {
                text: "Workflow automation",
                href: "/solutions",
              },
              " is the connective tissue. When a form is submitted, automation can create a CRM record, notify the right person, schedule a callback, and send a confirmation email — without anyone retyping details.",
            ],
          },
        ],
      },
      {
        id: "consultant-role",
        title: "What an AI consultant does — and does not do",
        level: 2,
        paragraphs: [
          {
            segments: [
              "A capable ",
              {
                text: "AI consultant UK",
                href: "/about",
              },
              " selects proven platforms, designs implementation around your operations, integrates with existing systems, and manages go-live so your team is not left configuring tools alone.",
            ],
          },
          {
            segments: [
              "Omnirexis does not build proprietary software or sell a single platform. We implement tailored ",
              {
                text: "AI automation UK",
                href: "/process",
              },
              " solutions using established tools — measured by time saved, costs reduced, and customer experience improved.",
            ],
          },
        ],
      },
      {
        id: "manchester-and-beyond",
        title: "Local expertise, UK-wide delivery",
        level: 3,
        paragraphs: [
          {
            segments: [
              "Whether you are looking for ",
              {
                text: "AI consultancy Manchester",
                href: "/contact",
              },
              " or support elsewhere in the UK, delivery follows the same disciplined process: discovery, opportunity audit, solution design, implementation, and ongoing optimisation.",
            ],
          },
        ],
      },
      {
        id: "evaluate-fit",
        title: "How to evaluate if AI automation fits your business",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Ask practical questions: Where do enquiries stall? Which tasks repeat daily? Which systems do not talk to each other? If the answers point to manual handoffs and slow response times, automation is likely worth exploring.",
            ],
          },
          {
            segments: [
              "Review the ",
              {
                text: "Omnirexis FAQ",
                href: "/faq",
              },
              " for honest answers on timelines, integration, security, and ROI — or book a strategy call to map opportunities specific to your business.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is AI automation the same as ChatGPT?",
        answer:
          "No. Consumer chat tools are one type of AI interface. Business AI automation typically combines conversational AI with workflow connections, CRM integration, and governed access to your business data — configured for reliable, repeatable outcomes.",
      },
      {
        question: "Do we need a large IT team?",
        answer:
          "No. A consultancy-led implementation handles platform selection, configuration, and integration. Your team contributes business context and receives operator-friendly training.",
      },
      {
        question: "What is the first step?",
        answer:
          "A discovery conversation or AI Opportunity Audit identifies where automation delivers the highest return. That prioritised view prevents spending on low-impact tools.",
      },
      {
        question: "Can AI automation work alongside our current processes?",
        answer:
          "Yes. The best implementations enhance how you already operate — automating repetitive steps while keeping human judgement where it matters.",
      },
    ],
  },
  {
    slug: "how-to-stop-missing-customer-enquiries-with-ai",
    title: "How to Stop Missing Customer Enquiries with AI",
    seoTitle:
      "How to Stop Missing Customer Enquiries with AI | Omnirexis Insights",
    metaDescription:
      "Learn how UK businesses reduce missed enquiries with AI receptionists, automated intake, and workflow automation — practical business AI solutions from an AI automation UK consultancy.",
    excerpt:
      "Missed calls and slow follow-ups cost revenue quietly. Here is how AI-assisted intake and routing helps UK businesses respond faster and convert more enquiries.",
    publishedDate: "2026-06-24",
    readingTimeMinutes: 7,
    author: "Omnirexis",
    relatedSlugs: [
      "what-is-ai-automation-practical-guide",
      "5-ai-automations-every-construction-company-should-implement",
    ],
    sections: [
      {
        id: "cost-of-missed-enquiries",
        title: "The real cost of missed enquiries",
        level: 2,
        paragraphs: [
          {
            segments: [
              "A missed call or unanswered web form rarely feels dramatic in the moment. Over a month, those gaps compound — leads contact a competitor, jobs go to faster responders, and your team spends evenings returning calls that already went cold.",
            ],
          },
          {
            segments: [
              "The issue is rarely effort. It is capacity. When your people are on site, in consultations, or handling existing customers, intake suffers unless ",
              {
                text: "AI automation UK",
                href: "/solutions",
              },
              " systems cover the gaps.",
            ],
          },
        ],
      },
      {
        id: "capture-every-channel",
        title: "Capture every channel in one intake flow",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Enquiries arrive by phone, website form, email, and social messages — often into separate inboxes. Without a unified intake process, ownership is unclear and response times slip.",
            ],
          },
        ],
        listItems: [
          {
            segments: [
              "Centralise new enquiries into a single queue with automatic categorisation and priority rules.",
            ],
          },
          {
            segments: [
              "Assign owners instantly based on service type, location, or availability.",
            ],
          },
          {
            segments: [
              "Trigger acknowledgement messages so customers know their enquiry was received.",
            ],
          },
        ],
      },
      {
        id: "ai-receptionist-calls",
        title: "Use an AI receptionist for calls you cannot answer",
        level: 3,
        paragraphs: [
          {
            segments: [
              "An ",
              {
                text: "AI receptionist",
                href: "/solutions",
              },
              " answers common questions, captures caller details, books appointments, and routes urgent calls — including evenings and weekends. Your team receives structured summaries instead of vague voicemails.",
            ],
          },
        ],
      },
      {
        id: "speed-to-follow-up",
        title: "Speed up follow-up with workflow automation",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Fast acknowledgement matters, but so does structured follow-up. ",
              {
                text: "Workflow automation",
                href: "/process",
              },
              " can schedule reminders, send quote follow-ups, and update CRM stages automatically — so opportunities progress even when your team is busy elsewhere.",
            ],
          },
          {
            segments: [
              "For ",
              {
                text: "AI solutions for small businesses",
                href: "/industries",
              },
              ", this is often the difference between a full diary and a leaky pipeline.",
            ],
          },
        ],
      },
      {
        id: "measure-and-improve",
        title: "Measure response performance and improve it",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Track enquiry volume, first-response time, and conversion to booked work or qualified opportunities. Once measured, you can tune routing rules, expand AI coverage, and fix bottlenecks with evidence rather than guesswork.",
            ],
          },
          {
            segments: [
              "An experienced ",
              {
                text: "AI consultant UK",
                href: "/about",
              },
              " will model expected improvements before implementation so expectations stay grounded.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will customers mind speaking to AI on the phone?",
        answer:
          "When configured properly, callers get faster answers to routine questions and smoother booking — without hold music or voicemail. Complex cases still reach a human. Clarity and usefulness matter more than the label on the technology.",
      },
      {
        question: "Can AI intake connect to our CRM?",
        answer:
          "Yes. Integrations with HubSpot, Salesforce, and other CRMs are standard in well-designed implementations. Enquiry data should land where your team already works.",
      },
      {
        question: "What if we only miss calls outside office hours?",
        answer:
          "Out-of-hours coverage is one of the fastest wins for an AI receptionist. You capture leads when competitors go to voicemail — without adding night-shift headcount.",
      },
      {
        question: "How do we get started?",
        answer:
          "Map your enquiry sources, measure current response times, and automate the highest-volume intake path first. A strategy call can identify that priority workflow in under thirty minutes.",
      },
    ],
  },
  {
    slug: "5-ai-automations-every-construction-company-should-implement",
    title: "5 AI Automations Every Construction Company Should Implement",
    seoTitle:
      "5 AI Automations Every Construction Company Should Implement | Omnirexis",
    metaDescription:
      "Five practical AI automations for UK construction firms — quote follow-up, subcontractor coordination, site reporting, and AI receptionist intake. Workflow automation from an AI consultancy Manchester and UK-wide.",
    excerpt:
      "Construction businesses lose hours to coordination admin. These five automations target the workflows that most often delay projects and slow commercial follow-up.",
    publishedDate: "2026-07-01",
    readingTimeMinutes: 8,
    author: "Omnirexis",
    relatedSlugs: [
      "how-to-stop-missing-customer-enquiries-with-ai",
      "real-roi-of-ai-automation-small-businesses",
    ],
    sections: [
      {
        id: "construction-admin-burden",
        title: "Why construction admin piles up",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Construction companies juggle enquiries, quotes, subcontractor availability, site updates, and client communication — often across phone, email, and messaging apps. ",
              {
                text: "Workflow automation",
                href: "/solutions",
              },
              " reduces the manual coordination that pulls project managers and estimators away from delivery.",
            ],
          },
          {
            segments: [
              "Omnirexis works with ",
              {
                text: "construction and trades businesses",
                href: "/industries",
              },
              " across the UK, implementing ",
              {
                text: "AI automation UK",
                href: "/process",
              },
              " around how sites and offices already operate.",
            ],
          },
        ],
      },
      {
        id: "automation-one",
        title: "1. Enquiry capture and qualification",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Route new project enquiries from web forms, email, and phone into a single pipeline. Auto-tag by job type, location, and urgency so estimators focus on viable opportunities first.",
            ],
          },
        ],
      },
      {
        id: "automation-two",
        title: "2. AI receptionist for inbound calls",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Site teams cannot always answer the office line. An ",
              {
                text: "AI receptionist",
                href: "/solutions",
              },
              " captures caller details, answers standard questions, and books surveys or callbacks — preventing lost leads during busy periods.",
            ],
          },
        ],
      },
      {
        id: "automation-three",
        title: "3. Quote follow-up sequences",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Quotes often go cold because follow-up is manual. Automated reminders and status checks keep proposals visible without estimators chasing spreadsheets.",
            ],
          },
        ],
      },
      {
        id: "automation-four",
        title: "4. Subcontractor coordination updates",
        level: 3,
        paragraphs: [
          {
            segments: [
              "Trigger notifications when schedules shift, documents are ready, or site access changes. Subcontractors receive consistent updates; your team stops repeating the same messages across channels.",
            ],
          },
        ],
      },
      {
        id: "automation-five",
        title: "5. Site reporting and internal summaries",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Structured daily or weekly reporting — pulled from templates and field inputs — gives leadership visibility without hours of manual compilation.",
            ],
          },
        ],
      },
      {
        id: "implementation-order",
        title: "Which automation to implement first",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Start where leakage is costing you jobs: missed calls and slow quote follow-up usually outperform purely internal reports for early ROI. An ",
              {
                text: "AI Opportunity Audit",
                href: "/solutions",
              },
              " ranks options by impact for your specific operation.",
            ],
          },
          {
            segments: [
              "Based in the North West? Omnirexis provides ",
              {
                text: "AI consultancy Manchester",
                href: "/contact",
              },
              " and UK-wide remote delivery with the same implementation discipline.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do these automations require new software?",
        answer:
          "Not necessarily. We integrate with calendars, CRM, email, and project tools you may already use — adding automation and AI layers rather than replacing core systems.",
      },
      {
        question: "Are these suitable for small contractors?",
        answer:
          "Yes. Smaller firms often benefit most from enquiry capture and follow-up automation because every missed lead represents a larger share of revenue.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Focused workflows typically go live within two to four weeks. Broader coordination automations may take longer depending on integrations and testing requirements.",
      },
      {
        question: "Can we add automations gradually?",
        answer:
          "That is the recommended approach. Implement one high-impact workflow, stabilise it, then expand — avoiding disruption across active projects.",
      },
    ],
  },
  {
    slug: "real-roi-of-ai-automation-small-businesses",
    title: "The Real ROI of AI Automation for Small Businesses",
    seoTitle:
      "The Real ROI of AI Automation for Small Businesses | Omnirexis Insights",
    metaDescription:
      "Understand the real ROI of AI automation for UK small businesses — time saved, cost reduction, and revenue impact through practical business AI solutions and workflow automation.",
    excerpt:
      "ROI from AI automation is measurable when you focus on time, cost, and revenue drivers — not hype. Here is how small UK businesses should evaluate returns.",
    publishedDate: "2026-07-05",
    readingTimeMinutes: 8,
    author: "Omnirexis",
    relatedSlugs: [
      "how-ai-can-save-uk-businesses-10-hours-every-week",
      "what-is-ai-automation-practical-guide",
    ],
    sections: [
      {
        id: "roi-beyond-hype",
        title: "ROI beyond the hype cycle",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Small business leaders hear bold AI promises daily. Useful ROI analysis is quieter: hours reclaimed, errors reduced, leads answered faster, and follow-up that no longer depends on someone remembering a spreadsheet.",
            ],
          },
          {
            segments: [
              "The right ",
              {
                text: "business AI solutions",
                href: "/solutions",
              },
              " tie spend to outcomes you can track — not vanity metrics or experimental tools with no operational home.",
            ],
          },
        ],
      },
      {
        id: "three-drivers",
        title: "Three ROI drivers that matter",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Most ",
              {
                text: "AI solutions for small businesses",
                href: "/industries",
              },
              " return value through one or more of these channels.",
            ],
          },
        ],
        listItems: [
          {
            segments: [
              "Time: automating repetitive admin frees capacity for billable work, sales, and customer care.",
            ],
          },
          {
            segments: [
              "Cost: fewer manual handoffs and faster processes reduce operational overhead without cutting service quality.",
            ],
          },
          {
            segments: [
              "Revenue: faster enquiry response and consistent follow-up improve conversion from the demand you already generate.",
            ],
          },
        ],
      },
      {
        id: "model-before-commit",
        title: "Model returns before you commit",
        level: 3,
        paragraphs: [
          {
            segments: [
              "An ",
              {
                text: "AI Opportunity Audit",
                href: "/solutions",
              },
              " quantifies where time and margin leak today and projects returns by workflow. That model sets expectations before platform fees and implementation effort are committed.",
            ],
          },
        ],
      },
      {
        id: "ongoing-optimisation",
        title: "ROI compounds with optimisation",
        level: 2,
        paragraphs: [
          {
            segments: [
              "First-release automation delivers an initial return. Ongoing tuning — better routing rules, expanded coverage, refined AI responses — compounds results as your business evolves.",
            ],
          },
          {
            segments: [
              "This is why Omnirexis includes post-launch optimisation: ",
              {
                text: "AI automation UK",
                href: "/process",
              },
              " should improve month on month, not sit static after go-live.",
            ],
          },
        ],
      },
      {
        id: "when-roi-is-weak",
        title: "When ROI is likely to disappoint",
        level: 2,
        paragraphs: [
          {
            segments: [
              "Returns fade when automation targets low-volume tasks, integrations are skipped, or teams are not trained to trust the workflow. A capable ",
              {
                text: "AI consultant UK",
                href: "/about",
              },
              " prevents those failure modes by prioritising impact and embedding adoption.",
            ],
          },
          {
            segments: [
              "Read more in our ",
              {
                text: "FAQ",
                href: "/faq",
              },
              " on timelines, security, and integration — or ",
              {
                text: "contact Omnirexis",
                href: "/contact",
              },
              " to discuss ROI modelling for your business.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How quickly can a small business see ROI?",
        answer:
          "Focused implementations often show measurable impact within weeks of go-live — particularly for enquiry handling and follow-up automation. Broader programmes take longer but should still be modelled upfront.",
      },
      {
        question: "Is ROI only about cutting staff costs?",
        answer:
          "No. The primary goal is capacity — redeploying time toward growth, service quality, and sales. Many clients retain headcount while handling more volume with less friction.",
      },
      {
        question: "What costs should we include in an ROI calculation?",
        answer:
          "Include platform subscriptions, implementation effort, and ongoing optimisation. Compare against time saved, error reduction, and expected revenue uplift from faster response and follow-up.",
      },
      {
        question: "Do you guarantee specific ROI figures?",
        answer:
          "No. Results depend on your starting point, systems, and scope. We model projected returns during discovery and audit work so you can make an informed decision with clear assumptions.",
      },
    ],
  },
];

export function getAllInsightArticles(): InsightArticle[] {
  return insightArticles;
}

export function getInsightArticleBySlug(
  slug: string,
): InsightArticle | undefined {
  return insightArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: InsightArticle): InsightArticle[] {
  return article.relatedSlugs
    .map((slug) => getInsightArticleBySlug(slug))
    .filter((item): item is InsightArticle => item !== undefined);
}

export function formatInsightDate(isoDate: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(isoDate));
}