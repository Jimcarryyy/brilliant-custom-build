import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { siteImages } from '@/data/images';
import { Button } from '@/components/ui/button';

const metalOptions = [
  {
    name: '14k gold',
    note: 'Most common. Durable for daily wear, good balance of cost and richness of color.',
    colors: ['White (rhodium-plated)', 'Yellow', 'Rose'],
  },
  {
    name: '18k gold',
    note: 'Softer, richer color, heavier feel. We recommend it for bands under 2mm or clients who want a warmer yellow/rose tone.',
    colors: ['White (rhodium-plated)', 'Yellow', 'Rose'],
  },
];

const stoneOptions = [
  {
    name: 'Lab-grown diamond',
    grades: 'We typically set F–H color, VS2–SI1 and up',
    detail:
      'Same hardness and brilliance as mined. Graded by the same labs (IGI, GIA). You get a larger or higher-grade stone for the same budget.',
  },
  {
    name: 'Moissanite',
    grades: 'Forever One or equivalent',
    detail:
      'More fire (rainbow flash) than diamond. Slightly less hard. Good when budget is tight or you want a larger look without a simulated diamond label.',
  },
  {
    name: 'Client-supplied stone',
    grades: 'Heirloom or independently purchased',
    detail:
      'We inspect before accepting — check for chips, measure dimensions, confirm it fits the intended setting. Resetting starts at $850 plus setting work.',
  },
];

const Materials = () => {
  return (
    <>
      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <Reveal>
            <h1 className="text-display-xl mb-3">Materials</h1>
            <p className="text-body text-luxury-text-muted max-w-2xl">
              What goes into your ring — and what we won&apos;t use. Everything
              below is included in your written quote; no surprise alloy swaps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal>
              <h2 className="text-display-sm mb-4">Metals</h2>
              <div className="space-y-6">
                {metalOptions.map((metal) => (
                  <div key={metal.name} className="border border-border rounded-md p-5 bg-background">
                    <h3 className="font-medium mb-2">{metal.name}</h3>
                    <p className="text-caption mb-3">{metal.note}</p>
                    <p className="text-sm">
                      <span className="text-luxury-text-muted">Available: </span>
                      {metal.colors.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-caption mt-4">
                We don&apos;t plate sterling silver or use gold-fill. White gold
                is rhodium-plated; replating is $75 if you want it refreshed later.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <img
                src={siteImages.diamondDetail}
                alt="Close-up of a diamond engagement ring"
                className="w-full aspect-square object-cover rounded-lg ring-1 ring-border/60"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-display-sm mb-6">Stones</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stoneOptions.map((stone, i) => (
              <Reveal key={stone.name} delay={i * 50}>
                <div className="h-full border border-border rounded-md p-5 bg-background">
                  <h3 className="font-medium mb-2">{stone.name}</h3>
                  <p className="text-xs text-luxury-rose-gold font-medium mb-3">{stone.grades}</p>
                  <p className="text-caption">{stone.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted/30 border-t border-border">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-display-sm mb-4">What&apos;s in the box</h2>
            <ul className="text-sm text-luxury-text-muted space-y-2 mb-8">
              <li>· Grading report for center stone (when applicable)</li>
              <li>· Appraisal document for insurance</li>
              <li>· Care card and soft pouch</li>
              <li>· Lifetime warranty on craftsmanship — prongs, shank, structural issues</li>
              <li>· One free resize within 60 days (where design allows)</li>
            </ul>
            <Link to="/contact">
              <Button variant="luxury">Ask about a specific stone</Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Materials;
