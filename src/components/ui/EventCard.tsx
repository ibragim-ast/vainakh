interface EventCardProps {
  dayOfTheMonth: number;
  month: string;
  time: string;
  description: string;
  address: string;
  badge?: string;
}

export default function EventCard({
  dayOfTheMonth,
  month,
  description,
  address,
  badge,
  time,
}: EventCardProps) {
  return (
    <div className="mt-12 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center justify-between border-b border-brand-dark/20 pb-8 group">
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-center">
        <div className="flex flex-col md:w-32 md:shrink-0">
          <span className=" md:text-6xl font-sans  text-brand-orange text-5xl font-bold">
            {dayOfTheMonth}
          </span>
          <span className="text-lg uppercase font-medium -mt-2">{month}</span>
          <span className="text-sm md:text-base font-medium text-brand-dark/40 mt-1 uppercase">
            {time}
          </span>
        </div>
        <div className="flex flex-col gap-2 md:w-96">
          {badge && (
            <span className="inline-block w-fit bg-brand-gold text-brand-dark px-3 py-1 text-xs uppercase tracking-widest font-bold mb-3 rounded-sm">
              {badge}
            </span>
          )}
          <span>{address}</span>
          <p className="text-sm text-brand-dark/70 transition-all decoration-brand-orange underline-offset-4 group-hover:underline">
            {description}
          </p>
        </div>
      </div>
      <div>
        <button className="bg-brand-dark text-brand-gold uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark whitespace-nowrap shrink-0 px-6 py-3 md:px-8 md:py-4">
          Купить билет
        </button>
      </div>
    </div>
  );
}
