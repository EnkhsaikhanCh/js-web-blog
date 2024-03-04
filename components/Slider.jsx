import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Loading } from "./Loading";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FetchApi } from "./api/FecthApi";

function useSlider(fetchArticles) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchArticles(null, page);
  }, [page, fetchArticles]);
  return { setPage, page };
}

export function Slider() {
  const ITEMS_PER_PAGE = 1;
  const { articles, isLoading, error, fetchArticles } =
    FetchApi(ITEMS_PER_PAGE);
  const { setPage, page } = useSlider(fetchArticles, ITEMS_PER_PAGE);

  if (isLoading) return <Loading />;
  if (error)
    return <div>Failed to load the articles. Error: {error.message}</div>;
  if (articles.length === 0) return <div>No articles found.</div>;

  return (
    <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
      {articles.map((article) => (
        <SliderCard key={article.id} {...article} />
      ))}
      <div className="hidden justify-end gap-1 md:flex">
        <NavigationButton
          onClick={() => setPage((currPage) => Math.max(1, currPage - 1))}
          disabled={page === 1}
          direction="back"
        />
        <NavigationButton
          onClick={() => setPage((currPage) => currPage + 1)}
          direction="forward"
        />
      </div>
    </div>
  );
}

const NavigationButton = React.memo(({ onClick, direction, disabled }) => {
  const icon =
    direction === "back" ? <IoIosArrowBack /> : <IoIosArrowForward />;
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-md border bg-white text-xl transition hover:border-blue-300 hover:bg-gray-50 dark:border-gray-800 dark:bg-[#2D333B] dark:text-[#ADBAC7] dark:hover:border-blue-300"
      onClick={onClick}
      disabled={disabled}
      aria-label={`Go ${direction}`}
    >
      {icon}
    </button>
  );
});

const SliderCard = React.memo(
  ({ path, social_image, tag_list, title, readable_publish_date }) => {
    return (
      <Link href={path} key="" className="relative rounded-md">
        <img
          src={social_image}
          alt={`Illustration for "${title}"`}
          className="h-auto w-full rounded-md border object-cover dark:border-gray-800"
        />
        <div className="w-100% group absolute bottom-0 left-0 right-0 flex flex-col gap-[24px] rounded-md bg-gradient-to-t from-slate-700 p-[40px] px-5 py-4 text-white transition-colors lg:bottom-2 lg:left-2 lg:right-2 lg:w-[600px] lg:border lg:border-transparent lg:bg-white lg:from-inherit lg:text-black dark:lg:bg-[#2D333B] dark:lg:hover:bg-[#313840]">
          <div className="flex flex-col gap-[16px]">
            <div className="mb-2 flex flex-wrap gap-2">
              {tag_list.map((tag, index) => (
                <span
                  key={index}
                  className="hidden rounded border border-[#BFDBFB] bg-[#BFDBFB] px-2 py-1 text-sm text-[#1D4ED8] dark:border-blue-500 dark:bg-[#2F3545] dark:text-[#93C5FA] md:flex"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="dark:text-white md:text-4xl">{title}</h1>
          </div>
          <p className="hidden text-[#333333] dark:text-[#ADBAC7] lg:flex">
            {readable_publish_date}
          </p>
        </div>
      </Link>
    );
  },
);
