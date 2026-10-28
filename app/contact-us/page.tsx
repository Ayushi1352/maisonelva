import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/PageBanner";
import ContactDetails from "@/components/ContactDetails";

export const metadata: Metadata = site.contactPage.seo;

export default function ContactUsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <ContactDetails data={site.contactPage} form={site.contactFormSection} />
    </>
  );
}
