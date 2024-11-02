import { format } from "date-fns";
import { changelog } from "../data/changelog";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BookPlus, FilePlus2 } from "lucide-react";
import { LineType } from "../types/changelog";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Sticky from "react-sticky-el";

export default function Changelog() {
  const badgeClassName = (value: LineType) => {
    if (value === LineType.ADDED) {
      return "bg-teal-800/30 text-teal-500";
    } else if (value === LineType.REMOVED) {
      return "bg-red-800/30 text-red-500";
    } else if (value === LineType.CHANGED) {
      return "bg-blue-800/30 text-blue-500";
    }
  };

  const [hasMore, setHasMore] = useState(true);

  const [items, setItems] = useState(changelog.slice(0, 3));

  const [page, setPage] = useState(1);

  useEffect(() => {
    setItems(changelog.slice(0, 3));
    setPage(1);
    setHasMore(changelog.length > 3);
  }, []);

  const fetchMoreData = () => {
    if (items.length >= changelog.length) {
      setHasMore(false);
      return;
    }

    setItems(items.concat(changelog.slice(page * 3, page * 3 + 3)));
    setPage(page + 1);
  };

  return (
    <div className="p-2 2xl:container mx-auto">
      <div className="bg-zinc-900 px-5 pl-3 pt-5 pb-20 rounded-t-3xl relative">
        <div className="text-xl text-center font-medium leading-normal text-white px-2 mb-4 mt-0">Changelog</div>

        <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={hasMore} loader={"TODO carregant spinner"}>
          {items.map((day, index) => (
            <div key={format(day.date, "dd MMM, yyyy")}>
              <Sticky scrollElement="window" wrapperClassName="z-50 bg-zinc-900/40 backdrop-blur-sm">
                <div className="ps-2 py-1 my-2">
                  <h3 className="text-xs font-medium uppercase text-fuchsia-500">{format(day.date, "dd MMM, yyyy")}</h3>
                </div>
              </Sticky>

              {day.items.map((item, index) => (
                <div className="flex gap-x-3" key={index}>
                  <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-700">
                    <div className="relative z-10 size-7 flex justify-center items-center">
                      <div className="size-2 rounded-full bg-zinc-700"></div>
                    </div>
                  </div>

                  <div className="grow pt-0.5 pb-8">
                    {item.card && (
                      <Link to={"/cards/" + item.card.id} className="font-semibold text-zinc-100 hover:text-lime-500 flex leading-tight">
                        {item.card.name}
                      </Link>
                    )}
                    {item.collection && (
                      <Link to={"/collections/" + item.collection.id} className="font-semibold text-zinc-100 hover:text-yellow-500 flex leading-tight">
                        {item.collection.name}
                      </Link>
                    )}
                    {item.text && (
                      <div className="mt-2 text-sm text-zinc-400">
                        <ReactMarkdown className="markdown text-xs" remarkPlugins={[remarkGfm]}>
                          {item.text}
                        </ReactMarkdown>
                      </div>
                    )}
                    {/* Show collection on new added card if text not exists */}
                    {!item.text && item.type === LineType.ADDED && item.card && (
                      <div className="mt-2 text-sm text-zinc-400">
                        <span className="text-xs">{item.card.collection.name}</span>
                      </div>
                    )}
                    <div className="flex gap-2 mt-2 items-center">
                      <div className={`inline-flex -ml-[2px] items-center gap-x-1.5 py-1.5 px-3 rounded-full text-[11px] leading-none font-medium ${badgeClassName(item.type)}`}>
                        {item.type}
                      </div>
                      <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs bg-white/10 text-white rounded-full">
                        {item.card && <FilePlus2 className="shrink-0 size-3" />}
                        {item.collection && <BookPlus className="shrink-0 size-3" />}
                        {item.card && "Card"}
                        {item.collection && "Collection"}
                      </span>
                      <a
                        href={`https://github.com/${item.user}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-ms-1 p-1 pe-2 inline-flex items-center gap-x-2 text-xs rounded-full border border-transparent text-zinc-400 hover:bg-white/10 hover:text-white"
                      >
                        <img className="shrink-0 size-4 rounded-full" src="https://avatars.githubusercontent.com/u/16495000?v=4" alt={item.user} />
                        {item.user}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
