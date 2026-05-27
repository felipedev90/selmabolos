import dynamic from "next/dynamic";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";

const Sabores = dynamic(() => import("@/src/components/Sabores"));
const InfoSection = dynamic(() => import("@/src/components/InfoSection"));

const OrderForm = dynamic(() => import("@/src/components/OrderForm"));
const NossasDelicias = dynamic(() => import("@/src/components/NossasDelicias"));
const Galeria = dynamic(() => import("@/src/components/Galeria"));

const Location = dynamic(() => import("@/src/components/Location"));
const Footer = dynamic(() => import("@/src/components/layout/Footer"));

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      <Sabores />
      <InfoSection />

      <OrderForm />
      <NossasDelicias />
      <Galeria />

      <Location />
      <Footer />
    </main>
  );
}
