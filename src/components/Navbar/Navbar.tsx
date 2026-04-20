import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="font-hand italic font-bold text-4xl lg:text-5xl text-primary tracking-wide">
          <Link href="#hero">Selma Bolos</Link>
        </div>
        <div className="hidden md:flex gap-8 items-center text-3xl font-medium font-hand">
          <a
            className=" text-secondary hover:text-primary transition-colors"
            href="#sabores"
          >
            Sabores
          </a>
          <a
            className=" text-secondary hover:text-primary transition-colors"
            href="#encomendar"
          >
            Como encomendar
          </a>
          <a
            className="  text-secondary hover:text-primary transition-colors"
            href="#monte-seu-bolo"
          >
            Monte seu bolo
          </a>
          <a
            className=" text-secondary hover:text-primary transition-colors"
            href="#galeria"
          >
            Galeria
          </a>
          <a
            className="  text-secondary hover:text-primary transition-colors"
            href="#localizacao"
          >
            Contato
          </a>
        </div>
        <a
          className="bg-primary font-sans text-bg px-4 py-2 md:px-6 rounded-theme-lg  md:font-medium hover:opacity-90 transition-opacity"
          href="#cardapio"
        >
          Encomendar
        </a>
      </div>
    </nav>
  );
}
