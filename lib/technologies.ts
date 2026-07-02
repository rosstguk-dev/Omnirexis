export type Technology = {
  name: string;
  href: string;
  logoId: string;
};

export const technologyDisclaimer =
  "Technology selection depends on each client's specific requirements. We implement the best solution for every business rather than promoting a single platform.";

export const technologies: Technology[] = [
  { name: "OpenAI", href: "https://openai.com", logoId: "openai" },
  { name: "Anthropic", href: "https://www.anthropic.com", logoId: "anthropic" },
  { name: "Google AI", href: "https://ai.google", logoId: "google" },
  { name: "Microsoft", href: "https://www.microsoft.com/en-us/ai", logoId: "microsoft" },
  { name: "n8n", href: "https://n8n.io", logoId: "n8n" },
  { name: "Zapier", href: "https://zapier.com", logoId: "zapier" },
  { name: "Make", href: "https://www.make.com", logoId: "make" },
  { name: "HubSpot", href: "https://www.hubspot.com", logoId: "hubspot" },
  { name: "Salesforce", href: "https://www.salesforce.com", logoId: "salesforce" },
  { name: "Google Workspace", href: "https://workspace.google.com", logoId: "google" },
  { name: "Microsoft 365", href: "https://www.microsoft.com/microsoft-365", logoId: "microsoft" },
  { name: "Twilio", href: "https://www.twilio.com", logoId: "twilio" },
  { name: "Retell AI", href: "https://www.retellai.com", logoId: "retell-ai" },
  { name: "ElevenLabs", href: "https://elevenlabs.io", logoId: "elevenlabs" },
];