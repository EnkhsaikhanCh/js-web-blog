import { Header } from "./Header/Header";
import { useEffect, useState } from "react";

export function SinglePost() {
  const [article, setArticle] = useState();

  useEffect(() => {
    fetch("https://dev.to/api/articles/simonholdorf/[]")
      .then((response) => response.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);

  if (article === undefined) return null;

  return (
    <>
      <Header />
      <div className="container mx-auto mt-[30px] flex w-[800px] flex-col gap-[32px]">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold	">{article.title}</h1>
          <div className="flex gap-6 text-[#696A75]">
            <img src="/profile" alt="" />
            <p>{article.name}</p>
            <p>{article.readable_publish_date}</p>
          </div>
        </div>

        <img
          src={article.cover_image}
          alt=""
          className="aspect-video h-[462px] w-[800px] rounded-md object-cover"
        />
        <div>
          <p>{article.description}</p>
        </div>
      </div>
    </>
  );
}
