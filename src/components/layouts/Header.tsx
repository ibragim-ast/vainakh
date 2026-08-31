"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-brand-dark text-brand-gold px-6 py-4">
      <nav aria-label="Главная навигация">
        <Link href="/events">Афиша</Link>
        <Link href="/artists">Артисты</Link>
      </nav>
      <button aria-label="Версия для слабовидящих">
        Версия для слабовидящих
      </button>
    </header>
  );
}
