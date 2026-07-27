import React, { useState } from 'react';
import { PhoneCall, X, MessageCircle, Sparkles } from 'lucide-react';
import { createWhatsappLink, DISPLAY_PHONE } from '../data/chacaraData';

export const FloatingWhatsapp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Quick Tooltip Message Bubble */}
      {showTooltip && (
        <div className="relative bg-white text-[#23412F] p-4 rounded-2xl shadow-2xl border border-[#C5A059]/40 max-w-xs animate-bounce-slow">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-stone-400 hover:text-stone-700 p-1"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="text-[10px] uppercase font-bold text-[#25D366] tracking-wider">Atendimento Online</span>
          </div>

          <p className="text-xs font-medium text-stone-800 leading-snug">
            Olá! Procura datas para final de semana ou evento? Fale com a nossa equipe agora.
          </p>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <a
        href={createWhatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white cursor-pointer hover:shadow-emerald-500/40"
        aria-label="Falar pelo WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        {/* Unread notification badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow">
          1
        </span>

        <MessageCircle className="w-8 h-8 fill-white text-[#25D366] transform group-hover:rotate-12 transition-transform" />
      </a>
    </div>
  );
};
