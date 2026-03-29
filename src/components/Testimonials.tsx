const testimonials = [
  {
    name: "Ana Beatriz",
    location: "Jundiaí, SP",
    text: "Encomendei o bolo de Doce de Leite com Pedaços de Chocolate para o batizado da minha filha. Que surpresa maravilhosa! A massa era branca e super fofinha, e o recheio... perfeito! Molhadinho na medida certa e nada enjoativo. Todos os convidados elogiaram muito. Atendimento nota 1000!",
  },
  {
    name: "Ricardo Mendes",
    location: "Várzea Paulista, SP",
    text: "A Selma é uma artista! Peguei o Sonho de Valsa (Massa Chocolate) e estava dos deuses. O brigadeiro era gourmet de verdade e a textura estava impecável. O bolo trufado também já está na nossa lista para o próximo aniversário. Recomendo de olhos fechados!",
  },
  {
    name: "Mariana Silva",
    location: "Jundiaí, SP",
    text: "Completamente apaixonada pelo Bolo de Leite Ninho com Nutella. Ele é sofisticado, farto e com um sabor equilibrado. A Selma foi super pontual na retirada agendada no Parque Guarani. Vale cada centavo! Sem dúvida a melhor confeitaria de Várzea Paulista.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-surface-container-low" id="depoimentos">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl font-bold text-primary mb-16 text-center italic">
          O que dizem nossos clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <div key={index} className="relative pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl text-primary-container opacity-50 font-serif leading-none">
                “
              </div>
              <div className="bg-surface p-8 rounded-2xl shadow-md text-center relative z-10 border border-outline-variant/30">
                <p className="text-secondary italic mb-6 leading-relaxed">
                  {`"${t.text}"`}
                </p>
                <div className="font-bold text-primary">{t.name}</div>
                <div className="text-sm text-secondary">{t.location}</div>
                <div className="flex justify-center mt-3 text-tertiary">
                  {/* Ícones do Material Symbol mantidos para consistência visual */}
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
