import React, { useState } from 'react';
import { X, Calculator, Sparkles, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsappLink } from '../data/chacaraData';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [stayType, setStayType] = useState<'weekend' | 'weekday'>('weekend');
  const [guests, setGuests] = useState<number>(15);
  const [days, setDays] = useState<number>(2);
  const [cleaningService, setCleaningService] = useState<boolean>(true);
  const [chefService, setChefService] = useState<boolean>(false);

  // Calculate estimated price
  let basePrice = 0;
  if (stayType === 'weekend') {
    basePrice = 4200; // Fixed weekend package (Sexta-Dom)
  } else {
    basePrice = 1200 * days;
  }

  // Add-ons calculation
  let cleaningCost = cleaningService ? 250 : 0;
  let chefCost = chefService ? 350 * days : 0;

  const totalEstimate = basePrice + cleaningCost + chefCost;

  const getStayTypeLabel = () => {
    if (stayType === 'weekend') return 'Final de Semana (Sexta a Domingo)';
    return 'Dias Úteis (Segunda a Quinta)';
  };

  const buildWhatsappMessage = () => {
    let msg = `Olá! Fiz uma simulação de orçamento no site da Chácara Sabiá:\n\n`;
    msg += `• *Tipo de Estadia:* ${getStayTypeLabel()}\n`;
    msg += `• *Quantidade de Pessoas:* ${guests} pessoas\n`;
    msg += `• *Duração:* ${days} ${days === 1 ? 'dia' : 'dias'}\n`;
    msg += `• *Opcionais:* ${cleaningService ? 'Limpeza Inclusa' : ''}${chefService ? ', Serviço de Cozinheiro/Churrasqueiro' : ''}\n\n`;
    msg += `*Estimativa Total:* R$ ${totalEstimate.toLocaleString('pt-BR')}\n\n`;
    msg += `Gostaria de verificar a disponibilidade de datas para este orçamento!`;
    return msg;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#F6F2EB] text-[#23412F] w-full max-w-2xl max-h-[90vh] rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl relative border border-[#C5A059]/40">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
          aria-label="Fechar simulador"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-300">
          <div className="w-12 h-12 rounded-2xl bg-[#23412F] text-[#C5A059] flex items-center justify-center shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#23412F]">
              Simulador de Orçamento
            </h3>
            <p className="text-xs text-stone-600">Calcule em tempo real o valor estimado para sua estadia</p>
          </div>
        </div>

        {/* Form Controls */}
        <div className="space-y-6">
          
          {/* Stay Type */}
          <div>
            <label className="text-xs uppercase font-bold text-[#23412F] tracking-wider block mb-2">
              Tipo de Estadia / Ocasião:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setStayType('weekend');
                  setDays(2);
                }}
                className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                  stayType === 'weekend'
                    ? 'bg-[#23412F] text-[#C5A059] border-[#23412F] shadow-md'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-[#23412F]'
                }`}
              >
                Final de Semana
              </button>

              <button
                type="button"
                onClick={() => {
                  setStayType('weekday');
                  setDays(2);
                }}
                className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                  stayType === 'weekday'
                    ? 'bg-[#23412F] text-[#C5A059] border-[#23412F] shadow-md'
                    : 'bg-white text-stone-700 border-stone-300 hover:border-[#23412F]'
                }`}
              >
                Dias Úteis (Seg-Qui)
              </button>
            </div>
          </div>

          {/* Guest Count Slider */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs uppercase font-bold text-[#23412F] tracking-wider">
                Número de Convidados / Hóspedes:
              </label>
              <span className="font-serif font-bold text-lg text-[#23412F]">{guests} Pessoas</span>
            </div>
            <input
              type="range"
              min="2"
              max={20}
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full accent-[#23412F] cursor-pointer"
            />
            <span className="text-[11px] text-stone-500 block text-right mt-1">
              Até 20 leitos nos quartos
            </span>
          </div>

          {/* Days selector if weekday */}
          {stayType === 'weekday' && (
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs uppercase font-bold text-[#23412F] tracking-wider">
                  Quantidade de Diárias:
                </label>
                <span className="font-serif font-bold text-lg text-[#23412F]">{days} Diárias</span>
              </div>
              <input
                type="range"
                min="2"
                max="5"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full accent-[#23412F] cursor-pointer"
              />
            </div>
          )}

          {/* Opcionais Extra Checkboxes */}
          <div>
            <label className="text-xs uppercase font-bold text-[#23412F] tracking-wider block mb-3">
              Serviços e Opcionais Recomendados:
            </label>
            <div className="space-y-2.5">
              
              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-[#23412F]">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={cleaningService}
                    onChange={(e) => setCleaningService(e.target.checked)}
                    className="w-4 h-4 accent-[#23412F]"
                  />
                  <span className="text-xs font-semibold text-stone-800">Taxa de Limpeza de Saída</span>
                </div>
                <span className="text-xs font-bold text-[#23412F]">+ R$ 250</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl bg-white border border-stone-200 cursor-pointer hover:border-[#23412F]">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={chefService}
                    onChange={(e) => setChefService(e.target.checked)}
                    className="w-4 h-4 accent-[#23412F]"
                  />
                  <span className="text-xs font-semibold text-stone-800">Churrasqueiro Profissional (Diária)</span>
                </div>
                <span className="text-xs font-bold text-[#23412F]">+ R$ 350 / dia</span>
              </label>

            </div>
          </div>

          {/* Result Card */}
          <div className="p-5 rounded-2xl bg-[#23412F] text-white border border-[#C5A059]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-bold block">
                Valor Estimado da Reserva
              </span>
              <span className="font-serif text-3xl font-bold text-white">
                R$ {totalEstimate.toLocaleString('pt-BR')}
              </span>
              <span className="text-[11px] text-stone-300 block mt-0.5">
                (Em até 12x no cartão ou com 5% off no PIX)
              </span>
            </div>

            <a
              href={createWhatsappLink(buildWhatsappMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Enviar via WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
