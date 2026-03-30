import Image from "next/image";

export default function Hero() {
  return (
    <header
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero.webp"
          alt="Bolos artesanais decorados com kit-kat e morangos."
          fill
          priority
          className="object-cover object-top md:object-[100%_0] opacity-100"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-2 w-full mb-4">
        <div className="max-w-2xl bg-white/20 lg:bg-white/70 p-8 rounded-3xl backdrop-blur-sm shadow-xl border border-white/50">
          <span className="inline-block text-center px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-medium text-sm tracking-wide mb-6">
            CONFEITARIA ARTESANAL EM VÁRZEA PAULISTA
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary leading-tight mb-6 -tracking-wider">
            Bolos Artesanais que Transformam Momentos em Memórias
          </h1>
          <p className="text-xl text-secondary max-w-lg leading-relaxed">
            Sabor de infância com a elegância que seu evento merece.
          </p>
          <p className="text-xl text-secondary mb-10 max-w-lg leading-relaxed">
            Cada fatia é produzida com ingredientes selecionados e muito amor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all text-center"
              href="#cardapio"
            >
              Faça sua Encomenda
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
