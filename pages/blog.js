import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <Card hasProfile={true} ViewAllButtonRender={false} />
      <Footer />
    </div>
  );
}
