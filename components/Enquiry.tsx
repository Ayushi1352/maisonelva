import { site, type MaisonElvaEnquiryData, type MaisonElvaEnquiryFormData, type SectionProps } from "@/data";
import EnquiryIntro from "@/components/EnquiryIntro";
import EnquiryForm from "@/components/EnquiryForm";

type EnquiryProps = SectionProps<MaisonElvaEnquiryData> & { form?: MaisonElvaEnquiryFormData };

export default function Enquiry({ data: enquiry = site.enquiryPage, form = site.enquiryFormSection }: EnquiryProps) {
  return (
    <section className="bg-[linear-gradient(180deg,var(--color-surface-warm-top)_0%,var(--color-surface-warm-alt)_100%)] px-4 sm:px-6 md:px-10 lg:pl-[6.1rem] lg:pr-[4rem]">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_56.25rem] lg:gap-[5.6rem]">
        <EnquiryIntro data={enquiry} />
        <EnquiryForm data={form} />
      </div>
    </section>
  );
}
