"use client";

import Link from "next/link";
import { useA11y } from "@/context/A11yContext";

export default function Header() {
  const { isA11yMode, toggleA11yMode } = useA11y();

  return (
    <header className="flex justify-between items-center bg-brand-dark text-brand-gold px-6 py-4">
      <nav aria-label="Главная навигация">
        <Link href="/events">Афиша</Link>
        <Link href="/artists">Артисты</Link>
      </nav>
      <button onClick={toggleA11yMode} aria-label="Версия для слабовидящих">
        {isA11yMode ? "Обычная версия" : "Версия для слабовидящих"}
      </button>
    </header>
  );
}
