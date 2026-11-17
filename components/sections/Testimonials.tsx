"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { TestimonialItem, TestimonialsProps } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { Pagination, usePagination } from "@/components/ui/Pagination";
import { lines } from "@/components/ui/text";

// A listing card needs a city and a rating; an id that is missing or incomplete in templates.json is skipped.
const isListingItem = (item?: TestimonialItem): item is TestimonialItem & { city: string; rating: number } =>
  item?.city !== undefined && item?.rating !== undefined;

/** "Trusted by our clients" slider on the home and about pages; with showAll the Testimonials page grid */
export const Testimonials = ({ data: content, showAll = false, className = "" }: TestimonialsProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = useRef<HTMLDivElement>(null);
  const moving = useRef(false);
  const home = content?.home;
  const homeItems = content
    ? content.homeItemIds.map((id) => content.items.find((item) => item.id === id)).filter((item) => item !== undefined)
    : [];
  const listingItems = content ? content.listingItemIds.map((id) => content.items.find((item) => item.id === id)).filter(isListingItem) : [];
  const { page, setPage, totalPages, pageItems } = usePagination(listingItems, content?.intro.perPage ?? 1);
  const total = homeItems.length;
  const autoplayMs = home?.autoplayMs;

  // The quote slides out to one side and the next one slides in from the other (instant with reduced motion).
  const go = useCallback(
    async (step: number) => {
      const el = slide.current;
      const next = () => setIndex((current) => (current + step + total) % total);
      if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return next();
      if (moving.current) return;
      moving.current = true;
      const shift = step > 0 ? "3rem" : "-3rem";
      try {
        await el.animate([{ opacity: 1, translate: "0 0" }, { opacity: 0, translate: `calc(${shift} * -1) 0` }], {
          duration: 320,
          easing: "ease-in",
          fill: "forwards",
        }).finished;
        flushSync(next);
        el.getAnimations().forEach((animation) => animation.cancel());
        await el.animate([{ opacity: 0, translate: `${shift} 0` }, { opacity: 1, translate: "0 0" }], {
          duration: 520,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        }).finished;
      } catch {
        // animation cancelled (e.g. the section left the page)
      } finally {
        moving.current = false;
      }
    },
    [total],
  );

  // Moves on by itself every few seconds; waits while the visitor hovers or uses the arrows. Restarts after every change.
  useEffect(() => {
    if (showAll || paused || total < 2 || autoplayMs === undefined) return;
    const timer = window.setTimeout(() => go(1), autoplayMs);
    return () => window.clearTimeout(timer);
  }, [index, paused, total, go, autoplayMs, showAll]);

  if (!content || !home) return null;

  if (showAll) {
    return (
      <section className="bg-[linear-gradient(180deg,var(--color-surface-warm)_0%,var(--color-surface-warm-deep)_40%,var(--color-surface-warm)_100%)] px-4 sm:px-6 md:px-10 lg:px-[3.6rem]">
        <SectionIntro
          eyebrow={content.intro.eyebrow}
          title={content.intro.title}
          titleHighlight={content.intro.titleHighlight}
          description={content.intro.description}
          /* the font only ships 400/700: a hairline stroke in the section colour thins the bold heading slightly */
          titleClassName="lg:text-[6.1rem] [-webkit-text-stroke:0.007em_var(--color-title-stroke)]"
          starIcon={content.dividerStarIcon}
        />
        <div id="testimonial-grid" className="mt-10 grid auto-rows-fr scroll-mt-28 lg:scroll-mt-[11rem] gap-6 md:grid-cols-2 md:gap-8 lg:mt-[3rem] lg:gap-x-[2.95rem] lg:gap-y-[2.2rem]">
          {pageItems.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              ratingLabel={content.intro.ratingLabel}
              quoteIcon={content.quoteIcon}
              starIcon={content.starIcon}
            />
          ))}
        </div>
        <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="testimonial-grid" data={content.pagination} />
      </section>
    );
  }

  const item = homeItems[index];
  if (!item) return null;
  const arrows = (
    <>
      <button type="button" onClick={() => go(-1)} aria-label={home.previousLabel} className="transition-colors hover:text-[var(--color-accent)]">
        <Icon name={home.previousIcon} className="w-12 lg:w-[3.4rem]" />
      </button>
      <button type="button" onClick={() => go(1)} aria-label={home.nextLabel} className="transition-colors hover:text-[var(--color-accent)]">
        <Icon name={home.nextIcon} className="w-12 lg:w-[3.4rem]" />
      </button>
    </>
  );

  return (
    <section
      className={`relative bg-[var(--color-bg-main)] lg:h-[43.95rem] ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Intro */}
      <div className="px-5 sm:px-8 md:px-10 lg:absolute lg:left-[6.25rem] lg:top-[1.75rem] lg:w-[30rem] lg:p-0">
        <p className="flex items-center font-sans text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)] md:text-[0.85rem] lg:text-[1.125rem] lg:tracking-[0.31em]">
          {home.eyebrow}
          <span className="ml-4 h-[2px] w-12 bg-[var(--color-primary-light)] lg:ml-[1.4rem] lg:w-[5.56rem]" aria-hidden="true" />
        </p>
        <h2 className="mt-5 font-heading text-[3rem] font-semibold uppercase leading-[1.05] tracking-[-0.01em] md:text-[4rem] lg:mt-[1.4rem] lg:text-[5.75rem] lg:leading-[6.25rem]">
          {lines(home.title).map((line, lineIndex) => (
            <span key={lineIndex} className={`block ${home.titleHighlight && line.includes(home.titleHighlight) ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"}`}>
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-5 max-w-[24rem] font-sans text-[0.98rem] leading-[1.75] text-[var(--color-text-muted)] md:text-[1.05rem] lg:mt-[1.65rem] lg:max-w-[25rem] lg:text-[1.35rem] lg:leading-[2.375rem]">
          {home.description}
        </p>
        {/* arrows sit here on desktop; on mobile they move below the image */}
        <div className="mt-[3.85rem] hidden items-center gap-[2.5rem] text-[var(--color-primary)] lg:flex">{arrows}</div>
      </div>

      {/* Image composition */}
      <div className="relative mx-auto mt-12 aspect-[601/703] w-[82%] max-w-[30rem] lg:absolute lg:left-[34.75rem] lg:top-0 lg:mt-0 lg:w-[37.56rem] lg:max-w-none">
        {/* thin outline frame (top-right) */}
        <span
          className="absolute left-[55.42%] top-0 h-[52.63%] w-[44.43%] border-y-[1.5px] border-r-[1.5px] border-[var(--color-primary-soft)]"
          aria-hidden="true"
        />
        {/* beige block (bottom-left) */}
        <span className="absolute bottom-0 left-0 h-[35.56%] w-[21.8%] bg-[var(--color-bg-alt)]" aria-hidden="true" />
        <div className="absolute left-[11.98%] top-[2.42%] h-[87.34%] w-[82.2%]">
          <Image
            src={home.image}
            alt={home.imageAlt}
            fill
            quality={90}
            sizes="(min-width: 1280px) 26vw, 70vw"
            className="object-cover"
          />
        </div>
        {/* white notch cut out of the photo's bottom-left corner, lined up with the beige block's right edge */}
        <span className="absolute left-[11.98%] top-[70.98%] h-[18.78%] w-[9.82%] bg-[var(--color-bg-main)]" aria-hidden="true" />
      </div>
      <div className="mt-8 flex items-center justify-center gap-8 text-[var(--color-primary)] lg:hidden">{arrows}</div>

      {/* Quote */}
      <figure className="relative mx-5 mt-12 sm:mx-8 md:mx-auto md:max-w-[34rem] lg:absolute lg:left-[80.75rem] lg:top-[3.45rem] lg:mx-0 lg:mt-0 lg:w-[30.5rem] lg:max-w-none">
        <span className="flex h-16 w-[4.5rem] items-center justify-center bg-[var(--color-primary)] lg:ml-[2.25rem] lg:h-[5.25rem] lg:w-[5.8rem]" aria-hidden="true">
          <span className="mt-6 font-heading text-[5rem] font-bold leading-none text-[var(--color-white)] lg:mt-[2.2rem] lg:text-[7rem]">”</span>
        </span>
        <div ref={slide}>
          <blockquote className="relative mt-8 font-display text-[1.45rem] font-medium leading-[1.4] text-[var(--color-text-soft)] md:text-[1.6rem] lg:mt-[2.85rem] lg:text-[2.25rem] lg:leading-[3rem]">
            <span className="absolute -left-4 -top-1 font-heading text-[1.4rem] text-[var(--color-text-muted)] lg:-left-[1.7rem] lg:-top-[0.4rem] lg:text-[2rem]" aria-hidden="true">
              “
            </span>
            <p>
              {item.quote}
              <span aria-hidden="true">”</span>
            </p>
          </blockquote>
          <figcaption className="mt-7 lg:mt-[2.6rem]">
            <span className="block h-[2px] w-14 bg-[var(--color-accent)] lg:w-[4.6rem]" aria-hidden="true" />
            <span className="mt-5 block font-heading text-[1.5rem] font-medium uppercase leading-none text-[var(--color-primary)] lg:mt-[1.75rem] lg:text-[2.16rem]">
              {item.name}
            </span>
            <span className="mt-3 block font-sans text-[0.75rem] uppercase tracking-[0.45em] text-[var(--color-text-subtle)] lg:mt-[1.15rem] lg:text-[0.94rem] lg:tracking-[0.53em]">
              {item.role}
            </span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
};
