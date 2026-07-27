import React from 'react';
import {
  Bird,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Heart,
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';
import {
  DISPLAY_PHONE,
  DISPLAY_EMAIL,
  INSTAGRAM_HANDLE,
  ESTATE_ADDRESS,
  createWhatsappLink
} from '../data/chacaraData';

interface FooterProps {
  onOpenPrivacyModal: (type: 'privacy' | 'terms') => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenQuoteModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#172C1F] text-[#F6F2EB] pt-16 pb-12 border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <Bird className="w-5 h-5 text-[#C5A059]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wide text-white">
                Chácara Sabiá
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed">
              Sua melhor escolha para aluguel de chácara de alto padrão em São Paulo. Estrutura completa de lazer, eventos e descanso rodeada por 20.000m² de natureza preservada.
            </p>


          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Links Rápidos</span>
            </h4>

            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => handleNavClick('#sobre')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> Sobre a Chácara
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#galeria')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> Galeria de Fotos
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#estrutura')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> Estrutura & Lazer
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#calendario')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> Calendário de Reservas
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('#ocasioes')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-[#C5A059]" /> Para Quais Ocasiões
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Contato & Atendimento</span>
            </h4>

            <ul className="space-y-3 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>{ESTATE_ADDRESS}</span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={createWhatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  WhatsApp: {DISPLAY_PHONE}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href={`mailto:${DISPLAY_EMAIL}`} className="hover:text-[#C5A059] transition-colors">
                  {DISPLAY_EMAIL}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                  Instagram: {INSTAGRAM_HANDLE}
                </a>
              </li>

              <li className="flex items-center gap-2.5 pt-2 border-t border-white/10 text-[#C5A059]">
                <Clock className="w-4 h-4 shrink-0" />
                <span>Atendimento: Diariamente das 08h às 21h</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Security */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
              <span>Transparência & Termos</span>
            </h4>

            <p className="text-xs text-stone-300 leading-relaxed mb-4">
              Operamos com total legalidade, contrato registrado e suporte dedicado para garantir a paz e segurança da sua família.
            </p>

            <div className="space-y-2">
              <button
                onClick={() => onOpenPrivacyModal('privacy')}
                className="w-full text-left py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 hover:text-[#C5A059] transition-all flex items-center justify-between"
              >
                <span>Política de Privacidade</span>
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              </button>

              <button
                onClick={() => onOpenPrivacyModal('terms')}
                className="w-full text-left py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-stone-200 hover:text-[#C5A059] transition-all flex items-center justify-between"
              >
                <span>Termos de Uso & Locação</span>
                <FileText className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Rights Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {currentYear} Chácara Sabiá. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para proporcionar os melhores momentos em São Paulo.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
