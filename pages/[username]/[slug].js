import Head from "next/head";
import parse from "html-react-parser";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/HeaderMain";

export default function Home({ article = {} }) {
  console.log(article);
  useEffect(() => {
    if (article) {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    }
  }, [article]);
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Head>
          <title>{article.title || "Fallback Title"}</title>
          <meta
            name="description"
            content={article.description || "Fallback Description"}
          />
          <meta
            property="og:title"
            content={article.title || "Fallback Title"}
          />
          <meta
            property="og:image"
            content={article.cover_image || "/default-image.jpg"}
          />
          <meta
            property="og:description"
            content={article.description || "Fallback Description"}
          />
        </Head>
        <div>
          <div className="container mx-auto flex w-full flex-col gap-4 rounded-md  pb-4 dark:text-[#ADBAC7] lg:w-[900px]">
            <ArticleBackground_Img article={article} />
            <div className="flex w-[100%] flex-col gap-4">
              <User_Info article={article} />
              <ArticleContent parse={parse} article={article} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function ArticleBackground_Img({ article }) {
  if (!article || !article.social_image) {
    return <div>No image available</div>;
  }

  return (
    <div className="px-4 pt-[30px]">
      <img
        src={article.social_image}
        alt={`Image for ${article.title}`}
        className="aspect-video h-[200px] w-full rounded-md object-cover md:h-[300px] lg:h-[400px] lg:w-[900px]"
      />
    </div>
  );
}

function User_Info({ article }) {
  if (!article || !article.user) {
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
  if (!article || !article.title || !article.body_html) {
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

export async function getServerSideProps({ query }) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles/${query.username}/${query.slug}`,
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }
    const article = await res.json();
    return { props: { article } };
  } catch (error) {
    console.error(error);
    return { props: { article: {} } };
  }
}
