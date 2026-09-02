import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "О нас | Государственный ансамбль танца «Вайнах»",
  description:
    "История, руководство и творческий состав Государственного академического ансамбля танца «Вайнах».",
};

export default function AboutPage() {
  const sections = [
    {
      title: "История ансамбля",
      desc: "От основания в 1939 году до всемирного признания. Традиции и победы легендарного коллектива.",
      href: "/about/history",
      badge: "Наследие",
    },
    {
      title: "Руководство",
      desc: "Административно-управленческий персонал и художественные руководители ансамбля.",
      href: "/management",
      badge: "АУП",
    },
    {
      title: "Артисты ансамбля",
      desc: "Ведущие солисты, мастера балетной труппы и виртуозы оркестра народных инструментов.",
      href: "/troupe",
      badge: "Творческий состав",
    },
  ];

  return (
    <main className="pt-32 pb-20 bg-brand-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        {/* Заголовок страницы */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            О коллективе
          </span>
          <h1 className="font-sans font-bold text-4xl md:text-6xl text-brand-dark mb-6 leading-tight">
            Государственный академический ансамбль танца «Вайнах»
          </h1>
          <p className="text-brand-dark/80 text-lg md:text-xl leading-relaxed">
            Визитная карточка чеченского народа, хранящая многовековые традиции
            национальной хореографии и музыки.
          </p>
        </div>

        {/* Навигационные карточки ключевых разделов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {sections.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between transition-all duration-300 hover:border-brand-orange hover:bg-white hover:shadow-md"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-4">
                  {item.badge}
                </span>
                <h2 className="font-sans font-bold text-2xl text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-brand-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-dark/10 flex items-center justify-between text-xs uppercase tracking-widest font-bold text-brand-dark group-hover:text-brand-orange transition-colors">
                <span>Подробнее</span>
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
