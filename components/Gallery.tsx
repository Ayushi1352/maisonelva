import { site, type MaisonElvaGalleryData, type SectionProps } from "@/data";
import SectionIntro from "@/components/SectionIntro";
import GalleryGrid from "@/components/GalleryGrid";

export default function Gallery({ data: gallery = site.galleryPage }: SectionProps<MaisonElvaGalleryData>) {
  return (
    <section className="bg-[linear-gradient(180deg,#fdfbf8_0%,#fefdfb_100%)] px-4 sm:px-6 md:px-10 xl:px-[2.9rem]">
      <SectionIntro
        label={gallery.label}
        titleTop={gallery.titleTop}
        titleAccent={gallery.titleAccent}
        description={gallery.description}
        labelClassName="text-navy text-[1.15rem] tracking-[0.2em] md:text-[1.5rem] xl:text-[1.9rem] xl:tracking-[0.23em]"
        titleClassName="xl:text-[5.2rem]"
        ruleClassName="xl:mt-[1.66rem]"
        descriptionClassName="xl:mt-[1.42rem] xl:max-w-[64rem] xl:text-[2.16rem] xl:leading-[3rem]"
        closingRule
      />
      <div className="mt-8 xl:mt-[2.2rem]">
        <GalleryGrid data={gallery} />
      </div>
    </section>
  );
}
