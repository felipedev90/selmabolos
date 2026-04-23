export default function ComoEncomendar() {
  const passos = [
    {
      n: "1",
      t: "Escolha sabor & tamanho",
      d: "Navegue o cardápio e decida a massa, o recheio e o peso do seu bolo.",
    },
    {
      n: "2",
      t: "Monte seu pedido",
      d: "Use o formulário e veja o preço na hora. Adicione embalagem e tema se quiser.",
    },
    {
      n: "3",
      t: "Envie pelo WhatsApp",
      d: "Um clique manda tudo certinho pra Selma, com seus dados e preferências.",
    },
    {
      n: "4",
      t: "Retire ou receba",
      d: "Confirme pagamento via PIX e combine retirada no local ou entrega.",
    },
  ];

  return (
    <section
      // py-section-y para espaçamento vertical dinâmico e fundo padrão bg-bg
      className="py-section-y bg-bg"
      id="como"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        {/* CABEÇALHO DA SEÇÃO - Estilo manual para evitar erro de 'SectionHeader' */}
        <div className="text-center flex flex-col items-center gap-2 mb-12 md:mb-16">
          <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
            Simples e rápido
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-ink">
            Como encomendar
          </h2>
          <p className="font-sans text-ink-soft max-w-2xl mx-auto text-lg mt-3">
            Do primeiro clique ao bolo na sua mesa em quatro passos. Sem
            complicação, sem cadastro.
          </p>
        </div>

        {/* GRID DE PASSOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-block-gap">
          {passos.map((p) => (
            <div key={p.n} className="group">
              {/* Número gigante com font-display e cor da marca */}
              <div className="bg-orange-200/40 rounded-full w-20 h-20 pt-2 flex items-center justify-center mx-auto">
                <div
                  className="font-display leading-none text-primary/90 mb-4 transition-transform group-hover:-translate-y-1 duration-300 "
                  style={{ fontSize: "72px" }}
                >
                  {p.n}
                </div>
              </div>

              <h4 className="font-serif font-semibold text-xl text-center text-ink mb-3">
                {p.t}
              </h4>

              <p className="font-sans text-ink-soft text-[15px] text-center md:text-start leading-relaxed">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
