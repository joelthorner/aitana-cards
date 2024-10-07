import { useParams } from "react-router-dom";
import ErrorPage from "../error-page";
import { collections } from "../data/collections";

export default function CollectionDetail() {
  const { collectionId } = useParams<{ collectionId: string }>();

  const [collection] = collections.filter((collection) => collection.id === collectionId);

  if (!collection) {
    return <ErrorPage />;
  }

  return (
    <div>
      <div className="mb-2 pl-[2px] text-sm font-medium">Debug info</div>
      <pre className="text-xs overflow-auto">{JSON.stringify(collection, null, 2)}</pre>
    </div>
  );
}
