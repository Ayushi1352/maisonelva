"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, type MaisonElvaPageBannerData, type SectionProps } from "@/data";

type Crumb = { label: string; href?: string };
type BannerPage = { title: string; paths: Crumb[] };

/** Page title + breadcrumb for the current route, both from site.json (pageBanner.pages). */
export default function PageBanner({ data = site.pageBanner }: SectionProps<MaisonElvaPageBannerData>) {
  const pathname = usePathname();
  const page = (data.pages as Record<string, BannerPage>)[pathname];
  if (!page) return null;
  const crumbs: Crumb[] = [{ label: data.homeLabel, href: data.homeHref }, ...page.paths];
  const { title } = page;

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
                    {data.separator}
                  </span>
                )}
                {!last && crumb.href ? (
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
