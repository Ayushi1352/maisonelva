import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaFooterData, type SectionProps } from "@/data";
import { Facebook, Instagram, Linkedin, Sparkle } from "@/components/Icons";

// The footer shows the same logo as the header
const { brand } = site.navbar;

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "instagram") return <Instagram className="size-[1.65rem] lg:size-[1.9rem]" />;
  if (platform === "facebook") return <Facebook className="size-[1.65rem] lg:size-[1.95rem]" />;
  return <Linkedin className="size-[1.6rem] lg:size-[1.9rem]" />;
}

export default async function Footer({ data: footer = site.footer }: SectionProps<MaisonElvaFooterData>) {
  const copyright = footer.copyright.replace("{year}", String(await currentYear()));

  return (
    <footer className="mt-[var(--section-gap)] bg-[var(--color-footer-bg)]">
      <div className="px-5 pb-8 pt-14 sm:px-8 md:px-10 md:pt-16 lg:px-0 lg:pb-[3.1rem] lg:pt-[9.375rem]">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] md:gap-0 lg:flex lg:pl-[8.3rem]">
          {/* Brand */}
          <div className="md:pr-8 lg:w-[47.2rem] lg:shrink-0 lg:pr-0 lg:pt-[2.8rem]">
            <Link href="/" aria-label={brand.name} className="block w-full max-w-[20rem] md:max-w-[22rem] lg:max-w-none lg:w-[42rem]">
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                quality={90}
                sizes="(min-width: 1280px) 42rem, 352px"
                className="h-auto w-full"
              />
            </Link>
            <p className="mt-7 font-display text-[1.35rem] italic leading-[1.35] tracking-[0.01em] text-[var(--color-text-light)] lg:mt-[4.6rem] lg:text-[1.875rem] lg:leading-[2.5rem]">
              {footer.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:border-l-2 md:border-[var(--color-accent-light)] md:pl-8 lg:h-[23.75rem] lg:w-[24.5rem] lg:shrink-0 lg:pl-[5.1rem]">
            <h2 className="font-display text-[1.2rem] font-medium uppercase leading-none tracking-[0.22em] text-[var(--color-accent-dark)] lg:mt-[1.1rem] lg:text-[1.45rem] lg:tracking-[0.25em]">
              {footer.quickLinksTitle}
            </h2>
            <span className="mt-4 block h-[2px] w-10 bg-[var(--color-accent)] lg:mt-[1.35rem] lg:h-[0.19rem] lg:w-[2.6rem]" aria-hidden="true" />
            <ul className="mt-5 space-y-2 lg:mt-[1.4rem] lg:space-y-0">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block font-display text-[1.2rem] font-medium leading-[1.9] tracking-[0.08em] text-[var(--color-text)] transition-colors hover:text-[var(--color-secondary)] hover:underline hover:underline-offset-4 lg:text-[1.45rem] lg:leading-[3.05rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:border-l-2 md:border-[var(--color-accent-light)] md:pl-8 lg:pl-[4.8rem]">
            <h2 className="font-display text-[1.2rem] font-medium uppercase leading-none tracking-[0.22em] text-[var(--color-accent-dark)] lg:mt-[2.6rem] lg:text-[1.45rem] lg:tracking-[0.25em]">
              {footer.followTitle}
            </h2>
            <span className="mt-4 block h-[2px] w-10 bg-[var(--color-accent)] lg:mt-[1.35rem] lg:h-[0.19rem] lg:w-[2.6rem]" aria-hidden="true" />
            <ul className="mt-7 flex items-center lg:mt-[4.4rem]">
              {footer.socials.map((social, index) => (
                <li key={social.platform} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-4 h-7 w-[2px] bg-[var(--color-accent-light)] lg:mx-[1.75rem] lg:h-[2.25rem]" aria-hidden="true" />
                  )}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-14 items-center justify-center rounded-full border-[1.5px] border-[var(--color-accent)] text-[var(--color-text)] transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-white)] lg:size-[4.5rem] lg:border-2"
                  >
                    <SocialIcon platform={social.platform} />
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
            <Sparkle className="size-5 text-[var(--color-accent-dark)] lg:size-[1.75rem]" />
            <span className="h-px flex-1 bg-[var(--color-accent-light)] lg:h-[2px]" />
          </div>
          <div className="mt-5 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left lg:mt-[1.7rem] lg:px-[0.6rem]">
            <p className="font-secondary text-[0.7rem] uppercase tracking-[0.16em] text-[var(--color-text-light)] lg:text-[0.9rem]">
              {copyright}
            </p>
            <p className="flex items-center gap-3 font-secondary text-[0.65rem] uppercase tracking-[0.18em] text-[var(--color-text-light)] lg:gap-[1.5rem] lg:text-[0.78rem]">
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
}
