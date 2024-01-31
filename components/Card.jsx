import { BlogData } from "@/data/BlogData";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Card() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=simonholdorf")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <CardDesign key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

function CardDesign({ article }) {
  return (
    <Link
      href={article.path}
      className="flex flex-col gap-4 rounded-md border p-4 hover:bg-slate-50 hover:dark:border-neutral-300 "
    >
      <img
        src={article.cover_image}
        className="aspect-video rounded-md object-cover"
      />
      <div className="col-span-2 p-2">
        <div className="mb-2 flex gap-2">
          {article.tag_list.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded bg-blue-200 px-[10px] py-1 text-sm text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mb-5 font-bold">{article.title}</h2>
        <p className="text-[#97989F]">{article.readable_publish_date}</p>
      </div>
    </Link>
  );
}
