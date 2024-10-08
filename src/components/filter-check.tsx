import { StatusType, useFiltersContext } from "../providers/filters";
import { CardStatus } from "../types/card";

interface FilterCheckProps {
  id: CardStatus;
  label: string;
}

export default function FilterCheck({ id, label }: FilterCheckProps) {
  const { status, setStatus } = useFiltersContext();

  const handleCheckboxChange = () => {
    setStatus(id as keyof StatusType, !status[id as keyof StatusType]);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={"filter-" + id}
        checked={status[id]}
        onChange={handleCheckboxChange}
        className="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 before:inline-block before:size-5 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200"
      />
      <label htmlFor={"filter-" + id} className="text-sm text-gray-500 ms-3">
        {label}
      </label>
    </div>
  );
}
