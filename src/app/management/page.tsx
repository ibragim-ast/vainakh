import { Metadata } from "next";
import Image from "next/image";
import { managementData, StaffMember } from "@/data/management";

export const metadata: Metadata = {
  title: "Руководство | Ансамбль Вайнах",
  description:
    "Административно-управленческий персонал Государственного академического ансамбля танца «Вайнах».",
};

// Карточка с выровненной сеткой текста и заглушкой
function PersonCard({ person }: { person: StaffMember }) {
  return (
    <div className="border border-brand-dark/15 bg-white/60 rounded-sm overflow-hidden flex flex-col h-full">
      {/* Контейнер для фото 3/4 */}
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

      {/* Текстовый блок со строгой фиксацией минимальной высоты */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Секция должности: min-h-[4.5rem] гарантирует запас до 4 строк */}
          <div className="min-h-18 flex items-start mb-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-brand-orange leading-tight">
              {person.role}
            </span>
          </div>

          {/* Секция ФИО: старт строго с одной линии на всех карточках */}
          <div className="min-h-12 flex items-start">
            <h3 className="font-sans font-bold text-base sm:text-lg text-brand-dark leading-snug">
              {person.name}
            </h3>
          </div>
        </div>

        {/* Почетные звания (если есть) */}
        {person.titles && person.titles.length > 0 && (
          <div className="mt-3 pt-2 border-t border-brand-dark/10">
            <p className="text-xs text-brand-dark/60 italic leading-snug">
              {person.titles.join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ManagementPage() {
  const tier1 = managementData.filter((p) => p.tier === 1);
  const tier2 = managementData.filter((p) => p.tier === 2);
  const tier3 = managementData.filter((p) => p.tier === 3);

  return (
    <main className="pt-32 pb-20 bg-brand-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <h1 className="font-sans font-bold text-3xl md:text-5xl text-brand-dark mb-4">
          Руководство
        </h1>

        <section className="mb-20">
          <div className="max-w-xs mx-auto">
            {tier1.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>

        <div className="w-full border-t border-brand-dark/10 mb-16" />

        <section className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tier2.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>

        <div className="w-full border-t border-brand-dark/10 mb-16" />

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tier3.map((person) => (
              <PersonCard key={person.id} person={person} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
