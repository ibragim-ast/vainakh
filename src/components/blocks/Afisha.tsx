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
    </section>
  );
}
