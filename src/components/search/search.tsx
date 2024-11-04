import { liteClient as algoliasearch } from "algoliasearch/lite";
// import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import { Hit } from "./hit";

const appId = process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID ?? "";
const apiKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY ?? "";

const searchClient = algoliasearch(appId, apiKey);

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="cards"
      future={{
        preserveSharedStateOnUnmount: true,
      }}
    >
      <Configure hitsPerPage={20} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <div className="max-h-[70vh] overflow-auto">
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearch>
  );
};
