export default function Location() {
  return (
    <section className="py-24 px-6 bg-surface" id="localizacao">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            Onde Estamos
          </h2>
          <p className="text-secondary mb-8 leading-relaxed">
            Estamos localizados em Várzea Paulista, prontos para atender você
            com o carinho que sua encomenda merece. Aceitamos retiradas
            agendadas aos finais de semana e entrega mediante agendamento.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-primary">
              <span className="font-medium">
                Rua Jataí, número 55 - Parque Guarani <br />
                CEP 13225535
                <br />
                Várzea Paulista - SP
              </span>
            </div>
            <div className="flex items-center gap-4 text-primary">
              <span className="font-medium">
                Sábados e Domingos: Retiradas Agendadas
              </span>
            </div>
          </div>
        </div>

        {/* Iframe do Google Maps */}
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96 relative bg-gray-200">
          <iframe
            title="Localização Várzea Paulista"
            src="https://maps.google.com/maps?q=Rua%20Jataí,%2055,%20Várzea%20Paulista%20-%20SP,%2013225-535&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
