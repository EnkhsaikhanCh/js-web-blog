import { ContactUs } from "@/components/ContactUs";
import { ErrorPage } from "@/components/ErrorPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}
