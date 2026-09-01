interface DocumentCardProps {
  category: string;
  title: string;
  fileSize: string;
  date: string;
}

export default function DocumentCard({
  title,
  fileSize,
  date,
}: DocumentCardProps) {
  return (
    <div className="flex justify-between items-center border-b border-brand-dark/20 py-6">
      <div>
        <h4 className="font-sans font-bold text-lg">{title}</h4>
        <span className="text-brand-dark/60 text-sm">{date}</span>
      </div>
      <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-8">
        <span className="text-brand-dark/50 text-sm font-medium">
          {fileSize}
        </span>
        <button className="text-brand-orange hover:text-brand-dark transition-colors cursor-pointer">
          Скачать
        </button>
      </div>
    </div>
  );
}
