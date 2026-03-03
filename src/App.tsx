import Navbar from "@/components/header/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/features/service/components/Services";
import Tours from "@/features/tour/components/Tours";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Tours />

      <Footer />
    </>
  );
}
