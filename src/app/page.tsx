import dynamic from "next/dynamic";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const Sabores = dynamic(() => import("../components/Sabores/Sabores"));
const InfoSection = dynamic(
  () => import("../components/InfoSection/InfoSection"),
);
const Sobre = dynamic(() => import("../components/Sobre/sobre"));
const ComoEncomendar = dynamic(
  () => import("../components/Como-encomendar/Como_temp"),
);
const OrderForm = dynamic(() => import("../components/OrderForm/OrderForm"));
const NossasDelicias = dynamic(
  () => import("../components/NossasDelicias/NossasDelicias"),
);
const Galeria = dynamic(() => import("../components/Galeria/Gal_temp"));
const Faq = dynamic(() => import("../components/FAQ/FAQ_temp"));
const Testimonials = dynamic(
  () => import("../components/Testimonials/Testimonials"),
);
const Location = dynamic(() => import("../components/Location/Location"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

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
