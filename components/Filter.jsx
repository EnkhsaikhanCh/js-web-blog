import { filterData } from "@/data/filterData";

export function Filter({ onTagChange, selectedTag }) {
  return (
    <div className="flex flex-wrap items-center gap-1 font-semibold dark:text-[#ADBAC7]">
      {filterData.map((filter) => (
        <button
          key={filter.label}
          className={`rounded-md border px-4 py-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:bg-[#242933] dark:hover:text-blue-400 ${
            selectedTag === filter.tag
              ? "border border-blue-500 bg-blue-50 text-blue-600 dark:text-blue-400"
              : "dark:border-[1px] dark:border-[#252a33]"
          }`}
          onClick={() => onTagChange(filter.tag)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
