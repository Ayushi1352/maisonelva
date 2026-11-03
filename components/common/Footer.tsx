import Image from "next/image";
import Link from "next/link";
import type { FooterData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

export const Footer = async ({ data: footer }: { data?: FooterData }) => {
  if (!footer) return null;
  const copyright = footer.copyrightText.replace("{year}", String(await currentYear()));

  return (
    <footer className="mt-[var(--section-gap)] bg-[var(--color-footer-bg)]">
      <div className="px-5 pb-8 pt-14 sm:px-8 md:px-10 md:pt-16 lg:px-0 lg:pb-[3.1rem] lg:pt-[9.375rem]">
        <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-10 sm:gap-x-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-0 lg:flex lg:justify-between lg:gap-[4rem] lg:pl-[8.3rem] lg:pr-[6.6rem]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 md:pr-8 lg:min-w-0 lg:pr-0">
            <Link href={footer.logoUrl} aria-label={footer.logoLabel} className="block w-full max-w-[13rem] md:max-w-[19rem] lg:w-[36rem] lg:max-w-full">
              <Image
                src={footer.logo}
                alt={footer.logoAlt}
                width={footer.logoWidth}
                height={footer.logoHeight}
                quality={90}
                sizes="(min-width: 1024px) 36rem, (min-width: 768px) 304px, 208px"
                className="h-auto w-full"
              />
            </Link>
            <p className="mt-6 font-display text-[1.35rem] italic font-medium leading-[1.35] tracking-[0.01em] text-[var(--color-text-soft)] lg:mt-[3.4rem] lg:text-[1.875rem] lg:leading-[2.5rem]">
              {footer.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <ul aria-label={footer.followTitle} className="mt-5 flex items-center lg:mt-[1.6rem]">
              {footer.socialLinks.map((social, index) => (
                <li key={social.id} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-4 h-7 w-[2px] bg-[var(--color-accent-light)] lg:mx-[1.5rem] lg:h-[2rem]" aria-hidden="true" />
                  )}
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-12 items-center justify-center rounded-full border-[1.5px] border-[var(--color-accent)] text-[var(--color-text)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] lg:size-[3.75rem] lg:border-2"
                  >
                    <Icon name={social.icon} className="size-[1.4rem] lg:size-[1.6rem]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:border-l-2 md:border-[var(--color-accent-light)] md:pl-8 lg:h-[23.75rem] lg:shrink-0 lg:pl-[5rem]">
            <h2 className="font-display text-[0.95rem] font-semibold uppercase leading-none tracking-[0.14em] sm:text-[1.2rem] sm:tracking-[0.22em] text-[var(--color-primary)] sm:text-[var(--color-accent-dark)] lg:mt-[1.1rem] lg:text-[1.45rem] lg:tracking-[0.25em]">
              {footer.quickLinksTitle}
            </h2>
            <span className="mt-4 block h-[2px] w-10 bg-[var(--color-accent)] lg:mt-[1.35rem] lg:h-[0.19rem] lg:w-[2.6rem]" aria-hidden="true" />
            <ul className="mt-5 space-y-2 lg:mt-[1.4rem] lg:space-y-0">
              {footer.quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.url}
                    className="inline-block font-display text-[1.05rem] font-bold leading-[1.9] sm:font-semibold tracking-[0.06em] sm:text-[1.2rem] sm:tracking-[0.08em] text-[var(--color-text)] transition-colors hover:text-[var(--color-secondary)] hover:underline hover:underline-offset-4 lg:text-[1.45rem] lg:leading-[3.05rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0 border-l-2 border-[var(--color-accent-light)] pl-5 sm:pl-8 lg:pl-[5rem]">
            <h2 className="font-display text-[0.95rem] font-semibold uppercase leading-none tracking-[0.14em] sm:text-[1.2rem] sm:tracking-[0.22em] text-[var(--color-primary)] sm:text-[var(--color-accent-dark)] lg:mt-[1.1rem] lg:text-[1.45rem] lg:tracking-[0.25em]">
              {footer.contactTitle}
            </h2>
            <span className="mt-4 block h-[2px] w-10 bg-[var(--color-accent)] lg:mt-[1.35rem] lg:h-[0.19rem] lg:w-[2.6rem]" aria-hidden="true" />
            <ul className="mt-5 space-y-4 lg:mt-[2.2rem] lg:space-y-[1.6rem]">
              {footer.contactDetails.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    {...(item.url.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex items-start gap-2 font-display text-[1rem] font-bold leading-[1.45] sm:font-semibold sm:gap-3 sm:text-[1.2rem] tracking-[0.04em] text-[var(--color-text)] transition-colors hover:text-[var(--color-secondary)] lg:gap-[1rem] lg:text-[1.45rem]"
                  >
                    <Icon name={item.icon} className="mt-[0.25rem] size-[0.95rem] shrink-0 sm:mt-[0.3rem] sm:size-[1.05rem] text-[var(--color-accent-dark)] lg:size-[1.25rem]" />
                    <span className={item.url.startsWith("tel:") || item.url.startsWith("mailto:") ? "whitespace-nowrap" : "break-words"}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 lg:mt-[3.6rem] lg:px-[6.05rem]">
          <div className="flex items-center gap-3 lg:gap-[0.9rem]" aria-hidden="true">
            <span className="h-px flex-1 bg-[var(--color-accent-light)] lg:h-[2px]" />
            <Icon name="PiStarFourFill" className="size-5 text-[var(--color-accent-dark)] lg:size-[1.75rem]" />
            <span className="h-px flex-1 bg-[var(--color-accent-light)] lg:h-[2px]" />
          </div>
          <div className="mt-5 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left lg:mt-[1.7rem] lg:px-[0.6rem]">
            <p className="font-secondary text-[0.75rem] uppercase tracking-[0.16em] text-[var(--color-text)] sm:text-[var(--color-text-soft)] lg:text-[1rem]">
              {copyright}
            </p>
            <p className="flex items-center gap-3 font-secondary text-[0.7rem] uppercase tracking-[0.18em] text-[var(--color-text)] sm:text-[var(--color-text-soft)] lg:gap-[1.5rem] lg:text-[0.9rem]">
              <span className="h-px w-8 bg-[var(--color-accent)] lg:h-[2px] lg:w-[3.5rem]" aria-hidden="true" />
              <span>
                {footer.motto.map((word, index) => (
                  <span key={word}>
                    {index > 0 && <span className="mx-2 lg:mx-[1rem]">/</span>}
                    {word}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
