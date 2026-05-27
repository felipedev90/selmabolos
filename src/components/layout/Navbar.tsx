import Link from "next/link";
import { navBarData } from "@/src/data/navBarData";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="font-hand italic font-bold text-[2.5rem] lg:text-6xl text-primary tracking-wide">
          <Link href="#hero">Selma Bolos</Link>
        </div>
        <div className="hidden xl:flex gap-8 items-center text-3xl font-medium font-hand">
          {navBarData.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <a
          className="bg-primary font-display tracking-wide text-bg px-4 py-2 md:px-6 rounded-theme-lg md:font-medium hover:opacity-90 transition-opacity"
          href="#cardapio"
        >
          Encomendar
        </a>
      </div>
    </nav>
  );
}
