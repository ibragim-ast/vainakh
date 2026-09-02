import { Metadata } from "next";
import NewsCard from "@/components/ui/NewsCard";
import { newsData } from "@/data/news";

export const metadata: Metadata = {
  title: "Новости | Ансамбль Вайнах",
  description: "Последние новости и события ансамбля Вайнах.",
};

export default function News() {
  return (
    <main className="pt-32 pb-20 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-light">
          Новости
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              date={item.date}
              title={item.title}
              imageUrl={item.imageUrl}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
