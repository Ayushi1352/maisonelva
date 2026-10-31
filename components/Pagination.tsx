"use client";

import { useState } from "react";
import { site } from "@/data";
import { ArrowLeft, ArrowRight } from "@/components/Icons";
import { fill } from "@/components/text";

/** Splits a list into pages. `page` is 1-based and clamped to the valid range. */
export function usePagination<T>(items: T[], perPage: number) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(page, totalPages);
  const start = (current - 1) * perPage;
  return { page: current, setPage, totalPages, start, pageItems: items.slice(start, start + perPage) };
}

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  /** element to scroll back to when the page changes */
  scrollTargetId?: string;
};

const box =
  "flex size-11 items-center justify-center border-2 font-heading text-[1.1rem] transition-colors lg:size-[4rem] lg:text-[1.5rem]";

/** Page numbers under a listing; shows only when the list has more than one page (perPage in templates.json) */
export default function Pagination({ page, totalPages, onChange, scrollTargetId }: PaginationProps) {
  if (totalPages <= 1) return null;
  const labels = site.pageBanner.pagination;

  function go(next: number) {
    if (next < 1 || next > totalPages || next === page) return;
    onChange(next);
    if (scrollTargetId) document.getElementById(scrollTargetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav aria-label={labels.label} className="mt-12 flex items-center justify-center gap-2.5 lg:mt-[5rem] lg:gap-[0.9rem]">
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label={labels.previous}
        className={`${box} border-[var(--color-accent-light)] text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] disabled:pointer-events-none disabled:opacity-40`}
      >
        <ArrowLeft className="w-6 lg:w-[2rem]" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => go(n)}
          aria-label={fill(labels.page, { page: n })}
          aria-current={n === page ? "page" : undefined}
          className={`${box} ${n === page ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-white)]" : "border-[var(--color-accent-light)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)]"}`}
        >
          {n}
        </button>
      ))}
      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label={labels.next}
        className={`${box} border-[var(--color-accent-light)] text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] disabled:pointer-events-none disabled:opacity-40`}
      >
        <ArrowRight className="w-6 lg:w-[2rem]" />
      </button>
    </nav>
  );
}
