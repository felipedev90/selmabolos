import Image from "next/image";
import { deliciasData } from "@/src/data/deliciasData";

export default function NossasDelicias() {
  return (
    <section
      className="py-section-y bg-bg-alt md:scroll-mt-32"
      id="nossas-delicias"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center flex flex-col items-center gap-2 mb-12 md:mb-16">
          <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
            Direto do forno
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-ink">
            Nossas delícias
          </h2>
          <p className="font-sans text-ink-soft max-w-2xl mx-auto text-lg mt-3">
            Uma amostra dos bolos mais pedidos. <br />
            Cada um pode ser adaptado ao tema do seu evento.
          </p>
        </div>

        {/* Grid Padronizado - 2 colunas no mobile, 3 no tablet e 4 no desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-block-gap">
          {deliciasData.map((item, i) => (
            <div
              key={i}
              // Retiramos o aspect-square daqui e transformamos o card em flex-col
              className="rounded-theme-lg overflow-hidden shadow-theme group bg-surface border border-line flex flex-col"
            >
              {/* O aspect-square fica APENAS no container da imagem agora */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="bg-surface p-4 flex-grow flex items-center justify-center">
                <h3 className="text-ink text-lg font-display text-center py-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
