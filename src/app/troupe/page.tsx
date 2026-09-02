"use client";

import { useState } from "react";
import Image from "next/image";
import { troupeData, Artist } from "@/data/troupe";

function ArtistCard({ person }: { person: Artist }) {
  return (
    <div className="border border-brand-dark/15 bg-white/60 rounded-sm overflow-hidden flex flex-col h-full">
      <div className="relative aspect-3/4 w-full bg-brand-dark/5 flex items-center justify-center overflow-hidden shrink-0">
        {person.image ? (
          <Image
            src={person.image}
            alt={person.name}
            fill
            className="object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-brand-dark/20 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-16 h-16 mb-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">
              Фото отсутствует
            </span>
          </div>
        )}
      </div>

      {/* Текстовая зона с фиксированными высотами */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Роль в труппе / Инструмент */}
          <div className="min-h-10] flex items-start mb-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange leading-tight">
              {person.role}
            </span>
          </div>

          {/* Имя артиста */}
          <div className="min-h-11 flex items-start">
            <h3 className="font-sans font-bold text-base md:text-lg text-brand-dark leading-snug">
              {person.name}
            </h3>
          </div>
        </div>

        {/* Почетные звания артиста */}
        <div className="min-h-8 mt-2 pt-2 border-t border-brand-dark/10 flex items-start">
          {person.titles && person.titles.length > 0 ? (
            <p className="text-xs text-brand-dark/60 italic leading-snug">
              {person.titles.join(", ")}
            </p>
          ) : (
            <span className="text-xs text-transparent select-none">-</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TroupePage() {
  const [activeTab, setActiveTab] = useState<"ballet" | "orchestra">("ballet");

  const filteredArtists = troupeData.filter(
    (item) => item.category === activeTab,
  );

  return (
    <main className="pt-32 pb-20 bg-brand-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <h1 className="font-sans font-bold text-3xl md:text-5xl text-brand-dark mb-4">
          Артисты ансамбля
        </h1>

        <div className="flex gap-4 border-b border-brand-dark/15 mb-12">
          <button
            onClick={() => setActiveTab("ballet")}
            className={`pb-4 px-2 text-sm uppercase tracking-widest font-bold transition-all relative ${
              activeTab === "ballet"
                ? "text-brand-orange border-b-2 border-brand-orange"
                : "text-brand-dark/50 hover:text-brand-dark"
            }`}
          >
            Балетная труппа
          </button>
          <button
            onClick={() => setActiveTab("orchestra")}
            className={`pb-4 px-2 text-sm uppercase tracking-widest font-bold transition-all relative ${
              activeTab === "orchestra"
                ? "text-brand-orange border-b-2 border-brand-orange"
                : "text-brand-dark/50 hover:text-brand-dark"
            }`}
          >
            Оркестр
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} person={artist} />
          ))}
        </div>
      </div>
    </main>
  );
}
