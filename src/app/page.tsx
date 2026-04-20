import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Sabores from "../components/Sabores/Sabores";
import InfoSection from "../components/InfoSection/InfoSection";
import Sobre from "../components/Sobre/sobre";
import ComoEncomendar from "../components/Como-encomendar/Como-encomendar";
import OrderForm from "../components/OrderForm/OrderForm";
import NossasDelicias from "../components/NossasDelicias/NossasDelicias";
import Galeria from "../components/Galeria/Galeria";
import Faq from "../components/FAQ/Faq";
import Testimonials from "../components/Testimonials/Testimonials";
import Location from "../components/Location/Location";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sabores />
      <InfoSection />
      <Sobre />
      <ComoEncomendar />
      <OrderForm />
      <NossasDelicias />
      <Galeria />
      <Faq />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
