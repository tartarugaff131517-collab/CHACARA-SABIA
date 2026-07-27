import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/chacaraData';
import { Star, ChevronLeft, ChevronRight, Quote, Bird, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="depoimentos" className="py-24 bg-[#23412F] text-[#F6F2EB] relative overflow-hidden">
      {/* Background Accent Lines */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#C5A059]/30">
            <Bird className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Avaliações dos Hóspedes</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            A experiência de quem já viveu dias incríveis aqui
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Confira os depoimentos reais de famílias, casais e organizadores de eventos que escolheram a Chácara Sabiá.
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="max-w-4xl mx-auto relative bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 shadow-2xl">
          
          <Quote className="w-16 h-16 text-[#C5A059]/20 absolute top-6 right-8 pointer-events-none" />

          <div className="flex flex-col items-center text-center">
            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C5A059] text-[#C5A059]" />
              ))}
            </div>

            {/* Comment */}
            <p className="font-serif text-lg sm:text-2xl italic font-normal text-stone-100 leading-relaxed mb-8 max-w-3xl">
              "{current.comment}"
            </p>

            {/* User Meta */}
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#C5A059] shadow-md"
                referrerPolicy="no-referrer"
              />

              <div className="text-left">
                <h4 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <span>{current.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                </h4>
                <p className="text-xs text-stone-300">{current.city}</p>
                <span className="inline-block mt-1 text-[11px] font-semibold text-[#C5A059] uppercase tracking-wider">
                  {current.occasion} • {current.date}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/10">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#23412F] transition-all cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    idx === currentIndex
                      ? 'w-8 bg-[#C5A059]'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#23412F] transition-all cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
