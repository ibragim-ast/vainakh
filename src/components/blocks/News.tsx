import Link from "next/link";
import NewsCard from "../ui/NewsCard";
import { getNews } from "@/api/news";

export default async function News() {
  const newsData = await getNews();

  return (
    <section className="py-20 bg-brand-dark text-brand-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-brand-light">
          Новости
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {newsData.map((item) => (
            <NewsCard
              id={item.id}
              key={item.id}
              date={item.date}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/news"
          className="px-8 py-4 uppercase tracking-widest font-bold border border-brand-light/30 text-brand-light transition-colors hover:bg-brand-orange hover:border-brand-orange hover:text-brand-dark"
        >
          Архив новостей
        </Link>
      </div>
    </section>
  );
}
