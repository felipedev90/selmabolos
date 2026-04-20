import Image from "next/image";
import { Star, Cake } from "lucide-react";

export default function Hero() {
  return (
    <header
      id="top"
      className="relative flex items-center overflow-hidden min-h-[92vh] max-h-[860px] py-section-y"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-bg-alt overflow-hidden -z-10">
        <Image
          src="/images/hero/hero.webp"
          alt="Bolo artesanal da Selma"
          fill
          priority
          className="object-cover object-center opacity-[0.75] "
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10">
        <div
          className="max-w-[560px] rounded-theme-lg border p-card-pad shadow-theme"
          style={{
            background: "color-mix(in oklch, var(--surface) 65%, transparent)",
            backdropFilter: "blur(20px) saturate(1.2)",
            WebkitBackdropFilter: "blur(20px) saturate(1.2)",
            borderColor: "color-mix(in oklch, var(--surface) 80%, transparent)",
          }}
        >
          <span
            className="inline-flex items-center gap-2 text-[12px] font-sans font-semibold uppercase tracking-[0.09em] text-ink px-3.5 py-1.5 rounded-full mb-6"
            style={{
              background:
                "color-mix(in oklch, var(--accent) 45%, var(--surface))",
            }}
          >
            <Star size={14} className="text-primary fill-primary/20" />
            Confeitaria artesanal · Várzea Paulista
          </span>

          {/* Substituindo a classe .display fictícia pelos nossos tokens */}
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-tight">
            Bolos que transformam{" "}
            <em className="text-primary font-serif italic">momentos</em> em
            memórias
          </h1>

          {/* Substituindo a classe .lede fictícia */}
          <p className="font-sans text-lg text-ink-soft mt-5">
            Sabor de infância com a elegância que seu evento merece. Cada fatia
            é produzida à mão, com ingredientes selecionados e muito carinho.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            {/* Construindo o Botão Primário com Tailwind */}
            <a
              href="#cardapio"
              className="inline-flex items-center gap-2 bg-primary text-primary-ink px-6 py-3 rounded-theme-md font-sans font-medium transition-transform hover:scale-105 shadow-theme"
            >
              Monte seu bolo
              <Cake size={18} />
            </a>

            {/* Construindo o Botão Ghost com Tailwind */}
            <a
              href="#sabores"
              className="inline-flex items-center justify-center px-6 py-3 rounded-theme-md font-sans font-medium text-ink border border-line hover:bg-surface transition-colors bg-surface/50 backdrop-blur-sm"
            >
              Ver sabores
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
