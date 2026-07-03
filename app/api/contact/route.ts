import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  const webhookUrl = process.env.N8N_CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("N8N_CONTACT_WEBHOOK_URL is not configured");
    return NextResponse.json(
      { error: "Contact form is not configured" },
      { status: 500 },
    );
  }

  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: body.name?.trim() ?? "",
    email: body.email?.trim() ?? "",
    phone: body.phone?.trim() ?? "",
    company: body.company?.trim() ?? "",
    message: body.message?.trim() ?? "",
  };

  if (
    !isNonEmptyString(payload.name) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.company) ||
    !isNonEmptyString(payload.message)
  ) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(
        "n8n webhook failed:",
        response.status,
        await response.text(),
      );
      return NextResponse.json(
        { error: "Webhook request failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("n8n webhook error:", error);
    return NextResponse.json(
      { error: "Failed to submit enquiry" },
      { status: 502 },
    );
  }
}