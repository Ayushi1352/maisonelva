"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, type MaisonElvaPageBannerData, type SectionProps } from "@/data";

type Crumb = { label: string; href: string };

const LOWERCASE_WORDS = new Set(["a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to", "with"]);

/** "about-us" → "About Us", "how-to-choose-the-perfect-jewellery" → "How to Choose the Perfect Jewellery" */
function labelFromSegment(segment: string) {
  return decodeURIComponent(segment)
    .split("-")
    .filter(Boolean)
    .map((word, index) =>
      index > 0 && LOWERCASE_WORDS.has(word.toLowerCase()) ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join(" ");
}

/**
 * Builds Home / Section / Item straight from the URL, one crumb per segment, so the breadcrumb always matches
 * the route. A path listed in templates.json (pageBanner.titles) uses that label; a detail page whose listed title
 * repeats its parent's ("Our Collections" under /collections) falls back to the segment name.
 */
function crumbsFromPath(pathname: string, home: Crumb, titles: Record<string, string>): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = [home];
  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const listed = titles[href];
    const label = listed && listed !== crumbs[crumbs.length - 1].label ? listed : labelFromSegment(segment);
    crumbs.push({ label, href });
  });
  return crumbs;
}

/**
 * Page title + breadcrumb, both taken from the current route. The title is the route's entry in templates.json
 * (pageBanner.titles) when there is one, otherwise the last crumb.
 */
export default function PageBanner({ data = site.pageBanner }: SectionProps<MaisonElvaPageBannerData>) {
  const pathname = usePathname();
  const home = { label: data.homeLabel, href: data.homeHref };
  const titles = data.titles as Record<string, string>;
  const crumbs = crumbsFromPath(pathname, home, titles);
  const title = titles[pathname] ?? crumbs[crumbs.length - 1].label;

  return (
    <section className="bg-[var(--color-bg-main)] px-4 pt-12 text-center md:pt-16 lg:pt-[8.6rem]">
      <h1 className="mx-auto max-w-[80rem] text-balance font-decorative text-[2.6rem] leading-[1.1] text-[var(--color-text)] md:text-[3.5rem] lg:text-[4.38rem]">{title}</h1>
      <nav aria-label={data.breadcrumbLabel} className="mt-5 lg:mt-[2.25rem]">
        {/* always one line: smaller on phones, and a very long last crumb is shortened with … */}
        <ol className="flex items-center justify-center whitespace-nowrap font-decorative text-[0.875rem] leading-none sm:text-[1rem] md:text-[1.15rem] lg:text-[1.39rem]">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <li key={`${crumb.label}-${index}`} className={`flex items-center ${last ? "min-w-0" : "shrink-0"}`}>
                {index > 0 && (
                  <span className="mx-2.5 text-[var(--color-breadcrumb-separator)] lg:mx-[1rem]" aria-hidden="true">
                    /
                  </span>
                )}
                {!last ? (
                  <Link href={crumb.href} className="text-[var(--color-text)] transition-colors hover:text-[var(--color-secondary)] hover:underline hover:underline-offset-4">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="-my-[0.15em] truncate py-[0.15em] text-[var(--color-text-muted)]" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </section>
  );
}
