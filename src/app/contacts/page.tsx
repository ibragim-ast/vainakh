import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Контакты | Ансамбль Вайнах",
  description:
    "Контактная информация, адрес комплекса, телефоны служб и схема проезда к ГАУ «ГААТ «Вайнах».",
};

export default function ContactsPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <header className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            Связь с нами
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
            Контакты
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-3">
                Адрес
              </span>
              <h2 className="font-sans font-bold text-xl text-brand-dark mb-4">
                Здание ансамбля
              </h2>
              <p className="text-brand-dark/80 text-sm md:text-base leading-relaxed mb-6">
                364024, Чеченская Республика, г. Грозный, ул. Шейха Али Митаева,
                6
              </p>
            </div>
            <div className="border-t border-brand-dark/10 pt-4 text-xs text-brand-dark/70">
              <strong>График работы:</strong> Пн – Пт с 09:00 до 18:00 (перерыв
              13:00 – 14:00)
            </div>
          </div>

          <div className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-3">
                Телефоны и почта
              </span>
              <h2 className="font-sans font-bold text-xl text-brand-dark mb-4">
                Службы ансамбля
              </h2>
              <div className="flex flex-col gap-3 text-sm md:text-base text-brand-dark/80 mb-6">
                <div>
                  <span className="text-xs text-brand-dark/50 block">
                    Приемная / факс:
                  </span>
                  <a
                    href="tel:88712225812"
                    className="font-bold hover:text-brand-orange transition-colors"
                  >
                    8 (8712) 22-58-12
                  </a>
                </div>
                <div>
                  <span className="text-xs text-brand-dark/50 block">
                    Официальная электронная почта:
                  </span>
                  <a
                    href="mailto:gat_vainah@mail.ru"
                    className="font-bold hover:text-brand-orange transition-colors"
                  >
                    gat_vainah@mail.ru
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-brand-dark/10 pt-4 flex gap-4 text-xs uppercase tracking-widest font-bold">
              <a
                href="https://vk.ru/ans_vaynah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark/60 hover:text-brand-orange transition-colors"
              >
                ВКонтакте
              </a>
              <a
                href="https://max.ru/id2014001872_gos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark/60 hover:text-brand-orange transition-colors"
              >
                Max
              </a>
            </div>
          </div>

          <div className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange block mb-3">
                Обратная связь
              </span>
              <h2 className="font-sans font-bold text-xl text-brand-dark mb-4">
                Электронная приемная
              </h2>
              <p className="text-brand-dark/80 text-sm leading-relaxed mb-6">
                Направление официальных запросов, предложений и обращений
                руководству учреждения в электронном виде (в рамках 59-ФЗ и
                152-ФЗ).
              </p>
            </div>
            <Link
              href="/reception"
              className="w-full text-center px-6 py-3 bg-brand-dark text-brand-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark"
            >
              Подать обращение →
            </Link>
          </div>
        </div>

        <section className="border border-brand-dark/15 rounded-sm overflow-hidden bg-white/40">
          <div className="p-6 border-b border-brand-dark/10">
            <h2 className="font-sans font-bold text-xl text-brand-dark">
              Схема расположения на карте
            </h2>
            <p className="text-xs text-brand-dark/60 mt-1">
              г. Грозный, ул. Шейха Али Митаева, дом 6
            </p>
          </div>
          <div className="relative w-full h-100 md:h-125 bg-brand-dark/5">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=45.698500%2C43.317500&z=16&text=г.%20Грозный%2C%20ул.%20Шейха%20Али%20Митаева%2C%206"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              className="w-full h-full grayscale-20% contrast-105%"
              title="Схема проезда к ансамблю Вайнах"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
