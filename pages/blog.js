import { Header } from "@/components/Header/HeaderMain";
import { Footer } from "@/components/Footer";
import { AllBlogPost } from "@/components/AllBlogPost/AllBlogPostMain";

export default function Home() {
  return (
    <div>
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
