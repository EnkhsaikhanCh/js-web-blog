import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { ErrorPage } from "@/components/ErrorPage";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <Card hasProfile={true} />
      <Footer />
    </div>
  );
}
