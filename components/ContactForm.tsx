"use client";

import { site, type MaisonElvaContactFormData, type SectionProps } from "@/data";
import { useDummySubmit } from "@/components/useDummySubmit";
import { ArrowRight } from "@/components/Icons";
import FormSuccess, { Spinner } from "@/components/FormSuccess";
import { field } from "@/components/styles";

const fieldClass = `${field} h-14 px-5 font-caslon text-[1rem] text-navy md:h-16 xl:h-[5.6rem] xl:px-[2.2rem] xl:text-[1.43rem]`;

export default function ContactForm({ data: form = site.contactFormSection }: SectionProps<MaisonElvaContactFormData>) {
  const submit = useDummySubmit();

  return (
    <div className="border-2 border-[#f3e4d3] xl:mt-[0.31rem] bg-[linear-gradient(180deg,#fdf8f2_0%,#fcf6ef_100%)] px-5 pb-8 pt-8 sm:px-8 md:px-10 xl:px-0 xl:pb-[3.6rem] xl:pl-[4.7rem] xl:pr-[3.2rem] xl:pt-[4.4rem]">
      <h2 className="font-caslon text-[2rem] leading-tight tracking-[-0.02em] text-navy md:text-[2.4rem] xl:text-[3.68rem]">{form.title}</h2>
      <span className="mt-4 block h-[3px] w-16 bg-gold xl:mt-[1.6rem] xl:w-[5.6rem]" aria-hidden="true" />
      {/* remounting the form (via key) after each send clears every field */}
      <form
        key={submit.round}
        onSubmit={submit.onSubmit}
        onInput={submit.onInput}
        aria-busy={submit.sending}
        className="mt-7 space-y-4 xl:mt-[4.1rem] xl:space-y-[1.85rem]"
      >
        <input type="text" name="name" required placeholder={form.fields.name} aria-label={form.fields.name} className={fieldClass} />
        <input type="tel" name="phone" required placeholder={form.fields.phone} aria-label={form.fields.phone} className={fieldClass} />
        <input type="email" name="email" required placeholder={form.fields.email} aria-label={form.fields.email} className={fieldClass} />
        <input type="text" name="subject" required placeholder={form.fields.subject} aria-label={form.fields.subject} className={fieldClass} />
        <textarea
          name="message"
          required
          rows={4}
          placeholder={form.fields.message}
          aria-label={form.fields.message}
          className={`${field} block min-h-32 resize-y px-5 py-4 font-caslon text-[1rem] text-navy xl:h-[10.65rem] xl:px-[2.2rem] xl:py-[1.9rem] xl:text-[1.43rem]`}
        />
        <button
          type="submit"
          disabled={submit.sending}
          className="mt-2 inline-flex h-14 items-center justify-center gap-5 border border-ruby bg-ruby px-8 font-caslon text-[1.05rem] text-white transition-colors hover:bg-white hover:text-ruby disabled:cursor-wait disabled:opacity-80 md:h-16 xl:mt-[2.5rem] xl:h-[5.6rem] xl:w-[22.6rem] xl:gap-[1.9rem] xl:px-0 xl:text-[1.75rem]"
        >
          {submit.sending ? (
            <>
              <Spinner className="size-6 xl:size-[1.9rem]" />
              {form.sending}
            </>
          ) : (
            <>
              {form.button}
              <ArrowRight className="w-8 xl:w-[2.3rem]" />
            </>
          )}
        </button>
      </form>
      {submit.showMessage && (
        <FormSuccess
          name={submit.name}
          title={form.successTitle}
          message={form.success}
          leaving={submit.status === "leaving"}
          visibleFor={submit.visibleFor}
          onClose={submit.dismiss}
          closeLabel={form.closeLabel}
          className="mt-5 xl:mt-[1.6rem]"
        />
      )}
    </div>
  );
}
