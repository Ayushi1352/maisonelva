import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import Enquiry from "@/components/Enquiry";

export const metadata: Metadata = site.enquiryPage.seo;

export default function EnquiryNowPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <Enquiry data={site.enquiryPage} form={site.enquiryFormSection} />
    </>
  );
}
