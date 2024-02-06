import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { ViewAllButton } from "./ViewAllButton";
import { CardUI } from "./CardUI";

export function Card({ hasProfile }) {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);

  const username = "simonholdorf";
  const apiUrl = `https://dev.to/api/articles?username=${username}&per_page=`;
  const itemsPerPage = 9;

  useEffect(() => {
    fetch(`${apiUrl}${itemsPerPage}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  function loadNext() {
    fetch(`${apiUrl}${itemsPerPage}&page=${currentPage + 1}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      });
  }

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  function filterBySelectedTag(article) {
    return article.tag_list.includes(selectedTag);
  }

  const filteredArticles = selectedTag
    ? articles.filter(filterBySelectedTag)
    : articles;

  if (articles === undefined) return <Loading />;

  return (
    <div className="container mx-auto">
      <h1 className="px-4 text-3xl font-bold text-[#495057]">All Blog Post</h1>
      <div className="mt-5 flex items-center justify-between px-4 font-semibold text-[#495057]">
        <div className="flex flex-wrap items-center gap-1 font-semibold">
          <button
            className="rounded-md border border-white  px-4 py-1 hover:border-slate-300 hover:bg-gray-50"
            onClick={() => handleTagSelect(null)}
          >
            All
          </button>
          <button
            className="rounded-md border border-white px-4 py-1 hover:border-slate-300 hover:bg-gray-50"
            onClick={() => handleTagSelect("devops")}
          >
            DevOps
          </button>
          <button
            className="rounded-md border border-white px-4 py-1  hover:border-slate-300 hover:bg-gray-50"
            onClick={() => handleTagSelect("cloud")}
          >
            Cloud
          </button>
          <button
            className="rounded-md border border-white px-4 py-1  hover:border-slate-300 hover:bg-gray-50"
            onClick={() => handleTagSelect("beginners")}
          >
            Beginners
          </button>
          <button
            className="rounded-md border border-white px-4 py-1  hover:border-slate-300 hover:bg-gray-50"
            onClick={() => handleTagSelect("programming")}
          >
            Programming
          </button>
          <button
            className="rounded-md border border-white px-4 py-1  hover:border-slate-300 hover:bg-gray-50"
            onClick={() => handleTagSelect("javascript")}
          >
            Javascript
          </button>
        </div>
        <ViewAllButton />
      </div>
      <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <CardUI key={article.id} article={article} hasProfile={hasProfile} />
        ))}
      </div>
      <div className="mb-[70px] flex items-center justify-center">
        <button
          className="rounded-md border bg-slate-50 px-4 py-2 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
          onClick={loadNext}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
