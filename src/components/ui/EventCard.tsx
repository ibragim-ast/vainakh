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
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-stretch md:items-center justify-between border-b border-brand-dark/15 p-4 md:p-6 rounded-sm transition-all duration-300 hover:bg-brand-dark/3 hover:-translate-y-0.5 group">
      <div className="flex gap-4 md:gap-12 items-start md:items-center">
        <div className="flex flex-col shrink-0 w-20 md:w-28 text-center md:text-left justify-center">
          <span className="text-4xl md:text-6xl font-sans font-bold text-brand-orange leading-tight">
            {dayOfTheMonth}
          </span>
          <span className="text-xs md:text-base uppercase font-bold text-brand-dark tracking-wider">
            {month}
          </span>
          <span className="text-[11px] md:text-xs font-semibold text-brand-dark/60 uppercase tracking-widest mt-1">
            {time}
          </span>
        </div>

        <div className="w-px self-stretch bg-brand-dark/10 md:hidden shrink-0" />

        <div className="flex flex-col gap-1.5 md:gap-2 flex-1 md:w-96">
          {badge && (
            <span className="inline-block w-fit bg-brand-gold text-brand-dark px-2.5 py-0.5 text-[10px] md:text-xs uppercase tracking-widest font-bold rounded-sm mb-1">
              {badge}
            </span>
          )}
          <span className="text-xs md:text-base font-semibold text-brand-dark/90">
            {address}
          </span>
          <p className="text-xs md:text-sm text-brand-dark/60 leading-snug">
            {description}
          </p>
        </div>
      </div>

      <div className="w-full md:w-auto mt-2 md:mt-0">
        <button className="w-full md:w-auto bg-brand-dark text-brand-gold uppercase tracking-widest text-xs md:text-sm font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark px-6 py-3.5 md:px-8 md:py-4 shrink-0 shadow-sm active:scale-[0.99]">
          Купить билет
        </button>
      </div>
    </div>
  );
}
