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
    menuData.find((c) => c.name === category) || menuData[0];
  const totalPrice = currentCategory.price * weight + (packaging ? 10 : 0);

  const handleWhatsAppSubmit = () => {
    if (deliveryMethod === "entrega" && address.trim() === "") {
      toast.error("Por favor, informe o endereço completo para a entrega.");
      return;
    }

    if (weight < 1.5) {
      toast.error("O peso mínimo do bolo é 1.5kg.");
      return;
    }

    const packText = packaging
      ? "Com embalagem em caixa"
      : "Sem embalagem em caixa";
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
      // Usando py-section-y e bg-surface dos nossos tokens
      className="py-section-y px-6 relative overflow-hidden bg-surface md:scroll-mt-32"
      id="cardapio"
    >
      <div className="text-center flex flex-col items-center gap-2 mb-12 md:mb-16">
        <span className="font-hand text-3xl md:text-4xl text-primary -rotate-3 inline-block">
          Faça do seu jeito
        </span>
        <h2 className="font-display text-5xl md:text-6xl text-ink">
          Monte seu bolo
        </h2>
        <p className="font-sans text-ink-soft max-w-2xl mx-auto text-lg mt-3">
          Escolha a base, o sabor e o tamanho. <br /> O preço aparece na hora e
          você envia direto pro WhatsApp.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* COLUNA DA IMAGEM E DICA */}
        <div className="flex flex-col gap-6 mt-auto mb-auto items-center lg:items-start w-full">
          {/* Imagem do Bolo */}
          <div className="relative rounded-theme-lg overflow-hidden aspect-square shadow-theme border-4 border-surface w-full max-w-[400px] lg:max-w-none transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/orderform/orderform.webp"
              alt={currentCategory.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 400px, 50vw"
            />
          </div>

          {/* Mensagem de Dica Adicionada */}
          <p className="font-sans text-ink-soft text-sm text-center lg:text-left max-w-[400px]">
            <strong className="text-ink">Dica:</strong> para temas
            personalizados, mande suas referências junto no WhatsApp.
          </p>
        </div>

        {/* COLUNA DO FORMULÁRIO */}
        <div className="bg-bg-alt p-card-pad rounded-theme-lg shadow-theme">
          <form className="space-y-6">
            {/* Categoria */}
            <div>
              <label
                htmlFor="category"
                className="block font-sans text-sm font-bold text-primary mb-2 uppercase tracking-[0.1em]"
              >
                Categoria do Bolo
              </label>
              <select
                id="category"
                className="w-full bg-surface text-ink border-none rounded-theme-md py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none cursor-pointer font-sans"
                value={category}
                onChange={(e) => {
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

            {/* Sabor */}
            <div>
              <label
                htmlFor="flavor"
                className="block font-sans text-sm font-bold text-primary mb-2 uppercase tracking-[0.1em]"
              >
                Sabor do Recheio
              </label>
              <select
                id="flavor"
                className="w-full bg-surface text-ink border-none rounded-theme-md py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none cursor-pointer font-sans"
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

            {/* Peso */}
            <div>
              <label
                htmlFor="weight"
                className="block font-sans text-sm font-bold text-primary mb-2 uppercase tracking-[0.1em]"
              >
                Peso do Bolo (Mínimo 1.5kg)
              </label>
              <input
                type="number"
                id="weight"
                min="1.5"
                step="0.5"
                className="w-full bg-surface text-ink border-none rounded-theme-md py-4 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none font-sans"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value) || 1.5)}
              />
            </div>

            {/* Método de Recebimento */}
            <div className="pt-2">
              <label className="block font-sans text-sm font-bold text-primary mb-3 uppercase tracking-[0.1em]">
                Método de Recebimento
              </label>
              <div className="flex gap-4">
                <label
                  htmlFor="delivery-retirada"
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-theme-md cursor-pointer border transition-all ${deliveryMethod === "retirada" ? "border-primary bg-primary/10" : "border-transparent bg-surface shadow-sm"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    id="delivery-retirada"
                    className="hidden"
                    checked={deliveryMethod === "retirada"}
                    onChange={() => setDeliveryMethod("retirada")}
                  />
                  <span className="font-sans font-medium text-primary">
                    Retirar no local
                  </span>
                </label>

                <label
                  htmlFor="delivery-entrega"
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-theme-md cursor-pointer border transition-all ${deliveryMethod === "entrega" ? "border-primary bg-primary/10" : "border-transparent bg-surface shadow-sm"}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    id="delivery-entrega"
                    className="hidden"
                    checked={deliveryMethod === "entrega"}
                    onChange={() => setDeliveryMethod("entrega")}
                  />
                  <span className="font-sans font-medium text-primary">
                    Entrega
                  </span>
                </label>
              </div>
            </div>

            {/* Endereço Condicional */}
            {deliveryMethod === "entrega" && (
              <div className="animate-in fade-in duration-300">
                <label
                  htmlFor="address"
                  className="block font-sans text-sm font-bold text-primary mb-2 uppercase tracking-[0.1em]"
                >
                  Endereço de Entrega
                </label>
                <textarea
                  id="address"
                  className="w-full bg-surface text-ink border-none rounded-theme-md py-3 px-4 focus:ring-2 focus:ring-primary shadow-sm outline-none resize-none font-sans"
                  rows={2}
                  placeholder="Rua, Número, Bairro..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <p className="font-sans text-sm text-ink-soft mt-2">
                  Entregas de Seg. a Qui. - Valor da entrega será informado após
                  confirmação.
                </p>
              </div>
            )}

            {/* Embalagem */}
            <label
              htmlFor="packaging"
              className="flex items-center gap-3 cursor-pointer group pt-2"
            >
              <input
                type="checkbox"
                id="packaging"
                className="w-5 h-5 rounded text-primary focus:ring-primary border-line shadow-sm accent-primary"
                checked={packaging}
                onChange={(e) => setPackaging(e.target.checked)}
              />
              <span className="font-sans font-medium text-ink-soft group-hover:text-primary transition-colors">
                Adicionar embalagem em caixa (+R$ 10,00)
              </span>
            </label>

            {/* Total e Botão */}
            <div className="pt-6 border-t border-line flex justify-between items-end">
              <div>
                <span className="font-sans text-ink-soft text-sm block mb-1">
                  Total Estimado
                </span>
                <span className="font-display text-4xl text-primary tracking-tight">
                  R$ {totalPrice.toFixed(2).replace(".", ",")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full bg-primary text-primary-ink px-6 py-4 rounded-theme-md font-sans font-bold text-lg hover:opacity-90 transition-all shadow-theme"
            >
              Enviar Pedido via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
