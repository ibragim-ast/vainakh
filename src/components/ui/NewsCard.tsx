import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  id: number | string;
  date: string;
  title: string;
  imageUrl: string;
}

export default function NewsCard({ date, title, imageUrl, id }: NewsCardProps) {
  return (
    <Link href={`/news/${id}`} className="group">
      <div className="relative aspect-4/3 overflow-hidden ">
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="mt-6">
        <span className="text-brand-orange">{date}</span>
        <h3 className="text-2xl font-bold transition-colors group-hover:text-brand-orange">
          {title}
        </h3>
      </div>
    </Link>
  );
}
