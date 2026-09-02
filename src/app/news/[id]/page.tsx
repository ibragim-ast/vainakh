import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const article = newsData.find(
    (item) => item.id.toString() === resolvedParams.id,
  );

  if (!article) {
    return (
      <main className="pt-40 pb-20 min-h-[70vh] bg-brand-light flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-sans font-bold text-4xl md:text-5xl text-brand-dark mb-6">
          Новость не найдена
        </h1>
        <p className="text-lg text-brand-dark/70 mb-10 max-w-lg">
          Возможно, материал был удален или перемещен. Вернитесь в архив, чтобы
          прочитать актуальные события ансамбля.
        </p>
        <Link
          href="/news"
          className="uppercase tracking-widest text-sm font-bold px-8 py-4 bg-brand-dark text-brand-gold rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark"
        >
          Вернуться в архив
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 bg-brand-light">
      <div className="max-w-3xl mx-auto px-6 w-full">
        <div className="relative w-full aspect-video md:aspect-2/1 mb-10 overflow-hidden rounded-sm">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <span className="text-brand-orange block mb-6 text-sm font-bold tracking-widest uppercase">
          {article.date}
        </span>
        <h1 className="font-sans font-bold text-3xl md:text-5xl mb-8 text-brand-dark leading-tight">
          {article.title}
        </h1>
        <p className=" text-brand-dark text-lg opacity-90 whitespace-pre-wrap md:text-xl leading-relaxed">
          {article.content}
        </p>
      </div>
    </main>
  );
}
