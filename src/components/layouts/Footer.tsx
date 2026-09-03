import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12 items-start">
        <div className="flex flex-col gap-4 md:h-full md:justify-between">
          <h4 className="font-sans font-bold text-lg md:text-xl">
            Государственный академический ансамбль танца «Вайнах»
          </h4>
          <p className="text-sm text-brand-light/60 mt-auto">
            Copyright © 2026 Все права защищены.
          </p>
        </div>
        <nav
          aria-label="Разделы сайта"
          className="flex flex-col gap-2 md:gap-3"
        >
          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold/60 mb-2">
            Пользователям
          </h4>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/events"
          >
            Афиша
          </Link>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/news"
          >
            Новости
          </Link>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/about"
          >
            О нас
          </Link>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/spectators"
          >
            Зрителям
          </Link>
        </nav>

        <nav
          aria-label="Официальные сведения"
          className="flex flex-col gap-2 md:gap-3"
        >
          <h4 className="text-xs uppercase tracking-widest font-bold text-brand-gold/60 mb-2">
            Официальная информация
          </h4>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/documents"
          >
            Документы
          </Link>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/info"
          >
            Сведения об организации
          </Link>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/services"
          >
            Виды услуг
          </Link>
          <Link className="transition-colors hover:text-brand-gold" href="/nok">
            Оценка качества (НОК)
          </Link>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/festival"
          >
            Фестиваль им. М. Эсамбаева
          </Link>
        </nav>

        <div className="flex flex-col gap-4 md:h-full md:justify-between">
          <p>г. Грозный, ул. Шейха Али Митаева, 6</p>
          <a href="tel:8(8712)22-58-12">8(8712)22-58-12</a>
          <p>gat_vainah@mail.ru</p>
          <div className="flex items-center gap-6 mt-4 md:mt-auto">
            <a
              href="https://vk.ru/ans_vaynah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-bold text-brand-light/60 transition-colors hover:text-brand-gold"
            >
              ВКонтакте
            </a>
            <a
              href="https://max.ru/id2014001872_gos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-widest font-bold text-brand-light/60 transition-colors hover:text-brand-gold"
            >
              Max
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
