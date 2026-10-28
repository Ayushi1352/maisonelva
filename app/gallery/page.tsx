import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import SectionIntro from "@/components/shared/SectionIntro";
import GalleryGrid from "./components/GalleryGrid";

const gallery = site.galleryPage;

export const metadata: Metadata = gallery.seo;

export default function GalleryPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <section className="bg-[linear-gradient(180deg,#fdfbf8_0%,#fefdfb_100%)] px-4 sm:px-6 md:px-10 xl:px-[2.9rem]">
        <SectionIntro
          label={gallery.label}
          titleTop={gallery.titleTop}
          titleAccent={gallery.titleAccent}
          description={gallery.description}
          labelClassName="text-ink tracking-[0.2em]! xl:text-[1.9rem]! xl:tracking-[0.23em]!"
          titleClassName="xl:text-[5.2rem]"
          ruleClassName="xl:mt-[1.66rem]!"
          descriptionClassName="xl:text-[2.16rem]! xl:leading-[3rem]! xl:max-w-[64rem]! xl:mt-[1.42rem]!"
          closingRule
        />
        <div className="mt-8 xl:mt-[2.2rem]">
          <GalleryGrid data={gallery} />
        </div>
      </section>
    </>
  );
}
