/* 
- Componente de formulário de pedido para o site da Selma Bolos. 
- Permite aos usuários selecionar a categoria do bolo, sabor do recheio, peso, método de recebimento (retirada ou entrega) e se desejam embalagem em caixa. 
- O preço total é calculado automaticamente com base nas escolhas do usuário. 
- Ao enviar o pedido, uma mensagem formatada é gerada e enviada para o WhatsApp da Selma para facilitar a comunicação e confirmação do pedido. 
- O componente é responsivo e inclui animações suaves para uma melhor experiência do usuário.
*/

"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { menuData } from "@/src/data/menuData";
import { MenuCategory } from "@/src/types/menuType";

export default function OrderForm() {
  const [category, setCategory] = useState<MenuCategory>("Massa Branca");
  const [flavor, setFlavor] = useState<string>(menuData[0].flavors[0]);
  const [weight, setWeight] = useState<number>(1.5);
  const [packaging, setPackaging] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState<"retirada" | "entrega">(
    "retirada",
  );
  const [address, setAddress] = useState("");

  const currentCategory =
    // Garantir que a categoria selecionada seja válida, caso contrário, usar a primeira do menu
    menuData.find((c) => c.name === category) || menuData[0];
  const totalPrice = currentCategory.price * weight + (packaging ? 10 : 0);

  const handleWhatsAppSubmit = () => {
    // Validação básica para garantir que o peso seja pelo menos 1.5kg
    if (deliveryMethod === "entrega" && address.trim() === "") {
      toast.error("Por favor, informe o endereço completo para a entrega.");
      return;
    }

    // Gerar a mensagem formatada para o WhatsApp
    const packText = packaging
      ? "Com embalagem em caixa"
      : "Sem embalagem em caixa";

    // Incluir o endereço na mensagem apenas se o método de entrega for "entrega"
    const deliveryText =
      deliveryMethod === "entrega"
        ? `Entrega no endereço:\n${address}`
        : "Retirada no local";

    const message = `Olá Selma! Gostaria de fazer uma encomenda:\n\n*Bolo:* ${currentCategory.name}\n*Recheio de:* ${flavor}\n*Peso:* ${weight}kg\n*Embalagem:* ${packText}\n*Método:* ${deliveryText}\n\n*Valor Estimado:* R$ ${totalPrice.toFixed(2).replace(".", ",")}\n\nFico no aguardo da confirmação!`;

    toast.success("Pedido enviado! Abrindo WhatsApp...");

    window.open(
      `https://wa.me/5511973879147?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section
      className="py-12 md:py-24 px-6 relative overflow-hidden bg-surface scroll-mt-24 md:scroll-mt-32"
      id="cardapio"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col gap-10 lg:gap-16">
          <div>
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              Monte seu Bolo
            </h2>
            <p className="text-secondary mb-1 md:mb-8 leading-relaxed">
              Selecione a base, o sabor, o tamanho e como prefere receber. O
              preço é calculado automaticamente.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl border-4 border-white w-full max-w-[320px] mx-auto lg:mx-0 lg:max-w-none lg:w-full scale-95 hover:scale-100 transition-transform duration-300">
            <Image
              src="/images/orderform/orderform.webp"
              alt={currentCategory.name}
              fill
              className="object-cover opacity-100"
              sizes="(max-width: 1024px) 320px, 50vw"
            />
          </div>
        </div>

        <div className="bg-surface-container p-8 md:p-12 rounded-3xl shadow-xl">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider"
              >
                Categoria do Bolo
              </label>
              <select
                id="category"
                className="w-full bg-white border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none cursor-pointer"
                value={category}
                onChange={(e) => {
                  // Atualizar a categoria e resetar o sabor para o primeiro da nova categoria
                  const newCategory = e.target.value as MenuCategory;
                  setCategory(newCategory);
                  setFlavor(
                    menuData.find((c) => c.name === newCategory)?.flavors[0] ||
                      "",
                  );
                }}
              >
                {menuData.map((data) => (
                  <option key={data.name} value={data.name}>
                    {data.name} (R$ {data.price},00/Kg)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="flavor"
                className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider"
              >
                Sabor do Recheio
              </label>
              <select
                id="flavor"
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
              <label
                htmlFor="weight"
                className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider"
              >
                Peso do Bolo (Mínimo 1.5kg)
              </label>
              <input
                type="number"
                id="weight"
                min="1.5"
                step="0.5"
                className="w-full bg-white border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value) || 1.5)}
              />
            </div>

            <div className="pt-2">
              <label
                htmlFor="delivery"
                className="block text-sm font-semibold text-primary mb-3 uppercase tracking-wider"
              >
                Método de Recebimento
              </label>
              <div className="flex gap-4">
                <label
                  htmlFor="delivery-retirada"
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl cursor-pointer border-2 transition-all ${deliveryMethod === "retirada" ? "border-primary bg-primary-container/20" : "border-transparent bg-white shadow-sm"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    id="delivery-retirada"
                    className="hidden"
                    checked={deliveryMethod === "retirada"}
                    onChange={() => setDeliveryMethod("retirada")}
                  />
                  <span className="font-medium text-primary">
                    Retirar no local
                  </span>
                </label>
                <label
                  htmlFor="delivery-entrega"
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl cursor-pointer border-2 transition-all ${deliveryMethod === "entrega" ? "border-primary bg-primary-container/20" : "border-transparent bg-white shadow-sm"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    id="delivery-entrega"
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
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-primary mb-2 uppercase tracking-wider"
                >
                  Endereço de Entrega
                </label>
                <textarea
                  id="address"
                  className="w-full bg-white border-2 border-transparent rounded-xl py-3 px-4 focus:ring-primary shadow-sm outline-none resize-none"
                  rows={2}
                  placeholder="Rua, Número, Bairro..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <p className="text-sm text-secondary">
                  Consultar taxa de entrega
                </p>
              </div>
            )}

            <label
              htmlFor="packaging"
              className="flex items-center gap-3 cursor-pointer group pt-2"
            >
              <input
                type="checkbox"
                id="packaging"
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
              className="w-full bg-primary text-on-primary px-1 py-5 rounded-2xl font-bold text-xl hover:opacity-90 transition-all shadow-md"
            >
              Enviar Pedido via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
