import { BlogData } from "@/data/BlogData";
import { Forward_icon } from "./images/icons/Forward_icon";
import { Back_icon } from "./images/icons/Back_icon";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Slider() {
  const [articles, setArticles] = useState([]);

  const username = "simonholdorf";
  const apiUrl = `https://dev.to/api/articles?username=${username}`;
  const itemsPerPage = 1;

  useEffect(() => {
    fetch(`${apiUrl}&per_page=${itemsPerPage}&page=1`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
      });
  }, []);

  if (articles === undefined) return <Loading />;

  return (
    <div className="container mx-auto flex flex-col gap-3 px-4 py-4">
      {/* <SliderCard /> */}

      {/* <div className="flex"> */}
      {articles.map((card, id) => (
        <SliderCard key={id} {...card} />
      ))}
      {/* </div> */}

      <div className="hidden gap-1 self-end md:flex">
        <button className="rounded-md transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700">
          <Back_icon />
        </button>
        <button className="rounded-md transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700">
          <Forward_icon />
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
        className="aspect-video h-[300px] w-full rounded-md border dark:hover:border-orange-300 object-cover md:h-[450px] lg:h-[600px] dark:border-[#242933]"
      />
      <div className="w-100% group absolute bottom-0 left-0 right-0 flex flex-col gap-[24px] rounded-md bg-gradient-to-t from-slate-700 p-[40px] px-5 py-4 text-white transition-colors lg:bottom-2 lg:left-2 lg:right-2 lg:w-[600px] lg:border lg:border-transparent lg:bg-white lg:from-inherit lg:text-black dark:lg:bg-[#252a33]">
        <div className="flex flex-col gap-[16px]">
          <div className="mb-2 flex flex-wrap gap-2">
            {tag_list.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded bg-[#4B6BFB0D] px-[10px] py-1 text-sm text-[#4B6BFB] border dark:border-orange-500 dark:text-orange-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="md:text-4xl dark:text-white">{title}</h1>
        </div>
        <p className="hidden md:flex dark:text-white">{readable_publish_date}</p>
      </div>
    </Link>
  );
};
