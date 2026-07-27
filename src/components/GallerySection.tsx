import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/chacaraData';
import { GalleryItem } from '../types';
import { Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Filter } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['Todos', ...Array.from(new Set(GALLERY_ITEMS.map(item => item.category)))];

  const filteredItems = selectedCategory === 'Todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="galeria" className="py-24 bg-[#23412F] text-[#F6F2EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#C5A059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Tour Visual Exclusivo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Conheça cada detalhe do nosso paraíso
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Navegue pelas categorias e encante-se com a infraestrutura projetada para proporcionar momentos inesquecíveis.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A059] text-[#23412F] font-bold shadow-lg scale-105'
                    : 'bg-white/10 hover:bg-white/20 text-stone-200 border border-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid (Masonry feel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-black/40 border border-[#C5A059]/20 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 h-72"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#23412F]/80 backdrop-blur-md text-[#C5A059] text-[11px] font-semibold tracking-wider uppercase border border-[#C5A059]/30">
                  {item.category}
                </span>
              </div>

              {/* Zoom Hover Icon */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-[#C5A059]" />
              </div>

              {/* Bottom Caption Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#C5A059] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 text-stone-400">
            Nenhuma foto encontrada para esta categoria no momento.
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#23412F] transition-all cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#C5A059] text-white hover:text-[#23412F] transition-all cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Main Image & Details */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />

            <div className="mt-4 text-center text-white max-w-2xl px-4">
              <span className="text-xs uppercase tracking-widest text-[#C5A059] font-medium">
                {lightboxIndex + 1} de {filteredItems.length} • {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-xl font-bold mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-stone-300 mt-1">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
