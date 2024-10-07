import { collections } from "../data/collections";

export default function Collections() {
  return (
    <div>
      <div className="mb-2 pl-[2px] text-sm font-medium">Debug info</div>
      <pre className="text-xs overflow-auto">{JSON.stringify(collections, null, 2)}</pre>
    </div>
  );
}
