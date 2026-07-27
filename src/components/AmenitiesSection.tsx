import React from 'react';
import { AMENITIES } from '../data/chacaraData';
import {
  Waves,
  Flame,
  UtensilsCrossed,
  Trophy,
  Wifi,
  Car,
  BedDouble,
  Bath,
  ChefHat,
  Smile,
  Trees,
  Dog,
  PartyPopper,
  Sparkles
} from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-8 h-8 text-[#C5A059]" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-[#C5A059]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-8 h-8 text-[#C5A059]" />;
      case 'Trophy':
        return <Trophy className="w-8 h-8 text-[#C5A059]" />;
      case 'Wifi':
        return <Wifi className="w-8 h-8 text-[#C5A059]" />;
      case 'Car':
        return <Car className="w-8 h-8 text-[#C5A059]" />;
      case 'BedDouble':
        return <BedDouble className="w-8 h-8 text-[#C5A059]" />;
      case 'Bath':
        return <Bath className="w-8 h-8 text-[#C5A059]" />;
      case 'ChefHat':
        return <ChefHat className="w-8 h-8 text-[#C5A059]" />;
      case 'Smile':
        return <Smile className="w-8 h-8 text-[#C5A059]" />;
      case 'Trees':
        return <Trees className="w-8 h-8 text-[#C5A059]" />;
      case 'Dog':
        return <Dog className="w-8 h-8 text-[#C5A059]" />;
      case 'PartyPopper':
        return <PartyPopper className="w-8 h-8 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#C5A059]" />;
    }
  };

  return (
    <section id="estrutura" className="py-24 bg-[#F6F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#23412F]/10 text-[#23412F] text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Infraestrutura Completa</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#23412F] mb-4">
            Tudo o que você precisa para uma estadia inesquecível
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Cada ambiente foi pensado nos mínimos detalhes para garantir conforto, entretenimento e máxima praticidade para todos os convidados.
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="group p-6 rounded-2xl bg-white border border-[#23412F]/10 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start justify-between relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F6F2EB] group-hover:bg-[#23412F] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:text-white">
                  {getIcon(amenity.iconName)}
                </div>

                <h3 className="font-serif text-lg font-bold text-[#23412F] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {amenity.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 w-full flex items-center justify-between text-[11px] font-semibold text-[#23412F]/60 group-hover:text-[#23412F]">
                <span>Incluso no aluguel</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
