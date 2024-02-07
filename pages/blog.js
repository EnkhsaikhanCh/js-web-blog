import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { AllBlogPost } from "@/components/AllBlogPost";

export default function Home() {
  return (
    <div>
      <Header />
      <AllBlogPost hasProfile={true} ViewAllButtonRender={false} />
      <Footer />
    </div>
  );
}
