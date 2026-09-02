import DocumentsFilter from "@/components/blocks/DocumentsFilter";
import { getDocuments } from "@/api/documents";

export default async function Documents() {
  const documentsData = await getDocuments();

  return <DocumentsFilter initialDocs={documentsData} />;
}
