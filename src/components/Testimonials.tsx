import { Star } from "lucide-react";
import { testimonialsData } from "@/src/data/testimonialsData";

export default function Testimonials() {
  return (
    <section
      // Usando py-section-y e bg-bg-alt do nosso design system
      className="py-section-y px-6 bg-bg"
      id="depoimentos"
    >
      {/* CABEÇALHO PADRONIZADO */}
      <div className="text-center flex flex-col items-center gap-2 mb-12 md:mb-16">
        <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
          Clientes felizes
        </span>
        <h2 className="font-display text-5xl md:text-6xl text-ink">
          O que dizem por aí
        </h2>
      </div>

      <div className="max-w-[1240px] mx-auto">
        {/* GRID DOS DEPOIMENTOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-block-gap items-stretch">
          {testimonialsData.map((t, index) => (
            <div key={index} className="relative pt-8 h-full">
              {/* Aspas decorativas usando a cor primária transparente */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl text-primary/20 font-serif leading-none z-0">
                “
              </div>

              {/* CARTÃO - Aplicando bg-surface, p-card-pad, rounded-theme-lg e shadow-theme */}
              <div className="bg-surface p-card-pad rounded-theme-lg shadow-theme h-full flex flex-col relative z-10">
                {/* Texto do depoimento */}
                <p className="font-sans text-ink-soft italic mb-6 leading-relaxed flex-grow text-center">
                  {`"${t.text}"`}
                </p>

                {/* Autor e Avaliação */}
                <div className="mt-auto text-center">
                  <div className="font-serif font-bold text-lg text-primary">
                    {t.name}
                  </div>
                  <div className="font-sans text-sm text-ink-soft">
                    {t.location}
                  </div>

                  {/* Estrelas usando a cor 'accent' (mel/dourado) definida na paleta */}
                  <div className="flex justify-center mt-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-accent fill-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
