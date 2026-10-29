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
        labelClassName="text-[#33363b] text-[1.15rem] tracking-[0.2em] md:text-[1.5rem] xl:text-[1.9rem] xl:tracking-[0.23em]"
        titleClassName="xl:text-[5.2rem]"
        ruleClassName="xl:mt-[1.66rem]"
        descriptionClassName="text-[#5a5e64] xl:mt-[1.42rem] xl:max-w-[64rem] xl:text-[2.16rem] xl:leading-[3rem]"
        closingRule
        /* colours sampled from the gallery design: ruby accent that fades to ink on its last letters */
        titleTopClassName="text-[#1f262d]"
        accentClassName="ml-[0.12em] bg-[linear-gradient(90deg,#700414_0%,#700414_58%,#1f252c_88%)] bg-clip-text text-transparent"
        ruleColorClassName="bg-[#dfb987]"
        dividerStarClassName="text-[#bc7c27]"
        dividerLineClassName="via-[#ead2b0] to-[#e0bf92] xl:w-[9rem]"
      />
      <div className="mt-8 xl:mt-[2.2rem]">
        <GalleryGrid data={gallery} />
      </div>
    </section>
  );
}
