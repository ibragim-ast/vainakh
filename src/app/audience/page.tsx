import { Metadata } from "next";
import { audienceArchivesData } from "@/data/audience";

export const metadata: Metadata = {
  title: "Зрителям: Фотоархив | Ансамбль Вайнах",
  description:
    "Фотоотчеты с прошедших концертов Государственного академического ансамбля танца «Вайнах». Скачивание оригиналов в высоком разрешении.",
};

export default function AudiencePage() {
  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <header className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            Медиа
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
            Фотографии зрителей
          </h1>
          <p className="text-brand-dark/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Архивы снимков из фотозон и зрительных залов с прошедших концертов
            ансамбля. Исходные файлы доступны для бесплатного скачивания в
            высоком качестве.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {audienceArchivesData.map((item) => (
            <div
              key={item.id}
              className="border border-brand-dark/15 bg-white/60 p-6 md:p-8 rounded-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-brand-dark/50 mb-3">
                  <span className="font-bold text-brand-orange uppercase tracking-wider">
                    {item.date}
                  </span>
                  {item.photoCount && <span>~{item.photoCount} кадров</span>}
                </div>

                <h2 className="font-sans font-bold text-xl text-brand-dark mb-2 leading-snug">
                  {item.title}
                </h2>

                <p className="text-xs text-brand-dark/70 mb-6">{item.venue}</p>
              </div>

              <div className="pt-4 border-t border-brand-dark/10">
                {item.cloudUrl ? (
                  <a
                    href={item.cloudUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-5 py-3 bg-brand-dark text-brand-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark"
                  >
                    <span>Открыть диск</span>
                    <span>↗</span>
                  </a>
                ) : (
                  <span className="inline-block py-2 text-xs uppercase tracking-widest font-bold text-brand-dark/40 italic">
                    Обработка кадров...
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <section className="border border-brand-dark/15 bg-white/40 p-6 md:p-8 rounded-sm text-xs text-brand-dark/70 leading-relaxed">
          <p className="font-bold text-brand-dark mb-1 uppercase tracking-wider">
            Информация для посетителей:
          </p>
          <p>
            Фотографии хранятся на внешних облачных дисках в течение 90 дней со
            дня публикации. Все снимки предназначены для личного некоммерческого
            использования зрителями концертов.
          </p>
        </section>
      </div>
    </main>
  );
}
