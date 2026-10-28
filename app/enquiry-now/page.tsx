import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import EnquiryIntro from "./components/EnquiryIntro";
import EnquiryForm from "./components/EnquiryForm";

export const metadata: Metadata = site.enquiryPage.seo;

export default function EnquiryNowPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <section className="bg-[linear-gradient(180deg,#fdfcfa_0%,#fdfbf8_100%)] px-4 sm:px-6 md:px-10 xl:pl-[6.1rem] xl:pr-[4rem]">
        <div className="grid items-start gap-12 xl:grid-cols-[1fr_56.25rem] xl:gap-[5.6rem]">
          <EnquiryIntro data={site.enquiryPage} />
          <EnquiryForm data={site.enquiryFormSection} />
        </div>
      </section>
    </>
  );
}
