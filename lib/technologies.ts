export type Technology = {
  name: string;
  href: string;
  logoSlug?: string;
};

export const technologyDisclaimer =
  "Technology selection depends on each client's specific requirements. We implement the best solution for every business rather than promoting a single platform.";

export const technologies: Technology[] = [
  { name: "OpenAI", href: "https://openai.com", logoSlug: "openai" },
  { name: "Anthropic", href: "https://www.anthropic.com", logoSlug: "anthropic" },
  { name: "Google AI", href: "https://ai.google", logoSlug: "google" },
  { name: "Microsoft", href: "https://www.microsoft.com/en-us/ai", logoSlug: "microsoft" },
  { name: "n8n", href: "https://n8n.io", logoSlug: "n8n" },
  { name: "Zapier", href: "https://zapier.com", logoSlug: "zapier" },
  { name: "Make", href: "https://www.make.com", logoSlug: "make" },
  { name: "HubSpot", href: "https://www.hubspot.com", logoSlug: "hubspot" },
  { name: "Salesforce", href: "https://www.salesforce.com", logoSlug: "salesforce" },
  { name: "Google Workspace", href: "https://workspace.google.com", logoSlug: "google" },
  { name: "Microsoft 365", href: "https://www.microsoft.com/microsoft-365", logoSlug: "microsoft" },
  { name: "Twilio", href: "https://www.twilio.com", logoSlug: "twilio" },
  { name: "Retell AI", href: "https://www.retellai.com" },
  { name: "ElevenLabs", href: "https://elevenlabs.io", logoSlug: "elevenlabs" },
];