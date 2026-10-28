import Image from "next/image";
import { site, type MaisonElvaMissionVisionData, type SectionProps } from "@/data";
import { Sparkle } from "@/components/Icons";

function Statement({ label, title, text, titleClass }: { label: string; title: string; text: string; titleClass: string }) {
  return (
    <div>
      <p className="font-cormorant text-[1.1rem] font-semibold uppercase leading-none tracking-[0.2em] text-gold-deep xl:text-[1.4rem]">{label}</p>
      <span className="mt-3 block h-[2px] w-12 bg-gold xl:mt-[1rem] xl:w-[3.5rem]" aria-hidden="true" />
      <h2
        className={`mt-2 font-cormorant text-[4rem] font-bold leading-none tracking-[0.01em] [font-variant-caps:small-caps] break-words md:text-[3.4rem] lg:text-[4rem] xl:mt-[0.9rem] xl:text-[7.85rem] ${titleClass}`}
      >
        {title}
      </h2>
      <p className="mt-4 max-w-[27rem] font-cormorant text-[1.3rem] font-medium leading-[1.4] text-ink-soft md:text-[1.2rem] xl:mt-[2.2rem] xl:max-w-[29.6rem] xl:text-[1.9rem] xl:leading-[2.625rem]">
        {text}
      </p>
    </div>
  );
}

export default function MissionVision({ data: about = site.missionVisionSection }: SectionProps<MaisonElvaMissionVisionData>) {
  return (
    <section className="bg-[linear-gradient(180deg,#fcfaf6_0%,#fbf8f4_100%)] px-5 py-14 sm:px-8 md:px-10 xl:relative xl:h-[48.05rem] xl:p-0">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-8 xl:block">
        <div className="xl:absolute xl:left-[10.1rem] xl:top-[10.05rem]">
          <Statement label={about.mission.label} title={about.mission.title} text={about.mission.text} titleClass="text-ruby-deep" />
        </div>

        {/* Arched image with gold outline and star accents */}
        <div className="relative mx-auto w-[15rem] py-16 md:w-[13rem] lg:w-[16rem] xl:absolute xl:left-[49rem] xl:top-[8.4rem] xl:w-[23.06rem] xl:p-0">
          <span className="absolute left-1/2 top-0 flex h-[3.6rem] -translate-x-[60%] flex-col items-center xl:-top-[6.95rem] xl:h-[6.7rem]" aria-hidden="true">
            <span className="w-px flex-1 bg-gold" />
            <Sparkle className="-my-1 size-6 text-gold xl:size-[2.1rem]" />
            <span className="h-2 w-px bg-gold xl:h-[0.6rem]" />
          </span>
          <div className="relative aspect-[369/475]">
            <span
              className="absolute -left-[5.7%] -top-[0.4%] h-full w-full rounded-t-full border-l-2 border-t-2 border-gold"
              aria-hidden="true"
            />
            <div className="absolute inset-0 overflow-hidden rounded-t-full">
              <Image src={about.image} alt={about.imageAlt} fill quality={90} sizes="(min-width: 1280px) 20vw, 240px" className="object-cover" />
            </div>
          </div>
          <span className="absolute bottom-0 left-1/2 flex h-[3.6rem] -translate-x-[60%] flex-col items-center xl:-bottom-[7.6rem] xl:h-[7.6rem]" aria-hidden="true">
            <span className="h-[1.6rem] w-px bg-gold xl:h-[1.6rem]" />
            <Sparkle className="-my-1 size-6 text-gold xl:size-[2.1rem]" />
            <span className="w-px flex-1 bg-gold" />
          </span>
        </div>

        <div className="xl:absolute xl:left-[81.9rem] xl:top-[10.05rem]">
          <Statement label={about.vision.label} title={about.vision.title} text={about.vision.text} titleClass="text-ink" />
        </div>
      </div>
    </section>
  );
}
