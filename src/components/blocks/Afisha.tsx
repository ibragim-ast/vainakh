import Link from "next/link";
import EventCard from "../ui/EventCard";
import { getEvents } from "@/api/events";

export default async function Afisha() {
  const eventsData = await getEvents();
  const upcomingEvents = eventsData
    .filter((item) => new Date(item.dateIso).getTime() >= new Date().getTime())
    .slice(0, 3)
    .sort(
      (a, b) => new Date(a.dateIso).getTime() - new Date(b.dateIso).getTime(),
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
    ));

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <h2 className="text-3xl md:text-5xl text-brand-dark font-bold font-sans">
          Афиша
        </h2>
        {upcomingEvents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-6 border-t border-brand-dark/10 mt-8">
            <p className="text-xl md:text-2xl text-brand-dark/60 font-medium">
              На данный момент гастрольный график формируется.
            </p>
            <Link
              className="px-8 py-4 uppercase tracking-widest font-bold border border-brand-dark/30 text-brand-dark transition-colors hover:border-brand-orange hover:text-brand-orange rounded-sm"
              href="/news"
            >
              Следить за новостями
            </Link>
          </div>
        ) : (
          upcomingEvents.map((event) => event)
        )}
      </div>
      {upcomingEvents.length > 0 && (
        <div className="mt-12 flex justify-center">
          <Link
            href="/events"
            className="px-8 py-4 uppercase tracking-widest font-bold border border-brand-dark text-brand-dark transition-colors hover:bg-brand-dark hover:text-brand-gold"
          >
            Все концерты
          </Link>
        </div>
      )}
    </section>
  );
}
