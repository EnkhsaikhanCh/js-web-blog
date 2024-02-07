import { useState } from "react";
import { FilterData } from "@/data/filterData";

export function Filter() {
  const [articles, setArticles] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  const itemsPerPage = 9;

  const filteredArticle = async (tag) => {
    const response = await fetch(
      `https://dev.to/api/articles?tag=${tag}&per_page=${itemsPerPage}`,
    );
    const dataJson = await response.json();
    console.log(dataJson);
    setArticles([...dataJson]);
    setSelectedTag(tag);
  };

  return (
    <div className="flex flex-wrap items-center gap-1 font-semibold">
      {FilterData.map((filter) => (
        <button
          key={filter.label}
          className={`rounded-md border px-4 py-1 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 ${
            selectedTag === filter.tag
              ? "border border-orange-300 bg-orange-50 text-orange-600"
              : ""
          }`}
          onClick={() => filteredArticle(filter.tag)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
