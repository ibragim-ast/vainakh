import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Технический и бытовой райдер | Ансамбль «Вайнах»",
  description:
    "Официальные технические, сценические и бытовые требования Государственного академического ансамбля танца «Вайнах» для принимающих площадок и организаторов гастролей.",
};

export default function RiderPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full">
        <header className="mb-12 border-b border-brand-dark/15 pb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold text-brand-orange block mb-2">
                Служебная документация
              </span>
              <h1 className="font-sans font-bold text-3xl md:text-5xl text-brand-dark leading-tight">
                Технический и бытовой райдер
              </h1>
              <p className="text-sm font-semibold text-brand-dark/70 mt-2">
                ГАУ «Государственный академический ансамбль танца «Вайнах»
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="/documents"
                className="inline-flex items-center gap-2 px-5 py-3 border border-brand-dark/30 text-brand-dark text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <span>Скачать оригинал (DOCX / PDF)</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          <p className="text-xs text-brand-dark/60 leading-relaxed max-w-3xl">
            Настоящий документ является неотъемлемой частью договора на
            организацию и проведение концертного выступления. Все технические,
            сценические и бытовые пункты обязательны к исполнению принимающей
            стороной. Любые отклонения подлежат предварительному письменному
            согласованию с технической дирекцией ансамбля.
          </p>
        </header>

        <div className="flex flex-col gap-12">
          {/* Раздел 1: Сценический планшет и геометрия */}
          <section className="border border-brand-dark/15 bg-white/60 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-3 mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                Раздел 1
              </span>
              <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark">
                Требования к сценической площадке и реквизиту
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-brand-dark/85">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark">
                  Параметры планшета и покрытие:
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                  <li>
                    Площадка должна соответствовать академическому статусу и
                    обеспечивать максимально возможный размер рабочей зоны для
                    синхронных массовых номеров.
                  </li>
                  <li>
                    <strong>Настил пола:</strong> строго профессиональный
                    танцевальный линолеум (балетный пол) либо идеально ровное
                    деревянное палубное покрытие без стыков, перепадов, гвоздей
                    и сколов.
                  </li>
                  <li>
                    <strong>Влажная уборка:</strong> техническая служба площадки
                    обязана провести чистую влажную уборку планшета сцены строго
                    за 30 минут до начала концерта.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark">
                  Сценический реквизит (номер «Ритмы гор»):
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                  <li>
                    <strong>30 стульев:</strong> жесткие, со спинками, строго
                    без подлокотников и без складных механизмов (требуются на
                    сцене для инструментального номера с национальными
                    барабанами).
                  </li>
                  <li>
                    Свободные карманы сцены и кулисы для оперативной смены
                    костюмов и реквизита.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Раздел 2: Звуковой тракт */}
          <section className="border border-brand-dark/15 bg-white/60 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-3 mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                Раздел 2
              </span>
              <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark">
                Звуковое обеспечение и мониторинг
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-brand-dark/85">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark">
                  Мониторная акустика на сцене:
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                  <li>
                    <strong>Фронтальная линия:</strong> 4–6 напольных
                    сценических мониторов по авансцене, направленных в центр
                    рабочей зоны.
                  </li>
                  <li>
                    <strong>Прострелы:</strong> не менее 2 мощных звуковых
                    мониторов (Side-fill) на заднем плане сцены с боковых кулис,
                    направленных в центр планшета.
                  </li>
                  <li>
                    Портальная система (FOH) зала с запасом по динамическому
                    диапазону и звуковому давлению без клиппирования.
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark">
                  Микрофонный парк и коммутация:
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                  <li>
                    1 радиомикрофон ручной для конферансье / ведущего концерта.
                  </li>
                  <li>
                    6 радиомикрофонов на стойках (или согласованная система
                    подвесных конденсаторных микрофонов) для инструментального
                    номера «Ритмы гор».
                  </li>
                  <li>
                    6 радиомикрофонов на стойках для музыкальных/вокальных
                    номеров программы.
                  </li>
                  <li>
                    1 независимый балансный линейный выход (D.I. Box) для
                    подключения клавишного инструмента оркестра.
                  </li>
                  <li>
                    Отдельный настроенный ноутбук у звукорежиссерского пульта
                    FOH, скоммутированный для стабильного воспроизведения
                    резервных и основных фонограмм.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Раздел 3: Световая партитура */}
          <section className="border border-brand-dark/15 bg-white/60 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-3 mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                Раздел 3
              </span>
              <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark">
                Художественное освещение площадки
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-sm text-brand-dark/85 leading-relaxed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    <strong>Динамические световые приборы:</strong>{" "}
                    полноповоротные головы (Spot/Profile/Wash) мощностью от 1,5
                    кВт с углом раскрытия зума от 6° до 60°, функциями четкой
                    фокусировки и профилирования (требуемое количество — 25
                    шт.).
                  </li>
                  <li>
                    Классическое театральное теплое/холодное освещение
                    авансцены.
                  </li>
                  <li>Монтаж рамп нижнего сценического света.</li>
                </ul>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>
                    2 поворотные световые пушки слежения (Followspot) с опытными
                    операторами на весь период репетиций и концерта.
                  </li>
                  <li>
                    Обеспечение предельной яркости и равномерности заливки
                    танцевального планшета сцены.
                  </li>
                </ul>
              </div>

              <div className="mt-4 p-4 border-l-2 border-brand-orange bg-brand-dark/5 text-xs text-brand-dark/80">
                <strong>Категорическое требование:</strong> Запрещается
                хаотичное дискотечное размещение и клубные эффекты слепящего
                света в зрительный зал. Все световые приборы, прострелы и пушки
                работают строго на освещение хореографического полотна на сцене.
              </div>
            </div>
          </section>

          {/* Раздел 4: Тайминг и регламент программы */}
          <section className="border border-brand-dark/15 bg-white/60 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-3 mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                Раздел 4
              </span>
              <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark">
                Регламент программы и суточный тайминг
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="border border-brand-dark/10 p-4 rounded-sm bg-white/50">
                <span className="text-brand-orange font-bold text-xl block mb-1">
                  Т - 7 часов
                </span>
                <span className="text-xs text-brand-dark/70">
                  Технические службы зала (звук, свет, монтировщики) на рабочих
                  местах
                </span>
              </div>
              <div className="border border-brand-dark/10 p-4 rounded-sm bg-white/50">
                <span className="text-brand-orange font-bold text-xl block mb-1">
                  Т - 6 часов
                </span>
                <span className="text-xs text-brand-dark/70">
                  Заезд руководства, балетной труппы и оркестра на площадку
                </span>
              </div>
              <div className="border border-brand-dark/10 p-4 rounded-sm bg-white/50">
                <span className="text-brand-orange font-bold text-xl block mb-1">
                  ≥ 4 часов
                </span>
                <span className="text-xs text-brand-dark/70">
                  Саундчек и светомонтировочная репетиция ансамбля на сцене
                </span>
              </div>
              <div className="border border-brand-dark/10 p-4 rounded-sm bg-white/50">
                <span className="text-brand-orange font-bold text-xl block mb-1">
                  1 ч 30 мин
                </span>
                <span className="text-xs text-brand-dark/70">
                  Хронометраж концерта (в 1 или 2 отделениях по согласованию)
                </span>
              </div>
            </div>
          </section>

          {/* Раздел 5: Гримерные, Быт, Питание и Проживание */}
          <section className="border border-brand-dark/15 bg-white/60 p-6 md:p-8 rounded-sm">
            <div className="flex items-center gap-3 border-b border-brand-dark/10 pb-3 mb-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                Раздел 5
              </span>
              <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark">
                Бытовые условия, логистика и размещение
              </h2>
            </div>

            <div className="flex flex-col gap-6 text-sm text-brand-dark/85">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark mb-2">
                  Гримерные комнаты (в шаговой доступности от сцены):
                </h3>
                <ul className="list-disc pl-5 flex flex-col gap-1.5 leading-relaxed">
                  <li>
                    <strong>2 изолированные гримерные на 50 артистов:</strong>{" "}
                    мужская зона — на 28 человек, женская зона — на 22 человека.
                  </li>
                  <li>
                    Комплектация каждой гримерной: зеркала с подсветкой, не
                    менее 20 стульев, вместительные стационарные вешала для
                    сценических черкесок и платьев, не менее 2 паровых утюгов /
                    отпаривателей промышленного типа и 2 гладильные доски.
                  </li>
                  <li>
                    <strong>Коридорный массив:</strong> не менее 5
                    дополнительных мобильных вешалок в коридорах,
                    непосредственно примыкающих к выходам на сцену.
                  </li>
                  <li>
                    <strong>Отдельная VIP-комната:</strong> для художественного
                    руководителя и директора ансамбля.
                  </li>
                  <li>
                    <strong>Вода и кейтеринг:</strong> бутилированная питьевая
                    вода без газа в гримерных (обязательно). По возможности
                    принимающей стороны — свежие фрукты, чай, натуральный кофе.
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-brand-dark/10">
                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark mb-2">
                    Питание коллектива:
                  </h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 leading-relaxed text-xs md:text-sm">
                    <li>
                      Трехразовое качественное горячее питание на весь период
                      пребывания.
                    </li>
                    <li>
                      <strong>Строгое требование:</strong> вся подаваемая
                      продукция должна соответствовать стандарту{" "}
                      <strong>Халяль (Halal)</strong>.
                    </li>
                    <li>
                      По возможности предпочтение в меню отдается блюдам из
                      рыбы.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xs uppercase tracking-wider text-brand-dark mb-2">
                    Гостиничное размещение:
                  </h3>
                  <ul className="list-disc pl-5 flex flex-col gap-1.5 leading-relaxed text-xs md:text-sm">
                    <li>
                      Отель категории <strong>не ниже 4 звёзд (4★)</strong> с
                      чистыми, кондиционированными номерами и стабильным
                      отоплением.
                    </li>
                    <li>
                      Размещение в иной категории допускается исключительно по
                      предварительному согласованию сторон при гарантии
                      надлежащего комфорта и тишины для отдыха труппы.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="border border-brand-dark/15 bg-white/40 p-6 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="font-bold text-brand-dark text-sm mb-1">
                Вопросы технической адаптации райдера
              </p>
              <p className="text-xs text-brand-dark/65">
                г. Грозный, ул. Шейха Али Митаева, 6 · Тел./факс: 8 (8712)
                22-58-12 · email: gat_vainah@mail.ru
              </p>
            </div>
            <Link
              href="/contacts"
              className="px-6 py-3 bg-brand-dark text-brand-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark whitespace-nowrap text-center shrink-0"
            >
              Контакты администрации →
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
