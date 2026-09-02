export interface PhotoArchiveItem {
  id: number;
  title: string;
  date: string;
  venue: string;
  coverImage?: string;
  cloudUrl?: string; // Прямая ссылка на папку в Яндекс.Диске или Облаке Mail.ru
  photoCount?: number;
}

export const audienceArchivesData: PhotoArchiveItem[] = [
  {
    id: 1,
    title: "Сольный концерт",
    date: "15.05.2026",
    venue: "г. Грозный, Дворец танца 'Вайнах'",
    photoCount: 140,
    cloudUrl: "https://disk.yandex.ru",
  },
  {
    id: 2,
    title: "Премьера хореографической постановки 'Кхонахийн латта'",
    date: "20.04.2026",
    venue: "г. Грозный, Чеченская филармония им. Шахбулатова",
    photoCount: 95,
    cloudUrl: "https://disk.yandex.ru",
  },
  {
    id: 3,
    title: "Сольный концерт",
    date: "08.03.2026",
    venue: "г. Москва, Московский международный Дом музыки",
    photoCount: 180,
  },
];
