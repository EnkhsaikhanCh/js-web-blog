import Head from "next/head";
import Image from "next/image";
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
    <div className="px-4 pt-[30px]">
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          height: 0,
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Image
          src={article.social_image}
          alt={`Image for ${article.title}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}

function User_Info({ article }) {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between gap-6 rounded-md border bg-white px-5 py-2 text-[#696A75] dark:border-[#2D333B] dark:bg-[#2D333B] dark:text-[#ADBAC7]">
        <div className="flex items-center justify-center gap-4 ">
          <div
            className="overflow-hidden rounded-full"
            style={{ width: 35, height: 35 }}
          >
            <Image
              src={article.user.profile_image}
              alt={article.user.username}
              width={35}
              height={35}
              layout="fixed" // This layout mode respects the given width and height
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..."
            />
          </div>
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
