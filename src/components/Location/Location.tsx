import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  return (
    <section
      // Usando py-section-y para espaçamento vertical e bg-bg-alt para contraste suave
      className="py-section-y px-6 bg-bg-alt md:scroll-mt-32"
      id="localizacao"
    >
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* COLUNA ESQUERDA: Texto e Contatos */}
        <div className="flex flex-col gap-6">
          {/* Cabeçalho */}
          <div>
            <span className="font-hand text-2xl md:text-3xl text-primary -rotate-3 inline-block mb-1">
              Onde estamos
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-ink leading-[1.1]">
              Pertinho de você em <br className="hidden md:block" /> Várzea
              Paulista
            </h2>
          </div>

          <p className="font-sans text-ink-soft text-lg leading-relaxed max-w-lg mb-4">
            Atendemos por WhatsApp e agendamento. Retiradas nos finais de
            semana, entregas de segunda a quinta.
          </p>

          {/* Lista de Contatos/Infos */}
          <div className="space-y-4 max-w-md">
            {/* Endereço */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-theme-md bg-primary/15 flex items-center justify-center flex-shrink-0 text-primary">
                <MapPin size={24} />
              </div>
              <div className="pt-1">
                <p className="font-sans font-semibold text-ink text-base">
                  Rua Tanque Velho, 55 — Vila Iguaçu
                </p>
                <p className="font-sans text-ink-soft text-sm">
                  Várzea Paulista, SP • CEP 13225-535
                </p>
              </div>
            </div>

            {/* Telefone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-theme-md bg-primary/15 flex items-center justify-center flex-shrink-0 text-primary">
                <Phone size={24} />
              </div>
              <div className="pt-1">
                <p className="font-sans font-semibold text-ink text-base">
                  (11) 97387-9147
                </p>
                <p className="font-sans text-ink-soft text-sm">
                  WhatsApp preferencial
                </p>
              </div>
            </div>

            {/* Horários */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-theme-md bg-primary/15 flex items-center justify-center flex-shrink-0 text-primary">
                <Clock size={24} />
              </div>
              <div className="pt-1">
                <p className="font-sans font-semibold text-ink text-base">
                  Seg-Qui • Entregas
                </p>
                <p className="font-sans text-ink-soft text-sm">
                  Sex-Dom • Retiradas agendadas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-theme-lg overflow-hidden shadow-theme h-[400px] md:h-[500px] relative bg-surface border border-line">
          <iframe
            title="Localização Várzea Paulista"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.6240709153298!2d-46.849029430312406!3d-23.22501699868953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf20ebf2eb4119%3A0xd1e5d6fdfff2ad7!2sR.%20Tanque%20Velho%2C%2055%20-%20Vila%20Iguacu%2C%20V%C3%A1rzea%20Paulista%20-%20SP%2C%2013225-600!5e0!3m2!1spt-BR!2sbr!4v1774880468957!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
