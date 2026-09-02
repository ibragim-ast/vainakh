import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "История ансамбля | Ансамбль Вайнах",
  description:
    "Летопись Государственного академического ансамбля танца «Вайнах» с 1939 года: основатели, великие артисты и мировое признание.",
};

export default function HistoryPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 md:px-6 w-full">
        {/* Навигация назад */}
        <div className="mb-8">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-dark/50 hover:text-brand-orange transition-colors"
          >
            <span>←</span>
            <span>О коллективе</span>
          </Link>
        </div>

        {/* Заголовок страницы */}
        <header className="mb-14">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-orange block mb-3">
            Летопись коллектива
          </span>
          <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-brand-dark mb-6 leading-tight">
            История создания и развития ансамбля «Вайнах»
          </h1>
          <p className="text-brand-dark/70 text-lg md:text-xl leading-relaxed border-l-2 border-brand-orange pl-4">
            Путь длиною более восьми десятилетий: от первых фольклорных
            постановок 1939 года до признания на ведущих театральных сценах
            мира.
          </p>
        </header>

        {/* Тело статьи / Хроника */}
        <article className="flex flex-col gap-12 text-brand-dark/85 text-base md:text-lg leading-relaxed">
          {/* Эпоха 1: Рождение */}
          <section className="flex flex-col gap-4">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark">
              1939 год. У истоков национального танца
            </h2>
            <p>
              В августе 1939 года решением руководства республики был создан
              Чечено-Ингушский государственный ансамбль песни и пляски. Главной
              целью молодого коллектива стал сбор, бережное сохранение и
              сценическое осмысление многовекового фольклора нахских народов. В
              состав вошли лучшие народные исполнители, музыканты-виртуозы и
              знатоки старинных традиций.
            </p>
            <p>
              С первых же концертов ансамбль заявил о себе как о самобытном
              явлении, в котором скромная девичья грация сочеталась с виртуозным
              мужским темпераментом, прыжками и танцем на пальцах.
            </p>
          </section>

          {/* Цитатный акцент / Эсамбаев */}
          <blockquote className="my-4 p-8 border-y border-brand-dark/15 bg-white/40 flex flex-col gap-4">
            <p className="font-serif italic text-xl md:text-2xl text-brand-dark leading-snug">
              «Танец — это не просто движения. Это душа народа, его история, его
              кодекс чести и благородства».
            </p>
            <footer className="text-xs uppercase tracking-widest font-bold text-brand-orange">
              В ансамбле начинал свой творческий путь великий танцовщик Махмуд
              Эсамбаев
            </footer>
          </blockquote>

          {/* Эпоха 2: Испытания и признание */}
          <section className="flex flex-col gap-4">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark">
              Годы испытаний и триумфальное возрождение
            </h2>
            <p>
              Коллектив прошел через тяжелые испытания эпохи депортации, однако
              даже в самые суровые годы деятели культуры продолжали сохранять
              национальный репертуар. В конце 1950-х годов ансамбль возобновил
              свою полномасштабную деятельность, стремительно завоевывая
              всесоюзную известность.
            </p>
            <p>
              В 1970–1980-е годы ансамбль, получивший имя «Вайнах», активно
              гастролирует по десяткам стран мира — от Европы и Латинской
              Америки до Азии и Ближнего Востока. Каждое турне сопровождалось
              триумфальными отзывами прессы, отмечавшей феноменальную технику и
              строгое благородство артистов.
            </p>
          </section>

          {/* Эпоха 3: Академический статус и современность */}
          <section className="flex flex-col gap-4">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-brand-dark">
              Академическое признание и современный этап
            </h2>
            <p>
              За выдающийся вклад в развитие отечественной хореографии
              коллективу был присвоен высокий статус «Академический». Сегодня
              Государственный академический ансамбль танца «Вайнах» сочетает
              строгое следование историческому танцевальному канону с
              современной режиссурой сценического света и масштабными
              оркестровыми аранжировками.
            </p>
            <p>
              Коллектив остается главной визитной карточкой региона, регулярно
              выступая на ключевых государственных площадках страны и сохраняя
              живую преемственность поколений мастеров танца.
            </p>
          </section>
        </article>

        {/* Нижний навигационный шлюз */}
        <div className="mt-16 pt-10 border-t border-brand-dark/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-brand-dark text-lg">
              Познакомьтесь с коллективом
            </p>
            <p className="text-sm text-brand-dark/60">
              Артисты балетной труппы и оркестра
            </p>
          </div>
          <Link
            href="/troupe"
            className="px-8 py-4 bg-brand-dark text-brand-gold text-xs uppercase tracking-widest font-bold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark shrink-0"
          >
            Смотреть состав труппы →
          </Link>
        </div>
      </div>
    </main>
  );
}
