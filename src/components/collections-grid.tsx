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

  // let serie: string = "";

  return (
    <div className="grid gap-x-2 gap-y-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {collections.map((collection) => {
        // const title =
        //   collection.serie !== serie && collection.serie?.length ? <div className="col-span-2 text-zinc-400 pl-1 mt-2 -mb-2 text-sm font-medium">{collection.serie}</div> : null;

        // if (collection.serie) {
        //   serie = collection.serie;
        // }

        return (
          <div className="grid-item" key={collection.id}>
            <Collection collection={collection} />
          </div>
        );
      })}
    </div>
  );
}
