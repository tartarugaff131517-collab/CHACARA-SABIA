import {
  GalleryItem,
  Amenity,
  PricingPlan,
  Occasion,
  Testimonial,
  FaqItem,
} from '../types';

export const WHATSAPP_NUMBER = '5511915109049';
export const DISPLAY_PHONE = '(11) 91510-9049';
export const DISPLAY_EMAIL = 'contato@chacarasabia.com.br';
export const INSTAGRAM_HANDLE = '@chacarasabia';
export const ESTATE_ADDRESS = 'Estrada Imperial - Araçariguama - SP';

export function createWhatsappLink(customMessage?: string): string {
  const defaultText = 'Olá! Gostaria de mais informações e verificar a disponibilidade de datas para a Chácara Sabiá.';
  const message = customMessage || defaultText;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Piscina Privativa com Área Infantil',
    category: 'Piscina',
    imageUrl: '/assets/piscina.jpg',
    description: 'Piscina refrescante com área rasa infantil, deck de madeira, espreguiçadeiras e guarda-sol para o seu lazer sob o sol.'
  },
  {
    id: '2',
    title: 'Espaço Gourmet Completo e Integrado',
    category: 'Área Gourmet',
    imageUrl: '/assets/area-gourmet.jpg',
    description: 'Área gourmet coberta com mesa de granito, cadeiras confortáveis, churrasqueira em alvenaria e forno de pizza a lenha.'
  },
  {
    id: '3',
    title: 'Campo de Futebol Society Gramado',
    category: 'Campo de Futebol',
    imageUrl: '/assets/campo-futebol.jpg',
    description: 'Campo de futebol gramado com redes e cercado com tela de proteção, ideal para partidas recreativas.'
  },
  {
    id: '4',
    title: 'Playground Infantil Divertido',
    category: 'Playground',
    imageUrl: '/assets/playground.jpg',
    description: 'Playground seguro com grama sintética para as crianças se divertirem com escorregador, balanços e gangorra.'
  },
  {
    id: '5',
    title: 'Banheiro Moderno e Higienizado',
    category: 'Banheiros',
    imageUrl: '/assets/banheiro.jpg',
    description: 'Banheiro completo com revestimento em mármore, vaso sanitário moderno e box de vidro com acabamento fino.'
  },
  {
    id: '6',
    title: 'Quarto Família (Cama de Casal, Beliche e Solteiro)',
    category: 'Quartos',
    imageUrl: '/assets/quarto1.jpg',
    description: 'Quarto amplo e confortável equipado com uma cama de casal, um beliche e uma cama de solteiro.'
  },
  {
    id: '7',
    title: 'Quarto Aconchegante (Cama de Casal e Solteiro)',
    category: 'Quartos',
    imageUrl: '/assets/quarto2.jpg',
    description: 'Acomodação confortável com uma cama de casal e uma cama de solteiro extra.'
  },
  {
    id: '8',
    title: 'Quarto Coletivo (Cama de Casal e Duas de Solteiro)',
    category: 'Quartos',
    imageUrl: '/assets/quarto3.jpg',
    description: 'Quarto prático e espaçoso contendo uma cama de casal e duas camas de solteiro.'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'churrasqueira',
    iconName: 'Flame',
    title: 'Churrasqueira Gourmet',
    description: 'Churrasqueira em alvenaria com espetos giratórios, forno de pizza a lenha e fogão caipira.'
  },
  {
    id: 'gourmet',
    iconName: 'UtensilsCrossed',
    title: 'Área Gourmet',
    description: 'Espaço coberto e ventilado para até 120 pessoas, equipado com geladeiras e freezer.'
  },
  {
    id: 'campo',
    iconName: 'Trophy',
    title: 'Campo de Futebol',
    description: 'Campo society com gramado natural impecável, traves profissionais e iluminação noturna.'
  },
  {
    id: 'wifi',
    iconName: 'Wifi',
    title: 'Wi-Fi de Alta Velocidade',
    description: 'Internet via fibra óptica de 500 Mega cobrindo toda a casa principal e área de lazer.'
  },
  {
    id: 'estacionamento',
    iconName: 'Car',
    title: 'Estacionamento Amplo',
    description: 'Estacionamento privativo e seguro dentro da propriedade com capacidade para mais de 30 veículos.'
  },
  {
    id: 'quartos',
    iconName: 'BedDouble',
    title: '4 Quartos Climatizados',
    description: 'Quartos climatizados que acomodam confortavelmente até 20 pessoas em camas.'
  },
  {
    id: 'banheiros',
    iconName: 'Bath',
    title: '3 Banheiros Modernos',
    description: 'Banheiros completos com chuveiros de alta pressão e ótimo acabamento.'
  },
  {
    id: 'cozinha',
    iconName: 'ChefHat',
    title: 'Cozinha Completa',
    description: 'Cozinha americana equipada com eletrodomésticos modernos, panelas industriais e louça completa.'
  },
  {
    id: 'playground',
    iconName: 'Smile',
    title: 'Playground Infantil',
    description: 'Espaço de lazer seguro para crianças com balanços, escorregador, casinha e casa na árvore.'
  },
  {
    id: 'pet',
    iconName: 'Dog',
    title: 'Pet Friendly',
    description: 'Seu animal de estimação é super bem-vindo! Área totalmente gramada e murada para diversão garantida.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    category: 'Segunda a Quinta',
    subtitle: 'Dias Úteis / Relax e Home Office',
    period: 'Diária (Mínimo de 2 diárias)',
    price: 'R$ 1.200',
    capacity: 'Até 15 pessoas para pernoite',
    features: [
      'Acesso total à piscina e área gourmet',
      'Wi-Fi Fibra Óptica 500 Mega',
      'Check-in flexível a partir das 08h',
      'Uso gratuito do campo de futebol',
      'Até 2 pets inclusos sem taxa extra'
    ]
  },
  {
    category: 'Sexta a Domingo',
    subtitle: 'Pacote Final de Semana',
    period: 'Pacote de Sexta 14h a Domingo 18h',
    price: 'R$ 4.200',
    capacity: 'Até 25 pessoas para pernoite',
    recommended: true,
    features: [
      'Entrada na Sexta a partir das 14h',
      'Saída estendida no Domingo até às 18h',
      'Piscina com aquecimento incluso',
      'Cozinha e churrasqueira completas',
      'Serviço de limpeza de entrada e saída'
    ]
  },
  {
    category: 'Feriados & Data Comemorativas',
    subtitle: 'Carnaval, Réveillon, Natal e Prolongados',
    period: 'Pacotes Especiais (3 a 5 dias)',
    price: 'Sob Consulta',
    capacity: 'Até 25 pessoas para pernoite',
    features: [
      'Decoração de boas-vindas especial',
      'Acompanhamento e suporte 24h do caseiro',
      'Estrutura pronta para recepção de convidados',
      'Piscina aquecida e iluminação de festa',
      'Opção de contratação de equipe de apoio'
    ]
  },
  {
    category: 'Eventos & Casamentos',
    subtitle: 'Confraternizações e Mini-Weddings',
    period: 'Diária de Evento (12 horas de festa)',
    price: 'A partir de R$ 5.500',
    capacity: 'Até 150 convidados sem pernoite',
    features: [
      'Espaço coberto e pergolado para cerimônia',
      'Suíte dos noivos / camarim inclusos',
      'Estacionamento para 30+ carros com orientador',
      'Gerador de energia de emergência',
      'Limpeza pós-evento inclusa no pacote'
    ]
  }
];

export const OCCASIONS: Occasion[] = [
  {
    id: 'aniversarios',
    title: 'Aniversários & Celebrações',
    description: 'Comemore datas especiais com amigos e família em uma estrutura completa de lazer e gastronômica.',
    imageUrl: '/assets/area-gourmet.jpg',
    tag: 'Festas inesquecíveis'
  },
  {
    id: 'casamentos',
    title: 'Casamentos & Mini Weddings',
    description: 'O cenário dos seus sonhos ao ar livre, cercado por jardins tropicais e um pôr do sol encantador.',
    imageUrl: '/assets/piscina.jpg',
    tag: 'Cenário romântico'
  },
  {
    id: 'cha-revelacao',
    title: 'Chá Revelação & Batizados',
    description: 'Ambiente aconchegante e seguro para receber familiares e registrar memórias emocionantes.',
    imageUrl: '/assets/playground.jpg',
    tag: 'Momentos de amor'
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos',
    description: 'Workshops, premiações e retiros empresariais com Wi-Fi veloz, espaço amplo e infraestrutura.',
    imageUrl: '/assets/area-gourmet.jpg',
    tag: 'Networking e metas'
  },
  {
    id: 'confraternizacoes',
    title: 'Confraternizações de Fim de Ano',
    description: 'Churrasco, piscina e campo de futebol para integrar equipes e grupos de amigos com alegria.',
    imageUrl: '/assets/campo-futebol.jpg',
    tag: 'Integração e lazer'
  },
  {
    id: 'finais-de-semana',
    title: 'Finais de Semana de Lazer',
    description: 'Escape do ritmo acelerado da capital e recarregue as energias no ar puro com total privacidade.',
    imageUrl: '/assets/piscina.jpg',
    tag: 'Paz e descanso'
  },
  {
    id: 'ensaios',
    title: 'Ensaios Fotográficos',
    description: 'Locação perfeita para fotógrafos e marcas: luz natural abundante, pergolados, verde e arquitetura de luxo.',
    imageUrl: '/assets/piscina.jpg',
    tag: 'Luz e fotos lindas'
  },
  {
    id: 'familia',
    title: 'Descanso em Família',
    description: 'Espaço pensado para todas as gerações: piscina rasa para crianças, rampas de acesso e tranquilidade.',
    imageUrl: '/assets/playground.jpg',
    tag: 'Todas as idades'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Carolina Mendes',
    city: 'São Paulo - SP (Moema)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Maio de 2026',
    comment: 'Comemoramos o aniversário de 40 anos do meu marido na Chácara Sabiá e foi SIMPLESMENTE PERFEITO! A casa é ainda mais bonita pessoalmente do que nas fotos. Piscina limpíssima, área gourmet super bem equipada e o atendimento pelo WhatsApp foi extremamente rápido.',
    occasion: 'Aniversário em Família'
  },
  {
    id: 't2',
    name: 'Fernando Guimarães',
    city: 'Campinas - SP',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Junho de 2026',
    comment: 'Alugamos para o final de semana entre 18 amigos. A estrutura é impecável, os quartos têm camas confortáveis e ar condicionado gelando forte. O campo de futebol foi o sucesso do sábado à tarde. Já reservamos o Réveillon!',
    occasion: 'Final de Semana com Amigos'
  },
  {
    id: 't3',
    name: 'Beatriz & Rodrigo Siqueira',
    city: 'Santo André - SP',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Abril de 2026',
    comment: 'Realizamos nosso Mini Wedding para 80 convidados na chácara. Os jardins serviram como o altar dos nossos sonhos ao pôr do sol. Os convidados ficaram encantados com o luxo e a organização. Recomendamos de olhos fechados!',
    occasion: 'Casamento Mini Wedding'
  },
  {
    id: 't4',
    name: 'Roberto Vasconcelos',
    city: 'São José dos Campos - SP',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: 'Março de 2026',
    comment: 'Realizamos a imersão anual da nossa empresa de tecnologia. O Wi-Fi de alta velocidade não caiu um segundo sequer, e o espaço permitiu reuniões produtivas de manhã e churrasco de integração à noite. Excelente custo-benefício.',
    occasion: 'Evento Corporativo'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'q1',
    question: 'Quantas pessoas a chácara comporta para pernoite e eventos?',
    answer: 'Para pernoite acomodamos confortavelmente até 25 pessoas em camas nas 6 suítes/quartos climatizados. Para eventos de um dia (sem pernoite), a área gourmet e os jardins comportam até 150 convidados com total conforto.'
  },
  {
    id: 'q2',
    question: 'Pode levar animais de estimação (Pet Friendly)?',
    answer: 'Sim! Somos 100% Pet Friendly. Seu pet será muito bem-vindo para correr e brincar no nosso terreno totalmente murado de 20.000m². Solicitamos apenas que os donos tragam os pertences do pet.'
  },
  {
    id: 'q3',
    question: 'A piscina possui sistema de aquecimento e como funciona?',
    answer: 'Sim, nossa piscina conta com sistema híbrido solar/gás que mantém a água em temperatura agradável durante o ano inteiro, mesmo nos dias mais amenos de outono e inverno.'
  },
  {
    id: 'q4',
    question: 'Tem Wi-Fi para trabalhar em Home Office?',
    answer: 'Com certeza. Contamos com link dedicado via fibra óptica de 500 Mega com repetidores espalhados por toda a casa principal, área gourmet e piscina.'
  },
  {
    id: 'q5',
    question: 'A chácara aceita festas, casamentos e eventos corporativos?',
    answer: 'Aceitamos! Possuímos infraestrutura própria para eventos com banheiros externos independentes, estacionamento amplo para 30+ carros, área de apoio para buffet e gerador de energia.'
  },
  {
    id: 'q6',
    question: 'Como funciona o processo de reserva?',
    answer: 'A reserva é confirmada mediante assinatura de contrato digital simples e pagamento de sinal de 50%. O saldo restante pode ser pago até a data de entrada (check-in) via PIX ou parcelado no cartão de crédito.'
  },
  {
    id: 'q7',
    question: 'Quais as formas de pagamento aceitas?',
    answer: 'Aceitamos PIX (com desconto de 5%), Cartão de Crédito em até 12x (com juros da maquininha) e Transferência Bancária (TED/DOC).'
  },
  {
    id: 'q8',
    question: 'Existe cobrança de taxa de caução?',
    answer: 'Sim, solicitamos uma caução reembolsável de segurança que é restituída integralmente via PIX em até 24 horas após a vistoria de saída no check-out.'
  },
  {
    id: 'q9',
    question: 'Quais são os horários padrão de check-in e check-out?',
    answer: 'Para pacotes de final de semana: Check-in na Sexta-feira a partir das 14h e Check-out no Domingo até às 18h. Para locações em dias úteis, o horário padrão de entrada é 08h e saída às 18h (podendo haver ajustes flexíveis sob consulta).'
  }
];

// Sample availability data for current and next month
export function getSampleCalendarData() {
  const bookedDates = [
    '2026-07-24', '2026-07-25', '2026-07-26',
    '2026-08-01', '2026-08-02',
    '2026-08-14', '2026-08-15', '2026-08-16',
    '2026-08-28', '2026-08-29', '2026-08-30'
  ];
  return bookedDates;
}
