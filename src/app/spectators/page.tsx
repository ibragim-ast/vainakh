import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Зрителям | Ансамбль Вайнах",
  description: "Информация для зрителей ансамбля",
};

export default function SpectatorsPage() {
  const spectatorCards = [
    {
      title: "Билеты и правила",
      desc: "Покупка онлайн, правила возврата, льготные категории и программа «Пушкинская карта».",
      href: "/tickets",
      badge: "Правила и льготы",
    },
    {
      title: "Вопрос — ответ (FAQ)",
      desc: "Ответы на популярные вопросы: дресс-код, фотосъемка, цветы и порядок входа в зал.",
      href: "/faq",
      badge: "Справочник",
    },
    {
      title: "Фотоархив зрителей",
      desc: "Бесплатное скачивание снимков из фотозон и залов с прошедших сольных концертов.",
      href: "/audience",
      badge: "Медиа",
    },
  ];

  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <section>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-dark">
            Зрителям
          </h1>
          <p className="text-brand-dark/80 text-lg mb-12 max-w-3xl leading-relaxed">
            Информация для зрителей
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spectatorCards.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-brand-dark/15 bg-white/40 p-8 rounded-sm flex flex-col justify-between transition-all duration-300 hover:border-brand-orange hover:shadow-sm"
            >
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-brand-orange block mb-3">
                  {item.badge}
                </span>
                <h2 className="font-sans font-bold text-2xl text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-brand-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-dark/10 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-orange transition-colors">
                <span>Подробнее</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
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
