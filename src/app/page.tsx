import dynamic from "next/dynamic";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";

// Componentes "Below the fold" (abaixo da dobra) com Lazy Loading
const Sabores = dynamic(() => import("../components/Sabores/Sabores"));
const InfoSection = dynamic(
  () => import("../components/InfoSection/InfoSection"),
);
const Sobre = dynamic(() => import("../components/Sobre/sobre"));
const ComoEncomendar = dynamic(
  () => import("../components/Como-encomendar/Como-encomendar"),
);
const OrderForm = dynamic(() => import("../components/OrderForm/OrderForm"));
const NossasDelicias = dynamic(
  () => import("../components/NossasDelicias/NossasDelicias"),
);
const Galeria = dynamic(() => import("../components/Galeria/Galeria"));
const Faq = dynamic(() => import("../components/FAQ/Faq"));
const Testimonials = dynamic(
  () => import("../components/Testimonials/Testimonials"),
);
const Location = dynamic(() => import("../components/Location/Location"));
const Footer = dynamic(() => import("../components/Footer/Footer"));

export default function Home() {
  return (
    <main>
      {/* Acima da dobra: carregamento imediato */}
      <Navbar />
      <Hero />

      {/* Abaixo da dobra: os pacotes JS são separados e não travam o carregamento inicial */}
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
