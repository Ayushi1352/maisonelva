import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import { Diamond, Gift, InfinityLoop, ShieldOutline, Sparkle } from "@/components/Icons";

// Each icon is drawn to the design's proportions; on desktop it gets its design width (height follows the viewBox).
const icons = {
  diamond: { Icon: Diamond, size: "xl:w-[4.34rem]" },
  gift: { Icon: Gift, size: "xl:w-[3.99rem]" },
  shield: { Icon: ShieldOutline, size: "xl:w-[3.63rem]" },
  infinity: { Icon: InfinityLoop, size: "xl:w-[4.63rem]" },
} as const;

// Desktop placement of each feature cell (row, then column), measured from the design:
// icon centre (x) and text start (x / y) inside the cell.
const cells = [
  [
    { icon: "xl:left-[2.17rem]", text: "xl:left-[6.83rem] xl:top-[3.57rem]" },
    { icon: "xl:left-[5.48rem]", text: "xl:left-[10.04rem] xl:top-[3.57rem]", width: "xl:w-[14.5rem]" },
  ],
  [
    { icon: "xl:left-[2.17rem]", text: "xl:left-[7.19rem] xl:top-[4.13rem]" },
    { icon: "xl:left-[5.48rem]", text: "xl:left-[10.39rem] xl:top-[4.13rem]" },
  ],
];

function Heading({ children }: { children: string }) {
  return (
    <>
      <h2 className="font-caslon text-[1rem] uppercase tracking-[0.25em] text-[#b07a48] xl:text-[1.33rem] xl:tracking-[0.228em]">{children}</h2>
      <span className="mt-3 block h-[2px] w-12 bg-[#d4a571] xl:mt-[1.1rem] xl:w-[3.5rem]" aria-hidden="true" />
    </>
  );
}

type ProductHighlightsProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function ProductHighlights({ data: labels = site.collectionDetailPage, product }: ProductHighlightsProps) {
  const rows = [product.features.slice(0, 2), product.features.slice(2, 4)];

  return (
    <section className="grid gap-12 bg-[#fbfaf8] px-5 py-12 sm:px-8 md:px-10 xl:grid-cols-[1fr_auto] xl:gap-0 xl:px-0 xl:pb-[3.84rem] xl:pl-[7.69rem] xl:pr-[6.34rem] xl:pt-[3.4rem] xl:shadow-[inset_0_-0.45rem_0.4rem_-0.3rem_#f3ece4]">
      {/* Key features */}
      <div className="xl:border-r-2 xl:border-[#f3eee9] xl:pr-[4.98rem]">
        <Heading>{labels.featuresLabel}</Heading>
        <div className="relative mt-8 xl:mt-[1.42rem] xl:h-[26.05rem]">
          {/* Centre divider: vertical line broken around the sparkle, horizontal line likewise */}
          <span className="absolute left-[26.37rem] top-0 hidden h-[11.95rem] w-[2px] -translate-x-1/2 bg-[#efe3d6] xl:block" aria-hidden="true" />
          <span className="absolute left-[26.37rem] top-[14.73rem] hidden h-[11.32rem] w-[2px] -translate-x-1/2 bg-[#efe3d6] xl:block" aria-hidden="true" />
          <span className="absolute left-0 top-[13.31rem] hidden h-[1.5px] w-[24.91rem] -translate-y-1/2 bg-[#f0e6dc] xl:block" aria-hidden="true" />
          <span className="absolute left-[27.9rem] right-0 top-[13.31rem] hidden h-[1.5px] -translate-y-1/2 bg-[#f0e6dc] xl:block" aria-hidden="true" />
          <Sparkle
            className="absolute left-[26.37rem] top-[13.41rem] hidden size-[1.95rem] -translate-x-1/2 -translate-y-1/2 text-[#c27a24] xl:block"
            aria-hidden="true"
          />

          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid gap-6 sm:grid-cols-2 sm:gap-0 max-xl:mt-6 max-xl:first:mt-0 xl:h-[13.31rem] xl:grid-cols-[26.37rem_1fr] xl:last:h-[12.74rem]">
              {row.map((feature, index) => {
                const { Icon, size } = icons[feature.icon as keyof typeof icons] ?? icons.diamond;
                const cell = cells[rowIndex][index];
                return (
                  <div key={feature.title} className="relative flex items-start gap-5 xl:block">
                    <span className={`flex w-12 shrink-0 justify-center xl:absolute xl:top-[5.66rem] xl:w-auto xl:-translate-x-1/2 xl:-translate-y-1/2 ${cell.icon}`}>
                      <Icon className={`h-auto w-12 shrink-0 text-[#b06620] ${size}`} />
                    </span>
                    <div className={`xl:absolute ${cell.text}`}>
                      <h3 className="font-caslon text-[1.05rem] font-bold leading-tight text-[#1c1f24] xl:whitespace-nowrap xl:text-[1.38rem] xl:leading-none xl:tracking-[-0.02em]">
                        {feature.title}
                      </h3>
                      <p className={`mt-1 font-caslon text-[0.95rem] leading-[1.55] text-[#67686b] xl:mt-[0.73rem] ${"width" in cell ? cell.width : "xl:w-[17rem]"} xl:text-[1.32rem] xl:leading-[2.13rem]`}>
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Specifications table */}
      <div className="xl:pl-[4.06rem]">
        <Heading>{labels.specificationsLabel}</Heading>
        <table className="mt-7 w-full border-collapse font-caslon text-[0.95rem] xl:mt-[1.57rem] xl:w-[43.84rem] xl:text-[1.35rem]">
          <tbody>
            {product.specifications.map((spec) => (
              <tr key={spec.label} className="border border-[#ebe3da]">
                <th
                  scope="row"
                  className="w-[48%] whitespace-nowrap border-r border-[#ebe3da] bg-[#f4efe9] px-4 py-3 text-left font-bold text-[#1c1f24] xl:h-[3.44rem] xl:w-[21.14rem] xl:px-[2.2rem] xl:py-0 xl:text-[1.27rem] xl:tracking-[-0.015em]"
                >
                  {spec.label}
                </th>
                <td className="bg-[#f8f5f1] px-4 py-3 text-[#67686b] xl:px-[1.75rem] xl:py-0">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
