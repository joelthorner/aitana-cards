import { useClassName } from "../../hooks/useClassName";
import { useFiltersContext } from "../../providers/filters";
import { cards } from "../../data/cards";
import { Card } from "../../types/card";
import { useMemo } from "react";

interface FilterButtonProps {
  value: number;
}

function FilterButton({ value }: FilterButtonProps) {
  const { years, setYears } = useFiltersContext();

  const handleCheckboxChange = () => {
    if (years.includes(value)) {
      setYears(years.filter((r) => r !== value));
    } else {
      setYears([...years, value]);
    }
  };

  const btnClassName = useClassName([
    "flex flex-1 gap-1 flex-col py-2 px-3 items-center font-medium text-sm rounded-lg border shadow-sm transition-colors",
    years.includes(value) ? "border-blue-600 bg-blue-600 text-white" : "border-gray-200 bg-white text-gray-500",
    years.includes(value) ? "hover:bg-blue-700 hover:border-blue-700" : "hover:bg-gray-50",
  ]);
  return (
    <button type="button" className={btnClassName} onClick={handleCheckboxChange}>
      {value}
    </button>
  );
}

export default function YearsFilter() {
  const uniqueYears = useMemo(() => {
    return cards
      .reduce<number[]>((acc, card: Card) => {
        if (!acc.includes(card.year)) acc.push(card.year);
        return acc;
      }, [])
      .sort()
      .reverse();
  }, []);

  return (
    <>
      {uniqueYears.map((year) => (
        <FilterButton key={year} value={year} />
      ))}
    </>
  );
}
