import { menuData } from "@/src/data/menuData";

export default function Sabores() {
  return (
    <section
      className="py-section-y px-6 bg-bg-alt md:scroll-mt-24"
      id="sabores"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center flex flex-col items-center gap-2 mb-block-gap md:mb-16">
          <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
            Conheça nosso
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-ink">
            Cardápio de sabores
          </h2>
          <p className="font-sans text-ink-soft max-w-2xl mx-auto text-lg mt-2">
            Massas artesanais, recheios generosos e uma lista que combina
            clássicos e novidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-block-gap">
          {menuData.map((category) => (
            <div
              key={category.name}
              className="bg-surface p-card-pad rounded-theme-lg shadow-theme flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="font-serif font-semibold text-[22px] text-ink">
                {category.name}
              </h3>

              <div className="flex items-baseline gap-1">
                <span className="font-display text-[36px] text-primary leading-none">
                  R$ {category.price}
                </span>
                <span className="text-muted text-sm">/kg</span>
              </div>

              {/* LISTA DE SABORES */}
              <ul className="mt-3 pt-4 border-t border-dashed border-line flex flex-col gap-3">
                {category.flavors.map((flavor, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-ink-soft"
                  >
                    <span className="text-accent text-[10px] ">◆</span>
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
