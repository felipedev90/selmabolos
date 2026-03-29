import Image from "next/image";

const delicias = [
  {
    src: "/images/nossasdelicias/bolo-chocolate.webp",
    alt: "Bolo de chocolate prestígio",
    title: "Massa Chocolate",
  },
  {
    src: "/images/nossasdelicias/massa-branca.webp",
    alt: "Bolo decorado",
    title: "Massa Branca Especial",
  },
  {
    src: "/images/nossasdelicias/bolo-leite-ninho.webp",
    alt: "Bolo decorado com recheio de ninho",
    title: "Bolo de Leite Ninho",
  },
  {
    src: "/images/nossasdelicias/bolo-trufado.webp",
    alt: "Bolo decorado com kit-kat",
    title: "Bolo Trufado",
  },
];

export default function NossasDelicias() {
  return (
    <section className="py-12 px-6 bg-surface" id="delicias">
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
