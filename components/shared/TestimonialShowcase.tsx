"use client";

import Image from "next/image";
import { useState } from "react";
import { site, type MaisonElvaTestimonialsData, type SectionProps } from "@/data";
import { ArrowLeft, ArrowRight } from "@/components/shared/Icons";

/** "Trusted by our clients" slider — used on the home page and the about page */
export default function TestimonialShowcase({ data: content = site.testimonialsSection, className = "" }: SectionProps<MaisonElvaTestimonialsData>) {
  const [index, setIndex] = useState(0);
  const total = content.items.length;
  const item = content.items[index];

  const go = (step: number) => setIndex((current) => (current + step + total) % total);

  return (
    <section className={`relative bg-page xl:h-[43.95rem] ${className}`}>
      {/* Intro */}
      <div className="px-5 sm:px-8 md:px-10 xl:absolute xl:left-[6.25rem] xl:top-[1.75rem] xl:w-[30rem] xl:p-0">
        <p className="flex items-center font-poppins text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-maroon md:text-[0.85rem] xl:text-[1.125rem] xl:tracking-[0.31em]">
          {content.label}
          <span className="ml-4 h-[2px] w-12 bg-maroon-light xl:ml-[1.4rem] xl:w-[5.56rem]" aria-hidden="true" />
        </p>
        <h2 className="mt-5 font-playfair text-[3rem] font-semibold uppercase leading-[1.05] tracking-[-0.01em] md:text-[4rem] xl:mt-[1.4rem] xl:text-[5.75rem] xl:leading-[6.25rem]">
          {content.titleLines.map((line) => (
            <span key={line.text} className={`block ${line.accent ? "text-maroon" : "text-ink"}`}>
              {line.text}
            </span>
          ))}
        </h2>
        <p className="mt-5 max-w-[24rem] font-poppins text-[0.98rem] leading-[1.75] text-muted md:text-[1.05rem] xl:mt-[1.65rem] xl:max-w-[25rem] xl:text-[1.35rem] xl:leading-[2.375rem]">
          {content.description}
        </p>
        <div className="mt-7 flex items-center gap-8 text-maroon xl:mt-[3.85rem] xl:gap-[2.5rem]">
          <button type="button" onClick={() => go(-1)} aria-label={content.previousLabel} className="transition-opacity hover:opacity-70">
            <ArrowLeft className="w-12 xl:w-[3.4rem]" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label={content.nextLabel} className="transition-opacity hover:opacity-70">
            <ArrowRight className="w-12 xl:w-[3.4rem]" />
          </button>
        </div>
      </div>

      {/* Image composition */}
      <div className="relative mx-auto mt-12 aspect-[601/703] w-[82%] max-w-[30rem] xl:absolute xl:left-[34.75rem] xl:top-0 xl:mt-0 xl:w-[37.56rem] xl:max-w-none">
        {/* thin outline frame (top-right) */}
        <span
          className="absolute left-[55.42%] top-0 h-[52.63%] w-[44.43%] border-y-[1.5px] border-r-[1.5px] border-maroon-soft"
          aria-hidden="true"
        />
        {/* beige block (bottom-left) */}
        <span className="absolute bottom-0 left-0 h-[35.56%] w-[21.8%] bg-sand" aria-hidden="true" />
        <div className="absolute left-[11.98%] top-[2.42%] h-[87.34%] w-[82.2%]">
          <Image
            src={content.image}
            alt={content.imageAlt}
            fill
            quality={90}
            sizes="(min-width: 1280px) 26vw, 70vw"
            className="object-cover"
          />
        </div>
        {/* white notch over the image corner */}
        <span className="absolute left-[12.31%] top-[71.12%] h-[17.5%] w-[9.48%] bg-page" aria-hidden="true" />
      </div>

      {/* Quote */}
      <figure className="relative mx-5 mt-12 sm:mx-8 md:mx-auto md:max-w-[34rem] xl:absolute xl:left-[80.75rem] xl:top-[3.45rem] xl:mx-0 xl:mt-0 xl:w-[30.5rem] xl:max-w-none">
        <span className="flex h-16 w-[4.5rem] items-center justify-center bg-maroon xl:ml-[2.25rem] xl:h-[5.25rem] xl:w-[5.8rem]" aria-hidden="true">
          <span className="mt-6 font-playfair text-[5rem] font-bold leading-none text-white xl:mt-[2.2rem] xl:text-[7rem]">”</span>
        </span>
        <div key={index} className="animate-fade-in">
          <blockquote className="relative mt-8 font-cormorant text-[1.45rem] font-medium leading-[1.4] text-ink-soft md:text-[1.6rem] xl:mt-[2.85rem] xl:text-[2.25rem] xl:leading-[3rem]">
            <span className="absolute -left-4 -top-1 font-playfair text-[1.4rem] text-muted xl:-left-[1.7rem] xl:-top-[0.4rem] xl:text-[2rem]" aria-hidden="true">
              “
            </span>
            <p>
              {item.quote}
              <span aria-hidden="true">”</span>
            </p>
          </blockquote>
          <figcaption className="mt-7 xl:mt-[2.6rem]">
            <span className="block h-[2px] w-14 bg-gold xl:w-[4.6rem]" aria-hidden="true" />
            <span className="mt-5 block font-playfair text-[1.5rem] font-medium uppercase leading-none text-maroon xl:mt-[1.75rem] xl:text-[2.16rem]">
              {item.name}
            </span>
            <span className="mt-3 block font-poppins text-[0.75rem] uppercase tracking-[0.45em] text-subtle xl:mt-[1.15rem] xl:text-[0.94rem] xl:tracking-[0.53em]">
              {item.role}
            </span>
          </figcaption>
        </div>
      </figure>
    </section>
  );
}
