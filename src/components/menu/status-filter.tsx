import FilterCheck from "../filter-check";

export default function StatusFilter() {
  return (
    <>
      <FilterCheck id="tengui" label="Show tenguis" />
      <FilterCheck id="falti" label="Show faltis" />
      <FilterCheck id="pending" label="Show pendings" />
    </>
  );
}
