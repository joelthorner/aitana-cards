// import { searchClient } from "@algolia/client-search";
// import { cards } from "../../data/cards";
import { Search } from "./search";

export default function SearchModal() {
  // Nse on ficar-ho pero es per indexar
  // const appId = process.env.REACT_APP_ALGOLIA_SEARCH_APP_ID ?? "";
  // const apiKey = process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY ?? "";
  // const client = searchClient(appId, apiKey);

  // const processRecords = async () => {
  //   const movies = cards.map((card) => {
  //     return { id: card.id, name: card.name, collection: card.collection.name, number: card.number, cardType: card.cardType, image: card.images[0] };
  //   });
  //   return await client.saveObjects({ indexName: "cards", objects: movies });
  // };

  // processRecords()
  //   .then(() => console.log("Successfully indexed objects!"))
  //   .catch((err) => console.error(err));

  // console.log(
  //   JSON.stringify(
  //     cards.map((card) => {
  //       return { id: card.id, name: card.name, collection: card.collection.name, number: card.number, cardType: card.cardType, image: card.images[0] };
  //     })
  //   )
  // );

  return (
    <div
      id="search-modal"
      className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
      role="dialog"
      aria-labelledby="search-modal-label"
    >
      <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-3xl pointer-events-auto">
          <div className="relative">
            <div className="relative p-4">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
