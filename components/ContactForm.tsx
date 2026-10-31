"use client";

import { site, type MaisonElvaContactFormData, type SectionProps } from "@/data";
import { useDummySubmit } from "@/components/useDummySubmit";
import { ArrowRight } from "@/components/Icons";
import FormSuccess, { Spinner } from "@/components/FormSuccess";
import { field } from "@/components/styles";

const fieldClass = `${field} h-14 px-5 font-secondary text-[1rem] text-[var(--color-heading)] md:h-16 lg:h-[5.6rem] lg:px-[2.2rem] lg:text-[1.43rem]`;

export default function ContactForm({ data: form = site.contactFormSection }: SectionProps<MaisonElvaContactFormData>) {
  const submit = useDummySubmit();

  return (
    <div className="border-2 border-[var(--color-border-form)] lg:mt-[0.31rem] bg-[linear-gradient(180deg,var(--color-form-bg-top)_0%,var(--color-form-bg-bottom)_100%)] px-5 pb-8 pt-8 sm:px-8 md:px-10 lg:px-0 lg:pb-[3.6rem] lg:pl-[4.7rem] lg:pr-[3.2rem] lg:pt-[4.4rem]">
      <h2 className="font-secondary text-[2rem] leading-tight tracking-[-0.02em] text-[var(--color-heading)] md:text-[2.4rem] lg:text-[3.68rem]">{form.title}</h2>
      <span className="mt-4 block h-[3px] w-16 bg-[var(--color-accent)] lg:mt-[1.6rem] lg:w-[5.6rem]" aria-hidden="true" />
      {/* remounting the form (via key) after each send clears every field */}
      <form
        key={submit.round}
        onSubmit={submit.onSubmit}
        onInput={submit.onInput}
        aria-busy={submit.sending}
        className="mt-7 space-y-4 lg:mt-[4.1rem] lg:space-y-[1.85rem]"
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
          className={`${field} block min-h-32 resize-y px-5 py-4 font-secondary text-[1rem] text-[var(--color-heading)] lg:h-[10.65rem] lg:px-[2.2rem] lg:py-[1.9rem] lg:text-[1.43rem]`}
        />
        <button
          type="submit"
          disabled={submit.sending}
          className="mt-2 inline-flex h-14 items-center justify-center gap-5 border border-[var(--color-secondary)] bg-[var(--color-secondary)] px-8 font-secondary text-[1.05rem] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-secondary)] disabled:cursor-wait disabled:opacity-80 md:h-16 lg:mt-[2.5rem] lg:h-[5.6rem] lg:w-[22.6rem] lg:gap-[1.9rem] lg:px-0 lg:text-[1.75rem]"
        >
          {submit.sending ? (
            <>
              <Spinner className="size-6 lg:size-[1.9rem]" />
              {form.sending}
            </>
          ) : (
            <>
              {form.button}
              <ArrowRight className="w-8 lg:w-[2.3rem]" />
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
          className="mt-5 lg:mt-[1.6rem]"
        />
      )}
    </div>
  );
}
