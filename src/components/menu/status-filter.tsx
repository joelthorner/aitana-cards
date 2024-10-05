import { CardStatus } from "../../types/card";
import FilterCheck from "../filter-check";

export default function StatusFilter() {
  return (
    <>
      <FilterCheck id={CardStatus.Tengui} label="Show tenguis" />
      <FilterCheck id={CardStatus.Falti} label="Show faltis" />
      <FilterCheck id={CardStatus.Pending} label="Show pendings" />
    </>
  );
}
