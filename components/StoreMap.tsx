import { site, type MaisonElvaContactData, type SectionProps } from "@/data";

export default function StoreMap({ data = site.contactPage }: SectionProps<MaisonElvaContactData>) {
  const { map, info } = data;
  // Built from the "Our Location" lines so the map always shows the listed address
  const address = (info.find((item) => item.icon === "location")?.lines ?? []).map((line) => line.replace(/,$/, "")).join(", ");
  const query = encodeURIComponent(address);

  return (
    <div className="relative h-64 overflow-hidden sm:h-80 md:h-96 lg:h-[32.35rem]">
      <iframe
        src={`https://maps.google.com/maps?q=${query}&z=15&output=embed`}
        title={map.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 bg-[var(--color-white)] px-4 py-2 font-secondary text-[0.9rem] text-[var(--color-text)] shadow-[0_2px_6px_var(--color-map-button-shadow)] transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] lg:bottom-[1.75rem] lg:left-[1.75rem] lg:px-[1.6rem] lg:py-[0.9rem] lg:text-[1.3rem]"
      >
        {map.openLabel}
      </a>
    </div>
  );
}
