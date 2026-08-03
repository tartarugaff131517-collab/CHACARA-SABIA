export interface GalleryItem {
  id: string;
  title: string;
  category: 'Piscina' | 'Área Gourmet' | 'Quartos' | 'Sala' | 'Cozinha' | 'Campo' | 'Playground' | 'Natureza' | 'Vista aérea' | 'Campo de Futebol' | 'Banheiros';
  imageUrl: string;
  description: string;
}

export interface Amenity {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  category: string;
  subtitle: string;
  period: string;
  price: string;
  capacity: string;
  features: string[];
  recommended?: boolean;
}

export interface Occasion {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  occasion: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface CalendarDay {
  dateStr: string; // YYYY-MM-DD
  dayNumber: number;
  status: 'available' | 'booked';
  note?: string;
}

export interface QuoteData {
  type: 'final_de_semana' | 'meio_de_semana' | 'evento' | 'casamento';
  guests: number;
  days: number;
  heatablePool: boolean;
  extraCleaning: boolean;
  beerDispenser: boolean;
}
