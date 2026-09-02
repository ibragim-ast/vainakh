import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Билеты и правила посещения | Ансамбль Вайнах",
  description:
    "Правила приобретения и возврата билетов, оплата Пушкинской картой, льготные категории и кассы ГАУ «ГААТ «Вайнах».",
};

export default function TicketsPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full">
        {/* Заголовок */}
        <header className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            Зрителям
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
            Билеты и правила посещения
          </h1>
          <p className="text-brand-dark/70 text-lg md:text-xl max-w-3xl leading-relaxed">
            Информация о способах приобретения, программе «Пушкинская карта»,
            льготах и порядке возврата билетов на концерты ансамбля.
          </p>
        </header>

        <div className="flex flex-col gap-16">
          {/* Блок 1: Способы покупки */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-2">
                  Онлайн
                </span>
                <h2 className="font-sans font-bold text-2xl text-brand-dark mb-4">
                  Электронные билеты
                </h2>
                <p className="text-brand-dark/80 text-sm md:text-base leading-relaxed mb-6">
                  Приобрести официальные билеты на все сольные выступления
                  ансамбля можно онлайн через раздел «Афиша» на нашем сайте или
                  на сайтах билетных операторов-партнеров.
                </p>
              </div>
              <Link
                href="/events"
                className="w-fit px-6 py-3 bg-brand-dark text-brand-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark"
              >
                Перейти в афишу →
              </Link>
            </div>

            <div className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-2">
                  Оффлайн
                </span>
                <h2 className="font-sans font-bold text-2xl text-brand-dark mb-4">
                  Кассы и справка
                </h2>
                <p className="text-brand-dark/80 text-sm md:text-base leading-relaxed mb-4">
                  Билеты также доступны в кассах концертных залов
                  непосредственно в дни проведения мероприятий и по
                  предварительному бронированию через администратора.
                </p>
                <div className="text-xs text-brand-dark/70 flex flex-col gap-1 border-t border-brand-dark/10 pt-4">
                  <div>
                    <strong>Адрес комплекса:</strong> г. Грозный, ул. Шейха Али
                    Митаева, 6
                  </div>
                  <div>
                    <strong>Телефон бронирования:</strong> 8 (8712) 22-58-12
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Блок 2: Пушкинская карта */}
          <section className="border border-brand-orange/30 bg-white/80 p-8 md:p-10 rounded-sm relative overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-2">
                Федеральная программа
              </span>
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark mb-4">
                Пушкинская карта
              </h2>
              <p className="text-brand-dark/80 text-base md:text-lg leading-relaxed mb-6">
                Молодые люди в возрасте от 14 до 22 лет могут посещать сольные
                концерты Государственного академического ансамбля танца «Вайнах»
                бесплатно за счет средств государственного баланса «Пушкинской
                карты».
              </p>
              <ul className="flex flex-col gap-2 text-brand-dark/80 text-sm md:text-base list-disc pl-5 mb-6">
                <li>
                  Билет, приобретенный по Пушкинской карте, является именным.
                </li>
                <li>
                  При входе на концертную площадку необходимо предъявить
                  документ, удостоверяющий личность.
                </li>
                <li>
                  Передача билета третьим лицам категорически запрещена
                  правилами программы.
                </li>
              </ul>
            </div>
          </section>

          {/* Блок 3: Льготы и условия */}
          <section>
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark mb-6">
              Льготные категории граждан
            </h2>
            <div className="border border-brand-dark/15 bg-white/40 p-6 md:p-8 rounded-sm">
              <p className="text-brand-dark/80 text-base leading-relaxed mb-4">
                В соответствии с действующим законодательством и локальными
                актами учреждения, при предъявлении подтверждающих документов
                льготы предоставляются:
              </p>
              <ul className="flex flex-col gap-3 text-brand-dark/80 text-sm md:text-base list-disc pl-5">
                <li>
                  Участникам и ветеранам Великой Отечественной войны, боевых
                  действий и СВО, а также членам их семей.
                </li>
                <li>Инвалидам I и II групп и лицам, их сопровождающим.</li>
                <li>
                  Детям-сиротам и детям, оставшимся без попечения родителей.
                </li>
                <li>Многодетным семьям.</li>
              </ul>
              <p className="text-xs text-brand-dark/60 mt-6 italic">
                * Количество льготных мест на конкретных выездных и арендованных
                сценических площадках может регулироваться регламентом
                принимающего концертного зала.
              </p>
            </div>
          </section>

          {/* Блок 4: Правила возврата билетов */}
          <section>
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark mb-6">
              Порядок возврата билетов
            </h2>
            <div className="flex flex-col gap-4 text-brand-dark/80 text-sm md:text-base leading-relaxed border-t border-brand-dark/15 pt-6">
              <p>
                Возврат билетов осуществляется в соответствии с Федеральным
                законом № 193-ФЗ («О внесении изменений в Закон РФ «Основы
                законодательства РФ о культуре»):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
                <div className="border border-brand-dark/15 p-4 rounded-sm bg-white/50">
                  <span className="text-brand-orange font-bold text-lg block mb-1">
                    100% возврата
                  </span>
                  <span className="text-xs text-brand-dark/70">
                    Не позднее чем за 10 дней до дня проведения концерта
                  </span>
                </div>
                <div className="border border-brand-dark/15 p-4 rounded-sm bg-white/50">
                  <span className="text-brand-orange font-bold text-lg block mb-1">
                    50% возврата
                  </span>
                  <span className="text-xs text-brand-dark/70">
                    Менее чем за 10 дней, но не позднее чем за 5 дней
                  </span>
                </div>
                <div className="border border-brand-dark/15 p-4 rounded-sm bg-white/50">
                  <span className="text-brand-orange font-bold text-lg block mb-1">
                    30% возврата
                  </span>
                  <span className="text-xs text-brand-dark/70">
                    Менее чем за 5 дней, но не позднее чем за 3 дня
                  </span>
                </div>
              </div>
              <p className="text-xs text-brand-dark/60">
                При отмене или замене мероприятия зрителю возмещается 100%
                стоимости билета. Билеты, приобретенные менее чем за 3 дня до
                начала мероприятия, возврату по инициативе зрителя не подлежат
                (за исключением случаев документально подтвержденной болезни).
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
