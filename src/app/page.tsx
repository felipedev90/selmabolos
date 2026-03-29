import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import OrderForm from "../components/OrderForm";
import NossasDelicias from "../components/NossasDelicias"; // NOVO
import Sabores from "../components/Sabores";
import Testimonials from "../components/Testimonials"; // NOVO
import Location from "../components/Location";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoSection />
      <Sabores />
      <OrderForm />
      <NossasDelicias /> {/* Adicionado */}
      <Testimonials /> {/* Adicionado */}
      <Location />
      <Footer />
    </main>
  );
}
