import type { ContactData } from "@/types/templates.types";
import { Icon } from "@/components/ui/Icon";

export const GetInTouch = ({ data }: { data: ContactData }) => {
  const { touch, info } = data;
  return (
    <div>
      <p className="flex items-center font-secondary text-[0.85rem] uppercase tracking-[0.3em] text-[var(--color-heading)] lg:text-[1.375rem]">
        {touch.eyebrow}
        <span className="ml-4 h-[2px] w-20 bg-gradient-to-r from-[var(--color-accent)] to-transparent lg:ml-[1rem] lg:w-[9.2rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-4 text-balance font-editorial text-[1.95rem] font-semibold leading-[1.15] tracking-[-0.02em] min-[400px]:text-[2.2rem] sm:text-[2.5rem] sm:leading-[1.1] md:text-[3.2rem] lg:mt-[1.3rem] lg:text-[4.75rem] lg:leading-[5.45rem]">
        <span className="text-[var(--color-heading)]">{touch.title}</span> <span className="text-[var(--color-secondary)]">{touch.titleHighlight}</span>
      </h2>
      <p className="mt-4 max-w-[54rem] font-secondary text-[1rem] leading-[1.7] text-[var(--color-text-light)] md:text-[1.1rem] lg:mt-[1rem] lg:text-[1.8rem] lg:leading-[2.875rem]">
        {touch.description}
      </p>

      <ul className="mt-10 grid gap-8 sm:grid-cols-3 lg:mt-[2.7rem] lg:gap-0">
        {info.map((item, index) => {
          return (
            <li
              key={item.id}
              className="relative min-w-0 text-center sm:px-4 lg:px-[2.5rem]"
            >
              {index > 0 && (
                <span className="absolute bottom-[0.6rem] left-0 top-[1.7rem] hidden w-[2px] bg-[var(--color-contact-rule)] lg:block" aria-hidden="true" />
              )}
              <span className="mx-auto flex size-[4.5rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,var(--color-icon-badge-light)_0%,var(--color-icon-badge-mid)_60%,var(--color-icon-badge-dark)_100%)] text-[var(--color-accent-alt)] lg:size-[7rem]">
                <Icon name={item.icon} className="size-9 lg:size-[4.3rem]" />
              </span>
              <h3 className="mt-4 font-secondary text-[1.4rem] leading-tight tracking-[-0.02em] text-[var(--color-heading)] lg:mt-[1.58rem] lg:text-[2.6rem]">
                {item.title}
              </h3>
              <ul className="mt-2 lg:mt-[0.15rem]">
                {item.lines.map((line, lineIndex) => {
                  const href = item.urls?.[lineIndex];
                  return (
                    <li key={line} className="font-secondary text-[1rem] leading-[1.6] text-[var(--color-text-muted)] lg:text-[1.75rem] lg:leading-[2.65rem]">
                      {href ? (
                        <a href={href} className="break-words transition-colors hover:text-[var(--color-secondary)] hover:underline hover:underline-offset-4">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
