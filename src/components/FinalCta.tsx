import React from 'react';
import { MessageCircle, Star, Bird, ShieldCheck } from 'lucide-react';
import { createWhatsappLink } from '../data/chacaraData';

export const FinalCta: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden flex items-center justify-center">
      {/* Background Image Sunset Over Pool */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/piscina.jpg"
          alt="Pôr do sol na piscina da Chácara Sabiá"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#23412F]/95 via-black/80 to-[#23412F]/95" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Top Gold Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
          <Bird className="w-4 h-4 text-[#C5A059]" />
          <span>Sua Próxima Estadia Inesquecível Espera Por Você</span>
        </div>

        {/* Main Title */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
          Garanta agora sua reserva e viva momentos inesquecíveis.
        </h2>

        {/* Subtext */}
        <p className="text-stone-200 text-base sm:text-xl font-normal max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
          As datas para finais de semana e feriados costumam esgotar rapidamente. Fale diretamente com nossa equipe no WhatsApp e garanta a sua data especial.
        </p>

        {/* Prominent WhatsApp CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={createWhatsappLink('Olá! Gostaria de garantir a minha reserva na Chácara Sabiá agora mesmo.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-lg sm:text-xl shadow-2xl hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 border-2 border-white/20 group"
          >
            <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:rotate-12 transition-transform" />
            <span>Reservar pelo WhatsApp</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300 font-medium">
          <div className="flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
            <span>Resposta em até 5 minutos</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Sem intermediários ou taxas extras</span>
          </div>
        </div>

      </div>
    </section>
  );
};
