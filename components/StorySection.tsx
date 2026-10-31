import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaAboutStoryData, type SectionProps } from "@/data";
import { ArrowRight } from "@/components/Icons";

/** "A Story of Timeless Beauty" — used on the home page and the about page */
export default function StorySection({
  data: story = site.aboutStorySection,
  showButton = true,
  className = "",
}: SectionProps<MaisonElvaAboutStoryData> & { showButton?: boolean }) {
  return (
    <section className={`bg-[var(--color-bg-main)] lg:flex lg:items-start ${className}`}>
      {/* Overlapping image composition (proportions taken from the 1920px design) */}
      <div className="relative mr-5 aspect-[1102/829] sm:mr-8 md:mr-10 md:max-w-[52rem] lg:mr-0 lg:w-[68.875rem] lg:max-w-none lg:shrink-0">
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

      <div className="px-5 pt-10 sm:px-8 md:px-10 md:pt-12 lg:ml-[5rem] lg:max-w-[40rem] lg:px-0 lg:pt-[10.95rem]">
        <p className="flex items-center font-sans text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-text)] md:text-[0.85rem] lg:text-[1.125rem]">
          {story.label}
          <span className="ml-4 h-[2px] w-12 bg-[var(--color-primary-light)] lg:ml-[2rem] lg:w-[5.7rem]" aria-hidden="true" />
        </p>
        <h2 className="mt-5 font-heading text-[2.6rem] leading-[1.18] md:text-[3.4rem] lg:mt-[2rem] lg:text-[5.3rem] lg:leading-[6.25rem]">
          <span className="block font-semibold text-[var(--color-text)]">{story.titleTop}</span>
          <span className="block font-semibold tracking-[-0.012em] text-[var(--color-primary)]">{story.titleAccent}</span>
        </h2>
        <div className="mt-5 space-y-3 font-sans text-[0.98rem] leading-[1.6] text-[var(--color-text)] md:text-[1.1rem] lg:mt-[1.6rem] lg:max-w-[39.6rem] lg:space-y-[0.95rem] lg:text-[1.36rem] lg:leading-[2.125rem]">
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {showButton && (
          <Link
            href={story.button.href}
            className="mt-8 inline-flex h-12 items-center gap-6 border border-[var(--color-primary-dark)] bg-[var(--color-primary-dark)] px-6 font-sans text-[0.95rem] font-medium text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary-dark)] md:h-14 lg:mt-[2.9rem] lg:h-[4.3rem] lg:w-[16.4rem] lg:gap-[2.75rem] lg:px-0 lg:pl-[2.5rem] lg:text-[1.25rem]"
          >
            {story.button.label}
            <ArrowRight className="w-6 lg:w-[1.9rem]" />
          </Link>
        )}
      </div>
    </section>
  );
}
