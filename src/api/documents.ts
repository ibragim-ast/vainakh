import { IDocument } from "@/types";
import { documentsData } from "@/data/documents";

async function getDocuments(): Promise<IDocument[]> {
  return documentsData;
}

export { getDocuments };
