import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Sabores = dynamic(() => import("@/src/components/Sabores"));
const InfoSection = dynamic(
  () => import("@/src/components/InfoSection"),
);
const Sobre = dynamic(() => import("@/src/components/sobre"));
const ComoEncomendar = dynamic(
  () => import("@/src/components/Como-encomendar"),
);
const OrderForm = dynamic(() => import("@/src/components/OrderForm"));
const NossasDelicias = dynamic(
  () => import("@/src/components/NossasDelicias"),
);
const Galeria = dynamic(() => import("@/src/components/Galeria"));
const Faq = dynamic(() => import("@/src/components/Faq"));
const Testimonials = dynamic(
  () => import("@/src/components/Testimonials"),
);
const Location = dynamic(() => import("@/src/components/Location"));
const Footer = dynamic(() => import("@/src/components/Footer"));

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
