import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-brand-light">
      <Image
        src="/hero-bg.webp"
        alt="Выступление ансамбля Вайнах"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-dark/70"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
        <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-7xl text-brand-light mb-6 leading-tight">
          Государственный академический ансамбль танца "Вайнах"
        </h1>
        <p className="md:mb-10 mb-6 text-xl md:text-2xl text-brand-light/80 max-w-2xl">
          «Визитная карточка чеченского народа»
          <span className="block mt-1 text-sm md:text-base uppercase tracking-widest text-brand-gold ml-8 md:ml-16 opacity-80">
            — Ахмат-Хаджи Кадыров
          </span>
        </p>
      </div>
    </section>
  );
}
