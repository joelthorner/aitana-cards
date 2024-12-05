import { CircleAlert, CircleCheck, Pencil } from "lucide-react";
import { cards as cardsData } from "../data/cards";
import { Card } from "../types/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

type GroupedCards = Record<string, Card[]>;

export function ContributeItem({ cards }: { cards: Card[] }) {
  const [currentPage, setCurrentPage] = useState(1);

  const addedCards = JSON.parse(JSON.stringify(cards)).sort((a: Card, b: Card) => a.collection.id.localeCompare(b.collection.id));

  const indexOfLastItem = currentPage * 10;
  const indexOfFirstItem = indexOfLastItem - 10;
  const currentItems = addedCards.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  // const goToPage = (page: number) => setCurrentPage(page);

  const totalPages = Math.ceil(addedCards.length / 10);

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);

  return (
    <div className="">
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-1">{addedCards[0].collection.name}</h2>
                  <p className="text-xs text-gray-600">{addedCards[0].collection.id}</p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    {/* <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        View all
                      </a> */}

                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      <svg
                        className="shrink-0 size-4"
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
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      Add new
                    </a>
                  </div>
                </div>
              </div>
              {/* End Header */}

              {/* Collapse */}
              {/* <div className="border-b border-gray-200 hover:bg-gray-50">
                  <button
                    type="button"
                    className="hs-collapse-toggle py-4 px-6 w-full flex items-center gap-2 font-semibold text-gray-800"
                    id="hs-as-table"
                    aria-expanded="false"
                    aria-controls="hs-as-table-label"
                    data-hs-collapse="#hs-as-table-label"
                  >
                    <svg
                      className="hs-collapse-open:rotate-90 size-4"
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
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    Insights
                  </button>
                  <div id="hs-as-table-label" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-as-table">
                    <div className="pb-4 px-6">
                      <div className="flex items-center space-x-2">
                        <span className="size-5 flex justify-center items-center rounded-full bg-blue-600 text-white">
                          <svg
                            className="shrink-0 size-3.5"
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-sm text-gray-800">There are no insights for this period.</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              {/* End Collapse */}

              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Number</span>
                      </div>
                    </th>

                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Year</span>
                      </div>
                    </th>

                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Types</span>
                      </div>
                    </th>

                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Images</span>
                      </div>
                    </th>

                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Desc</span>
                      </div>
                    </th>

                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Team</span>
                      </div>
                    </th>

                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Links</span>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Orien...</span>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Types</span>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Lang</span>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Txtfront</span>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Txtback</span>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-3 text-start">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">Flags</span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-end"></th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {currentItems.map((card: Card) => (
                    <tr className="bg-white hover:bg-gray-50" key={card.id}>
                      <td className="size-px">
                        <Link id={card.id} to={`/cards/${card.id}`}>
                          <span className="block px-4 py-2">
                            <span className="block whitespace-nowrap text-[11px] text-blue-600">{card.number}</span>
                            {/* <span className="block text-[11px] text-gray-600">{card.name}</span> */}
                            {/* <span className="block text-[11px] text-gray-400">{card.collection.name}</span> */}
                          </span>
                        </Link>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          <span className="text-[11px] text-gray-600">{card.year}</span>
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          <span className="text-[11px] text-gray-600">{card.productType}</span>
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.images.length === 0 && (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" /> 0
                            </span>
                          )}
                          {card.images.length >= 1 && card.images.length <= 2 && (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                              <CircleAlert className="size-4" /> {card.images.length}
                            </span>
                          )}
                          {card.images.length > 2 && (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" /> {card.images.length}
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.description?.length ? (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.teammates?.length === 0 && (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" />
                            </span>
                          )}
                          {card.teammates && card.teammates?.length > 0 && (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          )}
                          {typeof card.teammates === "undefined" && (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.links?.length ? (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.orientation ? (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.cardType.length ? (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" /> {card.cardType.length}
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" /> 0
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.language ? (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.cardTextFront?.length || card.cardTextFront?.length === 0 ? (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.cardTextBack?.length ? (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
                              <CircleCheck className="size-4" />
                            </span>
                          ) : (
                            <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                              <CircleAlert className="size-4" />
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <span className="block px-4 py-2">
                          {card.flags?.map((flag) => (
                            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[10px] font-medium bg-red-100 text-red-800">{flag}</span>
                          ))}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <button
                          type="button"
                          className="block"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="hs-ai-invoice-modal"
                          data-hs-overlay="#hs-ai-invoice-modal"
                          title="Modify"
                        >
                          <span className="px-4 py-1.5">
                            <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
                              <Pencil className="shrink-0 size-4" />
                            </span>
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* End Table */}

              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200">
                <div className="flex gap-4 items-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">{addedCards.length}</span> results
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">{currentPage}</span>/{totalPages}
                  </p>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      <svg className="size-3" width="16" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.506 1.64001L4.85953 7.28646C4.66427 7.48172 4.66427 7.79831 4.85953 7.99357L10.506 13.64"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      onClick={nextPage}
                      disabled={currentPage === totalPages}
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Next
                      <svg className="size-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.50598 2L10.1524 7.64645C10.3477 7.84171 10.3477 8.15829 10.1524 8.35355L4.50598 14"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  );
}

export default function Contribute() {
  const groupByCategory = (items: Card[]): GroupedCards => {
    return items.reduce<GroupedCards>((groups, item) => {
      const groupKey = item.collection.id;
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(item);
      return groups;
    }, {});
  };

  const groups = groupByCategory(JSON.parse(JSON.stringify(cardsData)));

  // const requiredProperties: (keyof Card)[] = ["images", "description", "teammates", "links", "orientation", "language", "cardTextFront", "cardTextBack"];

  // .filter((card: Card) => {
  //   return requiredProperties.some((prop) => !(prop in card) || card[prop] === null || card[prop] === undefined || card[prop] === "");
  // });

  return (
    <div className="p-2 2xl:container mx-auto pt-1 md:p-4">
      {/* Table Section */}
      <div className="flex flex-col gap-4">
        {Object.entries(groups).map(([key, cards]) => (
          <ContributeItem cards={cards} key={key} />
        ))}
      </div>

      {/* End Table Section */}

      {/* Modal */}
      {/* <div
        id="hs-ai-invoice-modal"
        className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
        role="dialog"
        aria-labelledby="hs-ai-invoice-modal-label"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl pointer-events-auto">
            <div className="relative overflow-hidden min-h-32 bg-gray-900 text-center rounded-t-xl">
              <div className="absolute top-2 end-2">
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-white/70 hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Close"
                  data-hs-overlay="#hs-ai-invoice-modal"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <figure className="absolute inset-x-0 bottom-0">
                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                  <path fill="currentColor" className="fill-white" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
                </svg>
              </figure>
            </div>

            <div className="relative z-10 -mt-12">
              <span className="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
                <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                  <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
            </div>

            <div className="p-4 sm:p-7 overflow-y-auto">
              <div className="text-center">
                <h3 id="hs-ai-invoice-modal-label" className="text-lg font-semibold text-gray-800">
                  Invoice from Preline
                </h3>
                <p className="text-sm text-gray-500">Invoice #3682303</p>
              </div>

              <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
                <div>
                  <span className="block text-xs uppercase text-gray-500">Amount paid:</span>
                  <span className="block text-sm font-medium text-gray-800">$316.8</span>
                </div>

                <div>
                  <span className="block text-xs uppercase text-gray-500">Date paid:</span>
                  <span className="block text-sm font-medium text-gray-800">April 22, 2020</span>
                </div>

                <div>
                  <span className="block text-xs uppercase text-gray-500">Payment method:</span>
                  <div className="flex items-center gap-x-2">
                    <svg className="size-5" width="400" height="248" viewBox="0 0 400 248" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0)">
                        <path d="M254 220.8H146V26.4H254V220.8Z" fill="#FF5F00" />
                        <path
                          d="M152.8 123.6C152.8 84.2 171.2 49 200 26.4C178.2 9.2 151.4 0 123.6 0C55.4 0 0 55.4 0 123.6C0 191.8 55.4 247.2 123.6 247.2C151.4 247.2 178.2 238 200 220.8C171.2 198.2 152.8 163 152.8 123.6Z"
                          fill="#EB001B"
                        />
                        <path
                          d="M400 123.6C400 191.8 344.6 247.2 276.4 247.2C248.6 247.2 221.8 238 200 220.8C228.8 198.2 247.2 163 247.2 123.6C247.2 84.2 228.8 49 200 26.4C221.8 9.2 248.6 0 276.4 0C344.6 0 400 55.4 400 123.6Z"
                          fill="#F79E1B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="400" height="247.2" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="block text-sm font-medium text-gray-800">•••• 4242</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 sm:mt-10">
                <h4 className="text-xs font-semibold uppercase text-gray-800">Summary</h4>

                <ul className="mt-3 flex flex-col">
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Payment to Front</span>
                      <span>$264.00</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Tax fee</span>
                      <span>$52.8</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
                    <div className="flex items-center justify-between w-full">
                      <span>Amount paid</span>
                      <span>$316.8</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-5 flex justify-end gap-x-2">
                <a
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Invoice PDF
                </a>
                <a
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  href="#"
                >
                  <svg
                    className="shrink-0 size-4"
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
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect width="12" height="8" x="6" y="14" />
                  </svg>
                  Print
                </a>
              </div>

              <div className="mt-5 sm:mt-10">
                <p className="text-sm text-gray-500">
                  If you have any questions, please contact us at{" "}
                  <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">
                    example@site.com
                  </a>{" "}
                  or call at{" "}
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                    href="tel:+1898345492"
                  >
                    +1 898-34-5492
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Modal */}
    </div>
  );
}
