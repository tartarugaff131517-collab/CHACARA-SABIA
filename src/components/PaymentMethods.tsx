import React from 'react';
import { QrCode, Building2, CalendarRange, ShieldCheck, FileCheck2, Sparkles } from 'lucide-react';

export const PaymentMethods: React.FC = () => {
  const methods = [
    {
      icon: <QrCode className="w-8 h-8 text-[#C5A059]" />,
      title: 'PIX Instantâneo',
      subtitle: 'Pagamento rápido e seguro',
      discount: '5% de Desconto à vista'
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#C5A059]" />,
      title: 'Transferência Bancária',
      subtitle: 'Itaú, Bradesco, Nubank e Inter',
      discount: 'TED / DOC direto em conta'
    },
    {
      icon: <CalendarRange className="w-8 h-8 text-[#C5A059]" />,
      title: 'Parcelamento Direto',
      subtitle: 'Para reservas programadas',
      discount: '50% na reserva + 50% na entrada'
    }
  ];

  return (
    <section className="py-16 bg-[#23412F] text-[#F6F2EB] relative border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">Facilidade & Segurança</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
            Formas de Pagamento Flexíveis
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {methods.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C5A059] transition-all flex flex-col items-center text-center shadow-lg group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 group-hover:bg-[#C5A059] flex items-center justify-center mb-4 transition-colors group-hover:text-[#23412F]">
                {item.icon}
              </div>

              <h4 className="font-serif text-lg font-bold text-white mb-1">
                {item.title}
              </h4>

              <p className="text-xs text-stone-300 mb-3">
                {item.subtitle}
              </p>

              <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] font-semibold text-[11px] uppercase tracking-wider border border-[#C5A059]/30">
                {item.discount}
              </span>
            </div>
          ))}
        </div>

        {/* Contract & Trust Guarantee Badge Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-stone-300">
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-4 h-4 text-[#C5A059]" />
            <span>Contrato de locação assinado digitalmente</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>Garantia de reserva 100% segura</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Suporte atencioso durante toda a estadia</span>
          </div>
        </div>

      </div>
    </section>
  );
};
