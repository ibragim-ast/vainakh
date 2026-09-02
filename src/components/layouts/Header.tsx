"use client";

import Link from "next/link";
import Image from "next/image";
import { useA11y } from "@/context/A11yContext";
import { useState } from "react";
import { eventsData } from "@/data/events";
import { newsData } from "@/data/news";
import { documentsData } from "@/data/documents";

export default function Header() {
  const { isA11yMode, toggleA11yMode } = useA11y();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.toLowerCase();
  const hasQuery = query.length > 2;
  const foundEvents = hasQuery
    ? eventsData.filter((e) => e.description.toLowerCase().includes(query))
    : [];
  const foundNews = hasQuery
    ? newsData.filter((n) => n.title.toLowerCase().includes(query))
    : [];
  const foundDocs = hasQuery
    ? documentsData.filter((d) => d.title.toLowerCase().includes(query))
    : [];

  return (
    <>
      <header className="text-brand-gold px-6 py-4 sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-4 md:gap-0">
          <Link className="shrink-0" href="/">
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
          <div className="flex items-center gap-3 md:gap-6">
            <button
              className="block md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "Закрыть" : "Меню"}
            </button>
            <button
              aria-label="Поиск"
              className="cursor-pointer transition-all duration-300 hover:text-brand-light hover:opacity-80"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button
              className="text-[9px] md:text-xs px-2 py-1 md:px-4 md:py-2 text-center leading-tight uppercase tracking-widest border border-brand-gold/30 rounded-sm transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
              onClick={toggleA11yMode}
              aria-label="Версия для слабовидящих"
            >
              {isA11yMode ? "Обычная версия" : "Версия для слабовидящих"}
            </button>
          </div>
        </div>
      </header>
      {isSearchOpen && (
        <div className="fixed inset-0 z-100 bg-brand-dark/80 backdrop-blur-md flex flex-col">
          <div className="flex justify-end p-6 md:px-12 md:py-8">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-brand-light cursor-pointer text-xs uppercase tracking-widest px-4 py-2 border border-brand-light/20 transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Закрыть
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center px-6">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Поиск по сайту..."
              autoFocus
              className="w-full max-w-3xl bg-transparent border-b border-brand-light/30 text-3xl md:text-5xl text-brand-light placeholder:text-brand-light/20 outline-none pb-4 transition-colors focus:border-brand-orange"
            />
            <div className="w-full max-w-3xl mt-12 overflow-y-auto flex flex-col gap-10 pb-10">
              {foundDocs.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-brand-orange uppercase tracking-widest text-sm mb-4 font-bold">
                    Документы
                  </h3>
                  {foundDocs.map((doc) => (
                    <Link
                      key={doc.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      href="/documents"
                      className="text-brand-light text-xl md:text-2xl transition-colors hover:text-brand-orange"
                    >
                      {doc.title}
                    </Link>
                  ))}
                </div>
              )}
              {foundEvents.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-brand-orange uppercase tracking-widest text-sm font-bold">
                    Афиша
                  </h3>
                  {foundEvents.map((item) => (
                    <Link
                      href="/events"
                      className="text-brand-light text-xl md:text-2xl transition-colors hover:text-brand-orange"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                    >
                      {item.description}
                    </Link>
                  ))}
                </div>
              )}
              {foundNews.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h3 className="text-brand-orange uppercase tracking-widest text-sm font-bold">
                    Новости
                  </h3>
                  {foundNews.map((item) => (
                    <Link
                      href="/news"
                      className="text-brand-light text-xl md:text-2xl transition-colors hover:text-brand-orange"
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
              {hasQuery &&
                foundDocs.length === 0 &&
                foundEvents.length === 0 &&
                foundNews.length === 0 && (
                  <p className="text-brand-light/50 text-xl">
                    По вашему запросу ничего не найдено.
                  </p>
                )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
