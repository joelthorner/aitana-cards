import CollectionsGrid from "../components/collections-grid";
import { collections } from "../data/collections";

export default function Collections() {
  return <CollectionsGrid collections={collections} />;
}
