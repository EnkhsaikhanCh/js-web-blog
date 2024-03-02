import { useEffect, useState } from "react";
import { CardUI } from "./CardUI";
import { Filter } from "./Filter";

export function AllBlogPost({ hasProfile, article, ViewAllButtonRender }) {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const username = "simonholdorf";
  const itemsPerPage = 9;

  useEffect(() => {
    fetchArticles(selectedTag, currentPage);
  }, [currentPage, selectedTag]);

  async function fetchArticles(tag, page) {
    const baseUrl = `https://dev.to/api/articles?username=${username}&per_page=${itemsPerPage}`;
    const url = tag
      ? `${baseUrl}&tag=${tag}&page=${page}`
      : `${baseUrl}&page=${page}`;

    try {
      setIsLoading(true);
      const response = await fetch(url);
      const newArticles = await response.json();
      if (page === 1) {
        setArticles(newArticles);
      } else {
        setArticles((prev) => [...prev, ...newArticles]);
      }
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  const filteredArticle = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
    setArticles([]);
  };

  const handleLoadNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const loadMoreButton = !isLoading && articles.length > 0 && (
    <div className="mb-[70px] flex items-center justify-center">
      <button
        onClick={handleLoadNext}
        className="rounded-md border bg-white px-4 py-2 text-slate-600 hover:border-blue-300 hover:bg-slate-100 dark:border-[#242933] dark:bg-[#2D333B] dark:text-[#b2cdd6] dark:hover:border-blue-300"
      >
        Load more
      </button>
    </div>
  );

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

      {loadMoreButton}
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
      <Filter
        onTagChange={filteredArticle}
        selectedTag={selectedTag}
        ViewAllButtonRender={ViewAllButtonRender}
      />
    </div>
  );
}
