import Image from "next/image";

export default function Sobre() {
  return (
    <section
      // py-section-y puxa o espaçamento dinâmico do design system
      className="py-section-y bg-bg-alt"
      id="sobre"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Foto */}
          <div
            // rounded-theme-lg e shadow-theme aplicam os tokens de borda e sombra
            className="aspect-[4/5] rounded-theme-lg overflow-hidden relative shadow-theme bg-surface"
          >
            <Image
              src="/images/sobre/selma.webp"
              alt="Selma preparando um bolo na cozinha"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Texto */}
          <div>
            {/* O estilo "eyebrow" recriado com Tailwind: pequeno, maiúsculo, espaçado */}
            <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
              A confeiteira
            </span>

            {/* Título usando a fonte Display grande */}
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-6">
              Oi, eu sou a{" "}
              {/* Misturando a fonte Serif em itálico para dar charme */}
              <em className="font-serif text-primary italic pr-1">Selma</em>.
            </h2>

            {/* Textos de parágrafo usando a fonte Sans e cor suave */}
            <p className="font-sans text-lg text-ink-soft mb-4">
              Faço bolos há mais de 20 anos. Comecei na cozinha de casa, para
              aniversários da família, e hoje a Selma Bolos atende Várzea
              Paulista, Jundiaí e região.
            </p>

            <p className="font-sans text-lg text-ink-soft mb-8">
              Cada encomenda passa pelas minhas mãos, do primeiro ao último
              detalhe...
            </p>

            <div className="divide-y divide-line">
              {[
                ["20+", "anos fazendo bolos"],
                ["2.400", "bolos entregues"],
                ["4,9 ★", "de média no Google"],
              ].map(([n, l]) => (
                <div key={l} className="flex items-baseline gap-4 py-4">
                  <span className="font-display text-[42px] text-primary leading-none">
                    {n}
                  </span>
                  <span className="font-sans text-ink-soft text-base">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
