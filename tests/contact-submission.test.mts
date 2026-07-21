import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  contactFieldLimits,
  handleContactSubmission,
} from "../lib/contact-submission.ts";

const webhookUrl = "https://example.test/contact";
const validPayload = {
  name: "Alexandra Chen",
  email: "alexandra@example.com",
  phone: "+44 161 250 0045",
  company: "Northline",
  website: "northline.example",
  message: "Please contact me about workflow automation.",
};

function requestFor(body: unknown) {
  return new Request("https://website.test/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("handleContactSubmission", () => {
  it("fails safely without a configured webhook and never calls fetch", async () => {
    let fetchCalled = false;
    const mockFetch = async () => {
      fetchCalled = true;
      return new Response(null, { status: 200 });
    };

    const response = await handleContactSubmission(
      requestFor(validPayload),
      undefined,
      mockFetch,
    );

    assert.equal(response.status, 503);
    assert.equal(fetchCalled, false);
    assert.deepEqual(await response.json(), {
      error: "Unable to submit enquiry. Please try again later.",
    });
  });

  it("forwards a validated payload through the injected fetch only", async () => {
    let capturedUrl = "";
    let capturedInit: RequestInit | undefined;
    const mockFetch = async (input: string | URL | Request, init?: RequestInit) => {
      capturedUrl = String(input);
      capturedInit = init;
      return new Response(null, { status: 200 });
    };

    const response = await handleContactSubmission(
      requestFor(validPayload),
      webhookUrl,
      mockFetch,
    );

    assert.equal(response.status, 200);
    assert.equal(capturedUrl, webhookUrl);
    assert.equal(capturedInit?.method, "POST");
    assert.deepEqual(JSON.parse(String(capturedInit?.body)), {
      ...validPayload,
      website: "https://northline.example",
    });
  });

  it("rejects invalid or oversized fields without calling fetch", async () => {
    const invalidPayloads = [
      { ...validPayload, name: "" },
      { ...validPayload, name: "n".repeat(contactFieldLimits.name + 1) },
      { ...validPayload, email: "not-an-email" },
      { ...validPayload, email: `a@${"b".repeat(contactFieldLimits.email)}.com` },
      { ...validPayload, phone: "please call me" },
      { ...validPayload, phone: "1".repeat(contactFieldLimits.phone + 1) },
      { ...validPayload, company: "" },
      { ...validPayload, company: "c".repeat(contactFieldLimits.company + 1) },
      { ...validPayload, website: "not-a-hostname" },
      { ...validPayload, website: `https://${"w".repeat(contactFieldLimits.website)}.com` },
      { ...validPayload, message: "" },
      { ...validPayload, message: "m".repeat(contactFieldLimits.message + 1) },
    ];

    for (const payload of invalidPayloads) {
      let fetchCalled = false;
      const response = await handleContactSubmission(
        requestFor(payload),
        webhookUrl,
        async () => {
          fetchCalled = true;
          return new Response(null, { status: 200 });
        },
      );

      assert.equal(response.status, 400);
      assert.equal(fetchCalled, false);
    }
  });

  it("returns a generic error when the webhook fails", async () => {
    const response = await handleContactSubmission(
      requestFor(validPayload),
      webhookUrl,
      async () => {
        throw new Error("sensitive network detail");
      },
    );

    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), {
      error: "Unable to submit enquiry. Please try again later.",
    });
  });
});
