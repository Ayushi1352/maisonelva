"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { GalleryData, GlobalUIData } from "@/types/templates.types";
import { fill } from "@/components/ui/text";
import { fadeIn } from "@/components/ui/styles";
import { Pagination, usePagination } from "@/components/ui/Pagination";

export const GalleryGrid = ({ data, ui }: { data: GalleryData; ui?: GlobalUIData }) => {
  const { images } = data;
  const [active, setActive] = useState<number | null>(null);
  const { page, setPage, totalPages, start, pageItems } = usePagination(images, data.perPage);

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
      <ul id="gallery-grid" className="grid scroll-mt-28 grid-cols-2 lg:scroll-mt-[11rem] gap-3 sm:gap-4 md:grid-cols-[602fr_581fr_599fr] lg:gap-x-[1.44rem] lg:gap-y-[1.3rem]">
        {pageItems.map((image, index) => (
          <li key={image.id}>
            <button
              type="button"
              onClick={() => setActive(start + index)}
              className="group relative block w-full overflow-hidden"
              style={{ aspectRatio: image.ratio }}
              aria-label={fill(data.viewLabel, { alt: image.imageAlt })}
            >
              <Image
                src={image.image}
                alt={image.imageAlt}
                fill
                quality={90}
                sizes="(min-width: 768px) 32vw, 48vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
            </button>
          </li>
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} scrollTargetId="gallery-grid" ui={ui} />

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[active].imageAlt}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-lightbox-overlay)] p-4 ${fadeIn}`}
          onClick={close}
        >
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={images[active].image} alt={images[active].imageAlt} fill quality={90} sizes="90vw" className="object-contain" />
          </div>
          <button type="button" onClick={close} aria-label={data.closeLabel} className="absolute right-4 top-4 text-[var(--color-white)] transition-colors hover:text-[var(--color-accent-light)] md:right-8 md:top-8">
            <Icon name="FaTimes" className="size-8" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label={data.previousLabel}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-white)] transition-colors hover:text-[var(--color-accent-light)] md:left-8"
          >
            <Icon name="HiOutlineArrowLongLeft" className="w-10" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label={data.nextLabel}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-white)] transition-colors hover:text-[var(--color-accent-light)] md:right-8"
          >
            <Icon name="HiOutlineArrowLongRight" className="w-10" />
          </button>
        </div>
      )}
    </>
  );
};
