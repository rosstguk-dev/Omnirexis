export const contactHelpOptions = [
  { value: "general", label: "General enquiry" },
  {
    value: "ai-consultancy-automation",
    label: "AI consultancy and automation",
  },
  {
    value: "leisure-systems",
    label: "OMNIREXIS Leisure Systems",
  },
] as const;

export type ContactDivision = (typeof contactHelpOptions)[number]["value"];

export const defaultContactDivision: ContactDivision = "general";

export function isContactDivision(value: unknown): value is ContactDivision {
  return contactHelpOptions.some((option) => option.value === value);
}

export function contactDivisionFromQuery(
  value: string | string[] | undefined,
): ContactDivision {
  const candidate = Array.isArray(value) ? value[0] : value;
  return isContactDivision(candidate) ? candidate : defaultContactDivision;
}
