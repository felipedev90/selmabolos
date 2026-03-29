// Corrigido para a importação padrão da biblioteca
import { Star } from "lucide-react";

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

        {/* Usamos grid-cols e h-full nos cartões internos para uniformizar a altura */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-stretch">
          {testimonials.map((t, index) => (
            <div key={index} className="relative pt-8 h-full">
              {" "}
              {/* h-full aqui */}
              {/* O gráfico de aspas permanece posicionado absolutamente */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl text-primary-container opacity-50 font-serif leading-none">
                “
              </div>
              {/* CARTÃO INTERNO CORRIGIDO ABAIXO */}
              <div className="bg-surface p-8 rounded-2xl shadow-md text-center h-full flex flex-col relative z-10 border border-outline-variant/30">
                {" "}
                {/* Adicionado h-full flex flex-col */}
                <p className="text-secondary italic mb-6 leading-relaxed flex-grow">
                  {" "}
                  {/* Adicionado flex-grow */}
                  {`"${t.text}"`}
                </p>
                {/* Wrap name, location, rating block to keep them together and push to bottom */}
                <div className="mt-auto">
                  {" "}
                  {/* mt-auto empurra este bloco para o fundo */}
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-secondary">{t.location}</div>
                  {/* Rating block */}
                  <div className="flex justify-center mt-3 gap-0.5">
                    {/* Ícones do Lucide corrigidos, preenchidos e amarelos */}
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-yellow-400"
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
