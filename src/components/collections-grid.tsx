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
    <div className="grid grid-default-cards gap-x-2 gap-y-4 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
      {collections.map((collection) => (
        <div className="grid-item" key={collection.id}>
          <Collection collection={collection} />
        </div>
      ))}
    </div>
  );
}
