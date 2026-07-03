import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const LOG_PREFIX = "[contact]";
const DEFAULT_WEBHOOK_URL =
  "https://omnirexis.app.n8n.cloud/webhook/omnirexis-enquiry";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function webhookHost(webhookUrl: string) {
  try {
    return new URL(webhookUrl).host;
  } catch {
    return "invalid-url";
  }
}

export async function POST(request: Request) {
  const webhookUrl =
    process.env.N8N_CONTACT_WEBHOOK_URL?.trim() || DEFAULT_WEBHOOK_URL;
  const webhookSource = process.env.N8N_CONTACT_WEBHOOK_URL?.trim()
    ? "N8N_CONTACT_WEBHOOK_URL"
    : "default production webhook";

  console.info(`${LOG_PREFIX} Using webhook (${webhookSource})`, {
    host: webhookHost(webhookUrl),
    url: webhookUrl,
  });

  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch (error) {
    console.error(`${LOG_PREFIX} Failed to parse JSON request body:`, error);
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: body.name?.trim() ?? "",
    email: body.email?.trim() ?? "",
    phone: body.phone?.trim() ?? "",
    company: body.company?.trim() ?? "",
    message: body.message?.trim() ?? "",
  };

  console.info(`${LOG_PREFIX} Parsed payload fields:`, {
    name: Boolean(payload.name),
    email: Boolean(payload.email),
    phone: Boolean(payload.phone),
    company: Boolean(payload.company),
    message: Boolean(payload.message),
  });

  if (
    !isNonEmptyString(payload.name) ||
    !isNonEmptyString(payload.email) ||
    !isNonEmptyString(payload.company) ||
    !isNonEmptyString(payload.message)
  ) {
    console.error(`${LOG_PREFIX} Validation failed — missing required fields`, {
      name: payload.name,
      email: payload.email,
      company: payload.company,
      message: payload.message,
    });
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  console.info(`${LOG_PREFIX} Sending POST to n8n webhook`, {
    host: webhookHost(webhookUrl),
    payloadKeys: Object.keys(payload),
  });

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseBody = await response.text();

    console.info(`${LOG_PREFIX} n8n response`, {
      status: response.status,
      statusText: response.statusText,
      body: responseBody || "(empty)",
    });

    if (!response.ok) {
      console.error(`${LOG_PREFIX} n8n webhook returned an error`, {
        status: response.status,
        statusText: response.statusText,
        body: responseBody || "(empty)",
      });
      return NextResponse.json(
        {
          error: "Webhook request failed",
          detail: `n8n responded with HTTP ${response.status}`,
        },
        { status: 502 },
      );
    }

    console.info(`${LOG_PREFIX} Enquiry forwarded to n8n successfully`);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`${LOG_PREFIX} Failed to reach n8n webhook:`, error);
    return NextResponse.json(
      {
        error: "Failed to submit enquiry",
        detail: error instanceof Error ? error.message : "Unknown network error",
      },
      { status: 502 },
    );
  }
}