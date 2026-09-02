import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Материально-техническое обеспечение | Ансамбль Вайнах",
  description:
    "Сведения о материально-технической базе, оборудовании и условиях доступности ГАУ «ГААТ «Вайнах».",
};

export default function FacilitiesPage() {
  return (
    <main className="pt-32 pb-20 bg-brand-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full">
        <h1 className="font-sans font-bold text-3xl md:text-5xl text-brand-dark mb-6">
          Материально-техническое обеспечение
        </h1>
        <p className="text-brand-dark/80 text-lg mb-12 max-w-3xl leading-relaxed">
          Сведения об условиях осуществления уставной деятельности,
          репетиционной базе, техническом оснащении и доступности помещений
          учреждения.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Блок 1: Помещения и залы */}
          <div className="border border-brand-dark/20 p-8 rounded-sm bg-white/40 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-brand-orange">
              Репетиционная база
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80 leading-relaxed list-disc pl-5 text-sm md:text-base">
              <li>
                Комплекс здания по адресу: г. Грозный, ул. Шейха Али Митаева, 6.
              </li>
              <li>
                Специализированные хореографические залы с профессиональным
                балетным станком и амортизирующим покрытием пола.
              </li>
              <li>
                Репетиционный зал для оркестровой группы с надлежащей
                акустической подготовкой.
              </li>
              <li>
                Индивидуальные и групповые гримерные комнаты, раздевалки и
                душевые для артистов.
              </li>
            </ul>
          </div>

          {/* Блок 2: Сценическое оборудование и цеха */}
          <div className="border border-brand-dark/20 p-8 rounded-sm bg-white/40 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-brand-orange">
              Оснащение и сценические средства
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80 leading-relaxed list-disc pl-5 text-sm md:text-base">
              <li>
                Комплект мобильного концертного звукового оборудования для
                выездных выступлений.
              </li>
              <li>
                Световое постановочное оборудование и приборы заливного света.
              </li>
              <li>
                Костюмерный цех: фонды традиционных мужских и женских
                национальных сценических костюмов, обуви и бутафории.
              </li>
              <li>
                Собственный фонд национальных музыкальных инструментов оркестра.
              </li>
            </ul>
          </div>

          {/* Блок 3: Транспортное обеспечение */}
          <div className="border border-brand-dark/20 p-8 rounded-sm bg-white/40 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-brand-orange">
              Транспортное обеспечение
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80 leading-relaxed list-disc pl-5 text-sm md:text-base">
              <li>
                Специализированный автотранспорт (автобусы туристического
                класса) для гастрольной деятельности артистов.
              </li>
              <li>
                Грузовой транспорт для безопасной перевозки декораций, реквизита
                и сценических костюмов.
              </li>
            </ul>
          </div>

          {/* Блок 4: Доступная среда (НОК / ст. 15 181-ФЗ) */}
          <div className="border border-brand-dark/20 p-8 rounded-sm bg-white/40 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-brand-orange">
              Доступная среда
            </h2>
            <ul className="flex flex-col gap-3 text-brand-dark/80 leading-relaxed list-disc pl-5 text-sm md:text-base">
              <li>
                Входная группа здания оборудована пандусом с поручнями для
                маломобильных граждан.
              </li>
              <li>
                Расширенные дверные проемы на первом этаже для
                беспрепятственного проезда на креслах-колясках.
              </li>
              <li>
                Выделенные парковочные места для автотранспорта инвалидов на
                прилегающей территории.
              </li>
              <li>Наличие версии официального сайта для слабовидящих.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
