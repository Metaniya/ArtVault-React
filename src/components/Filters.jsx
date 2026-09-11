const FILTERS = [
  { label: "All", value: null },
  { label: "Paintings", value: "Paintings" },
  { label: "Photographs", value: "Photographs" },
];

function Filters({ activeFilter, onSelect }) {
  return (
    <div className="filters">
      {FILTERS.map((filter) => (
        <button
          key={filter.label}
          className={activeFilter === filter.value ? "filter-btn active" : "filter-btn"}
          onClick={() => onSelect(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

export default Filters;