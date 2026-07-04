import heroRing from '@/assets/hero-ring.jpg';
import ringCollection from '@/assets/ring-collection.jpg';
import workshop from '@/assets/workshop.jpg';
import diamondDetail from '@/assets/diamond-detail.jpg';
import commissionEmerald from '@/assets/commission-emerald.jpg';
import commissionSolitaire from '@/assets/commission-solitaire.jpg';
import commissionVintage from '@/assets/commission-vintage.jpg';

export const siteImages = {
  hero: heroRing,
  collection: ringCollection,
  workshop,
  diamondDetail,
  commissions: {
    emerald: commissionEmerald,
    solitaire: commissionSolitaire,
    vintage: commissionVintage,
  },
} as const;
