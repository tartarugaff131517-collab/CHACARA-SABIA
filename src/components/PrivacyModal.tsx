import React from 'react';
import { X, ShieldCheck, FileText, CheckCircle } from 'lucide-react';

interface PrivacyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#F6F2EB] text-[#23412F] w-full max-w-2xl max-h-[85vh] rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl relative border border-[#C5A059]/40">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-stone-300">
          <div className="w-10 h-10 rounded-2xl bg-[#23412F] text-[#C5A059] flex items-center justify-center shrink-0">
            {isPrivacy ? <ShieldCheck className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#23412F]">
              {isPrivacy ? 'Política de Privacidade' : 'Termos de Uso & Locação'}
            </h3>
            <p className="text-xs text-stone-500">Chácara Sabiá • São Paulo - SP</p>
          </div>
        </div>

        {/* Modal Body */}
        {isPrivacy ? (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              A <strong>Chácara Sabiá</strong> tem o compromisso de proteger os dados pessoais de todos os nossos clientes e hóspedes, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h4 className="font-bold text-[#23412F] text-base">1. Coleta de Informações</h4>
            <p>
              Coletamos apenas os dados essenciais para o processo de orçamento, contrato de locação de temporada e identificação dos hóspedes (como Nome Completo, CPF, Telefone/WhatsApp, E-mail e Lista de Hóspedes).
            </p>

            <h4 className="font-bold text-[#23412F] text-base">2. Uso dos Dados</h4>
            <p>
              Seus dados são utilizados exclusivamente para emissão do contrato digital de locação, confirmação de pagamentos e fornecimento das instruções de acesso e check-in na propriedade. Nunca vendemos ou compartilhamos dados com terceiros.
            </p>

            <h4 className="font-bold text-[#23412F] text-base">3. Segurança dos Dados</h4>
            <p>
              Utilizamos ambiente seguro e criptografia para garantir a integridade de todas as informações transmitidas durante o processo de reserva.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              Os presentes termos regem o aluguel por temporada e uso dos espaços da <strong>Chácara Sabiá</strong>.
            </p>

            <h4 className="font-bold text-[#23412F] text-base">1. Confirmação da Reserva</h4>
            <p>
              A reserva do imóvel é garantida mediante o pagamento do sinal de 50% e assinatura do contrato digital de locação por temporada. O saldo remanescente deve ser quitado até a data do check-in.
            </p>

            <h4 className="font-bold text-[#23412F] text-base">2. Regras do Imóvel & Convivência</h4>
            <p>
              Respeitar os limites de barulho conforme a legislação municipal vigente após às 22h. Cuidar dos equipamentos, móveis e piscina. O descumprimento de capacidade máxima declarada sujeitará à multa.
            </p>

            <h4 className="font-bold text-[#23412F] text-base">3. Caução Reembolsável</h4>
            <p>
              A taxa de caução devida no check-in será devolvida integralmente em até 24h após a vistoria de saída no check-out, desde que o imóvel seja entregue nas mesmas condições de conservação.
            </p>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-stone-300 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#23412F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#172C1F] transition-all"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
