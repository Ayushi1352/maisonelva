import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import { Diamond, Gift, InfinityLoop, ShieldOutline, Sparkle } from "@/components/Icons";

// Each icon is drawn to the design's proportions; on desktop it gets its design width (height follows the viewBox).
const icons = {
  diamond: { Icon: Diamond, size: "lg:w-[4.34rem]" },
  gift: { Icon: Gift, size: "lg:w-[3.99rem]" },
  shield: { Icon: ShieldOutline, size: "lg:w-[3.63rem]" },
  infinity: { Icon: InfinityLoop, size: "lg:w-[4.63rem]" },
} as const;

// Desktop placement of each feature cell (row, then column), measured from the design:
// icon centre (x) and text start (x / y) inside the cell.
const cells = [
  [
    { icon: "lg:left-[2.17rem]", text: "lg:left-[6.83rem] lg:top-[3.57rem]" },
    { icon: "lg:left-[5.48rem]", text: "lg:left-[10.04rem] lg:top-[3.57rem]", width: "lg:w-[14.5rem]" },
  ],
  [
    { icon: "lg:left-[2.17rem]", text: "lg:left-[7.19rem] lg:top-[4.13rem]" },
    { icon: "lg:left-[5.48rem]", text: "lg:left-[10.39rem] lg:top-[4.13rem]" },
  ],
];

function Heading({ children }: { children: string }) {
  return (
    <>
      <h2 className="font-secondary text-[1rem] uppercase tracking-[0.25em] text-[var(--color-highlights-label)] lg:text-[1.33rem] lg:tracking-[0.228em]">{children}</h2>
      <span className="mt-3 block h-[2px] w-12 bg-[var(--color-highlights-rule)] lg:mt-[1.1rem] lg:w-[3.5rem]" aria-hidden="true" />
    </>
  );
}

type ProductHighlightsProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function ProductHighlights({ data: labels = site.collectionDetailPage, product }: ProductHighlightsProps) {
  const rows = [product.features.slice(0, 2), product.features.slice(2, 4)];

  return (
    <section className="grid gap-12 bg-[var(--color-highlights-bg)] px-5 py-12 sm:px-8 md:px-10 lg:grid-cols-[1fr_auto] lg:gap-0 lg:px-0 lg:pb-[3.84rem] lg:pl-[7.69rem] lg:pr-[6.34rem] lg:pt-[3.4rem] lg:shadow-[inset_0_-0.45rem_0.4rem_-0.3rem_var(--color-highlights-shadow)]">
      {/* Key features */}
      <div className="lg:border-r-2 lg:border-[var(--color-highlights-divider)] lg:pr-[4.98rem]">
        <Heading>{labels.featuresLabel}</Heading>
        <div className="relative mt-8 lg:mt-[1.42rem] lg:h-[26.05rem]">
          {/* Centre divider: vertical line broken around the sparkle, horizontal line likewise */}
          <span className="absolute left-[26.37rem] top-0 hidden h-[11.95rem] w-[2px] -translate-x-1/2 bg-[var(--color-highlights-line)] lg:block" aria-hidden="true" />
          <span className="absolute left-[26.37rem] top-[14.73rem] hidden h-[11.32rem] w-[2px] -translate-x-1/2 bg-[var(--color-highlights-line)] lg:block" aria-hidden="true" />
          <span className="absolute left-0 top-[13.31rem] hidden h-[1.5px] w-[24.91rem] -translate-y-1/2 bg-[var(--color-highlights-line-soft)] lg:block" aria-hidden="true" />
          <span className="absolute left-[27.9rem] right-0 top-[13.31rem] hidden h-[1.5px] -translate-y-1/2 bg-[var(--color-highlights-line-soft)] lg:block" aria-hidden="true" />
          <Sparkle
            className="absolute left-[26.37rem] top-[13.41rem] hidden size-[1.95rem] -translate-x-1/2 -translate-y-1/2 text-[var(--color-highlights-star)] lg:block"
            aria-hidden="true"
          />

          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="grid gap-6 sm:grid-cols-2 sm:gap-0 max-lg:mt-6 max-lg:first:mt-0 lg:h-[13.31rem] lg:grid-cols-[26.37rem_1fr] lg:last:h-[12.74rem]">
              {row.map((feature, index) => {
                const { Icon, size } = icons[feature.icon as keyof typeof icons] ?? icons.diamond;
                const cell = cells[rowIndex][index];
                return (
                  <div key={feature.title} className="relative flex items-start gap-5 lg:block">
                    <span className={`flex w-12 shrink-0 justify-center lg:absolute lg:top-[5.66rem] lg:w-auto lg:-translate-x-1/2 lg:-translate-y-1/2 ${cell.icon}`}>
                      <Icon className={`h-auto w-12 shrink-0 text-[var(--color-highlights-icon)] ${size}`} />
                    </span>
                    <div className={`lg:absolute ${cell.text}`}>
                      <h3 className="font-secondary text-[1.05rem] font-bold leading-tight text-[var(--color-highlights-heading)] lg:whitespace-nowrap lg:text-[1.38rem] lg:leading-none lg:tracking-[-0.02em]">
                        {feature.title}
                      </h3>
                      <p className={`mt-1 font-secondary text-[0.95rem] leading-[1.55] text-[var(--color-highlights-text)] lg:mt-[0.73rem] ${"width" in cell ? cell.width : "lg:w-[17rem]"} lg:text-[1.32rem] lg:leading-[2.13rem]`}>
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
      <div className="lg:pl-[4.06rem]">
        <Heading>{labels.specificationsLabel}</Heading>
        <table className="mt-7 w-full border-collapse font-secondary text-[0.95rem] lg:mt-[1.57rem] lg:w-[43.84rem] lg:text-[1.35rem]">
          <tbody>
            {product.specifications.map((spec) => (
              <tr key={spec.label} className="border border-[var(--color-spec-border)]">
                <th
                  scope="row"
                  className="w-[48%] whitespace-nowrap border-r border-[var(--color-spec-border)] bg-[var(--color-spec-label-bg)] px-4 py-3 text-left font-bold text-[var(--color-highlights-heading)] lg:h-[3.44rem] lg:w-[21.14rem] lg:px-[2.2rem] lg:py-0 lg:text-[1.27rem] lg:tracking-[-0.015em]"
                >
                  {spec.label}
                </th>
                <td className="bg-[var(--color-spec-value-bg)] px-4 py-3 text-[var(--color-highlights-text)] lg:px-[1.75rem] lg:py-0">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
