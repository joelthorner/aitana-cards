import { CardTypeGroupGeneric, CardTypeGroupPanini, CardTypeGroupToppsCards, CardTypeGroupToppsMatchAttax, CardTypeGroupToppsStickers } from "../../data/card-type-groups";
import { useClassName } from "../../hooks/useClassName";
import { useFiltersContext } from "../../providers/filters";
import { CardType } from "../../types/card";
import { getKeyByValue } from "../../utils/getKeyByValue";

interface CardTypeButtonProps {
  value: string;
}

function CardTypeButton({ value }: CardTypeButtonProps) {
  const { cardTypes, setCardTypes } = useFiltersContext();

  const handleCheckboxChange = () => {
    if (cardTypes.includes(value)) {
      setCardTypes(cardTypes.filter((r) => r !== value));
    } else {
      setCardTypes([...cardTypes, value]);
    }
  };

  const cardTypeId = getKeyByValue(CardType, value);

  const btnClassName = useClassName([
    "group relative flex flex-1 h-14 justify-center gap-1 flex-col px-1 items-center font-medium text-xs rounded-lg shadow-sm transition-colors",
    // cardTypes.includes(value) ? "border-blue-600 bg-blue-600 text-white" : "border-gray-200 bg-white text-gray-500",
    // cardTypes.includes(value) ? "hover:bg-blue-700 hover:border-blue-700" : "hover:bg-gray-50",
  ]);

  const activeElement = (
    <span className="absolute z-50 top-1 end-1 inline-flex items-center size-2.5 rounded-full border border-white text-xs font-medium bg-red-500 text-white"></span>
  );

  return (
    <button type="button" className={btnClassName} onClick={handleCheckboxChange}>
      {cardTypes.includes(value) && activeElement}
      <span className={`relative z-40 text-gray-500 btn-text-card-type-${cardTypeId}`}>{value}</span>
      <div className="rounded-lg absolute inset-0 transition-all opacity-0 group-hover:opacity-50 bg-black z-30 mix-blend-soft-light"></div>
      <div className={`rounded-lg absolute z-20 inset-0 border border-[rgba(0,0,0,.10)] group-hover:border-[rgba(0,0,0,.15)]`}></div>
      <div className={`rounded-lg absolute z-10 inset-0 btn-card-type-${cardTypeId}`}></div>
    </button>
  );
}

export default function CardTypeFilter() {
  return (
    <>
      <div className="text-left text-xs text-slate-500 w-full pl-[2px]">Generic types</div>
      <div className="grid grid-cols-3 gap-2 w-full mb-3">
        {Object.values(CardTypeGroupGeneric).map((type) => (
          <CardTypeButton value={type} key={type} />
        ))}
      </div>
      <div className="text-left text-xs text-slate-500 w-full pl-[2px]">Panini types</div>
      <div className="grid grid-cols-3 gap-2 w-full mb-3">
        {Object.values(CardTypeGroupPanini).map((type) => (
          <CardTypeButton value={type} key={type} />
        ))}
      </div>
      <div className="text-left text-xs text-slate-500 w-full pl-[2px]">Topps card types</div>
      <div className="grid grid-cols-3 gap-2 w-full mb-3">
        {Object.values(CardTypeGroupToppsCards).map((type) => (
          <CardTypeButton value={type} key={type} />
        ))}
      </div>
      <div className="text-left text-xs text-slate-500 w-full pl-[2px]">Topps sticker types</div>
      <div className="grid grid-cols-3 gap-2 w-full mb-3">
        {Object.values(CardTypeGroupToppsStickers).map((type) => (
          <CardTypeButton value={type} key={type} />
        ))}
      </div>
      <div className="text-left text-xs text-slate-500 w-full pl-[2px]">Topps Match Attax types</div>
      <div className="grid grid-cols-3 gap-2 w-full">
        {Object.values(CardTypeGroupToppsMatchAttax).map((type) => (
          <CardTypeButton value={type} key={type} />
        ))}
      </div>
    </>
  );
}
