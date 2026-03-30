import Image from "next/image";
import { deliciasData } from "@/src/data/deliciasData";

const delicias = deliciasData;

export default function NossasDelicias() {
  return (
    <section
      className="py-6 md:py-18 md:mt-24 px-6 bg-surface scroll-mt-24 md:scroll-mt-32"
      id="delicias"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Nossas Delícias
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Uma amostra da nossa produção artesanal. Cada bolo é feito com
            dedicação e ingredientes selecionados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {delicias.map((delicia, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg border border-outline-variant/30 group bg-surface-container-lowest"
            >
              <div className="relative aspect-square">
                <Image
                  src={delicia.src}
                  alt={delicia.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {delicia.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
