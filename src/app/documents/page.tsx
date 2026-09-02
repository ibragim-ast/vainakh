import { Metadata } from "next";
import DocumentsFilter from "@/components/blocks/DocumentsFilter";
import { getDocuments } from "@/api/documents";

export const metadata: Metadata = {
  title: "Документы | Ансамбль Вайнах",
  description: "Официальные документы и материалы ансамбля Вайнах.",
};

export default async function Documents() {
  const documentsData = await getDocuments();

  return <DocumentsFilter initialDocs={documentsData} />;
}
