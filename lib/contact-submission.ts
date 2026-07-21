export const contactFieldLimits = {
  name: 100,
  email: 254,
  phone: 30,
  company: 150,
  website: 2048,
  message: 5000,
} as const;

const MAX_REQUEST_BYTES = 16_384;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+().\-\s]+$/;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
};

type FetchLike = (
  input: string | URL | Request,
  init?: RequestInit,
) => Promise<Response>;

function genericError(status: number) {
  return Response.json(
    { error: "Unable to submit enquiry. Please try again later." },
    { status },
  );
}

function normalizeWebsiteUrl(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

function isValidOptionalWebsiteUrl(value: string) {
  if (!value) return true;

  try {
    const url = new URL(normalizeWebsiteUrl(value));
    const hostname = url.hostname;

    return (
      (url.protocol === "http:" || url.protocol === "https:") &&
      hostname.includes(".") &&
      !hostname.startsWith(".") &&
      !hostname.endsWith(".")
    );
  } catch {
    return false;
  }
}

function readStringField(
  body: Record<string, unknown>,
  field: keyof ContactPayload,
) {
  const value = body[field];
  return typeof value === "string" ? value.trim() : null;
}

function validatePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;

  const record = body as Record<string, unknown>;
  const name = readStringField(record, "name");
  const email = readStringField(record, "email");
  const phone = readStringField(record, "phone");
  const company = readStringField(record, "company");
  const website = readStringField(record, "website");
  const message = readStringField(record, "message");

  if (
    name === null ||
    email === null ||
    phone === null ||
    company === null ||
    website === null ||
    message === null ||
    !name ||
    name.length > contactFieldLimits.name ||
    !email ||
    email.length > contactFieldLimits.email ||
    !emailPattern.test(email) ||
    phone.length > contactFieldLimits.phone ||
    (phone.length > 0 && !phonePattern.test(phone)) ||
    !company ||
    company.length > contactFieldLimits.company ||
    website.length > contactFieldLimits.website ||
    !isValidOptionalWebsiteUrl(website) ||
    !message ||
    message.length > contactFieldLimits.message
  ) {
    return null;
  }

  return {
    name,
    email,
    phone,
    company,
    website: website ? normalizeWebsiteUrl(website) : "",
    message,
  };
}

function validWebhookUrl(value: string | undefined) {
  const trimmed = value?.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    return url.protocol === "https:" ? url.toString() : null;
  } catch {
    return null;
  }
}

export async function handleContactSubmission(
  request: Request,
  webhookValue: string | undefined,
  fetchImpl: FetchLike = fetch,
) {
  const webhookUrl = validWebhookUrl(webhookValue);
  if (!webhookUrl) return genericError(503);

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_REQUEST_BYTES) return genericError(400);

  let body: unknown;

  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return genericError(400);
    }
    body = JSON.parse(rawBody);
  } catch {
    return genericError(400);
  }

  const payload = validatePayload(body);
  if (!payload) return genericError(400);

  try {
    const response = await fetchImpl(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) return genericError(502);
    return Response.json({ success: true });
  } catch {
    return genericError(502);
  }
}
