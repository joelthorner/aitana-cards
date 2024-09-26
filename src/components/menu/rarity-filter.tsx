import { useClassName } from "../../hooks/useClassName";
import { getStarClassName } from "../../utils/getStarClassName";
import { useFiltersContext } from "../../providers/filters";

interface FilterButtonProps {
  id: "rarity_1" | "rarity_2" | "rarity_3" | "rarity_4" | "rarity_5";
}

function FilterButton({ id }: FilterButtonProps) {
  const { rarity, setRarity } = useFiltersContext();

  const btnClassName = useClassName([
    "flex flex-1 gap-1 flex-col py-2 pt-3 px-3 items-center font-medium text-sm rounded-lg border shadow-sm transition-colors",
    rarity[id] ? "border-blue-600 bg-blue-600 text-white" : "border-gray-200 bg-white text-gray-500",
    rarity[id] ? "hover:bg-blue-700 hover:border-blue-700" : "hover:bg-gray-50",
  ]);
  const starClassName = useClassName(["size-3", rarity[id] ? "fill-white" : "", getStarClassName(id)]);

  const handleCheckboxChange = () => {
    setRarity(id, !rarity[id]);
  };

  return (
    <button type="button" className={btnClassName} onClick={() => handleCheckboxChange()}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
      {id.split("_")[1]}
    </button>
  );
}

export default function RarityFilter() {
  return (
    <>
      <FilterButton id="rarity_1" />
      <FilterButton id="rarity_2" />
      <FilterButton id="rarity_3" />
      <FilterButton id="rarity_4" />
      <FilterButton id="rarity_5" />
    </>
  );
}
