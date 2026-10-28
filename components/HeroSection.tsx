import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaHeroData, type SectionProps } from "@/data";
import { ArrowRight } from "@/components/Icons";

export default function HeroSection({ data: hero = site.hero }: SectionProps<MaisonElvaHeroData>) {
  return (
    <section className="relative overflow-hidden bg-page xl:h-[56.875rem]">
      <div className="px-5 pb-6 pt-8 sm:px-8 md:px-10 md:pt-12 xl:absolute xl:left-[8.75rem] xl:top-[9rem] xl:p-0">
        <p className="flex items-center font-poppins text-[0.72rem] font-medium uppercase tracking-[0.33em] text-ink-soft xl:tracking-[0.42em] md:text-[0.85rem] xl:text-[1.125rem]">
          {hero.label}
          <span className="ml-4 h-[2px] w-14 bg-maroon xl:ml-[1.8rem] xl:w-[6.6rem]" aria-hidden="true" />
        </p>
        <h1 className="mt-6 font-playfair text-[3.3rem] font-semibold uppercase leading-[0.96] tracking-[-0.005em] sm:text-[4.4rem] md:text-[5.4rem] xl:mt-[2.05rem] xl:text-[7.55rem] xl:leading-[7.06rem]">
          {hero.titleLines.map((line) => (
            <span key={line.text} className={`block ${line.accent ? "text-maroon" : "text-ink"}`}>
              {line.text}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-[34rem] font-poppins text-[1rem] leading-[1.85] text-ink-soft md:text-[1.15rem] xl:mt-[1.45rem] xl:max-w-[46rem] xl:text-[1.47rem] xl:leading-[2.75rem]">
          {hero.description}
        </p>
        <Link
          href={hero.button.href}
          className="mt-8 inline-flex h-14 items-center gap-6 border border-maroon bg-maroon pl-7 pr-7 font-poppins text-[0.95rem] text-white transition-colors hover:bg-white hover:text-maroon md:h-16 md:text-[1.1rem] xl:mt-[2.6rem] xl:h-[4.8rem] xl:w-[21.85rem] xl:gap-[2.6rem] xl:pl-[2.7rem] xl:pr-0 xl:text-[1.375rem]"
        >
          {hero.button.label}
          <ArrowRight className="w-6 xl:w-[1.75rem]" />
        </Link>
      </div>

      {/* Visual composition */}
      <div className="relative mx-5 mt-10 pr-[14%] pt-[12%] sm:mx-8 md:mx-auto md:w-[min(40rem,80%)] xl:static xl:m-0 xl:w-auto xl:p-0">
        <span
          className="absolute right-0 top-0 h-[13%] w-[42%] bg-maroon xl:h-[6.375rem] xl:w-[20.2rem]"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-[22%] right-0 top-[12%] w-[14%] bg-blush xl:bottom-auto xl:left-[114.06rem] xl:top-[6.375rem] xl:h-[39.9rem] xl:w-auto"
          aria-hidden="true"
        />
        <span
          className="absolute left-[-9%] top-[38%] aspect-square w-[34%] rounded-full border-2 border-maroon-light bg-[linear-gradient(to_bottom,#5b2026_50%,transparent_50%)] xl:left-[60.25rem] xl:top-[19.25rem] xl:w-[17rem]"
          aria-hidden="true"
        />
        <div className="relative z-10 aspect-[738/805] w-full xl:absolute xl:left-[67.94rem] xl:top-[6.375rem] xl:w-[46.125rem]">
          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            preload
            quality={90}
            sizes="(min-width: 1280px) 39vw, 86vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
