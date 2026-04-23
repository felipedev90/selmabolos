import Image from "next/image";
import { galeriaData } from "@/src/data/galeriaData";

export default function Galeria() {
  const spans = ["row-span-2", "", "", "col-span-2", "", "", "row-span-2", ""];

  return (
    <section className="py-section-y bg-bg md:scroll-mt-32" id="galeria">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center flex flex-col items-center gap-2 mb-12 md:mb-16">
          <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
            Eventos reais
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-ink">
            Galeria de bolos
          </h2>
          <p className="font-sans text-ink-soft max-w-2xl mx-auto text-lg mt-3">
            Festas, chás revelação, casamentos e momentos do dia a dia — feitos
            pela Selma.
          </p>
        </div>

        {/* A MÁGICA ACONTECE AQUI: Adicionado grid-flow-dense no final */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4 md:gap-block-gap grid-flow-dense">
          {galeriaData.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-theme-lg overflow-hidden shadow-theme group bg-surface ${spans[i] || ""}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
