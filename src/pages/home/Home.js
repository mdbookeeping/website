import Header from "../../components/navbar/Header";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Footer from "../../components/footer/Footer";
import Contact from "../../components/contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
