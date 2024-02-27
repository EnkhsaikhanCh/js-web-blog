import { Header } from "@/components/Header/HeaderMain";
import { Slider } from "@/components/Slider";
import { Trending } from "@/components/Trending";
import { AllBlogPost } from "@/components/AllBlogPost/AllBlogPostMain";
import { Footer } from "@/components/Footer/FooterMain";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Trending />
      <AllBlogPost hasProfile={false} ViewAllButtonRender={true} />
      <Footer />
    </div>
  );
}
