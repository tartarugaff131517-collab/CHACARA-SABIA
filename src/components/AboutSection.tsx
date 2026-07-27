import React from 'react';
import { Bird, CheckCircle2, Trees, ShieldCheck, Home, Users } from 'lucide-react';
import { createWhatsappLink } from '../data/chacaraData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#F6F2EB] relative overflow-hidden">
      {/* Background Decorative Gold Accent Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#23412F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23412F]/10 text-[#23412F] text-xs font-semibold tracking-wider uppercase">
              <Bird className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Bem-vindo à Chácara Sabiá</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#23412F] leading-tight">
              Onde o requinte do campo se encontra com o conforto que você merece.
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              Localizada a apenas 50 minutos de São Paulo, a <strong>Chácara Sabiá</strong> foi projetada para oferecer uma experiência singular de refúgio, bem-estar e lazer de alto padrão.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Com 20.000m² de área verde totalmente murada e privativa, nossa propriedade combina arquitetura rústica sofisticada, jardins exuberantes e infraestrutura completa para receber seus convidados em datas inesquecíveis.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EFEADF] border border-[#23412F]/10">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#23412F]">Privacidade Total</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Sem vizinhos colados, cercada por mata nativa e tranquilidade.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EFEADF] border border-[#23412F]/10">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#23412F]">Estrutura Completa</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Espaço gourmet e campo iluminado.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#EFEADF] border border-[#23412F]/10 sm:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#23412F]">Capacidade de Pernoite</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Acomoda confortavelmente até 20 pessoas em 4 quartos.</p>
                </div>
              </div>
            </div>



            <div className="pt-2">
              <a
                href={createWhatsappLink('Olá! Li sobre a história e estrutura da Chácara Sabiá e gostaria de tirar algumas dúvidas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#23412F] hover:bg-[#172C1F] text-[#F6F2EB] font-semibold text-sm transition-all shadow-md hover:shadow-lg"
              >
                <span>Falar diretamente com os proprietários</span>
              </a>
            </div>
          </div>

          {/* Right Column: Image Composition & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="/assets/piscina.jpg"
                alt="Fachada e Living da Chácara Sabiá"
                className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif italic text-xs sm:text-sm md:text-base lg:text-lg text-[#F1E4C3]">
                  "Seu refúgio exclusivo de paz, natureza e sofisticação a poucos minutos da capital."
                </p>
              </div>
            </div>

            {/* Floating Experience Card */}
            <div className="absolute -bottom-8 -left-6 bg-[#23412F] text-[#F6F2EB] p-5 rounded-2xl shadow-xl border border-[#C5A059]/40 max-w-xs hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center text-[#23412F] shrink-0 font-bold">
                  100%
                </div>
                <div>
                  <h5 className="font-semibold text-sm text-white">Satisfação Garantida</h5>
                  <p className="text-xs text-stone-300">Estrutura limpa, revisada e pronta para te receber.</p>
                </div>
              </div>
            </div>

            {/* Secondary Accent Corner Image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg hidden lg:block">
              <img
                src="/assets/area-gourmet.jpg"
                alt="Área gourmet da chácara"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
