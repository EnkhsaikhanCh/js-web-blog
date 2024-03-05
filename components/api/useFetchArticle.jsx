import { useState, useEffect } from "react";

export function useFetchArticle(username, slug) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (username && slug) {
      setLoading(true);
      fetch(`https://dev.to/api/articles/${username}/${slug}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setArticle(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(true);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [username, slug]);

  return { article, loading, error };
}
