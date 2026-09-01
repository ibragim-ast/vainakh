"use client";

import { useState } from "react";
import DocumentCard from "@/components/ui/DocumentCard";
import { documentsData } from "@/data/documents";

export default function Documents() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const categories = [
    "Все",
    ...Array.from(new Set(documentsData.map((item) => item.category))),
  ];
  const filteredDocs =
    activeCategory === "Все"
      ? documentsData
      : documentsData.filter((item) => item.category === activeCategory);

  return (
    <main className="bg-brand-light pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-dark mb-12">
          Официальные документы
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-brand-dark/20 pt-10">
          <div className="md:col-span-4 lg:col-span-3 sticky top-32 self-start">
            <div className="flex flex-col gap-2 pt-4">
              {categories.map((cat) => (
                <button
                  className={`rounded-r-md text-left px-4 py-3 border-l-2 transition-colors ${activeCategory === cat ? "border-brand-orange text-brand-orange font-bold" : "border-brand-dark/10 text-brand-dark hover:border-brand-dark/30 hover:bg-brand-dark/5 cursor-pointer"}`}
                  onClick={() => setActiveCategory(cat)}
                  key={cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-4">
            {filteredDocs.map((item) => (
              <DocumentCard
                key={item.id}
                title={item.title}
                fileSize={item.fileSize}
                date={item.date}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
