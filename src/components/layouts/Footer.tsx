import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light">
      <div className="max-w-6xl mx-auto px-6 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div>
          {" "}
          <h4 className="font-sans font-bold text-xl">
            Государственный академический ансамбль танца «Вайнах»
          </h4>
          <p className="text-sm text-brand-light/60">
            Copyright © 2026 Все права защищены.
          </p>
        </div>

        <nav
          aria-label="Дополнительная навигация"
          className="flex flex-col gap-4"
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
        </nav>

        <div className="flex flex-col gap-3">
          <p>г. Грозный, ул. Шейха Али Митаева, 6</p>
          <a href="tel:8(8712)22-58-12">8(8712)22-58-12</a>
          <p>gat_vainah@mail.ru</p>
        </div>
      </div>
    </footer>
  );
}
