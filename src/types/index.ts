export interface IEvent {
  id: number;
  dayOfTheMonth: number;
  month: string;
  time: string;
  badge?: string;
  description: string;
  address: string;
  dateIso: string;
}

export interface INews {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export interface IDocument {
  id: number;
  title: string;
  fileSize: string;
  date: string;
  category: string;
}
