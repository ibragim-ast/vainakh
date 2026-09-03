import Link from "next/link";

interface GovBanner {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  badge?: string;
}

const govBanners: GovBanner[] = [
  {
    id: "minkult-chr",
    title: "Министерство культуры ЧР",
    subtitle: "Официальный портал ведомства",
    url: "https://mk-chr.ru",
    badge: "Учредитель",
  },
  {
    id: "gosuslugi",
    title: "Госуслуги",
    subtitle: "Портал государственных услуг РФ",
    url: "https://www.gosuslugi.ru",
  },
  {
    id: "bus-gov",
    title: "bus.gov.ru",
    subtitle: "Официальный сайт для размещения информации о госучреждениях",
    url: "https://bus.gov.ru",
  },
  {
    id: "minkult-rf",
    title: "Минкультуры России",
    subtitle: "Официальный сайт Министерства",
    url: "https://culture.gov.ru",
  },
  {
    id: "culture-rf",
    title: "Культура.РФ",
    subtitle: "Гуманитарный просветительский проект",
    url: "https://www.culture.ru",
  },
  {
    id: "nacproekt",
    title: "Национальные проекты России",
    subtitle: "Нацпроект «Культура»",
    url: "https://национальныепроекты.рф",
  },
];

export default function GovWidgets() {
  // Дублируем массив для бесшовного зацикливания бегущей строки
  const marqueeItems = [...govBanners, ...govBanners];

  return (
    <section
      aria-label="Государственные ресурсы и партнеры"
      className="border-t border-brand-dark/10 bg-brand-light/60 py-8 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-4">
        <h3 className="text-xs uppercase tracking-widest font-bold text-brand-dark/50">
          Официальные ресурсы и ведомства
        </h3>
      </div>

      <div className="flex overflow-hidden select-none mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee gap-4 flex py-2">
          {marqueeItems.map((banner, idx) => (
            <Link
              key={`${banner.id}-${idx}`}
              href={banner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-4 w-72 shrink-0 rounded-sm border border-brand-dark/15 bg-white/70 hover:bg-white hover:border-brand-orange transition-all shadow-xs"
              aria-label={`Перейти на ${banner.title}`}
            >
              <div>
                {banner.badge && (
                  <span className="inline-block text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 mb-1.5 bg-brand-orange/10 text-brand-orange rounded-xs">
                    {banner.badge}
                  </span>
                )}
                <h4 className="font-sans font-bold text-sm text-brand-dark group-hover:text-brand-orange transition-colors truncate">
                  {banner.title}
                </h4>
                <p className="text-xs text-brand-dark/60 mt-1 line-clamp-2 leading-tight">
                  {banner.subtitle}
                </p>
              </div>

              <span className="inline-flex items-center text-[11px] font-bold text-brand-dark/40 group-hover:text-brand-orange mt-3 transition-colors">
                Перейти{" "}
                <span className="ml-1 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
