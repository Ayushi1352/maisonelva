"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site, type MaisonElvaHeaderData, type SectionProps } from "@/data";
import { ArrowRight, Close, Menu } from "@/components/Icons";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ data = site.navbar }: SectionProps<MaisonElvaHeaderData>) {
  const { brand, navigation: links, cta, labels } = data;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg-main)]">
      <div className="flex h-20 items-center justify-between px-4 sm:px-6 md:h-24 md:px-10 lg:h-[9.375rem] lg:pl-[3.75rem] lg:pr-[2.3rem]">
        <Link href="/" aria-label={brand.name} className="block shrink-0">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            width={brand.logo.width}
            height={brand.logo.height}
            preload
            quality={90}
            sizes="(min-width: 1280px) 28rem, 260px"
            className="h-auto w-[11.5rem] sm:w-[13.5rem] md:w-[16rem] lg:w-[27.5rem]"
          />
        </Link>

        <nav aria-label={labels.mainNav} className="ml-auto hidden items-center lg:flex">
          <ul className="flex items-center gap-[2.36rem] pt-[0.5rem]">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block font-navigation text-[1.52rem] leading-none tracking-[-0.01em] transition-colors hover:text-[var(--color-secondary)] ${
                      active ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-[1.05rem] -left-[0.45rem] -right-[0.45rem] h-[0.25rem] bg-[var(--color-primary)] transition-transform duration-300 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          <span className="ml-[2.875rem] h-[4.7rem] w-[2px] bg-[var(--color-primary-light)]" aria-hidden="true" />
          <Link
            href={cta.href}
            className="ml-[2.1rem] flex h-[4.375rem] w-[16.25rem] items-center justify-center gap-[2.1rem] border border-[var(--color-primary)] bg-[var(--color-primary)] font-navigation text-[1.625rem] tracking-[-0.01em] text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary)]"
          >
            {cta.label}
            <ArrowRight className="w-[1.4rem]" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? labels.closeMenu : labels.openMenu}
          className="flex size-11 items-center justify-center text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)] lg:hidden"
        >
          {open ? <Close className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {/* Mobile / tablet menu: fills the screen below the bar, so the page behind never shows */}
      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-full h-[calc(100dvh-5rem)] origin-top overflow-y-auto overscroll-contain border-t border-[var(--color-border)] bg-[var(--color-bg-main)] md:h-[calc(100dvh-6rem)] shadow-[0_18px_30px_var(--color-menu-shadow)] transition-[opacity,transform] duration-300 lg:hidden ${
          open ? "visible scale-y-100 opacity-100" : "invisible scale-y-95 opacity-0"
        }`}
      >
        <nav aria-label={labels.mobileNav} className="px-4 pb-8 pt-4 sm:px-6 md:px-10">
          <ul className="flex flex-col">
            {links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="border-b border-[var(--color-menu-divider)]">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3.5 font-navigation text-lg transition-colors hover:text-[var(--color-secondary)] ${
                      active ? "text-[var(--color-primary)]" : "text-[var(--color-text)]"
                    }`}
                  >
                    {link.label}
                    {active && <span className="h-[2px] w-6 bg-[var(--color-primary)]" aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className="mt-6 flex h-12 w-full items-center justify-center gap-4 border border-[var(--color-primary)] bg-[var(--color-primary)] font-navigation text-lg text-[var(--color-white)] transition-colors hover:bg-[var(--color-white)] hover:text-[var(--color-primary)] sm:w-64"
          >
            {cta.label}
            <ArrowRight className="w-5" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
