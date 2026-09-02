import { INews } from "@/types";
import { newsData } from "@/data/news";

async function getNews(): Promise<INews[]> {
  return newsData;
}

export { getNews };
