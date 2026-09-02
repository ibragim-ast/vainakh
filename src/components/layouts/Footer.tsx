import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
        <div className="flex flex-col gap-4 md:h-full md:justify-between">
          <h4 className="font-sans font-bold text-lg md:text-xl">
            Государственный академический ансамбль танца «Вайнах»
          </h4>
          <p className="text-sm text-brand-light/60 mt-auto">
            Copyright © 2026 Все права защищены.
          </p>
        </div>

        <nav
          aria-label="Дополнительная навигация"
          className="flex flex-col gap-2 md:gap-4"
        >
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/events"
          >
            Афиша
          </Link>
          <Link
            className="transition-colors hover:text-brand-gold"
            href="/about"
          >
            О нас
          </Link>
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
            href="/reception"
          >
            Электронная приемная
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
