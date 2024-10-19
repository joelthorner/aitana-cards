import CollectionsGrid from "../components/collections-grid";
import { collections } from "../data/collections";

export default function Collections() {
  return (
    <div className="p-2 2xl:container mx-auto">
      <CollectionsGrid collections={collections} />
    </div>
  );
}
