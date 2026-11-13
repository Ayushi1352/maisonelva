import type { CompanyData, ContactLinesSource } from "@/types/templates.types";

/** Fills "{key}" placeholders from templates.json labels, e.g. fill("Rated {value} out of 5", { value: 4.5 }) */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}

/**
 * Splits a title around its highlighted part, so templates.json stores the title once:
 * splitAccent("Simple Tips to Keep Your Diamond Jewellery Shining", "Diamond Jewellery")
 * → { before: "Simple Tips to Keep Your", accent: "Diamond Jewellery", after: "Shining" }
 */
export function splitAccent(title: string, accent: string) {
  const at = accent ? title.indexOf(accent) : -1;
  if (at < 0) return { before: title, accent: "", after: "" };
  return { before: title.slice(0, at).trim(), accent, after: title.slice(at + accent.length).trim() };
}

/** A contact line either carries its own `lines` or points at a company field ("phone", "email", "address") with `source`. */
export function contactLines(item: ContactLinesSource, company?: CompanyData): string[] {
  if (!item.source) return item.lines ?? [];
  const value = company?.[item.source as "phone" | "email" | "address"];
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

/** Map links for the company address ("{query}" in the URL templates). */
export function mapUrl(template: string, address: string[]) {
  return fill(template, { query: encodeURIComponent(address.join(" ")) });
}

/** Link for a company contact field: call, mail or open the address on the map. */
export function contactHref(source: string | undefined, company: CompanyData) {
  if (source === "phone") return `tel:${company.phone.replace(/[^\d+]/g, "")}`;
  if (source === "email") return `mailto:${company.email}`;
  if (source === "address") return mapUrl(company.mapOpenUrl, company.address);
  return undefined;
}
