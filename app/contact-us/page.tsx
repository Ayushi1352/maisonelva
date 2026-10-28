import type { Metadata } from "next";
import { site } from "@/data";
import PageBanner from "@/components/shared/PageBanner";
import ContactIntro from "./components/ContactIntro";
import ContactForm from "./components/ContactForm";
import GetInTouch from "./components/GetInTouch";
import StoreMap from "./components/StoreMap";

const contact = site.contactPage;

export const metadata: Metadata = contact.seo;

export default function ContactUsPage() {
  return (
    <>
      <PageBanner data={site.pageBanner} />
      <section className="grid items-start gap-12 px-4 sm:px-6 md:px-10 xl:grid-cols-[1fr_56.9rem] xl:gap-[3.6rem] xl:pl-[5.45rem] xl:pr-[3.9rem]">
        <ContactIntro data={contact} />
        <ContactForm data={site.contactFormSection} />
      </section>
      <section className="px-4 sm:px-6 md:px-10 xl:pl-[5.45rem] xl:pr-[3.9rem]">
        <GetInTouch data={contact} />
      </section>
      <section>
        <StoreMap data={contact} />
      </section>
    </>
  );
}
