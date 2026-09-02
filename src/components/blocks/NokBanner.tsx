import Image from "next/image";
import Link from "next/link";

export default function NokBanner() {
  return (
    <section className="py-20 bg-brand-dark text-brand-light">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-brand-gold">
            Оцените качество наших услуг
          </h2>
          <p className="text-brand-light/80 leading-relaxed max-w-2xl">
            Помогите нам стать лучше! Пройдите короткий опрос от
            Северо-Кавказского центра аккредитации. Также вы можете оставить
            свое мнение на портале bus.gov.ru и в официальном мобильном
            приложении «Наше мнение».
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link
              href="http://qualityrater.ru:8080/cultura_chr26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-brand-gold text-brand-dark text-sm uppercase tracking-widest font-bold text-center rounded-sm transition-colors hover:bg-brand-orange hover:text-brand-dark"
            >
              Пройти опрос НОК
            </Link>
            <Link
              href="https://bus.gov.ru/qrcode/rate/269192"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 border border-brand-gold/30 text-brand-gold text-sm uppercase tracking-widest font-bold text-center rounded-sm transition-colors hover:border-brand-gold hover:bg-brand-gold/10"
            >
              bus.gov.ru
            </Link>
          </div>
        </div>

        <div className="shrink-0 bg-white p-2 rounded-md shadow-lg overflow-hidden flex items-center justify-center">
          <Image
            src="/nok-qr.png"
            alt="QR-код для оценки качества услуг"
            width={200}
            height={200}
            className="w-40 h-40 md:w-48 md:h-48 object-contain scale-115"
          />
        </div>
      </div>
    </section>
  );
}
