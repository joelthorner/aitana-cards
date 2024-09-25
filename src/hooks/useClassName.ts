import { useMemo } from "react";

export const useClassName = (classNames: (string | undefined | null)[]): string => {
  return useMemo(() => classNames.filter(Boolean).join(" "), [classNames]);
};