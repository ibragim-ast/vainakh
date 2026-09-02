import { Metadata } from "next";
import Link from "next/link";
import { vacanciesData } from "@/data/vacancies";

export const metadata: Metadata = {
  title: "Вакансии и конкурсный отбор | Ансамбль Вайнах",
  description:
    "Информация о вакантных должностях, кадровом резерве и условиях конкурсного отбора в ГАУ «ГААТ «Вайнах».",
};

export default function VacanciesPage() {
  const hasVacancies = vacanciesData.length > 0;

  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 md:px-6 w-full">
        {/* Заголовок */}
        <header className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            Карьера в ансамбле
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
            Вакансии и кадровый резерв
          </h1>
          <p className="text-brand-dark/70 text-lg md:text-xl max-w-3xl leading-relaxed">
            Порядок поступления на работу, конкурсные требования для артистов
            балета и оркестра, а также условия формирования кадрового резерва.
          </p>
        </header>

        {/* Список вакансий или Empty-state */}
        <section className="mb-16">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark mb-8 border-b border-brand-dark/15 pb-4">
            Текущие конкурсные ставки
          </h2>

          {hasVacancies ? (
            <div className="flex flex-col gap-8">
              {vacanciesData.map((item) => (
                <div
                  key={item.id}
                  className="border border-brand-dark/15 bg-white/60 p-8 rounded-sm flex flex-col gap-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-dark/10 pb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-brand-orange block mb-1">
                        {item.department}
                      </span>
                      <h3 className="font-sans font-bold text-2xl text-brand-dark">
                        {item.title}
                      </h3>
                    </div>
                    {item.salary && (
                      <span className="text-sm font-semibold text-brand-dark/80 bg-brand-dark/5 px-4 py-2 rounded-sm w-fit">
                        {item.salary}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base text-brand-dark/85">
                    <div>
                      <h4 className="font-bold text-brand-dark mb-3 uppercase tracking-wider text-xs">
                        Требования:
                      </h4>
                      <ul className="list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                        {item.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark mb-3 uppercase tracking-wider text-xs">
                        Обязанности:
                      </h4>
                      <ul className="list-disc pl-5 flex flex-col gap-2 leading-relaxed">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border border-brand-dark/15 bg-white/40 p-10 rounded-sm text-center">
              <p className="font-sans font-bold text-xl text-brand-dark mb-2">
                В настоящее время открытых конкурсных ставок нет
              </p>
              <p className="text-sm text-brand-dark/70 max-w-xl mx-auto leading-relaxed">
                Коллектив полностью укомплектован. Вы можете направить резюме и
                видеовизитку в отдел кадров для включения в долгосрочный
                кадровый резерв.
              </p>
            </div>
          )}
        </section>

        {/* Регламент подачи заявок в кадровый резерв */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-2">
                Порядок отбора
              </span>
              <h3 className="font-sans font-bold text-xl text-brand-dark mb-4">
                Подача видеоматериалов
              </h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
                Для артистов балета и музыкантов просмотр резюме осуществляется
                только при наличии ссылки на видеозапись (YouTube, VK Видео,
                Яндекс Диск):
              </p>
              <ul className="list-disc pl-5 text-xs md:text-sm text-brand-dark/75 flex flex-col gap-2">
                <li>
                  Фрагмент исполнения национального танца или сольной партии.
                </li>
                <li>Классический/характерный тренаж (для балета).</li>
                <li>Качественный общий план без монтажных склеек.</li>
              </ul>
            </div>
          </div>

          <div className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-2">
                Контакты
              </span>
              <h3 className="font-sans font-bold text-xl text-brand-dark mb-4">
                Отдел кадров
              </h3>
              <p className="text-sm text-brand-dark/80 leading-relaxed mb-4">
                Резюме с пометкой «В кадровый резерв: ФИО» и ссылками на
                видеоматериалы направляются на официальную почту или через
                электронную приемную.
              </p>
              <div className="text-xs text-brand-dark/70 flex flex-col gap-2 pt-4 border-t border-brand-dark/10">
                <div>
                  <strong>Начальник отдела кадров:</strong> Банкурова Аза
                  Сейтмухамадовна
                </div>
                <div>
                  <strong>Электронная почта:</strong> gat_vainah@mail.ru
                </div>
                <div>
                  <strong>Телефон:</strong> 8 (8712) 22-58-12
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4">
              <Link
                href="/reception"
                className="inline-block text-xs uppercase tracking-widest font-bold text-brand-orange hover:underline"
              >
                Отправить заявку через форму приемной →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
