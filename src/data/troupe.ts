export interface Artist {
  id: number;
  name: string;
  role: string; // Например, "Солист балета", "Артист балета", "Гармоника", "Доул"
  titles?: string[]; // Почетные звания
  image?: string;
  category: "ballet" | "orchestra";
}

export const troupeData: Artist[] = [
  // Балетная труппа
  {
    id: 1,
    name: "[ФИО Солиста]",
    role: "Ведущий солист балета",
    titles: ["Народный артист Чеченской Республики"],
    category: "ballet",
  },
  {
    id: 2,
    name: "[ФИО Артистки]",
    role: "Солистка балета",
    titles: ["Заслуженная артистка Чеченской Республики"],
    category: "ballet",
  },
  {
    id: 3,
    name: "[ФИО Артиста]",
    role: "Артист балета",
    category: "ballet",
  },
  {
    id: 4,
    name: "[ФИО Артистки]",
    role: "Артистка балета",
    category: "ballet",
  },

  // Оркестровая группа
  {
    id: 101,
    name: "[ФИО Музыканта]",
    role: "Руководитель оркестра / Гармоника",
    titles: ["Народный артист Чеченской Республики"],
    category: "orchestra",
  },
  {
    id: 102,
    name: "[ФИО Музыканта]",
    role: "Инструментальная группа (Дечиг-пондар)",
    titles: ["Заслуженный артист Чеченской Республики"],
    category: "orchestra",
  },
  {
    id: 103,
    name: "[ФИО Музыканта]",
    role: "Ударные инструменты (Доул)",
    category: "orchestra",
  },
];
