import { site, type MaisonElvaContactData, type MaisonElvaContactFormData, type SectionProps } from "@/data";
import ContactIntro from "@/components/ContactIntro";
import ContactForm from "@/components/ContactForm";
import GetInTouch from "@/components/GetInTouch";
import StoreMap from "@/components/StoreMap";

type ContactDetailsProps = SectionProps<MaisonElvaContactData> & { form?: MaisonElvaContactFormData };

/** Contact page: intro + form, the "Get in touch" details and the store map (three page sections) */
export default function ContactDetails({ data: contact = site.contactPage, form = site.contactFormSection }: ContactDetailsProps) {
  return (
    <>
      <section className="grid items-start gap-12 px-4 sm:px-6 md:px-10 lg:grid-cols-[1fr_56.9rem] lg:gap-[3.6rem] lg:pl-[5.45rem] lg:pr-[3.9rem]">
        <ContactIntro data={contact} />
        <ContactForm data={form} />
      </section>
      <section className="px-4 sm:px-6 md:px-10 lg:pl-[5.45rem] lg:pr-[3.9rem]">
        <GetInTouch data={contact} />
      </section>
      <section>
        <StoreMap data={contact} />
      </section>
    </>
  );
}
