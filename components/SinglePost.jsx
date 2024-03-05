import { Header } from "./Header/HeaderMain";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { Loading } from "./Loading";
import { Footer } from "./Footer";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useFetchArticle } from "./api/useFetchArticle";
import Head from "next/head";

export function SinglePost() {
  const router = useRouter();
  const { username, slug } = router.query;
  const { article, loading, error } = useFetchArticle(username, slug);

  useEffect(() => {
    if (article) {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    }
  }, [article]);

  return (
    <>
      <MetaTag article={article} />
      <Header />
      {article === undefined ? (
        <Loading />
      ) : (
        <div>
          <div className="container mx-auto flex w-full flex-col gap-4 rounded-md  pb-4 dark:text-[#ADBAC7] lg:w-[900px]">
            <ArticleBackground_Img article={article} />
            <div className="flex w-[100%] flex-col gap-4">
              <User_Info article={article} />
              <ArticleContent parse={parse} article={article} />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

function MetaTag(article) {
  return (
    <Head>
      <title>{article.title}</title>
      <meta property="og:title" content={article.title} />
      <meta property="og:image" content={article.social_image} />
    </Head>
  );
}

function ArticleBackground_Img({ article }) {
  // Check if article is null or if article.social_image is undefined
  if (!article || !article.social_image) {
    // Optionally, return a placeholder or nothing if the article or social_image is not available
    return <div>No image available</div>;
  }

  return (
    <div className="px-4 pt-[30px]">
      <img
        src={article.social_image}
        alt={article.title}
        className="aspect-video h-[200px] w-full rounded-md object-cover md:h-[300px] lg:h-[400px] lg:w-[900px]"
      />
    </div>
  );
}

function User_Info({ article }) {
  // Check if article or article.user is null or undefined
  if (!article || !article.user) {
    // Optionally, return a placeholder or nothing if the user information is not available
    return <div>User information is not available</div>;
  }

  return (
    <div className="px-4">
      <div className="flex items-center justify-between gap-6 rounded-md border bg-white px-5 py-2 text-[#696A75] dark:border-[#2D333B] dark:bg-[#2D333B] dark:text-[#ADBAC7]">
        <div className="flex items-center justify-center gap-4 ">
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
    </div>
  );
}

function ArticleContent({ parse, article }) {
  // Check if article is null or undefined, or if required properties are missing
  if (!article || !article.title || !article.body_html) {
    // Return a placeholder or nothing if the article or required content is not available
    return <div>Article content is not available.</div>;
  }

  return (
    <div className="pb-[30px] md:px-4">
      <div className="rounded-md border bg-white px-1 py-4 dark:border-[#2D333B] dark:bg-[#2D333B]">
        <h1 className="mb-8 text-center	text-4xl font-bold dark:text-blue-400">
          {article.title}
        </h1>
        <div className="prose mx-auto w-full px-4 dark:text-[#ADBAC7]">
          {parse(article.body_html)}
        </div>
      </div>
    </div>
  );
}
