import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Bird, Calendar, ChevronRight } from 'lucide-react';
import { createWhatsappLink, DISPLAY_PHONE } from '../data/chacaraData';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Calendário', href: '#calendario' },
    { label: 'Ocasiões', href: '#ocasioes' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#23412F]/95 backdrop-blur-md py-3 shadow-xl border-b border-[#C5A059]/20 text-[#F6F2EB]'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059] group-hover:scale-105 transition-transform">
            <Bird className="w-5 h-5 text-[#C5A059]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-white flex items-center gap-1.5">
              Chácara Sabiá
            </span>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              Chácara de Luxo • SP
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="relative py-1 text-white/90 hover:text-[#C5A059] transition-colors cursor-pointer group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={createWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Reservar WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg text-white hover:text-[#C5A059] focus:outline-none cursor-pointer"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 bg-[#23412F] z-50 flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn text-[#F6F2EB]">
          {/* Header row in mobile overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A059]/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <Bird className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white leading-none">Chácara Sabiá</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-medium mt-1">Chácara de Luxo</span>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-white hover:text-[#C5A059] focus:outline-none cursor-pointer"
              aria-label="Fechar menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex flex-col justify-center py-8 gap-4 max-w-sm mx-auto w-full">
            {navLinks.map((link, idx) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="py-2.5 text-xl font-serif tracking-wide text-white hover:text-[#C5A059] flex items-center gap-4 border-b border-white/5 transition-colors group text-left w-full cursor-pointer"
              >
                <span className="text-[#C5A059] font-mono text-xs opacity-60">0{idx + 1}.</span>
                <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
              </button>
            ))}
          </div>

          {/* Footer actions in mobile overlay */}
          <div className="space-y-4 pt-6 border-t border-[#C5A059]/20 max-w-sm mx-auto w-full">
            <a
              href={createWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Reservar pelo WhatsApp ({DISPLAY_PHONE})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
