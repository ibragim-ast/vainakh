"use client";

import { useState } from "react";
import Link from "next/link";
import { faqData } from "@/data/faq";

export default function FaqPage() {
  // Храним ID открытого пункта, чтобы работал классический аккордеон
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = Array.from(new Set(faqData.map((item) => item.category)));

  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full">
        {/* Заголовок */}
        <header className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            Справочная служба
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
            Часто задаваемые вопросы
          </h1>
          <p className="text-brand-dark/70 text-lg md:text-xl leading-relaxed">
            Ответы на популярные вопросы о посещении концертов, покупке билетов
            и правилах нахождения в зале.
          </p>
        </header>

        {/* Список вопросов по категориям */}
        <div className="flex flex-col gap-12 mb-16">
          {categories.map((cat) => {
            const items = faqData.filter((i) => i.category === cat);
            return (
              <section key={cat}>
                <h2 className="font-sans font-bold text-xl md:text-2xl text-brand-dark mb-4 border-b border-brand-dark/15 pb-2">
                  {cat}
                </h2>
                <div className="flex flex-col border-t border-brand-dark/10">
                  {items.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <div
                        key={item.id}
                        className="border-b border-brand-dark/10 transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full py-5 text-left flex justify-between items-center gap-4 group"
                          aria-expanded={isOpen}
                        >
                          <span className="font-sans font-bold text-base md:text-lg text-brand-dark group-hover:text-brand-orange transition-colors">
                            {item.question}
                          </span>
                          <span className="text-brand-orange text-xl font-bold shrink-0 transition-transform duration-300">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="pb-6 text-sm md:text-base text-brand-dark/80 leading-relaxed pr-8">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
        <section className="border border-brand-dark/15 bg-white/50 p-8 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-sans font-bold text-xl text-brand-dark mb-2">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-sm text-brand-dark/70">
              Свяжитесь с нами по телефону или отправьте электронный запрос
              администрации.
            </p>
          </div>
          <Link
            href="/reception"
            className="px-6 py-3 bg-brand-dark text-brand-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark whitespace-nowrap text-center shrink-0"
          >
            Задать вопрос →
          </Link>
        </section>
      </div>
    </main>
  );
}
