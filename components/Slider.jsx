import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const username = "simonholdorf";
const apiUrl = `https://dev.to/api/articles?username=${username}`;
const itemsPerPage = 1;

export function Slider() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${apiUrl}&per_page=${itemsPerPage}&page=${page}`,
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };
    fetchArticles();
  }, [page, apiUrl, itemsPerPage]);

  if (articles.length === 0) return <Loading />;

  return (
    <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
      {articles.map((article) => (
        <SliderCard key={article.id} {...article} />
      ))}

      <div className="hidden gap-1 self-end md:flex">
        <NavigationButton
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          direction="back"
        />
        <NavigationButton
          onClick={() => setPage(page + 1)}
          direction="forward"
        />
      </div>
    </div>
  );
}

const NavigationButton = React.memo(
  ({ onClick, direction, disabled = false }) => {
    const icon =
      direction === "back" ? <IoIosArrowBack /> : <IoIosArrowForward />;

    return (
      <div
        className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-md border transition-colors hover:border-blue-300 hover:bg-gray-50 dark:border-[#242933] dark:bg-[#242933] dark:text-[#b2cdd6] dark:hover:border-blue-300"
        onClick={onClick}
        disabled={disabled}
        aria-label={`Go ${direction}`}
      >
        {icon}
      </div>
    );
  },
);

const SliderCard = React.memo(
  ({ path, social_image, tag_list, title, readable_publish_date }) => {
    return (
      <Link href={path} key="" className="relative rounded-md">
        <img
          src={social_image}
          className="aspect-video h-[300px] w-full rounded-md border object-cover dark:border-[#242933] dark:hover:border-blue-300 md:h-[450px] lg:h-[600px]"
        />
        <div className="w-100% group absolute bottom-0 left-0 right-0 flex flex-col gap-[24px] rounded-md bg-gradient-to-t from-slate-700 p-[40px] px-5 py-4 text-white transition-colors lg:bottom-2 lg:left-2 lg:right-2 lg:w-[600px] lg:border lg:border-transparent lg:bg-white lg:from-inherit lg:text-black dark:lg:bg-[#2D333B] dark:lg:hover:bg-[#313840]">
          <div className="flex flex-col gap-[16px]">
            <div className="mb-2 flex flex-wrap gap-2">
              {tag_list.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block rounded border bg-[#4B6BFB0D] px-[10px] py-1 text-sm text-[#4B6BFB] dark:border-blue-500 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="dark:text-white md:text-4xl">{title}</h1>
          </div>
          <p className="hidden text-[#ADBAC7] dark:text-[#ADBAC7] md:flex">
            {readable_publish_date}
          </p>
        </div>
      </Link>
    );
  },
);
