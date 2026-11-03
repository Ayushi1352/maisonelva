import type { GalleryData, GlobalUIData } from "@/types/templates.types";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { GalleryGrid } from "@/components/sections/GalleryGrid";

export const Gallery = ({ data: gallery, ui }: { data?: GalleryData; ui?: GlobalUIData }) => {
  if (!gallery) return null;
  return (
    <section className="bg-[linear-gradient(180deg,var(--color-surface-warm-alt)_0%,var(--color-bg-main)_100%)] px-4 sm:px-6 md:px-10 lg:px-[2.9rem]">
      <SectionIntro
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        titleHighlight={gallery.titleHighlight}
        description={gallery.description}
        labelClassName="text-[var(--color-gallery-label)] text-[1.15rem] tracking-[0.2em] md:text-[1.5rem] lg:text-[1.9rem] lg:tracking-[0.23em]"
        titleClassName="lg:text-[5.2rem]"
        ruleClassName="lg:mt-[1.66rem]"
        descriptionClassName="text-[var(--color-gallery-description)] lg:mt-[1.42rem] lg:max-w-[64rem] lg:text-[2.16rem] lg:leading-[3rem]"
        closingRule
        /* colours sampled from the gallery design: ruby accent that fades to ink on its last letters */
        titleTopClassName="text-[var(--color-gallery-title)]"
        accentClassName="ml-[0.12em] bg-[linear-gradient(90deg,var(--color-gallery-accent)_0%,var(--color-gallery-accent)_58%,var(--color-gallery-accent-end)_88%)] bg-clip-text text-transparent"
        ruleColorClassName="bg-[var(--color-gallery-rule)]"
        dividerStarClassName="text-[var(--color-gallery-star)]"
        dividerLineClassName="via-[var(--color-gallery-divider-mid)] to-[var(--color-gallery-divider-end)] lg:w-[9rem]"
      />
      <div className="mt-8 lg:mt-[2.2rem]">
        <GalleryGrid data={gallery} ui={ui} />
      </div>
    </section>
  );
};
