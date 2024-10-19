import { Collection as CollectionType } from "../types/collection";
import { useEffect } from "react";
import Collection from "./collection";

interface CollectionsGridProps {
  collections: CollectionType[];
}

export default function CollectionsGrid({ collections }: CollectionsGridProps) {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  });

  return (
    <div className="grid gap-x-2 gap-y-4 grid-cols-2">
      {collections.map((collection) => (
        <div className="grid-item" key={collection.id}>
          <Collection collection={collection} />
        </div>
      ))}
    </div>
  );
}
