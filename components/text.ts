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
