// IMPORTANTE: Certifique-se de que lucide-react está instalado (npm install lucide-react)
import { Link, Phone } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "5511973879147"; // Mesmo número do formulário

  return (
    <footer className="bg-[#745853] w-full pt-16 pb-12 text-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-10 text-center">
        <div className="font-serif italic text-3xl font-bold tracking-tight">
          Selma Bolos
        </div>

        {/* Links Sociais com Lucide */}
        <div className="flex gap-8 items-center">
          <a
            href="https://www.instagram.com/selmabolos._/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-container transition-colors group"
          >
            <Link className="w-8 h-8 opacity-90 group-hover:opacity-100" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-container transition-colors group"
          >
            <Phone className="w-8 h-8 opacity-90 group-hover:opacity-100" />
            <span className="sr-only">WhatsApp</span>
          </a>
        </div>

        <div className="h-px w-24 bg-primary-container/20"></div>
        <p className="font-sans text-sm opacity-60">
          © 2026 Selma Bolos - O Toque Artesanal em Cada Fatia
        </p>
      </div>
    </footer>
  );
}
