import { Header } from "./Header/Header";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { Loading } from "./Loading";
import { Footer } from "./Footer";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export function SinglePost({ tags }) {
  const [article, setArticle] = useState();
  const router = useRouter();

  useEffect(() => {
    if (router.query.username && router.query.slug) {
      fetch(
        `https://dev.to/api/articles/${router.query.username}/${router.query.slug}`,
      )
        .then((response) => response.json())
        .then((data) => {
          setArticle(data);
          document.querySelectorAll("pre code").forEach((el) => {
            hljs.highlightElement(el);
          });
        });
    }
  }, [router.query]);

  console.log(router.query);

  if (article === undefined) return <Loading />;

  return (
    <>
      <Header />
      <div className="px-2 py-[30px]">
        <div className="container mx-auto flex w-full flex-col gap-[15px] rounded-md bg-white  pb-4 dark:bg-[#2a303c] dark:text-[#ADBAC7] lg:w-[900px]">
          <img
            src={article.social_image}
            alt={article.title}
            className="aspect-video h-[200px] w-full rounded-md object-cover md:h-[300px] lg:h-[400px] lg:w-[900px]"
          />
          <div className="flex w-[100%] flex-col gap-5">
            <div className="flex items-center justify-between gap-6 rounded-md bg-[#f5f5f5] px-5 py-2 text-[#696A75] dark:bg-[#252a33] dark:text-[#ADBAC7]">
              <div className="flex items-center justify-center gap-4">
                <img
                  src={article.user.profile_image}
                  alt=""
                  className="h-[35px] w-[35px] rounded-full"
                />
                <p className="text-blue-500 dark:text-blue-300">
                  {article.user.username}
                </p>
              </div>
              <p>{article.readable_publish_date}</p>
            </div>
            <h1 className="text-center text-4xl	font-bold dark:text-blue-400">
              {article.title}
            </h1>
          </div>
          <div className="prose mx-auto w-full px-4 dark:text-[#ADBAC7]">
            {parse(article.body_html)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
