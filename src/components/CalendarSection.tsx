import React, { useState } from 'react';
import { Sparkles, Calendar as CalendarIcon, CheckCircle2, XCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { getSampleCalendarData, createWhatsappLink } from '../data/chacaraData';

export const CalendarSection: React.FC = () => {
  const bookedDates = getSampleCalendarData();
  const [currentMonth, setCurrentMonth] = useState<number>(7); // 7 = August (0-indexed 0=Jan)
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);

  const monthNames = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Calculate days in current month
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const totalDays = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const handleDateClick = (dateStr: string) => {
    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(dateStr);
      setSelectedEndDate(null);
    } else if (selectedStartDate && !selectedEndDate) {
      if (dateStr < selectedStartDate) {
        setSelectedStartDate(dateStr);
      } else {
        setSelectedEndDate(dateStr);
      }
    }
  };

  const formatDateToBR = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const buildInquiryMessage = () => {
    if (selectedStartDate && selectedEndDate) {
      return `Olá! Gostaria de verificar a disponibilidade e solicitar um orçamento para o período de ${formatDateToBR(selectedStartDate)} até ${formatDateToBR(selectedEndDate)}.`;
    } else if (selectedStartDate) {
      return `Olá! Gostaria de verificar a disponibilidade para a data ${formatDateToBR(selectedStartDate)}.`;
    }
    return `Olá! Gostaria de verificar as datas disponíveis para os próximos meses na Chácara Sabiá.`;
  };

  return (
    <section id="calendario" className="py-24 bg-[#F6F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23412F]/10 text-[#23412F] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Agenda & Disponibilidade</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#23412F] mb-4">
            Consulte o calendário de reservas em tempo real
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Selecione uma data ou período desejado para solicitar a sua reserva diretamente via WhatsApp.
          </p>
        </div>

        {/* Main Calendar Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#23412F]/10">
          
          {/* Month Header Navigation */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-6 h-6 text-[#C5A059]" />
              <h3 className="font-serif text-2xl font-bold text-[#23412F]">
                {monthNames[currentMonth]} {currentYear}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear(currentYear - 1);
                  } else {
                    setCurrentMonth(currentMonth - 1);
                  }
                }}
                className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
              >
                Anterior
              </button>

              <button
                onClick={() => {
                  if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear(currentYear + 1);
                  } else {
                    setCurrentMonth(currentMonth + 1);
                  }
                }}
                className="px-3 py-1.5 rounded-lg border border-[#23412F] bg-[#23412F] text-white hover:bg-[#172C1F] text-xs font-semibold cursor-pointer"
              >
                Próximo Mês
              </button>
            </div>
          </div>

          {/* Calendar Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#C5A059]" />
              <span className="text-stone-700">Sua Seleção</span>
            </div>
          </div>

          {/* Calendar Days Header */}
          <div className="grid grid-cols-7 gap-2 mb-3 text-center text-xs font-bold uppercase tracking-wider text-stone-500">
            {daysOfWeek.map((day) => (
              <div key={day} className="py-2">{day}</div>
            ))}
          </div>

          {/* Calendar Days Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty offset slots */}
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-12 sm:h-14" />
            ))}

            {/* Actual Month Days */}
            {Array.from({ length: totalDays }).map((_, i) => {
              const dayNum = i + 1;
              const formattedDay = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;
              const formattedMonth = currentMonth + 1 < 10 ? `0${currentMonth + 1}` : `${currentMonth + 1}`;
              const dateStr = `${currentYear}-${formattedMonth}-${formattedDay}`;

              const isSelectedStart = selectedStartDate === dateStr;
              const isSelectedEnd = selectedEndDate === dateStr;
              const isInSelectedRange =
                selectedStartDate &&
                selectedEndDate &&
                dateStr > selectedStartDate &&
                dateStr < selectedEndDate;

              let bgClasses = 'bg-stone-50 text-stone-800 hover:bg-stone-100 hover:text-[#23412F] border-stone-200';
              if (isSelectedStart || isSelectedEnd) {
                bgClasses = 'bg-[#C5A059] text-white font-bold border-[#C5A059] shadow-lg scale-105 z-10';
              } else if (isInSelectedRange) {
                bgClasses = 'bg-[#C5A059]/20 text-[#23412F] font-semibold border-[#C5A059]/40';
              }

              return (
                <button
                  key={dateStr}
                  onClick={() => handleDateClick(dateStr)}
                  className={`h-12 sm:h-14 rounded-xl border flex flex-col items-center justify-center relative transition-all text-sm cursor-pointer ${bgClasses}`}
                >
                  <span className="font-semibold text-xs sm:text-sm">{dayNum}</span>
                </button>
              );
            })}
          </div>

          {/* Selection Banner & Action */}
          <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              {selectedStartDate ? (
                <div>
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">Datas Selecionadas:</span>
                  <span className="font-serif text-lg font-bold text-[#23412F]">
                    {formatDateToBR(selectedStartDate)} {selectedEndDate ? `até ${formatDateToBR(selectedEndDate)}` : '(Selecione a data final)'}
                  </span>
                </div>
              ) : (
                <span className="text-sm text-stone-500">
                  Clique no dia desejado para selecionar a data e solicitar o orçamento.
                </span>
              )}
            </div>

            <a
              href={createWhatsappLink(buildInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>Consultar esta data</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
