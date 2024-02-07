import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { ViewAllButton } from "./ViewAllButton";
import { CardUI } from "./CardUI";
import { LoadNext } from "./LoadNext";
import { Filter } from "./Filter";

export function AllBlogPost({ hasProfile, ViewAllButtonRender, loadNext }) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [selectedTag, setSelectedTag] = useState(null);

  const username = "simonholdorf";
  const apiUrl = `https://dev.to/api/articles?username=${username}&per_page=`;
  const itemsPerPage = 9;

  useEffect(() => {
    fetch(`${apiUrl}${itemsPerPage}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
      });
  }, [currentPage]);

  // const filteredArticle = async (tag) => {
  //   const response = await fetch(
  //     `https://dev.to/api/articles?tag=${tag}&per_page=${itemsPerPage}`,
  //   );
  //   const dataJson = await response.json();
  //   console.log(dataJson);
  //   setArticles([...dataJson]);
  //   setSelectedTag(tag);
  // };

  // const filters = [
  //   { label: "All", tag: null },
  //   { label: "DevOps", tag: "devops" },
  //   { label: "Cloud", tag: "cloud" },
  //   { label: "Beginners", tag: "beginners" },
  //   { label: "Programming", tag: "programming" },
  //   { label: "Javascript", tag: "javascript" },
  // ];

  if (articles === undefined) return <Loading />;

  return (
    <div className="container mx-auto">
      {/* Title */}
      <h1 className="px-4 text-3xl font-bold text-[#495057]">All Blog Post</h1>

      {/* Filter section */}
      <div className="mt-5 flex items-center justify-between px-4 font-semibold text-[#495057]">
        <Filter articles={articles} />
        {/* <div className="flex flex-wrap items-center gap-1 font-semibold">
          {filters.map((filter) => (
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
        </div> */}

        {/* View all button - Components */}
        <ViewAllButton ViewAllButtonRender={ViewAllButtonRender} />
      </div>

      {/* Card maping - Components */}
      <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <CardUI key={article.id} article={article} hasProfile={hasProfile} />
        ))}
      </div>

      {/* Load More button - Components */}
      <LoadNext articles={articles} setArticles={setArticles} />
      {/* <button onClick={() => setCurrentPage(currentPage + 1)}>Load more</button> */}
    </div>
  );
}
