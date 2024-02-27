import React, { useState } from "react";

export function LoadNext({ articles, setArticles, selectedTag }) {
  const [currentPage, setCurrentPage] = useState(1);

  const username = "simonholdorf";
  const apiUrl = `https://dev.to/api/articles?username=${username}&per_page=`;
  const itemsPerPage = 9;

  function loadNext() {
    fetch(`${apiUrl}${itemsPerPage}&page=${currentPage + 1}&tag=${selectedTag}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      });
  }

  return (
    <div className="mb-[70px] flex items-center justify-center">
      <button
        className="rounded-md border bg-white px-4 py-2 text-slate-600 hover:border-blue-300 hover:bg-slate-100 dark:border-[#242933] dark:bg-[#2D333B] dark:text-[#b2cdd6] dark:hover:border-blue-300"
        onClick={loadNext}
      >
        Load more
      </button>
    </div>
  );
}
