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

/** Builds Home / Section / Item straight from the URL, so the banner always matches the route */
function crumbsFromPath(pathname: string, home: Crumb): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  return [
    home,
    ...segments.map((segment, index) => ({
      label: labelFromSegment(segment),
      href: `/${segments.slice(0, index + 1).join("/")}`,
    })),
  ];
}

/**
 * Page title + breadcrumb, both taken from the current route. A route listed in site.json
 * (pageBanner.titles) shows that title instead, as a plain Home / Title breadcrumb.
 */
export default function PageBanner({ data = site.pageBanner }: SectionProps<MaisonElvaPageBannerData>) {
  const pathname = usePathname();
  const home = { label: data.homeLabel, href: data.homeHref };
  const fixedTitle = (data.titles as Record<string, string>)[pathname];
  const crumbs = fixedTitle ? [home, { label: fixedTitle, href: pathname }] : crumbsFromPath(pathname, home);
  const title = crumbs[crumbs.length - 1].label;

  return (
    <section className="bg-page px-4 pt-12 text-center md:pt-16 xl:pt-[8.6rem]">
      <h1 className="mx-auto max-w-[80rem] text-balance font-marcellus text-[2.6rem] leading-[1.1] text-ink md:text-[3.5rem] xl:text-[4.38rem]">{title}</h1>
      <nav aria-label={data.breadcrumbLabel} className="mt-5 xl:mt-[2.25rem]">
        {/* always one line: smaller on phones, and a very long last crumb is shortened with … */}
        <ol className="flex items-center justify-center whitespace-nowrap font-marcellus text-[0.875rem] leading-none sm:text-[1rem] md:text-[1.15rem] xl:text-[1.39rem]">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <li key={`${crumb.label}-${index}`} className={`flex items-center ${last ? "min-w-0" : "shrink-0"}`}>
                {index > 0 && (
                  <span className="mx-2.5 text-[#b9b9b9] xl:mx-[1rem]" aria-hidden="true">
                    /
                  </span>
                )}
                {!last ? (
                  <Link href={crumb.href} className="text-ink transition-colors hover:text-ruby hover:underline hover:underline-offset-4">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="-my-[0.15em] truncate py-[0.15em] text-muted" aria-current="page">
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
