import { BlogData } from "@/data/BlogData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { filterData } from "@/data/filterData";

export function Trending() {
  const [articles, setArticles] = useState([]);

  const username = "simonholdorf";
  const apiUrl = `https://dev.to/api/articles?username=${username}&top=30`;
  const itemsPerPage = 4;

  useEffect(() => {
    fetch(`${apiUrl}&per_page=${itemsPerPage}&page=1&tag=devops`)
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
      });
  }, []);

  if (articles === undefined) return <Loading />;

  return (
    <div className="container mx-auto my-10 px-4 py-2">
      <h1 className="mb-5 text-3xl font-bold text-[#495057]">DevOps</h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {articles.map((card, id) => (
          <TrendingCard key={id} {...card} />
        ))}
      </div>
    </div>
  );
}

const TrendingCard = (props) => {
  const { id, path, social_image, tag_list, title } = props;
  return (
    <Link
      key={id}
      href={path}
      className="relative flex flex-col rounded-md border hover:border-orange-300"
    >
      <img src={social_image} alt="" className="rounded-md" />
      <div className="absolute bottom-0 flex w-full flex-col gap-2 rounded-md bg-gradient-to-t from-slate-700 p-4 text-white">
        <div className="mb-2 hidden gap-2">
          {tag_list.map((tag) => (
            <span className="inline-block rounded bg-blue-200 px-[10px] py-1 text-sm text-[#4B6BFB]">
              {tag}
            </span>
          ))}
        </div>
        <p>{title}</p>
      </div>
    </Link>
  );
};
