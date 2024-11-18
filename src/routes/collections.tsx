import CollectionsGrid from "../components/collections-grid";
import { collections } from "../data/collections";

export default function Collections() {
  return (
    <div className="p-2 2xl:container mx-auto pt-1 md:p-4">
      <CollectionsGrid collections={collections} />
    </div>
  );
}
