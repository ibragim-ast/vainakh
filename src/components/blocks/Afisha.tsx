import EventCard from "../ui/EventCard";

const eventsData = [
  {
    id: 1,
    dayOfTheMonth: 30,
    month: "октября",
    description: "Сольный концерт",
    address: "г. Грозный, ул. Шейха Али Митаева, 6",
    dateIso: "2026-10-30",
  },
  {
    id: 2,
    dayOfTheMonth: 15,
    month: "ноября",
    description: "Танцевальный вечер",
    address: "г. Грозный, ул. Ленина, 10",
    dateIso: "2026-11-15",
  },
  {
    id: 4,
    dayOfTheMonth: 20,
    month: "января",
    description: "Концерт классической музыки",
    address: "г. Грозный, ул. Гагарина, 15",
    dateIso: "2027-01-20",
  },
  {
    id: 3,
    dayOfTheMonth: 5,
    month: "декабря",
    description: "Новогодний концерт",
    address: "г. Грозный, ул. Пушкина, 20",
    dateIso: "2026-12-05",
  },
  {
    id: 5,
    dayOfTheMonth: 7,
    month: "декабря",
    description: "Августовский концерт",
    address: "г. Грозный, ул. Пушкина, 20",
    dateIso: "2026-08-05",
  },
];

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
          .slice(0, 3)
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
