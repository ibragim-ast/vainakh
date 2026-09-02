import Image from "next/image";

interface NewsCardProps {
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export default function NewsCard({
  date,
  title,
  excerpt,
  imageUrl,
}: NewsCardProps) {
  return (
    <div>
      <div className="relative aspect-4/3 overflow-hidden group">
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
        <h3 className="text-2xl font-bold text-brand-light">{title}</h3>
        <p className="text-1xl text-brand-light">{excerpt}</p>
      </div>
    </div>
  );
}
