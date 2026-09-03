import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Фестиваль им. Махмуда Эсамбаева | Официальная информация",
  description:
    "Международный фестиваль-конкурс сольного танца имени Махмуда Эсамбаева в Грозном: цели, номинации, положение и контакты оргкомитета.",
};

export default function FestivalPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full">
        {/* Шапка спецпроекта */}
        <header className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            Международный культурный проект
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
            Международный фестиваль-конкурс сольного танца им.&nbsp;Махмуда
            Эсамбаева
          </h1>
          <p className="text-brand-dark/75 text-lg md:text-xl max-w-3xl leading-relaxed border-l-2 border-brand-orange pl-4">
            Ежегодный смотр выдающихся исполнителей сольного и дуэтного танца,
            учрежденный Министерством культуры Чеченской Республики в память о
            великом мастере мирового балета.
          </p>
        </header>

        <div className="flex flex-col gap-12">
          {/* Секция 1: О фестивале */}
          <section className="border border-brand-dark/15 bg-white/50 p-8 md:p-10 rounded-sm">
            <h2 className="font-sans font-bold text-2xl text-brand-dark mb-4">
              О конкурсе
            </h2>
            <div className="flex flex-col gap-4 text-brand-dark/80 leading-relaxed text-base md:text-lg">
              <p>
                Фестиваль-конкурс имени Героя Социалистического Труда, народного
                артиста СССР Махмуда Эсамбаева проводится в Грозном и собирает
                солистов ведущих академических театров, государственных
                хореографических коллективов и независимых исполнителей из
                регионов России и зарубежных стран.
              </p>
              <p>
                Главная цель конкурса — сохранение традиций сольного
                исполнительства, выявление ярких молодых талантов, укрепление
                межнационального диалога и культурного сотрудничества.
              </p>
            </div>
          </section>

          {/* Секция 2: Номинации и критерии */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-brand-dark/15 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-2">
                Направление 01
              </span>
              <h3 className="font-sans font-bold text-xl text-brand-dark mb-3">
                Сольный танец
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed">
                Народно-сценический, классический, этнографический и современный
                танец. Оцениваются техника, артистизм, самобытность драматургии
                номера и точность национального образа.
              </p>
            </div>

            <div className="border border-brand-dark/15 bg-white/40 p-6 md:p-8 rounded-sm">
              <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-2">
                Направление 02
              </span>
              <h3 className="font-sans font-bold text-xl text-brand-dark mb-3">
                Парный танец (Дуэт)
              </h3>
              <p className="text-sm text-brand-dark/75 leading-relaxed">
                Дуэтные композиции, раскрывающие гармонию партнерства,
                пластическую выразительность, синхронность и чистоту
                хореографического рисунка.
              </p>
            </div>
          </section>

          {/* Секция 3: Документы и положение */}
          <section className="border border-brand-dark/20 p-6 md:p-8 rounded-sm bg-brand-light/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-1">
                Регламент
              </span>
              <h3 className="font-bold text-brand-dark text-lg md:text-xl">
                Положение о проведении фестиваля-конкурса
              </h3>
              <p className="text-sm text-brand-dark/60 mt-1">
                Условия участия, требования к заявкам, состав жюри и премиальный
                фонд (PDF)
              </p>
            </div>
            <Link
              href="/documents"
              className="shrink-0 px-6 py-3.5 bg-brand-dark text-brand-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark"
            >
              К документам →
            </Link>
          </section>

          {/* Секция 4: Контакты оргкомитета */}
          <section className="border border-brand-dark/15 bg-white/60 p-8 rounded-sm">
            <h2 className="font-sans font-bold text-2xl text-brand-dark mb-6 border-b border-brand-dark/10 pb-4">
              Оргкомитет фестиваля
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-brand-dark/85">
              <div>
                <strong className="block text-xs uppercase tracking-wider text-brand-dark/50 mb-1">
                  Учредитель
                </strong>
                <p>Министерство культуры Чеченской Республики</p>
              </div>
              <div>
                <strong className="block text-xs uppercase tracking-wider text-brand-dark/50 mb-1">
                  Место проведения
                </strong>
                <p>г. Грозный, концертные площадки ЧР</p>
              </div>
              <div>
                <strong className="block text-xs uppercase tracking-wider text-brand-dark/50 mb-1">
                  Контакты для участников
                </strong>
                <p>8 (8712) 22-58-12</p>
                <p className="text-brand-dark/60">gat_vainah@mail.ru</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
