import { filterData } from "@/data/filterData";

export function Filter({ onTagChange, selectedTag }) {
  return (
    <div className="flex flex-wrap items-center gap-1 font-semibold dark:text-[#b2cdd6]">
      {filterData.map((filter) => (
        <button
          key={filter.label}
          className={`rounded-md border px-4 py-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:bg-[#242933] dark:hover:text-orange-400 ${
            selectedTag === filter.tag
              ? "border border-orange-300 bg-orange-50 text-orange-600 dark:text-orange-400"
              : ""
          }`}
          onClick={() => onTagChange(filter.tag)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
