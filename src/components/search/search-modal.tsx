import { searchClient } from "@algolia/client-search";
import { cards } from "../../data/cards";
import { Search } from "./search";

export default function SearchModal() {
  // Nse on ficar-ho pero es per indexar
  // const client = searchClient("TK7HVIUKD2", "77a3e80d100a19eb6550213c04489686");

  // const processRecords = async () => {
  //   const movies = cards.map((card) => {
  //     return { id: card.id, name: card.name, collection: card.collection.name, number: card.number, cardType: card.cardType, image: card.images[0] };
  //   });
  //   return await client.saveObjects({ indexName: "cards_index", objects: movies });
  // };

  // processRecords()
  //   .then(() => console.log("Successfully indexed objects!"))
  //   .catch((err) => console.error(err));

  return (
    <div
      id="search-modal"
      className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
      role="dialog"
      aria-labelledby="search-modal-label"
    >
      <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div className="relative">
            <div className="relative p-4">
              <Search />
              {/* <div className="relative">
                <label id="search-modal-label" htmlFor="search-modal-input" className="sr-only">
                  Search input
                </label>
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="shrink-0 size-4 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <input
                  id="search-modal-input"
                  className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  type="text"
                  placeholder="Type a name"
                  value=""
                  data-hs-combo-box-input=""
                />
              </div> */}
            </div>

            {/* <div
              className="h-80 rounded-b-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
              data-hs-combo-box-output=""
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
