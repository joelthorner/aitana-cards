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
          className="flex items-center gap-x-3.5 py-3 px-4 text-xs font-medium border border-gray-200 text-rose-600 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg hover:pl-6 transition-all"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SquareArrowOutUpRight size={16} className="shrink-0" />
          {getUrlDomain(link)}
        </a>
      ))}
    </div>
  );
}
