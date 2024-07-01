import { useState, useCallback } from "react";

const API_URL = "https://dev.to/api/articles";
const USERNAME = "simonholdorf";

export function FetchApi(itemsPerPage = 9) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchArticles = useCallback(
    async (tag, page) => {
      const url = new URL(API_URL);
      url.searchParams.append("username", USERNAME);
      url.searchParams.append("per_page", itemsPerPage.toString());
      if (tag) {
        url.searchParams.append("tag", tag);
      }
      url.searchParams.append("page", page.toString());

      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url.toString());
        const newArticles = await response.json();
        if (Array.isArray(newArticles)) {
          setArticles(newArticles);
        } else {
          throw new Error("Fetched data is not an array");
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [itemsPerPage],
  );

  return { articles, isLoading, error, fetchArticles };
}
