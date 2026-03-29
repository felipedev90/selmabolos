"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const menuData = {
  "massa-branca": {
    name: "Massa Branca",
    price: 50,
    img: "/images/bolo-branca.jpg", // Substitua pelo caminho de uma foto real dela depois
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
  "massa-chocolate": {
    name: "Massa Chocolate",
    price: 55,
    img: "/images/bolo-chocolate.jpg",
    flavors: [
      "Brigadeiro",
      "Sensação",
      "Prestígio",
      "Ouro branco",
      "Sonho de valsa",
    ],
  },
  "leite-ninho": {
    name: "Bolo de Leite Ninho",
    price: 55,
    img: "/images/bolo-ninho.jpg",
    flavors: [
      "Morango",
      "Brigadeiro",
      "Coco",
      "Abacaxi",
      "Pedaços de chocolate",
    ],
  },
  trufado: {
    name: "Bolo Trufado",
    price: 65,
    img: "/images/bolo-trufado.jpg",
    flavors: ["Trufado", "Nozes", "Floresta negra", "Floresta branca"],
  },
};

type CategoryKey = keyof typeof menuData;

export default function OrderForm() {
  const [category, setCategory] = useState<CategoryKey>("massa-branca");
  const [flavor, setFlavor] = useState(menuData["massa-branca"].flavors[0]);
  const [weight, setWeight] = useState<number>(1.5);
  const [packaging, setPackaging] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<"retirada" | "entrega">(
    "retirada",
  );
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setFlavor(menuData[category].flavors[0]);
  }, [category]);

  const currentCategory = menuData[category];
  const totalPrice = currentCategory.price * weight + (packaging ? 10 : 0);

  const handleWhatsAppSubmit = () => {
    // Validação de endereço
    if (deliveryMethod === "entrega" && address.trim() === "") {
      setError("Por favor, informe o endereço completo para a entrega.");
      return;
    }
    setError("");

    const packText = packaging
      ? "Com embalagem em caixa"
      : "Sem embalagem em caixa";
    const deliveryText =
      deliveryMethod === "entrega"
        ? `Entrega no endereço:\n${address}`
        : "Retirada no local";

    const message = `Olá Selma! Gostaria de fazer uma encomenda:\n\n*Categoria:* ${currentCategory.name}\n*Sabor:* ${flavor}\n*Peso:* ${weight}kg\n*Embalagem:* ${packText}\n*Método:* ${deliveryText}\n\n*Valor Estimado:* R$ ${totalPrice.toFixed(2).replace(".", ",")}\n\nFico no aguardo da confirmação!`;

    window.open(
      `https://wa.me/5511973879147?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      className="py-24 px-6 relative overflow-hidden bg-surface"
      id="cardapio"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Monte seu Bolo
          </h2>
          <p className="text-secondary mb-8 leading-relaxed">
            Selecione a base, o sabor, o tamanho e como prefere receber. O preço
            é calculado automaticamente.
          </p>
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg">
            <Image
              src={currentCategory.img}
              alt={currentCategory.name}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-surface-container p-8 md:p-12 rounded-3xl shadow-xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Categoria do Bolo
              </label>
              <select
                className="w-full bg-white border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none cursor-pointer"
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryKey)}
              >
                {Object.entries(menuData).map(([key, data]) => (
                  <option key={key} value={key}>
                    {data.name} (R$ {data.price},00/Kg)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Sabor do Recheio
              </label>
              <select
                className="w-full bg-white border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none cursor-pointer"
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
              >
                {currentCategory.flavors.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                Peso do Bolo (Mínimo 1.5kg)
              </label>
              <input
                type="number"
                min="1.5"
                step="0.5"
                className="w-full bg-white border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value) || 1.5)}
              />
            </div>

            <div className="pt-2">
              <label className="block text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Método de Recebimento
              </label>
              <div className="flex gap-4">
                <label
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl cursor-pointer border-2 transition-all ${deliveryMethod === "retirada" ? "border-primary bg-primary-container/20" : "border-transparent bg-white shadow-sm"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    className="hidden"
                    checked={deliveryMethod === "retirada"}
                    onChange={() => {
                      setDeliveryMethod("retirada");
                      setError("");
                    }}
                  />
                  <span className="font-medium text-primary">
                    Retirar no local
                  </span>
                </label>
                <label
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl cursor-pointer border-2 transition-all ${deliveryMethod === "entrega" ? "border-primary bg-primary-container/20" : "border-transparent bg-white shadow-sm"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    className="hidden"
                    checked={deliveryMethod === "entrega"}
                    onChange={() => setDeliveryMethod("entrega")}
                  />
                  <span className="font-medium text-primary">Entrega</span>
                </label>
              </div>
            </div>

            {deliveryMethod === "entrega" && (
              <div className="animate-in fade-in duration-300">
                <label className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                  Endereço de Entrega
                </label>
                <textarea
                  className={`w-full bg-white border-2 rounded-xl py-3 px-4 focus:ring-primary shadow-sm outline-none resize-none ${error ? "border-red-500" : "border-transparent"}`}
                  rows={2}
                  placeholder="Rua, Número, Bairro..."
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setError("");
                  }}
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
            )}

            <label className="flex items-center gap-3 cursor-pointer group pt-2">
              <input
                type="checkbox"
                className="w-6 h-6 rounded-md text-primary focus:ring-primary border-gray-300 shadow-sm"
                checked={packaging}
                onChange={(e) => setPackaging(e.target.checked)}
              />
              <span className="text-secondary font-medium group-hover:text-primary transition-colors">
                Adicionar embalagem em caixa (+R$ 10,00)
              </span>
            </label>

            <div className="pt-6 border-t border-outline-variant flex justify-between items-end">
              <div>
                <span className="text-secondary text-sm block mb-1">
                  Total Estimado
                </span>
                <span className="text-4xl font-bold text-primary tracking-tight">
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-md"
            >
              Enviar Pedido via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
