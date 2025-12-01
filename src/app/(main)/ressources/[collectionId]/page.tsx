import { ListeDesCollections } from "./collectionList";

const Collections = async ({ params }: { params: Promise<{ collectionId: string }> }) => {
  const { collectionId } = await params;
  const collection = ListeDesCollections.find(c => c.slug === collectionId);
  return <div>{collection ? collection.Component : <div>Collection not found</div>}</div>;
};

export default Collections;
