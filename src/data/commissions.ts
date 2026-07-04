import { siteImages } from '@/data/images';

export interface Commission {
  id: string;
  title: string;
  client: string;
  location: string;
  setting: string;
  stone: string;
  metal: string;
  timeline: string;
  budget: string;
  story: string;
  image: string;
}

export const commissions: Commission[] = [
  {
    id: 'maya-emerald',
    title: 'Emerald cut, low-profile basket',
    client: 'Maya & Daniel',
    location: 'Portland, OR',
    setting: 'Custom solitaire with knife-edge band',
    stone: '1.4 ct lab diamond, E color, VS1',
    metal: '14k yellow gold',
    timeline: '5 weeks',
    budget: '$3,800',
    story:
      'Maya wanted a ring she could wear daily at the hospital — nothing that caught on gloves. We dropped the setting height by 2mm, added a comfort-fit band, and kept the emerald cut oriented east-west so it felt less formal on her hand.',
    image: siteImages.commissions.emerald,
  },
  {
    id: 'james-hidden-halo',
    title: 'Hidden halo with heirloom reset',
    client: 'James',
    location: 'Chicago, IL',
    setting: 'Hidden halo around family center stone',
    stone: '0.9 ct mined diamond (client supplied) + lab accent stones',
    metal: '18k white gold',
    timeline: '6 weeks',
    budget: '$2,950',
    story:
      'James brought his grandmother\'s diamond. We inspected the stone, rebuilt the setting from scratch, and added a hidden halo of lab diamonds underneath — more sparkle without changing the classic look from above.',
    image: siteImages.commissions.solitaire,
  },
  {
    id: 'priya-vintage',
    title: 'Art deco-inspired with milgrain',
    client: 'Priya & Alex',
    location: 'Austin, TX',
    setting: 'Vintage inspired with hand-cut milgrain',
    stone: '1.25 ct oval lab diamond',
    metal: '14k rose gold',
    timeline: '4 weeks',
    budget: '$4,200',
    story:
      'Priya sent reference photos from a 1920s auction catalog. We matched the filigree density and stepped basket, then cast and finished the milgrain by hand — machine tools can\'t quite replicate the irregularity she wanted.',
    image: siteImages.commissions.vintage,
  },
];

export function getCommissionById(id: string): Commission | undefined {
  return commissions.find((c) => c.id === id);
}
