import { Highlight } from "react-instantsearch";
// import { getPropertyByPath } from "instantsearch.js/es/lib/utils";
import { Link } from "react-router-dom";
import { CardSearch } from "../../types/card";
import { Hit as HitType } from "instantsearch.js";

export const Hit = ({ hit }: { hit: HitType<CardSearch> }) => {
  return hit.image ? (
    <article>
      <Link to={`/cards/${hit.id}`} className="flex gap-3" data-hs-overlay="#search-modal">
        <div className="aspect-[5/7] relative w-16 shrink-0">
          <img className="absolute inset-0 object-cover rounded-lg" src={hit.image} alt={hit.name} />
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <div className="hit-name text-[12px] font-bold leading-tight">
            <Highlight attribute="name" hit={hit} />
          </div>
          <div className="hit-collection text-[10px] leading-tight font-medium uppercase text-zinc-500">
            <Highlight attribute="collection" hit={hit} />
          </div>
          <div className="hit-number text-[10px] text-zinc-400 capitalize">
            <Highlight attribute="number" hit={hit} />
          </div>
        </div>
      </Link>
    </article>
  ) : (
    <></>
  );
};
