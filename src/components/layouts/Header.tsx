"use client";

import Link from "next/link";
import Image from "next/image";
import { useA11y } from "@/context/A11yContext";
import { useState } from "react";

export default function Header() {
  const { isA11yMode, toggleA11yMode } = useA11y();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="text-brand-gold px-6 py-4 sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="flex justify-between items-center max-w-6xl mx-auto w-full">
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
            className={`${isMobileMenuOpen ? "flex" : "hidden"} md:bg-transparent flex-col absolute top-full left-0 w-full bg-brand-dark p-6 gap-6 z-50 md:flex md:flex-row md:static md:w-auto md:p-0 md:gap-8`}
          >
            <li>
              <Link
                href="/events"
                className="text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:text-brand-light hover:opacity-80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Афиша
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className=" text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:text-brand-light hover:opacity-80"
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
        <button
          className="px-4 py-2 text-xs uppercase tracking-widest border border-brand-gold/30 rounded-sm transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
          onClick={toggleA11yMode}
          aria-label="Версия для слабовидящих"
        >
          {isA11yMode ? "Обычная версия" : "Версия для слабовидящих"}
        </button>
      </div>
    </header>
  );
}
