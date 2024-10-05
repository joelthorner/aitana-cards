import { OrderByEnum, useFiltersContext } from "../../providers/filters";
import { getOrderByLabel } from "../../utils/getOrderByLabel";

export default function OrderBy() {
  const { orderBy, setOrderBy } = useFiltersContext();

  const getButtonClass = (currentOrderBy: OrderByEnum) => {
    return `text-sm text-slate-600 hover:text-blue-600 ${orderBy === currentOrderBy ? "font-medium" : ""}`;
  };

  return (
    <ul className="marker:text-blue-600 list-disc ps-5 space-y-2 text-sm text-gray-600">
      <li>
        <button className={getButtonClass(OrderByEnum.DEFAULT)} type="button" onClick={() => setOrderBy(OrderByEnum.DEFAULT)}>
          {getOrderByLabel(OrderByEnum.DEFAULT)}
        </button>
      </li>
      <li>
        <button className={getButtonClass(OrderByEnum.RARITY)} type="button" onClick={() => setOrderBy(OrderByEnum.RARITY)}>
          {getOrderByLabel(OrderByEnum.RARITY)}
        </button>
      </li>
      <li>
        <button className={getButtonClass(OrderByEnum.YEAR)} type="button" onClick={() => setOrderBy(OrderByEnum.YEAR)}>
          {getOrderByLabel(OrderByEnum.YEAR)}
        </button>
      </li>
      <li>
        <button className={getButtonClass(OrderByEnum.COLLECTION)} type="button" onClick={() => setOrderBy(OrderByEnum.COLLECTION)}>
          {getOrderByLabel(OrderByEnum.COLLECTION)}
        </button>
      </li>
    </ul>
  );
}
