import { site, type MaisonElvaCollectionDetailData, type MaisonElvaProduct as Product, type SectionProps } from "@/data";
import { Diamond, Gift, InfinityLoop, ShieldOutline, Sparkle } from "@/components/shared/Icons";

const icons = {
  diamond: Diamond,
  gift: Gift,
  shield: ShieldOutline,
  infinity: InfinityLoop,
} as const;

function Heading({ children }: { children: string }) {
  return (
    <>
      <h2 className="font-caslon text-[1rem] uppercase tracking-[0.3em] text-gold-deep xl:text-[1.33rem] xl:tracking-[0.27em]">{children}</h2>
      <span className="mt-3 block h-[2px] w-12 bg-gold xl:mt-[1.1rem] xl:w-[3.5rem]" aria-hidden="true" />
    </>
  );
}

type ProductHighlightsProps = SectionProps<MaisonElvaCollectionDetailData> & { product: Product };

export default function ProductHighlights({ data: labels = site.collectionDetailPage, product }: ProductHighlightsProps) {
  const rows = [product.features.slice(0, 2), product.features.slice(2, 4)];

  return (
    <section className="grid gap-12 px-5 sm:px-8 md:px-10 xl:grid-cols-[1fr_47.6rem] xl:gap-0 xl:px-0 xl:pl-[7.9rem] xl:pr-[6.4rem]">
      {/* Key features */}
      <div className="xl:border-r-2 xl:border-[#efe6dc] xl:pr-[5rem]">
        <Heading>{labels.featuresLabel}</Heading>
        <div className="mt-8 xl:mt-[4.65rem]">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {rowIndex > 0 && (
                <div className="my-6 flex items-center xl:my-[2.3rem]" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#e6d6c3]" />
                  <Sparkle className="mx-1 size-5 text-gold xl:size-[1.7rem]" />
                  <span className="h-px flex-1 bg-[#e6d6c3]" />
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-0">
                {row.map((feature, index) => {
                  const Icon = icons[feature.icon as keyof typeof icons] ?? Diamond;
                  return (
                    <div
                      key={feature.title}
                      className={`flex items-start gap-5 xl:gap-[2.4rem] ${index === 1 ? "sm:border-l sm:border-[#e6d6c3] sm:pl-6 xl:pl-[3.4rem]" : "sm:pr-6"}`}
                    >
                      <Icon className="mt-1 w-12 shrink-0 text-gold-deep xl:mt-[0.3rem] xl:w-[4.4rem]" />
                      <div>
                        <h3 className="font-caslon text-[1.05rem] font-bold text-ink xl:text-[1.45rem]">{feature.title}</h3>
                        <p className="mt-1 font-caslon text-[0.95rem] leading-[1.55] text-muted xl:max-w-[17rem] xl:mt-[0.3rem] xl:text-[1.3rem] xl:leading-[2.1rem]">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specifications table */}
      <div className="xl:pl-[3.9rem]">
        <Heading>{labels.specificationsLabel}</Heading>
        <table className="mt-7 w-full border-collapse font-caslon text-[0.95rem] xl:mt-[1.85rem] xl:text-[1.35rem]">
          <tbody>
            {product.specifications.map((spec) => (
              <tr key={spec.label} className="border border-[#ece3d9]">
                <th scope="row" className="w-[48%] whitespace-nowrap border-r border-[#ece3d9] bg-[#f6f1ec] px-4 py-3 text-left font-bold text-ink xl:h-[3.44rem] xl:w-[21.25rem] xl:px-[2.3rem] xl:py-0">
                  {spec.label}
                </th>
                <td className="bg-[#fdfbf9] px-4 py-3 text-body xl:px-[1.9rem] xl:py-0">{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
