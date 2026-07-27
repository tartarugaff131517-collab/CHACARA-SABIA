import React from 'react';
import { OCCASIONS, createWhatsappLink } from '../data/chacaraData';
import { Bird, ArrowUpRight, Heart, PartyPopper, Camera, Users, Building, ShieldCheck } from 'lucide-react';

export const OccasionsSection: React.FC = () => {
  return (
    <section id="ocasioes" className="py-24 bg-[#F6F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23412F]/10 text-[#23412F] text-xs font-semibold tracking-wider uppercase mb-3">
            <Bird className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Para Quais Ocasiões</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#23412F] mb-4">
            O cenário perfeito para todos os seus momentos
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Seja para comemorar uma conquista importante ou simplesmente descansar com quem você ama, nossa estrutura se adapta perfeitamente ao seu evento.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-black/60 h-[380px] border border-[#23412F]/10 hover:border-[#C5A059] flex flex-col justify-end p-6 cursor-pointer transform hover:-translate-y-1.5"
              onClick={() => {
                window.open(createWhatsappLink(`Olá! Tenho interesse em realizar um evento de ${item.title} na Chácara Sabiá.`), '_blank');
              }}
            >
              {/* Background Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* Tag Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#23412F]/90 backdrop-blur-md text-[#C5A059] text-[11px] font-semibold tracking-wider uppercase border border-[#C5A059]/40">
                  {item.tag}
                </span>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-[#23412F] transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#C5A059] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] group-hover:underline">
                  <span>Consultar orçamento para esta ocasião</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
