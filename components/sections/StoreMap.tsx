import type { ContactData } from "@/types/templates.types";

export const StoreMap = ({ data }: { data: ContactData }) => {
  const { map } = data;

  return (
    <div className="relative h-64 overflow-hidden sm:h-80 md:h-96 lg:h-[32.35rem]">
      <iframe
        src={data.mapEmbedUrl}
        title={map.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
      <a
        href={data.directionUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 bg-[var(--color-white)] px-4 py-2 font-secondary text-[0.9rem] text-[var(--color-text)] shadow-[0_2px_6px_var(--color-map-button-shadow)] transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-white)] lg:bottom-[1.75rem] lg:left-[1.75rem] lg:px-[1.6rem] lg:py-[0.9rem] lg:text-[1.3rem]"
      >
        {map.openLabel}
      </a>
    </div>
  );
};
