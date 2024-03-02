import { filterData } from "@/data/filterData";

export function Filter({ onTagChange, selectedTag, ViewAllButtonRender }) {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-2 font-semibold dark:text-[#ADBAC7]">
      <div className="flex flex-wrap gap-2">
        {filterData.map((filter) => (
          <button
            key={filter.label}
            aria-label={`Filter by ${filter.label}`} // Enhancing accessibility
            className={`rounded-md border bg-white px-4 py-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:bg-[#2D333B] dark:hover:bg-[#3D434F] dark:hover:text-blue-400 ${
              selectedTag === filter.tag
                ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-[#3D434F] dark:text-blue-400"
                : "border dark:border-[#252a33]"
            }`}
            onClick={() => onTagChange(filter.tag)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div>
        <button
          className="rounded-md border bg-white px-4 py-1 hover:border-red-500 hover:bg-red-50 hover:text-red-600 dark:border-[#252a33] dark:bg-[#2D333B] dark:hover:bg-[#3D434F] dark:hover:text-red-400"
          onClick={() => onTagChange(null)}
          aria-label="Clear filter"
        >
          Clear Filter
        </button>

        {ViewAllButtonRender && (
          <button className="dark:hover:bg ml-2 h-[36px] w-[100px] rounded-md border bg-white px-4 hover:border-blue-300 hover:bg-gray-50 dark:border-[#242933] dark:bg-[#2D333B] dark:text-[#b2cdd6] dark:hover:border-blue-300">
            <a href="/blog">View all</a>
          </button>
        )}
      </div>
    </div>
  );
}
