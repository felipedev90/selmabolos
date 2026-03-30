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
    <footer className="bg-[#745853] w-full pt-16 pb-12 text-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center gap-8 text-center">
        <div className="font-serif italic text-3xl font-bold tracking-tight">
          Selma Bolos
        </div>

        <a
          href={googleReviewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 mt-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 transition-all group"
        >
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform" />
          <span className="font-medium text-sm md:text-base tracking-wide">
            Nos avalie no Google
          </span>
        </a>

        <div className="flex gap-8 items-center">
          <a
            href="https://www.instagram.com/selmabolos._/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-container transition-colors group"
          >
            <InstagramIcon className="w-8 h-8 opacity-90 group-hover:opacity-100" />
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

        <div className="h-px w-24 bg-primary-container/20 mt-4"></div>
        <p className="font-sans text-sm opacity-60">
          © 2026 Selma Bolos - O Toque Artesanal em Cada Fatia
        </p>
      </div>
    </footer>
  );
}
