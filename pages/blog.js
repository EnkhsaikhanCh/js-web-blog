import Head from "next/head";
import { Footer } from "@/components/Footer";
import { AllBlogPost } from "@/components/AllBlogPost/AllBlogPostMain";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pinecone Blog: Insights and Innovations in MetaBlog</title>
        <meta
          name="description"
          content="Welcome to the Pinecone Blog, where we dive deep into the latest trends, strategies, and stories in [Your Industry/Niche]. From expert advice to innovative solutions, our blog is your go-to source for staying ahead in [Another Key Area or Benefit]. Explore our articles to fuel your passion and drive success."
        />
      </Head>
      <Header />
      <AllBlogPost
        hasProfile={true}
        ViewAllButtonRender={false}
        itemsPerPage={12}
      />
      <Footer />
    </div>
  );
}
