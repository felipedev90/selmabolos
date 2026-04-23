import dynamic from "next/dynamic";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

const Sabores = dynamic(() => import("@/src/components/Sabores/Sabores"));
const InfoSection = dynamic(
  () => import("@/src/components/InfoSection/InfoSection"),
);
const Sobre = dynamic(() => import("@/src/components/Sobre/sobre"));
const ComoEncomendar = dynamic(
  () => import("@/src/components/Como-encomendar/Como-encomendar"),
);
const OrderForm = dynamic(() => import("@/src/components/OrderForm/OrderForm"));
const NossasDelicias = dynamic(
  () => import("@/src/components/NossasDelicias/NossasDelicias"),
);
const Galeria = dynamic(() => import("@/src/components/Galeria/Galeria"));
const Faq = dynamic(() => import("@/src/components/FAQ/Faq"));
const Testimonials = dynamic(
  () => import("@/src/components/Testimonials/Testimonials"),
);
const Location = dynamic(() => import("@/src/components/Location/Location"));
const Footer = dynamic(() => import("@/src/components/Footer/Footer"));

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
