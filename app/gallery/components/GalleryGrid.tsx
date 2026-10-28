"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Close } from "@/components/shared/Icons";
import { site, type MaisonElvaGalleryData, type SectionProps } from "@/data";
import { fill } from "@/lib/text";

export default function GalleryGrid({ data = site.galleryPage }: SectionProps<MaisonElvaGalleryData>) {
  const { images } = data;
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (delta: number) => setActive((current) => (current === null ? current : (current + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-[602fr_581fr_599fr] xl:gap-x-[1.44rem] xl:gap-y-[1.3rem]">
        {images.map((image, index) => (
          <li key={image.src}>
            <button
              type="button"
              onClick={() => setActive(index)}
              className="group relative block w-full overflow-hidden"
              style={{ aspectRatio: image.ratio }}
              aria-label={fill(data.viewLabel, { alt: image.alt })}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={90}
                sizes="(min-width: 768px) 32vw, 48vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </button>
          </li>
        ))}
      </ul>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(20,8,10,0.88)] p-4 animate-fade-in"
          onClick={close}
        >
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={images[active].src} alt={images[active].alt} fill quality={90} sizes="90vw" className="object-contain" />
          </div>
          <button type="button" onClick={close} aria-label={data.closeLabel} className="absolute right-4 top-4 text-white md:right-8 md:top-8">
            <Close className="size-8" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label={data.previousLabel}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white md:left-8"
          >
            <ArrowLeft className="w-10" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label={data.nextLabel}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white md:right-8"
          >
            <ArrowRight className="w-10" />
          </button>
        </div>
      )}
    </>
  );
}
