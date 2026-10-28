"use client";

import { useState } from "react";
import { site, type MaisonElvaEnquiryFormData, type SectionProps } from "@/data";
import { useDummySubmit } from "@/lib/useDummySubmit";
import { ArrowRight, ChevronDown } from "@/components/shared/Icons";
import FormSuccess, { Spinner } from "@/components/shared/FormSuccess";

const fieldClass =
  "field h-14 px-5 font-gsans text-[1rem] text-ink md:h-16 xl:h-[5.375rem] xl:px-[2.3rem] xl:text-[1.5rem]";

function SelectField({ name, placeholder, options, required }: { name: string; placeholder: string; options: string[]; required?: boolean }) {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <select
        name={name}
        required={required}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={`${fieldClass} cursor-pointer pr-12 ${value === "" ? "text-subtle!" : ""}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-ink">
            {option}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-5 top-1/2 size-5 -translate-y-1/2 text-gold-deep xl:right-[2.2rem] xl:size-[1.6rem]" />
    </div>
  );
}

export default function EnquiryForm({ data: form = site.enquiryFormSection }: SectionProps<MaisonElvaEnquiryFormData>) {
  const submit = useDummySubmit();

  return (
    <div className="border-2 border-[#f3e4d3] bg-[linear-gradient(180deg,#fdf8f2_0%,#fcf6ef_100%)] px-5 pb-8 pt-8 sm:px-8 md:px-10 xl:px-0 xl:pb-[3.7rem] xl:pl-[3.45rem] xl:pr-[3.2rem] xl:pt-[3.4rem]">
      <p className="flex items-center font-poppins text-[0.85rem] font-medium uppercase tracking-[0.35em] text-gold-deep xl:ml-[0.75rem] xl:text-[1.5rem] xl:tracking-[0.385em]">
        {form.label}
        <span className="ml-4 h-[2px] w-16 bg-gradient-to-r from-gold to-transparent xl:ml-[1.2rem] xl:w-[7.6rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-3 font-caslon text-[2.5rem] font-bold leading-[1.1] tracking-[-0.015em] md:text-[3.2rem] xl:ml-[0.75rem] xl:mt-[0.75rem] xl:text-[4.61rem] xl:leading-[6rem]">
        <span className="text-ink">{form.titleTop}</span> <span className="text-ruby">{form.titleAccent}</span>
      </h2>

      {/* remounting the form (via key) after each send clears every field, including the controlled selects */}
      <form
        key={submit.round}
        onSubmit={submit.onSubmit}
        onInput={submit.onInput}
        aria-busy={submit.sending}
        className="mt-7 space-y-4 xl:mt-[2.72rem] xl:space-y-[1.75rem]"
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:gap-[2rem]">
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
          className="field block min-h-32 resize-y px-5 py-4 font-gsans text-[1rem] text-ink xl:h-[10.8rem] xl:px-[2.3rem] xl:py-[1.7rem] xl:text-[1.5rem]"
        />
        <button
          type="submit"
          disabled={submit.sending}
          className="mt-2 flex h-14 w-full items-center justify-center gap-5 bg-ruby font-gsans text-[1.1rem] text-white transition-colors hover:bg-ruby-dark disabled:cursor-wait disabled:opacity-80 md:h-16 xl:mt-[2.45rem]! xl:h-[5.94rem] xl:gap-[2rem] xl:text-[1.75rem]"
        >
          {submit.sending ? (
            <>
              <Spinner className="size-6 xl:size-[1.9rem]" />
              {form.sending}
            </>
          ) : (
            <>
              {form.button}
              <ArrowRight className="w-8 xl:w-[2.4rem]" />
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
