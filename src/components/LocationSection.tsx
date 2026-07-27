import React from 'react';
import { MapPin, Navigation, Car, Shield, Bird, Compass, CheckCircle2 } from 'lucide-react';
import { ESTATE_ADDRESS } from '../data/chacaraData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://maps.google.com/maps?q=-23.411174774169922%2C-47.09308624267578&z=17&hl=pt-BR`;

  return (
    <section id="localizacao" className="py-24 bg-[#F6F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23412F]/10 text-[#23412F] text-xs font-semibold tracking-wider uppercase mb-3">
            <Bird className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Localização Privilegiada</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#23412F] mb-4">
            Acesso rápido, seguro e totalmente asfaltado
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Estrategicamente posicionada a poucos minutos das principais rodovias de São Paulo, garantindo praticidade para seus convidados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Advantages & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#23412F]/10 shadow-lg">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#23412F] text-[#C5A059] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#23412F]">
                    Endereço & Acesso
                  </h3>
                  <p className="text-xs text-stone-500">Araçariguama / SP</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F2EB]">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#23412F]">Fácil Acesso Asfaltado</h4>
                    <p className="text-xs text-stone-600">Apenas 1,2 km de estrada de terra batida cascalhada e bem mantida até o portão principal.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F2EB]">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#23412F]">Próximo às Principais Rodovias</h4>
                    <p className="text-xs text-stone-600">Acesso facilitado e rápido pela Rodovia Castello Branco (km 50).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F6F2EB]">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[#23412F]">Localização Privilegiada</h4>
                    <p className="text-xs text-stone-600">A 8 minutos do centro da cidade com supermercados, adegas, farmácias e postos 24h.</p>
                  </div>
                </div>
              </div>

              {/* Distance Pills */}
              <div className="mb-8">
                <span className="text-stone-500 block text-[10px] uppercase font-bold tracking-wider mb-3">
                  Distância de cidades vizinhas:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <div className="p-3 rounded-xl bg-[#23412F]/5 border border-[#23412F]/10 text-center">
                    <span className="text-stone-500 block text-[9px] uppercase">Jandira</span>
                    <span className="font-serif text-sm font-bold text-[#23412F]">20 Minutos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#23412F]/5 border border-[#23412F]/10 text-center">
                    <span className="text-stone-500 block text-[9px] uppercase">Barueri</span>
                    <span className="font-serif text-sm font-bold text-[#23412F]">25 Minutos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#23412F]/5 border border-[#23412F]/10 text-center">
                    <span className="text-stone-500 block text-[9px] uppercase">Itapevi</span>
                    <span className="font-serif text-sm font-bold text-[#23412F]">30 Minutos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#23412F]/5 border border-[#23412F]/10 text-center">
                    <span className="text-stone-500 block text-[9px] uppercase">Carapicuíba</span>
                    <span className="font-serif text-sm font-bold text-[#23412F]">30 Minutos</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#23412F]/5 border border-[#23412F]/10 text-center col-span-2">
                    <span className="text-stone-500 block text-[9px] uppercase">Osasco</span>
                    <span className="font-serif text-sm font-bold text-[#23412F]">35 Minutos</span>
                  </div>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-[#23412F] hover:bg-[#172C1F] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>Como chegar no Google Maps</span>
              </a>

            </div>
          </div>

          {/* Right Side: Integrated Map View */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[480px] relative">
            <iframe
              title="Mapa de Localização da Chácara"
              src="https://maps.google.com/maps?q=-23.411174774169922,-47.09308624267578&z=15&hl=pt-BR&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />

            {/* Custom Location Overlay Card */}
            <div className="absolute top-4 left-4 z-10 bg-[#23412F]/95 backdrop-blur-md text-white p-4 rounded-2xl border border-[#C5A059]/40 shadow-xl max-w-xs">
              <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-1">
                <MapPin className="w-4 h-4" />
                <span>Chácara Sabiá</span>
              </div>
              <p className="text-xs text-stone-200">
                {ESTATE_ADDRESS}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
