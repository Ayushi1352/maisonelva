"use client";

import { useState } from "react";
import { site, type MaisonElvaEnquiryFormData, type SectionProps } from "@/data";
import { useDummySubmit } from "@/components/useDummySubmit";
import { ArrowRight, ChevronDown } from "@/components/Icons";
import FormSuccess, { Spinner } from "@/components/FormSuccess";
import { field } from "@/components/styles";

// Text colour is added per field: the selects show the placeholder grey until an option is picked.
const fieldBase = `${field} h-14 px-5 font-ui text-[1rem] md:h-16 lg:h-[5.375rem] lg:px-[2.3rem] lg:text-[1.5rem]`;
const fieldClass = `${fieldBase} text-[var(--color-heading)]`;

function SelectField({ name, placeholder, options, required }: { name: string; placeholder: string; options: string[]; required?: boolean }) {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <select
        name={name}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={`${fieldBase} cursor-pointer pr-12 ${value === "" ? "text-[var(--color-text-subtle)]" : "text-[var(--color-heading)]"}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-[var(--color-heading)]">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-[var(--color-accent-alt)] lg:right-[2.2rem] lg:size-[1.6rem]" />
    </div>
  );
}

export default function EnquiryForm({ data: form = site.enquiryFormSection }: SectionProps<MaisonElvaEnquiryFormData>) {
  const submit = useDummySubmit();

  return (
    <div className="border-2 border-[var(--color-border-form)] bg-[linear-gradient(180deg,var(--color-form-bg-top)_0%,var(--color-form-bg-bottom)_100%)] px-5 pb-8 pt-8 sm:px-8 md:px-10 lg:px-0 lg:pb-[3.7rem] lg:pl-[3.45rem] lg:pr-[3.2rem] lg:pt-[3.4rem]">
      <p className="flex items-center font-sans text-[0.85rem] font-medium uppercase tracking-[0.35em] text-[var(--color-accent-alt)] lg:ml-[0.75rem] lg:text-[1.5rem] lg:tracking-[0.385em]">
        {form.label}
        <span className="ml-4 h-[2px] w-16 bg-gradient-to-r from-[var(--color-accent)] to-transparent lg:ml-[1.2rem] lg:w-[7.6rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-3 font-secondary text-[2.5rem] font-bold leading-[1.1] tracking-[-0.015em] md:text-[3.2rem] lg:ml-[0.75rem] lg:mt-[0.75rem] lg:text-[4.61rem] lg:leading-[6rem]">
        <span className="text-[var(--color-heading)]">{form.titleTop}</span> <span className="text-[var(--color-secondary)]">{form.titleAccent}</span>
      </h2>

      {/* remounting the form (via key) after each send clears every field, including the controlled selects */}
      <form
        key={submit.round}
        onSubmit={submit.onSubmit}
        onInput={submit.onInput}
        aria-busy={submit.sending}
        className="mt-7 space-y-4 lg:mt-[2.72rem] lg:space-y-[1.75rem]"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:gap-[2rem]">
          <input type="text" name="name" required placeholder={form.fields.name} aria-label={form.fields.name} className={fieldClass} />
          <input type="tel" name="phone" required placeholder={form.fields.phone} aria-label={form.fields.phone} className={fieldClass} />
        </div>
        <input type="email" name="email" required placeholder={form.fields.email} aria-label={form.fields.email} className={fieldClass} />
        <SelectField name="enquiryFor" placeholder={form.fields.enquiryFor} options={form.enquiryOptions} required />
        <SelectField name="budget" placeholder={form.fields.budget} options={form.budgetOptions} />
        <textarea
          name="message"
          required
          rows={4}
          placeholder={form.fields.message}
          aria-label={form.fields.message}
          className={`${field} block min-h-32 resize-y px-5 py-4 font-ui text-[1rem] text-[var(--color-heading)] lg:h-[10.8rem] lg:px-[2.3rem] lg:py-[1.7rem] lg:text-[1.5rem]`}
        />
        <button
          type="submit"
          disabled={submit.sending}
          className="mt-2 flex h-14 w-full items-center justify-center gap-5 border border-[var(--color-secondary)] bg-[var(--color-secondary)] font-ui text-[1.1rem] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-secondary)] disabled:cursor-wait disabled:opacity-80 md:h-16 lg:mt-[2.45rem] lg:h-[5.94rem] lg:gap-[2rem] lg:text-[1.75rem]"
        >
          {submit.sending ? (
            <>
              <Spinner className="size-6 lg:size-[1.9rem]" />
              {form.sending}
            </>
          ) : (
            <>
              {form.button}
              <ArrowRight className="w-8 lg:w-[2.4rem]" />
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
