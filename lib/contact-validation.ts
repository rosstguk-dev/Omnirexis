export function normalizeWebsiteUrl(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function isValidOptionalWebsiteUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return true;

  try {
    const url = new URL(normalizeWebsiteUrl(trimmed));
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