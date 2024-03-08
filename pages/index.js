import React from "react";
import Head from "next/head";
import { Slider } from "@/components/Slider";
import { Trending } from "@/components/Trending";
import { AllBlogPost } from "@/components/AllBlogPost/AllBlogPostMain";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Meta Blog - Exploring DevOps, Programming, and Cloud Technologies
        </title>
        <meta
          property="og:description"
          content="Explore the latest insights and stories at Pinecone Blog, your ultimate source for tips, trends, and thought leadership in MetaBlog. Dive into our expertly curated content designed for enthusiasts and professionals alike. Click to discover more!"
        />
      </Head>
      <Header />
      <Slider />
      <Trending />
      <AllBlogPost
        hasProfile={false}
        ViewAllButtonRender={true}
        itemsPerPage={9}
      />
      <Footer />
    </div>
  );
}
