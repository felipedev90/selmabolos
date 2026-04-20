import { Phone, Star } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const whatsappNumber = "5511973879147";
  const googleReviewLink = "https://share.google/zCE7IcIo0dn2AVlNs";

  return (
    <footer className="bg-ink pt-16 pb-8 text-bg">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Grid Principal de 4 Colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-18 mb-16">
          {/* Coluna 1: Marca e Sobre */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="font-hand italic text-5xl tracking-tight text-bg">
                Selma Bolos
              </span>
            </div>
            <p className="font-sans italic text-bg/80 text-[15px] leading-relaxed max-w-xs mt-1">
              Bolos artesanais para aniversários, festas e momentos especiais.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col gap-5">
            <h4 className="font-serif font-medium text-lg text-bg underline">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3 font-sans text-[15px] text-bg/80">
              <a
                href="#sabores"
                className="hover:text-primary transition-colors w-fit"
              >
                Sabores
              </a>
              <a
                href="#sobre"
                className="hover:text-primary transition-colors w-fit"
              >
                A Selma
              </a>
              <a
                href="#como"
                className="hover:text-primary transition-colors w-fit"
              >
                Como encomendar
              </a>
              <a
                href="#cardapio"
                className="hover:text-primary transition-colors w-fit"
              >
                Monte seu bolo
              </a>
              <a
                href="#galeria"
                className="hover:text-primary transition-colors w-fit"
              >
                Galeria
              </a>
              <a
                href="#faq"
                className="hover:text-primary transition-colors w-fit"
              >
                Dúvidas
              </a>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col gap-5">
            <h4 className="font-serif font-medium text-lg text-bg underline">
              Contato
            </h4>
            <div className="flex flex-col gap-3 font-sans text-[15px] text-bg/80">
              <span>(11) 97387–9147</span>
              <span>Rua Tanque Velho, 55</span>
              <span>Várzea Paulista, SP</span>
              <span>Atend. via WhatsApp</span>
            </div>
          </div>

          {/* Coluna 4: Redes e Avaliação */}
          <div className="flex flex-col gap-5">
            <h4 className="font-serif font-medium text-lg text-bg">
              Siga a Selma
            </h4>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/selmabolos._/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-bg/30 flex items-center justify-center hover:border-bg hover:bg-bg/10 transition-all group"
              >
                <InstagramIcon className="w-5 h-5 text-bg/90 group-hover:text-bg" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-bg/30 flex items-center justify-center hover:border-bg hover:bg-bg/10 transition-all group"
              >
                <Phone className="w-5 h-5 text-bg/90 group-hover:text-bg" />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>

            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-bg/30 hover:border-bg hover:bg-bg/10 transition-all group w-fit"
            >
              <Star className="w-4 h-4 text-bg group-hover:scale-110 transition-transform" />
              <span className="font-sans font-medium text-sm text-bg tracking-wide">
                Avalie no Google
              </span>
            </a>
          </div>
        </div>

        {/* Rodapé - Direitos e Créditos */}
        <div className="border-t border-bg/10 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-center">
          <span className="font-sans text-sm text-bg/60">
            © {new Date().getFullYear()} Selma Bolos · Todos os direitos
            reservados
          </span>
          <p className="font-sans text-sm text-bg/60">
            Criado e desenvolvido por{" "}
            <a
              href="https://felipe-silva90-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bg hover:text-primary font-medium transition-colors"
            >
              Felipe Augusto 🍃
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
