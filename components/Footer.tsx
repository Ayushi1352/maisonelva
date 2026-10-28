import Image from "next/image";
import Link from "next/link";
import { site, type MaisonElvaFooterData, type SectionProps } from "@/data";
import { Facebook, Instagram, Sparkle } from "@/components/Icons";

// The footer shows the same logo as the header
const { brand } = site.navbar;

/** Fills `{year}` in the copyright line; cached so the footer can still be prerendered. */
async function currentYear() {
  "use cache";
  return new Date().getFullYear();
}

function SocialIcon({ platform }: { platform: string }) {
  if (platform === "instagram") return <Instagram className="size-[1.65rem] xl:size-[1.9rem]" />;
  if (platform === "facebook") return <Facebook className="size-[1.65rem] xl:size-[1.95rem]" />;
  return <span className="font-caslon text-[1.6rem] leading-none xl:text-[2.1rem]">E</span>;
}

export default async function Footer({ data: footer = site.footer }: SectionProps<MaisonElvaFooterData>) {
  const copyright = footer.copyright.replace("{year}", String(await currentYear()));

  return (
    <footer className="mt-(--section-gap) bg-footer">
      <div className="px-5 pb-8 pt-14 sm:px-8 md:px-10 md:pt-16 xl:px-0 xl:pb-[3.1rem] xl:pt-[9.375rem]">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr] md:gap-0 xl:flex xl:pl-[8.3rem]">
          {/* Brand */}
          <div className="md:pr-8 xl:w-[47.2rem] xl:shrink-0 xl:pr-0 xl:pt-[2.8rem]">
            <Link href="/" aria-label={brand.name} className="block w-full max-w-[20rem] md:max-w-[22rem] xl:max-w-none xl:w-[42rem]">
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
            <p className="mt-7 font-cormorant text-[1.35rem] italic leading-[1.35] tracking-[0.01em] text-body xl:mt-[4.6rem] xl:text-[1.875rem] xl:leading-[2.5rem]">
              {footer.tagline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:border-l-2 md:border-gold-light md:pl-8 xl:h-[23.75rem] xl:w-[24.5rem] xl:shrink-0 xl:pl-[5.1rem]">
            <h2 className="font-cormorant text-[1.2rem] font-medium uppercase leading-none tracking-[0.22em] text-gold-deep xl:mt-[1.1rem] xl:text-[1.45rem] xl:tracking-[0.25em]">
              {footer.quickLinksTitle}
            </h2>
            <span className="mt-4 block h-[2px] w-10 bg-gold xl:mt-[1.35rem] xl:h-[0.19rem] xl:w-[2.6rem]" aria-hidden="true" />
            <ul className="mt-5 space-y-2 xl:mt-[1.4rem] xl:space-y-0">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block font-cormorant text-[1.2rem] font-medium leading-[1.9] tracking-[0.08em] text-ink transition-colors hover:text-ruby hover:underline hover:underline-offset-4 xl:text-[1.45rem] xl:leading-[3.05rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:border-l-2 md:border-gold-light md:pl-8 xl:pl-[4.8rem]">
            <h2 className="font-cormorant text-[1.2rem] font-medium uppercase leading-none tracking-[0.22em] text-gold-deep xl:mt-[2.6rem] xl:text-[1.45rem] xl:tracking-[0.25em]">
              {footer.followTitle}
            </h2>
            <span className="mt-4 block h-[2px] w-10 bg-gold xl:mt-[1.35rem] xl:h-[0.19rem] xl:w-[2.6rem]" aria-hidden="true" />
            <ul className="mt-7 flex items-center xl:mt-[4.4rem]">
              {footer.socials.map((social, index) => (
                <li key={social.platform} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-4 h-7 w-[2px] bg-gold-light xl:mx-[1.75rem] xl:h-[2.25rem]" aria-hidden="true" />
                  )}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-14 items-center justify-center rounded-full border-[1.5px] border-gold text-ink transition-colors hover:bg-maroon hover:text-white xl:size-[4.5rem] xl:border-2"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 xl:mt-[3.6rem] xl:px-[6.05rem]">
          <div className="flex items-center gap-3 xl:gap-[0.9rem]" aria-hidden="true">
            <span className="h-px flex-1 bg-gold-light xl:h-[2px]" />
            <Sparkle className="size-5 text-gold-deep xl:size-[1.75rem]" />
            <span className="h-px flex-1 bg-gold-light xl:h-[2px]" />
          </div>
          <div className="mt-5 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left xl:mt-[1.7rem] xl:px-[0.6rem]">
            <p className="font-caslon text-[0.7rem] uppercase tracking-[0.16em] text-body xl:text-[0.9rem]">
              {copyright}
            </p>
            <p className="flex items-center gap-3 font-caslon text-[0.65rem] uppercase tracking-[0.18em] text-body xl:gap-[1.5rem] xl:text-[0.78rem]">
              <span className="h-px w-8 bg-gold xl:h-[2px] xl:w-[3.5rem]" aria-hidden="true" />
              <span>
                {footer.motto.map((word, index) => (
                  <span key={word}>
                    {index > 0 && <span className="mx-2 xl:mx-[1rem]">/</span>}
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
