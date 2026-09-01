import Link from "next/link";
import EventCard from "../ui/EventCard";
import { eventsData } from "@/data/events";

export default function Afisha() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <h2 className="text-3xl md:text-5xl text-brand-dark font-bold font-sans">
          Афиша
        </h2>

        {eventsData
          .filter(
            (item) => new Date(item.dateIso).getTime() >= new Date().getTime(),
          )
          .slice(0, 4)
          .sort(
            (a, b) =>
              new Date(a.dateIso).getTime() - new Date(b.dateIso).getTime(),
          )
          .map((item) => (
            <EventCard
              key={item.id}
              dayOfTheMonth={item.dayOfTheMonth}
              month={item.month}
              address={item.address}
              description={item.description}
            />
          ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/events"
          className="px-8 py-4 uppercase tracking-widest font-bold border border-brand-dark text-brand-dark transition-colors hover:bg-brand-dark hover:text-brand-gold"
        >
          Все концерты
        </Link>
      </div>
    </section>
  );
}
