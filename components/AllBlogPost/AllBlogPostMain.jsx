import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { ViewAllButton } from "./ViewAllButton";
import { CardUI } from "./CardUI";
import { LoadNext } from "./LoadNext";
import { Filter } from "./Filter";

export function AllBlogPost({
  hasProfile,
  ViewAllButtonRender,
  loadNext,
  article,
}) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const username = "simonholdorf";
  const apiUrl = `https://dev.to/api/articles?username=${username}&per_page=`;
  const itemsPerPage = 9;

  useEffect(() => {
    fetch(`${apiUrl}${itemsPerPage}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
    <div className="container mx-auto mt-[30px]">
      <h1 className="px-4 text-3xl font-bold text-[#495057] dark:text-[#ADBAC7]">
        All Blog Post
      </h1>

      <FilterSection
        filteredArticle={filteredArticle}
        selectedTag={selectedTag}
        ViewAllButtonRender={ViewAllButtonRender}
      />

      <ArticlesRender
        article={article}
        hasProfile={hasProfile}
        isLoading={isLoading}
        articles={articles}
      />

      <LoadNext
        articles={articles}
        setArticles={setArticles}
        selectedTag={selectedTag}
      />
    </div>
  );
}

function ArticlesRender({ hasProfile, isLoading, articles }) {
  return (
    <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <CardUI
          key={article.id}
          article={article}
          hasProfile={hasProfile}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
}

function FilterSection({ filteredArticle, selectedTag, ViewAllButtonRender }) {
  return (
    <div className="mt-5 flex items-center justify-between px-4 font-semibold text-[#495057]">
      <Filter onTagChange={filteredArticle} selectedTag={selectedTag} />
      <ViewAllButton ViewAllButtonRender={ViewAllButtonRender} />
    </div>
  );
}
