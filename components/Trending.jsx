import Link from "next/link";
import { useEffect } from "react";
import { Loading } from "./Loading";
import { FetchApi } from "./api/FecthApi";

export function Trending() {
  const { articles, isLoading, error, fetchArticles } = FetchApi(4);

  useEffect(() => {
    fetchArticles("devops", 1);
  }, [fetchArticles]);

  if (isLoading) return <Loading />;
  if (error) return <div>Failed to load the articles.</div>;

  return (
    <div className="container mx-auto my-10 px-4 py-2">
      <h1 className="mb-5 text-3xl font-bold text-[#4a5058] dark:text-[#ADBAC7]">
        DevOps
      </h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <TrendingCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}

const TrendingCard = ({ id, path, social_image, tag_list, title }) => {
  return (
    <Link
      href={path}
      className="relative flex flex-col rounded-md border hover:border-blue-300 dark:border-[#2A303C] dark:hover:border-blue-300"
    >
      <img
        src={social_image}
        alt={`Cover image for ${title}`}
        className="rounded-md"
      />
      <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-md bg-gradient-to-t from-slate-700 p-4 text-white">
        <div className="mb-2 hidden gap-2">
          {tag_list.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded bg-blue-200 px-[10px] py-1 text-sm text-[#4B6BFB]"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="hover:underline hover:underline-offset-2">{title}</p>
      </div>
    </Link>
  );
};
