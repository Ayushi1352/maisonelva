import { Close } from "@/components/Icons";

type FormSuccessProps = {
  name: string;
  title: string;
  message: string;
  leaving: boolean;
  visibleFor: number;
  onClose: () => void;
  closeLabel: string;
  className?: string;
};

/** Thank-you card shown after a (dummy) form submission; fades out on its own */
export default function FormSuccess({ name, title, message, leaving, visibleFor, onClose, closeLabel, className = "" }: FormSuccessProps) {
  const heading = name ? title.replace("{name}", name) : title.replace(", {name}", "").replace("{name}", "");

  return (
    <div
      role="status"
      aria-live="polite"
      className={`relative overflow-hidden rounded-[0.35rem] border border-[var(--color-success-border)] bg-[var(--color-success-bg)] pl-4 pr-11 pt-4 pb-5 shadow-[0_0.5rem_1.5rem_var(--color-success-shadow)] animate-fade-in transition-[opacity,transform] ease-[ease] lg:pl-[1.4rem] lg:pr-[3.6rem] lg:pt-[1.3rem] lg:pb-[1.5rem] ${
        // fades in when shown; fades out (duration = fadeFor in useDummySubmit) before it is removed
        leaving ? "-translate-y-[6px] opacity-0 duration-[400ms]" : "duration-[450ms]"
      } ${className}`}
    >
      <div className="flex items-start gap-3 lg:gap-[1rem]">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-success)] text-[var(--color-white)] lg:size-[2.4rem]" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" className="size-4 lg:size-[1.25rem]">
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <div>
          <p className="font-secondary text-[1.1rem] font-bold leading-snug text-[var(--color-success-heading)] lg:text-[1.6rem]">{heading}</p>
          <p className="mt-1 font-ui text-[0.95rem] leading-relaxed text-[var(--color-success-text)] lg:mt-[0.3rem] lg:text-[1.25rem]">{message}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="absolute right-2.5 top-2.5 flex size-8 items-center justify-center rounded-full text-[var(--color-success-text)] transition-colors hover:bg-[var(--color-success-hover)] lg:right-[0.9rem] lg:top-[0.9rem] lg:size-[2.4rem]"
      >
        <Close className="size-4 lg:size-[1.3rem]" />
      </button>
      {/* time left before the message closes itself */}
      <span
        className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--color-success)] opacity-60 animate-shrink-width"
        style={{ animationDuration: `${visibleFor}ms` }}
        aria-hidden="true"
      />
    </div>
  );
}

/** small spinner for the submit button while the dummy request runs */
export function Spinner({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`animate-spin ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
