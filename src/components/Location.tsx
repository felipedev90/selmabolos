export default function Location() {
  return (
    <section className="py-24 px-6 bg-surface" id="localizacao">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Onde Estamos
          </h2>
          <p className="text-secondary leading-relaxed">
            Estamos localizados em Várzea Paulista, próximo à Fornecedora
            Indaía.
          </p>

          <p className="text-secondary mb-8 leading-relaxed">
            Prontos para atender você com o carinho que sua encomenda merece.
          </p>
          <p className="text-secondary mb-8 leading-relaxed">
            Aceitamos retiradas agendadas aos finais de semana e entrega
            mediante agendamento.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-primary">
              <span className="font-medium">
                Rua Tanque Velho, 55 - Vila Iguaçu <br />
                Várzea Paulista - SP
                <br />
                CEP 13225535
              </span>
            </div>
            <div className="flex items-center gap-4 text-primary">
              <span className="font-medium">
                Sábados e Domingos: Retiradas Agendadas
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative bg-gray-200">
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
