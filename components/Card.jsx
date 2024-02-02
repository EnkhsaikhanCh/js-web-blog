import Link from "next/link";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export function Card() {
  const [articles, setArticles] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=simonholdorf&per_page=9&page=1")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);

  function loadNext() {
    fetch(
      `https://dev.to/api/articles?username=simonholdorf&per_page=9&page=${currentPage + 1}`,
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles([...articles, ...data]);
        setCurrentPage(currentPage + 1);
      });
  }

  if (articles === undefined) return <Loading />;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-5 px-4 text-[#495057]">
        <h1 className="text-3xl font-bold">All Blog Post</h1>
        <div className="flex items-center justify-between font-semibold">
          <div className="flex items-center gap-5 font-semibold">
            <button>All</button>
            <button>Design</button>
            <button>Travel</button>
            <button>Fashion</button>
            <button>Technology</button>
            <button>Branding</button>
          </div>
          <button className="rounded-md border bg-slate-50 px-4 py-2 hover:border-slate-300 hover:bg-slate-100">
            <a href="/blog">View all</a>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <CardDesign key={article.id} article={article} />
        ))}
      </div>
      <div className="mb-10 flex items-center justify-center">
        <button
          className="rounded-md border bg-slate-50 px-4 py-2 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
          onClick={loadNext}
        >
          Load more
        </button>
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
        <div className="mb-2 flex flex-wrap gap-2">
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
