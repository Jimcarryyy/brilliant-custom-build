import solitaireRing from '@/assets/solitaire-ring.jpg';
import haloRing from '@/assets/halo-ring.jpg';
import vintageRing from '@/assets/vintage-ring.jpg';

export type ProductCategory = 'solitaire' | 'halo' | 'vintage';

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  basePrice: number;
  category: ProductCategory;
  leadTime: string;
}

export const products: Product[] = [
  {
    slug: 'solitaire',
    name: 'Classic Solitaire',
    tagline: 'A single stone, perfectly set',
    description:
      'Our signature solitaire puts the center stone first — clean lines, a low-profile setting, and proportions that work at any carat weight. Designed to sit flush with a wedding band.',
    image: solitaireRing,
    basePrice: 1299,
    category: 'solitaire',
    leadTime: '3–4 weeks',
  },
  {
    slug: 'hidden-halo',
    name: 'Hidden Halo',
    tagline: 'Brilliance from every angle',
    description:
      'A ring of micro-pavé diamonds sits beneath the center stone, adding fire without changing the classic silhouette from above. Subtle from the top, stunning in profile.',
    image: haloRing,
    basePrice: 1599,
    category: 'halo',
    leadTime: '4–5 weeks',
  },
  {
    slug: 'vintage',
    name: 'Vintage Inspired',
    tagline: 'Art deco details, modern craft',
    description:
      'Milgrain edges, geometric filigree, and a stepped basket setting draw from 1920s design language — hand-finished with today\'s tolerances and stone security.',
    image: vintageRing,
    basePrice: 1799,
    category: 'vintage',
    leadTime: '5–6 weeks',
  },
];

export const productCategories = [
  { id: 'all', name: 'All Styles' },
  { id: 'solitaire', name: 'Solitaire' },
  { id: 'halo', name: 'Halo' },
  { id: 'vintage', name: 'Vintage' },
] as const;

export const stoneShapes = [
  { id: 'round', name: 'Round', price: 0 },
  { id: 'oval', name: 'Oval', price: 100 },
  { id: 'marquise', name: 'Marquise', price: 150 },
  { id: 'pear', name: 'Pear', price: 150 },
  { id: 'emerald', name: 'Emerald', price: 200 },
  { id: 'princess', name: 'Princess', price: 50 },
];

export const metalTypes = [
  { id: 'white-gold-14k', name: '14K White Gold', price: 0 },
  { id: 'white-gold-18k', name: '18K White Gold', price: 300 },
  { id: 'yellow-gold-14k', name: '14K Yellow Gold', price: 0 },
  { id: 'yellow-gold-18k', name: '18K Yellow Gold', price: 300 },
  { id: 'rose-gold-14k', name: '14K Rose Gold', price: 0 },
  { id: 'rose-gold-18k', name: '18K Rose Gold', price: 300 },
];

export const stoneTypes = [
  { id: 'lab-diamond', name: 'Lab-Grown Diamond', price: 0 },
  { id: 'moissanite', name: 'Moissanite', price: -400 },
];

export const caratSizes = [
  { id: '0.5', name: '0.5 ct', price: -500 },
  { id: '0.75', name: '0.75 ct', price: -200 },
  { id: '1.0', name: '1.0 ct', price: 0 },
  { id: '1.25', name: '1.25 ct', price: 400 },
  { id: '1.5', name: '1.5 ct', price: 800 },
  { id: '2.0', name: '2.0 ct', price: 1600 },
];

export interface ProductOptions {
  stoneShape: string;
  metalType: string;
  stoneType: string;
  caratSize: string;
}

export const defaultProductOptions: ProductOptions = {
  stoneShape: 'round',
  metalType: 'white-gold-14k',
  stoneType: 'lab-diamond',
  caratSize: '1.0',
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function calculatePrice(
  basePrice: number,
  options: ProductOptions
): number {
  let total = basePrice;
  const shape = stoneShapes.find((s) => s.id === options.stoneShape);
  const metal = metalTypes.find((m) => m.id === options.metalType);
  const stone = stoneTypes.find((s) => s.id === options.stoneType);
  const carat = caratSizes.find((c) => c.id === options.caratSize);
  if (shape) total += shape.price;
  if (metal) total += metal.price;
  if (stone) total += stone.price;
  if (carat) total += carat.price;
  return total;
}

export function formatPrice(amount: number): string {
  return `$${amount.toLocaleString()}`;
}
