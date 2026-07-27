import React from 'react';
import { ChevronDown, MessageCircle, CalendarCheck, ShieldCheck, Star, MapPin } from 'lucide-react';
import { createWhatsappLink } from '../data/chacaraData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const scrollToCalendar = () => {
    const calendarEl = document.getElementById('calendario');
    if (calendarEl) {
      calendarEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/piscina.jpg"
          alt="Piscina da Chácara Sabiá em São Paulo"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        {/* Soft Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#23412F] via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        {/* Top Luxury Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#C5A059]/60 text-[#C5A059] text-xs sm:text-sm font-medium tracking-wide mb-6 animate-fadeIn">
          <Star className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
          <span>Refúgio de Alto Padrão em São Paulo</span>
          <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="hidden sm:inline">Araçariguama / SP</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-none tracking-tight text-white mb-6 drop-shadow-md max-w-4xl">
          Viva momentos inesquecíveis em uma{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6F2EB] via-[#F1E4C3] to-[#C5A059] italic">
            chácara exclusiva
          </span>{' '}
          em São Paulo
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-stone-200 font-normal max-w-2xl mb-10 leading-relaxed drop-shadow">
          Perfeita para finais de semana, eventos, aniversários, confraternizações e descanso com a família.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none mb-12">
          <a
            href={createWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 group"
          >
            <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            <span>Reservar pelo WhatsApp</span>
          </a>

          <button
            onClick={scrollToCalendar}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-[#C5A059]"
          >
            <CalendarCheck className="w-5 h-5 text-[#C5A059]" />
            <span>Consultar disponibilidade</span>
          </button>
        </div>

      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 cursor-pointer hover:text-white transition-colors" onClick={() => {
        const aboutEl = document.getElementById('sobre');
        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
      }}>
        <span className="text-[11px] uppercase tracking-widest text-[#C5A059]">Role para explorar</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-[#C5A059] rounded-full animate-bounce mt-1" />
        </div>
      </div>
    </section>
  );
};
