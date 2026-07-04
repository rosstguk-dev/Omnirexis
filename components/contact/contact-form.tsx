"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  isValidOptionalWebsiteUrl,
  normalizeWebsiteUrl,
} from "@/lib/contact-validation";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const successMessage =
  "Thanks — your enquiry has been received. I'll be in touch shortly.";
const errorMessage =
  "Something went wrong. Please email ross@omnirexis.co.uk.";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [websiteError, setWebsiteError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWebsiteError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const websiteRaw = String(formData.get("website") ?? "");

    if (!isValidOptionalWebsiteUrl(websiteRaw)) {
      setWebsiteError("Please enter a valid website URL.");
      return;
    }

    setStatus("submitting");

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      website: normalizeWebsiteUrl(websiteRaw),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      {status === "success" && (
        <p
          role="status"
          className="rounded-xl border border-[#55D6FF]/25 bg-[#55D6FF]/10 px-4 py-3 text-sm text-[#55D6FF]"
        >
          {successMessage}
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200"
        >
          {errorMessage}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm text-white/70">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Alexandra Chen"
            autoComplete="name"
            required
            disabled={status === "submitting"}
            className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
          />
        </div>
        <div className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm text-white/70">
              Company
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="Your company name"
              autoComplete="organization"
              required
              disabled={status === "submitting"}
              className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website" className="text-sm text-white/70">
              Business Website
            </Label>
            <Input
              id="website"
              name="website"
              type="url"
              inputMode="url"
              placeholder="https://yourcompany.co.uk"
              autoComplete="url"
              disabled={status === "submitting"}
              aria-invalid={websiteError ? true : undefined}
              aria-describedby={websiteError ? "website-error" : undefined}
              className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
            />
            {websiteError && (
              <p id="website-error" className="text-xs text-red-300">
                {websiteError}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-white/70">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="alexandra@northline.com"
            autoComplete="email"
            required
            disabled={status === "submitting"}
            className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm text-white/70">
            Phone
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="07566 729429"
            autoComplete="tel"
            disabled={status === "submitting"}
            className="h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm text-white/70">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us which repetitive processes are costing your team the most time — lead follow-up, customer support, internal admin, or something else."
          rows={5}
          required
          disabled={status === "submitting"}
          className="rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-white/25"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={status === "submitting"}
        className={cn(
          "h-12 w-full rounded-xl bg-[#1E90FF] text-sm font-semibold text-white hover:bg-[#1878D8] sm:w-auto",
          status === "submitting" && "opacity-70",
        )}
      >
        {status === "submitting" ? "Sending…" : siteConfig.ctaLabel}
      </Button>
      <p className="text-xs leading-relaxed text-white/30">
        By submitting this form, you agree to be contacted regarding your
        enquiry. We never share your information with third parties. Read our{" "}
        <a
          href="/privacy"
          className="text-[#55D6FF]/80 underline-offset-2 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}