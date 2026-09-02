export interface StaffMember {
  id: number;
  name: string;
  role: string;
  titles?: string[];
  image?: string;
  tier: 1 | 2 | 3;
}

export const managementData: StaffMember[] = [
  {
    id: 1,
    name: "Байсарова М. Д.",
    role: "Директор ансамбля",
    titles: ["Кавалер ордена Кадырова, Народная артистка Чеченской Республики"],
    image: "/management/baysarova_maret.webp",
    tier: 1,
  },
  {
    id: 2,
    name: "Авторханов Абумуслим Исмаулович",
    role: "Художественный руководитель",
    titles: [
      "Народный артист Чеченской Республики",
      "Народный артист Республики Южная Осетия",
    ],
    image: "/management/avrorhanov_abumuslim.webp",
    tier: 2,
  },
  {
    id: 3,
    name: "Астамиров Ибрагим Шараевич",
    role: "Заместитель директора по концертной деятельности",
    image: "/management/astamirov_ibragim.webp",
    tier: 2,
  },
  {
    id: 4,
    name: "Ахмадов Ризван Абдулаевич",
    role: "Заместитель директора по хозяйственной части",
    image: "/management/ahmadov_rizvan.webp",
    tier: 2,
  },
  {
    id: 5,
    name: "Мусаева Милана Султановна",
    role: "Главный бухгалтер",
    tier: 2,
  },
  {
    id: 6,
    name: "Банкурова Аза Сейтмухамадовна",
    role: "Начальник отдела кадров",
    image: "/management/bankurova_aza.webp",
    tier: 3,
  },
  {
    id: 7,
    name: "Темиргериева Хава Мусаевна",
    role: "Начальник организационного-административного отдела",
    image: "/management/temirgerieva_hava.webp",
    tier: 3,
  },
  {
    id: 8,
    name: "Мусаев Ибрагим Амранович",
    role: "Начальник административно – хозяйственного отдела",
    image: "/management/musaev_ibragim.webp",
    tier: 3,
  },
];
