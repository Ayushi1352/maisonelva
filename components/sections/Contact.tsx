import type { ContactData, ContactFormData } from "@/types/templates.types";
import { ContactIntro } from "@/components/sections/ContactIntro";
import { ContactForm } from "@/components/sections/ContactForm";
import { GetInTouch } from "@/components/sections/GetInTouch";
import { StoreMap } from "@/components/sections/StoreMap";

/** Contact page: intro + form, the "Get in touch" details and the store map (three page sections) */
export const Contact = ({ data: contact, form }: { data?: ContactData; form?: ContactFormData }) => {
  if (!contact) return null;
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
};
