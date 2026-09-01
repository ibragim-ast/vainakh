"use client";

import Link from "next/link";
import Image from "next/image";
import { useA11y } from "@/context/A11yContext";

export default function Header() {
  const { isA11yMode, toggleA11yMode } = useA11y();

  return (
    <header className="flex justify-between items-center bg-brand-dark text-brand-gold px-6 py-4">
      <Image
        alt="Логотип ансамбля Вайнах"
        width={300}
        height={90}
        className="h-[120px] w-auto"
        priority
        src={isA11yMode ? "/logo-a11y.svg" : "/logo.svg"}
      />
      <nav aria-label="Главная навигация">
        <ul className="flex gap-8">
          <li>
            <Link
              href="/events"
              className="transition-colors hover:text-brand-light"
            >
              Афиша
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-brand-light"
            >
              О нас
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleA11yMode} aria-label="Версия для слабовидящих">
        {isA11yMode ? "Обычная версия" : "Версия для слабовидящих"}
      </button>
    </header>
  );
}
