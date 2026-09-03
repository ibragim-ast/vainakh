import { Metadata } from "next";
import EventCard from "@/components/ui/EventCard";
import { eventsData } from "@/data/events";

export const metadata: Metadata = {
  title: "Афиша | Ансамбль Вайнах",
  description:
    "Официальный гастрольный график и расписание концертов государственного ансамбля Вайнах.",
};

export default function EventsPage() {
  return (
    <main className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-dark">
          Расписание концертов
        </h1>
        <div className="mt-6 md:mt-10 flex flex-col gap-3 md:gap-4">
          {eventsData
            .filter(
              (item) =>
                new Date(item.dateIso).getTime() >= new Date().getTime(),
            )
            .sort(
              (a, b) =>
                new Date(a.dateIso).getTime() - new Date(b.dateIso).getTime(),
            )
            .map((item) => (
              <EventCard
                key={item.id}
                dayOfTheMonth={item.dayOfTheMonth}
                month={item.month}
                time={item.time}
                badge={item.badge}
                address={item.address}
                description={item.description}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
