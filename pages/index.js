import { Header } from "@/components/Header/Header";
import { Slider } from "@/components/Slider";
import { Trending } from "@/components/Trending";
import { AllBlogPost } from "@/components/AllBlogPost";
import { Footer } from "@/components/Footer";

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
