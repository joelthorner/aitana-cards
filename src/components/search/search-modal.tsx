import { Search } from "./search";

export default function SearchModal() {
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
