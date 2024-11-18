import { SquareArrowOutUpRight } from "lucide-react";
import { getUrlDomain } from "../../utils/getUrlDomain";
import { useClassName } from "../../hooks/useClassName";

export default function CardLinks({ links, className }: { links?: string[]; className?: string }) {
  const containerClassName = useClassName([className, "flex flex-col mt-4"]);

  if (!links || links.length === 0) {
    return <></>;
  }

  return (
    <div className={containerClassName}>
      {links.map((link) => (
        <a
          key={link}
          className="hover:bg-zinc-100 group hover:text-black flex items-center flex-wrap gap-x-2 gap-y-1 py-3 px-4 text-xs font-medium border border-gray-200 text-rose-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg transition-all whitespace-nowrap overflow-hidden"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SquareArrowOutUpRight size={16} className="shrink-0" />
          {getUrlDomain(link)}
          <span className="text-zinc-400 transition-all group-hover:text-zinc-500 font-normal whitespace-nowrap text-ellipsis overflow-hidden w-full">{link}</span>
        </a>
      ))}
    </div>
  );
}
