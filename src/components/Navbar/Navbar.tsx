import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="font-serif italic text-2xl text-primary font-bold tracking-tight">
          <Link href="#hero">Selma Bolos</Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <a
            className="font-sans font-medium text-secondary hover:text-primary transition-colors"
            href="#delicias"
          >
            Nossas Delícias
          </a>
          <a
            className="font-sans font-medium text-secondary hover:text-primary transition-colors"
            href="#sabores"
          >
            Cardápio
          </a>
          <a
            className="font-sans font-medium text-secondary hover:text-primary transition-colors"
            href="#depoimentos"
          >
            Depoimentos
          </a>
          <a
            className="font-sans font-medium text-secondary hover:text-primary transition-colors"
            href="#localizacao"
          >
            Onde Estamos
          </a>
        </div>
        <a
          className="bg-primary text-on-primary px-6 py-2 rounded-xl font-medium hover:opacity-90 transition-opacity"
          href="#cardapio"
        >
          Peça Agora
        </a>
      </div>
    </nav>
  );
}
