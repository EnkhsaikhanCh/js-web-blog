import { Header } from "@/components/Header/Header";
import { Slider } from "@/components/Slider";
import { Trending } from "@/components/Trending";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      {/* <Trending /> */}
      <Card hasProfile={false} ViewAllButtonRender={true}/>
      <Footer />
    </div>
  );
}
