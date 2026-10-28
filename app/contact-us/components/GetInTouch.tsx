import { site, type MaisonElvaContactData, type SectionProps } from "@/data";
import { Globe, Mail, MapPin, PhoneCall } from "@/components/shared/Icons";

const icons = {
  location: MapPin,
  phone: PhoneCall,
  globe: Globe,
  mail: Mail,
} as const;

export default function GetInTouch({ data = site.contactPage }: SectionProps<MaisonElvaContactData>) {
  const { touch, info } = data;
  return (
    <div>
      <p className="flex items-center font-caslon text-[0.85rem] uppercase tracking-[0.3em] text-ink xl:text-[1.375rem]">
        {touch.label}
        <span className="ml-4 h-[2px] w-20 bg-gradient-to-r from-gold to-transparent xl:ml-[1rem] xl:w-[9.2rem]" aria-hidden="true" />
      </p>
      <h2 className="mt-4 font-caslon text-[2.3rem] font-bold leading-[1.15] tracking-[-0.02em] md:text-[3rem] xl:mt-[1.4rem] xl:text-[4.59rem] xl:leading-[5.6rem]">
        <span className="text-ink">{touch.titleTop}</span> <span className="text-ruby">{touch.titleAccent}</span>
      </h2>
      <p className="mt-4 max-w-[54rem] font-caslon text-[1rem] leading-[1.7] text-body md:text-[1.1rem] xl:mt-[1rem] xl:text-[1.8rem] xl:leading-[2.875rem]">
        {touch.description}
      </p>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 xl:mt-[2.7rem] xl:grid-cols-[26.6rem_27.8rem_28.75rem_1fr] xl:gap-0">
        {info.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <li
              key={item.title}
              className={`relative ${index > 0 ? "xl:pl-[4.75rem]" : ""} ${index === 3 ? "xl:pl-[4.95rem]" : ""}`}
            >
              {index > 0 && (
                <span className="absolute left-0 top-[1.7rem] hidden h-[15.6rem] w-[2px] bg-[#ead7c2] xl:block" aria-hidden="true" />
              )}
              <span className="flex size-[4.5rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_40%_35%,#fdeedd_0%,#fbe6d0_60%,#f8dcc0_100%)] text-gold-deep xl:size-[7rem]">
                <Icon className="size-9 xl:size-[4.3rem]" />
              </span>
              <h3 className="mt-4 font-caslon text-[1.4rem] leading-tight tracking-[-0.02em] text-ink xl:mt-[1.58rem] xl:text-[2.6rem]">
                {item.title}
              </h3>
              <ul className="mt-2 xl:mt-[0.15rem]">
                {item.lines.map((line, lineIndex) => {
                  const href = "hrefs" in item ? item.hrefs?.[lineIndex] : undefined;
                  return (
                    <li key={line} className="font-caslon text-[1rem] leading-[1.6] text-muted xl:text-[1.75rem] xl:leading-[2.65rem]">
                      {href ? (
                        <a href={href} className="break-words transition-colors hover:text-ruby">
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
}
