import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import CollectionBrowser from "./components/CollectionBrowser";

const collections = site.collectionsPage;

export const metadata: Metadata = collections.seo;

export default function CollectionsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <section className="bg-[#fefefe] px-5 sm:px-8 md:px-10 xl:px-[5.5rem]">
        <div className="xl:flex xl:items-end xl:justify-between xl:gap-[6rem]">
          <div>
            <p className="flex items-center font-cormorant text-[1rem] font-semibold uppercase tracking-[0.1em] text-maroon xl:pl-[0.3rem] xl:text-[1.375rem]">
              {collections.label}
              <span className="ml-4 h-[2px] w-12 bg-maroon-light xl:ml-[1.7rem] xl:w-[5.9rem]" aria-hidden="true" />
            </p>
            <h2 className="text-gradient-brand mt-3 inline-block pb-2 font-cormorant text-[3.4rem] font-semibold leading-none tracking-[-0.02em] md:text-[4.4rem] xl:mt-[1.2rem] xl:text-[7.1rem]">
              {collections.title}
            </h2>
          </div>
          <p className="mt-4 max-w-[38rem] font-poppins text-[0.98rem] leading-[1.7] text-muted xl:mb-[1.6rem] xl:mt-0 xl:text-[1.3125rem] xl:leading-[2.06rem]">
            {collections.intro}
          </p>
        </div>
        <div className="mt-10 xl:mt-[3.5rem]">
          <CollectionBrowser data={collections} />
        </div>
      </section>
    </>
  );
}
