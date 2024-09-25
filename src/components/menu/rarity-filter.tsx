import { useState } from "react";
import { useClassName } from "../../hooks/useClassName";
import { getStarClassName } from "../../utils/getStarClassName";
import { useLocation, useNavigate } from "react-router-dom";

interface FilterButtonProps {
  num: number;
}

function FilterButton({ num }: FilterButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const getInitialCheckedState = (): boolean => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("rarity-" + num) === "true" || searchParams.get("rarity-" + num) === null;
  };

  const [checked, setChecked] = useState(getInitialCheckedState());

  const btnClassName = useClassName([
    "flex flex-1 gap-1 flex-col py-2 pt-3 px-3 items-center font-medium text-sm rounded-lg border shadow-sm transition-colors",
    checked ? "border-blue-600 bg-blue-600 text-white" : "border-gray-200 bg-white text-gray-500",
    checked ? "hover:bg-blue-700 hover:border-blue-700" : "hover:bg-gray-50",
  ]);
  const starClassName = useClassName(["size-3", checked ? "fill-white" : "", getStarClassName(num)]);

  const handleCheckboxChange = (num: number) => {
    const newChecked = !checked;
    setChecked(newChecked);

    // Paràmetres actuals de la URL
    const searchParams = new URLSearchParams(location.search);

    // Afegeix o elimina el paràmetre `active` segons l'estat del checkbox
    if (newChecked) {
      searchParams.set("rarity-" + num, "true");
    } else {
      searchParams.set("rarity-" + num, "false");
    }

    // Actualitza la URL
    navigate({ search: searchParams.toString() });
  };

  return (
    <button type="button" key={num} className={btnClassName} onClick={() => handleCheckboxChange(num)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={starClassName} viewBox="0 0 16 16">
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
      {num}
    </button>
  );
}

export default function RarityFilter() {
  const rarities = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>
      {rarities.map((num) => (
        <FilterButton key={num} num={num} />
      ))}
    </>
  );
}
