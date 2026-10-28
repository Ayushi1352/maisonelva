import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaAboutStoryData, type SectionProps } from "@/data";
import { ArrowRight } from "@/components/shared/Icons";

/** "A Story of Timeless Beauty" — used on the home page and the about page */
export default function StorySection({
  data: story = site.aboutStorySection,
  showButton = true,
  className = "",
}: SectionProps<MaisonElvaAboutStoryData> & { showButton?: boolean }) {
  return (
    <section className={`bg-page xl:flex xl:items-start ${className}`}>
      {/* Overlapping image composition (proportions taken from the 1920px design) */}
      <div className="relative mr-5 aspect-[1102/829] sm:mr-8 md:mr-10 md:max-w-[52rem] xl:mr-0 xl:w-[68.875rem] xl:max-w-none xl:shrink-0">
        <div className="absolute left-0 top-0 h-[88.66%] w-[82.58%]">
          <Image
            src={story.primaryImage}
            alt={story.primaryImageAlt}
            fill
            quality={90}
            sizes="(min-width: 1280px) 48vw, 80vw"
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-[59.44%] h-[73.46%] w-[40.56%]">
          <Image
            src={story.secondaryImage}
            alt={story.secondaryImageAlt}
            fill
            quality={90}
            sizes="(min-width: 1280px) 24vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="px-5 pt-10 sm:px-8 md:px-10 md:pt-12 xl:ml-[5rem] xl:max-w-[40rem] xl:px-0 xl:pt-[10.95rem]">
        <p className="flex items-center font-poppins text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink md:text-[0.85rem] xl:text-[1.125rem]">
          {story.label}
          <span className="ml-4 h-[2px] w-12 bg-maroon-light xl:ml-[2rem] xl:w-[5.7rem]" aria-hidden="true" />
        </p>
        <h2 className="mt-5 font-playfair text-[2.6rem] leading-[1.18] md:text-[3.4rem] xl:mt-[2rem] xl:text-[5.3rem] xl:leading-[6.25rem]">
          <span className="block font-semibold text-ink">{story.titleTop}</span>
          <span className="block font-semibold tracking-[-0.012em] text-maroon">{story.titleAccent}</span>
        </h2>
        <div className="mt-5 space-y-3 font-poppins text-[0.98rem] leading-[1.6] text-ink md:text-[1.1rem] xl:mt-[1.6rem] xl:max-w-[39.6rem] xl:space-y-[0.95rem] xl:text-[1.36rem] xl:leading-[2.125rem]">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {showButton && (
          <Link
            href={story.button.href}
            className="mt-8 inline-flex h-12 items-center gap-6 bg-maroon-dark px-6 font-poppins text-[0.95rem] font-medium text-white transition-colors hover:bg-maroon md:h-14 xl:mt-[2.9rem] xl:h-[4.3rem] xl:w-[16.4rem] xl:gap-[2.75rem] xl:px-0 xl:pl-[2.5rem] xl:text-[1.25rem]"
          >
            {story.button.label}
            <ArrowRight className="w-6 xl:w-[1.9rem]" />
          </Link>
        )}
      </div>
    </section>
  );
}
