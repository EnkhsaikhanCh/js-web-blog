import Link from "next/link";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const username = "simonholdorf";
const apiUrl = `https://dev.to/api/articles?username=${username}`;
const itemsPerPage = 1;
const initialPage = 1;

export function Slider() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    fetch(`${apiUrl}&per_page=${itemsPerPage}&page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, [page]);

  function backClick() {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  }

  function forwardClick() {
    setPage((prevPage) => prevPage + 1);
  }

  if (articles.length === 0) return <Loading />;

  return (
    <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
      {/* <SliderCard /> */}

      {/* <div className="flex"> */}
      {articles.map((card, id) => (
        <SliderCard key={id} {...card} />
      ))}
      {/* </div> */}

      <div className="hidden gap-1 self-end md:flex">
        <button
          className="flex h-[40px] w-[40px] items-center justify-center rounded-md border transition-colors hover:border-blue-300 hover:bg-gray-50 dark:border-[#242933] dark:bg-[#242933] dark:text-[#b2cdd6] dark:hover:border-blue-300"
          onClick={backClick}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="flex h-[40px] w-[40px] items-center justify-center rounded-md border transition-colors hover:border-blue-300 hover:bg-gray-50 dark:border-[#242933] dark:bg-[#242933] dark:text-[#b2cdd6] dark:hover:border-blue-300"
          onClick={forwardClick}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

const SliderCard = (props) => {
  const { path, social_image, tag_list, title, readable_publish_date } = props;

  return (
    <Link href={path} key="" className="relative rounded-md">
      <img
        src={social_image}
        className="aspect-video h-[300px] w-full rounded-md border object-cover dark:border-[#242933] dark:hover:border-blue-300 md:h-[450px] lg:h-[600px]"
      />
      <div className="w-100% group absolute bottom-0 left-0 right-0 flex flex-col gap-[24px] rounded-md bg-gradient-to-t from-slate-700 p-[40px] px-5 py-4 text-white transition-colors lg:bottom-2 lg:left-2 lg:right-2 lg:w-[600px] lg:border lg:border-transparent lg:bg-white lg:from-inherit lg:text-black dark:lg:bg-[#252a33]">
        <div className="flex flex-col gap-[16px]">
          <div className="mb-2 flex flex-wrap gap-2">
            {tag_list.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded border bg-[#4B6BFB0D] px-[10px] py-1 text-sm text-[#4B6BFB] dark:border-blue-500 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="dark:text-white md:text-4xl">{title}</h1>
        </div>
        <p className="hidden dark:text-white md:flex">
          {readable_publish_date}
        </p>
      </div>
    </Link>
  );
};
