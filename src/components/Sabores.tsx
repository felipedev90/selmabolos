import { CakeIcon } from "lucide-react";

export default function Sabores() {
  const menu = [
    {
      title: "Massa Branca",
      price: "R$ 50,00/Kg",
      flavors: [
        "Morango",
        "Abacaxi",
        "Pêssego",
        "Prestígio",
        "Creme com pedaços de chocolate",
        "Doce de leite (amendoim)",
        "Doce de leite (coco)",
        "Doce de leite (ameixa)",
        "Doce de leite (abacaxi)",
        "Doce de leite (morango)",
        "Doce de leite (pedaços de chocolate)",
        "Maracujá",
        "Limão",
      ],
    },
    {
      title: "Massa Chocolate",
      price: "R$ 60,00/Kg",
      flavors: [
        "Brigadeiro",
        "Sensação",
        "Prestígio",
        "Ouro branco",
        "Sonho de valsa",
      ],
    },
    {
      title: "Bolo de Leite Ninho",
      price: "R$ 60,00/Kg",
      flavors: [
        "Morango",
        "Brigadeiro",
        "Coco",
        "Abacaxi",
        "Pedaços de chocolate",
      ],
    },
    {
      title: "Bolo Trufado",
      price: "R$ 65,00/Kg",
      flavors: ["Trufado", "Nozes", "Floresta negra", "Floresta branca"],
    },
  ];

  return (
    <section className="py-6 px-6 bg-surface-container-low mt-6" id="sabores">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8  md:mb-16">
          <h2 className="font-serif text-4xl font-bold text-primary mb-2">
            Nosso Cardápio
          </h2>
          <p className="text-secondary max-w-xl mx-auto">
            Conheça todas as nossas opções de massas e recheios. Trabalhamos
            apenas com ingredientes selecionados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menu.map((category, index) => (
            <div
              key={index}
              className="bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                {category.title}
              </h3>
              <p className="text-secondary font-medium mb-6 pb-4 border-b border-outline-variant/30">
                {category.price}
              </p>
              <ul className="space-y-3">
                {category.flavors.map((flavor, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-on-surface-variant text-sm"
                  >
                    <CakeIcon className="text-tertiary text-[18px] shrink-0" />
                    <span>{flavor}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
