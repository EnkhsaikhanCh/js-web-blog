import { Header } from "./Header/HeaderMain";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { Loading } from "./Loading";
import { Footer } from "./Footer/FooterMain";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

export function SinglePost() {
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
      <div className="px-4 py-[30px]">
        <div className="container mx-auto flex w-full flex-col gap-4 rounded-md  pb-4 dark:text-[#ADBAC7] lg:w-[900px]">
          <ArticleBackground_Img article={article} />
          <div className="flex w-[100%] flex-col gap-4">
            <User_Info article={article} />
            <ArticleContent parse={parse} article={article} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function ArticleBackground_Img({ article }) {
  return (
    <div>
      <img
        src={article.social_image}
        alt={article.title}
        className="aspect-video h-[200px] w-full rounded-md object-cover md:h-[300px] lg:h-[400px] lg:w-[900px]"
      />
    </div>
  );
}

function User_Info({ article }) {
  return (
    <div className="flex items-center justify-between gap-6 rounded-md border bg-white px-5 py-2 text-[#696A75] dark:border-[#2D333B] dark:bg-[#2D333B] dark:text-[#ADBAC7]">
      <div className="flex items-center justify-center gap-4">
        <img
          src={article.user.profile_image}
          alt={article.user.username}
          className="h-[35px] w-[35px] rounded-full"
        />
        <p className="text-blue-500 dark:text-blue-300">
          {article.user.username}
        </p>
      </div>
      <p>{article.readable_publish_date}</p>
    </div>
  );
}

function ArticleContent({ parse, article }) {
  return (
    <div className="rounded-md border bg-white px-4 py-4 dark:border-[#2D333B] dark:bg-[#2D333B]">
      <h1 className="mb-8 text-center	text-4xl font-bold dark:text-blue-400">
        {article.title}
      </h1>
      <div className="prose mx-auto w-full px-4 dark:text-[#ADBAC7]">
        {parse(article.body_html)}
      </div>
    </div>
  );
}
