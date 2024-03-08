import Head from "next/head";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact Us | Pinecone Blog</title>
        <meta
          name="description"
          content="Reach out to the Pinecone Blog team today. Whether you have questions, feedback, or ideas, we're here to listen and assist. Visit our contact page for all the ways you can get in touch with us, including email, phone, and social media. Let's connect and make something great together."
        />
      </Head>
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}
