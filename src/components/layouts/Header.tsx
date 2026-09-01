"use client";

import Link from "next/link";
import Image from "next/image";
import { useA11y } from "@/context/A11yContext";
import { useState } from "react";

export default function Header() {
  const { isA11yMode, toggleA11yMode } = useA11y();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center bg-brand-dark text-brand-gold px-6 py-4">
      <Link href="/">
        <Image
          aria-label="На главную страницу"
          alt="Логотип ансамбля Вайнах"
          width={300}
          height={90}
          className="h-30 w-auto"
          priority
          src={isA11yMode ? "/logo-a11y.svg" : "/logo.svg"}
        />
      </Link>

      <nav aria-label="Главная навигация">
        <ul
          className={`${isMobileMenuOpen ? "flex" : "hidden"} flex-col absolute top-full left-0 w-full bg-brand-dark p-6 gap-6 z-50 md:flex md:flex-row md:static md:w-auto md:p-0 md:gap-8`}
        >
          <li>
            <Link
              href="/events"
              className="transition-colors hover:text-brand-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Афиша
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-brand-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О нас
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="block md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "Закрыть" : "Меню"}
      </button>
      <button onClick={toggleA11yMode} aria-label="Версия для слабовидящих">
        {isA11yMode ? "Обычная версия" : "Версия для слабовидящих"}
      </button>
    </header>
  );
}
