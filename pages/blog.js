import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer";
import { ErrorPage } from "@/components/ErrorPage";

export default function Home() {
  return (
    <div>
      <Header />
      <ErrorPage />
      <Footer />
    </div>
  );
}
