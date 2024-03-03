import React from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header/HeaderMain";
import { Slider } from "@/components/Slider";
import { Trending } from "@/components/Trending";
import { AllBlogPost } from "@/components/AllBlogPost/AllBlogPostMain";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Helmet>
        <title>
          Meta Blog - Exploring DevOps, Programming, and Cloud Technologies
        </title>
      </Helmet>
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
