import { Plus } from "lucide-react";
import { AitanaBonmati, Teammate } from "../../data/teammates";
import { useClassName } from "../../hooks/useClassName";
import { useEffect, useRef, useState } from "react";

interface TeammateType {
  teammate: Teammate;
  teammateNameClassName: string;
}

interface TeammatesType {
  teammates: Teammate[];
  className?: string;
  variation?: "light" | "dark";
  id: string;
}

function TeammateItem({ teammate, teammateNameClassName }: TeammateType) {
  return (
    <div className="text-center w-16">
      <div className="relative">
        <span className="absolute bottom-1 left-1 z-10 text-[10px] font-medium bg-white size-4 rounded-full flex items-center justify-center">{teammate.number}</span>
        <img className="rounded-xl w-full mx-auto aspect-[1/1.25] object-cover object-top" src={teammate.image} alt={teammate.name} />
      </div>
      <div className="mt-2 sm:mt-4">
        <h3 className={teammateNameClassName}>{teammate.name}</h3>
      </div>
    </div>
  );
}

export default function Teammates({ teammates, className, variation = "dark", id }: TeammatesType) {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerClassName = useClassName([className, "py-4"]);
  const titleClassName = useClassName(["mb-4 font-medium text-center text-lg", variation === "light" ? "text-white" : ""]);
  const teammateNameClassName = useClassName(["text-[11px] leading-snug font-medium line-clamp-2", variation === "light" ? "text-zinc-200" : "text-zinc-800"]);
  const plusClassName = useClassName([
    "rounded-xl w-full mx-auto aspect-[1/1.25] flex items-center justify-center transition-colors",
    variation === "light" ? "bg-zinc-800 text-zinc-500 hover:bg-zinc-700 hover:text-zinc-400" : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 hover:text-zinc-800",
  ]);

  const [shownTeammates, setShownTeammates] = useState<Teammate[]>([]);
  const [hiddenTeammates, setHiddenTeammates] = useState<Teammate[]>([]);

  useEffect(() => {
    const _teammates = [...teammates, AitanaBonmati];

    const calculateVisibleTeammates = () => {
      if (containerRef.current) {
        const totalItems = Math.floor((containerRef.current.clientWidth + 12) / (64 + 12)) * 2 - 1;
        setShownTeammates(_teammates.slice(0, totalItems));
        setHiddenTeammates(_teammates.slice(totalItems));
      }
    };

    calculateVisibleTeammates();

    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleTeammates();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [teammates]);

  if (teammates.length === 0) {
    return <></>;
  }

  return (
    <div className={containerClassName}>
      <div className={titleClassName}>Card teammates</div>

      <div className="flex flex-wrap justify-center gap-3" ref={containerRef}>
        {shownTeammates.map((teammate) => (
          <TeammateItem key={teammate.name} teammate={teammate} teammateNameClassName={teammateNameClassName} />
        ))}
        {hiddenTeammates && (
          <button
            type="button"
            className="hs-collapse-toggle text-center w-16 flex flex-col items-center"
            id={`teammates-collapse-${id}`}
            aria-expanded="false"
            aria-controls={`#teammates-collapse-${id}-heading`}
            data-hs-collapse={`#teammates-collapse-${id}-heading`}
          >
            <div className={plusClassName}>
              <Plus />
            </div>
            <div className="mt-2 sm:mt-4">
              <h3 className={teammateNameClassName}>View more</h3>
            </div>
          </button>
        )}
      </div>
      {hiddenTeammates && (
        <div
          id={`teammates-collapse-${id}-heading`}
          className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby={`teammates-collapse-${id}`}
        >
          <div className="flex flex-wrap justify-center gap-3 mt-3">
            {hiddenTeammates.map((teammate) => (
              <TeammateItem key={teammate.name} teammate={teammate} teammateNameClassName={teammateNameClassName} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
