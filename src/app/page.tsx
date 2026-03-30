import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import InfoSection from "../components/InfoSection/InfoSection";
import OrderForm from "../components/OrderForm/OrderForm";
import NossasDelicias from "../components/NossasDelicias/NossasDelicias";
import Sabores from "../components/Sabores/Sabores";
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
      <OrderForm />
      <NossasDelicias />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
