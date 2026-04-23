// Importando os ícones do Lucide em vez de usar Material Symbols
import { Scale, Store, CreditCard } from "lucide-react";

export default function InfoSection() {
  return (
    <section className="py-6 md:py-10 px-6 bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/30 text-center hover:shadow-md transition-shadow flex flex-col items-center">
          <div className="bg-bg rounded-full p-3">
            <Scale className="w-10 h-10 text-primary " strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-xl font-bold text-primary mb-2">
            Pedido Mínimo
          </h3>
          <p className="text-secondary font-medium">1,5 Kg</p>
          <p className="text-sm text-secondary mt-2">
            Produzimos bolos a partir de 1.5kg, garantindo a estrutura e o sabor
            ideal para sua festa.
          </p>
        </div>

        <div className="bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/30 text-center hover:shadow-md transition-shadow flex flex-col items-center">
          <div className="bg-bg rounded-full p-3">
            <Store className="w-10 h-10 text-primary " strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-xl font-bold text-primary mb-2">
            Entregas & retiradas:
          </h3>
          <p className="text-secondary font-medium mb-4">Segunda a Domingo</p>
          <p className="text-sm text-secondary mt-2">
            Entregas de seg. a qui. Retirada agendada nas sextas, sábados e
            domingos.
          </p>
        </div>

        <div className="bg-surface p-8 rounded-2xl shadow-sm border border-outline-variant/30 text-center hover:shadow-md transition-shadow flex flex-col items-center">
          <div className="bg-bg rounded-full p-3">
            <CreditCard className="w-10 h-10 text-primary " strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-xl font-bold text-primary mb-2">
            Formas de Pagamento
          </h3>
          <p className="text-secondary font-medium">Pix e Cartões</p>
          <p className="text-sm text-secondary mt-2">
            Aceitamos PIX, Cartões de Débito e Crédito para sua total
            comodidade.
          </p>
        </div>
      </div>
    </section>
  );
}
