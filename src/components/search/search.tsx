import { liteClient as algoliasearch } from "algoliasearch/lite";
// import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import { Hit } from "./hit";

const appId = process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID ?? "";
const apiKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY ?? "";

const searchClient = algoliasearch(appId, apiKey);

export const Search = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="cards_index">
      <Configure hitsPerPage={20} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <div className="max-h-[calc(100vh-1.5rem-2rem-2px-46px-1rem)] overflow-auto">
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearch>
  );
};
