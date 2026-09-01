interface EventCardProps {
  dayOfTheMonth: number;
  month: string;
  description: string;
  address: string;
}

export default function EventCard({
  dayOfTheMonth,
  month,
  description,
  address,
}: EventCardProps) {
  return (
    <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center justify-between border-b border-brand-dark/20 pb-8">
      <div className="flex flex-col gap-2">
        <span className=" md:text-6xl font-sans  text-brand-orange text-5xl font-bold">
          {dayOfTheMonth}
        </span>
        <span className="text-lg uppercase font-medium">{month}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span>{address}</span>
        <p className="text-sm text-brand-dark/70">{description}</p>
      </div>

      <div>
        <button className="bg-brand-dark text-brand-gold px-8 py-4 uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark">
          Купить билет
        </button>
      </div>
    </div>
  );
}
