import { handleContactSubmission } from "@/lib/contact-submission";

export async function POST(request: Request) {
  return handleContactSubmission(
    request,
    process.env.N8N_CONTACT_WEBHOOK_URL,
  );
}
