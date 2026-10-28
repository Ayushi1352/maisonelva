"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Close, Expand } from "@/components/Icons";
import { site, type MaisonElvaCollectionDetailData, type SectionProps } from "@/data";
import { fill } from "@/components/text";
import { fadeIn } from "@/components/styles";

type ProductGalleryProps = SectionProps<MaisonElvaCollectionDetailData> & { name: string; images: string[]; thumbnails: string[] };

export default function ProductGallery({ data = site.collectionDetailPage, name, images, thumbnails }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const showThumbs = thumbnails.length > 1;

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setZoomed(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomed]);

  return (
    <div className={`flex flex-col-reverse gap-3 md:flex-row md:items-start xl:gap-[1.56rem] ${showThumbs ? "" : "md:pl-0"}`}>
      {showThumbs && (
        <ul className="grid grid-cols-4 gap-3 md:flex md:w-28 md:shrink-0 md:flex-col xl:w-[11.06rem] xl:gap-[0.62rem]">
          {thumbnails.map((thumb, index) => (
            <li key={thumb}>
              <button
                type="button"
                onClick={() => setActive(index)}
                aria-label={fill(data.thumbnailLabel, { index: index + 1, name })}
                aria-pressed={active === index}
                className={`relative block aspect-[177/193] w-full overflow-hidden border-2 transition-colors ${
                  active === index ? "border-gold" : "border-transparent hover:border-[#e6cfb3]"
                }`}
              >
                <Image src={thumb} alt="" fill quality={90} sizes="(min-width: 1280px) 10vw, 25vw" className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="relative aspect-[809/899] w-full overflow-hidden xl:w-[50.56rem] xl:shrink-0">
        <Image
          key={images[active]}
          src={images[active] ?? images[0]}
          alt={name}
          fill
          preload
          quality={90}
          sizes="(min-width: 1280px) 43vw, (min-width: 768px) 70vw, 94vw"
          className={`object-cover ${fadeIn}`}
        />
        <button
          type="button"
          onClick={() => setZoomed(true)}
          aria-label={data.zoomLabel}
          className="absolute right-3 top-3 flex size-11 items-center justify-center rounded-full bg-white text-ink-soft shadow-[0_2px_10px_rgba(0,0,0,0.12)] transition-[color,background-color,transform] hover:scale-105 hover:bg-maroon hover:text-white xl:right-[1.5rem] xl:top-[1.6rem] xl:size-[4.4rem]"
        >
          <Expand className="size-5 xl:size-[1.8rem]" />
        </button>
      </div>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={name}
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(20,8,10,0.88)] p-4 ${fadeIn}`}
          onClick={() => setZoomed(false)}
        >
          <div className="relative h-[85vh] w-full max-w-5xl">
            <Image src={images[active] ?? images[0]} alt={name} fill quality={90} sizes="90vw" className="object-contain" />
          </div>
          <button type="button" onClick={() => setZoomed(false)} aria-label={data.closeLabel} className="absolute right-4 top-4 text-white transition-colors hover:text-gold-light md:right-8 md:top-8">
            <Close className="size-8" />
          </button>
        </div>
      )}
    </div>
  );
}
