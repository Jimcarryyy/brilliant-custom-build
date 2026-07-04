import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const sizingSteps = [
  'Measure a ring that fits the intended finger (inside diameter in mm).',
  'Visit a local jeweler for a professional sizing — often free and takes minutes.',
  'If proposing with a placeholder ring, size the placeholder finger, not the left ring finger.',
  'Account for temperature: fingers swell slightly in warm weather.',
  'When in doubt, err slightly larger — we include one free resize within 60 days.',
];

const careTips = [
  {
    title: 'Daily wear',
    text: 'Remove your ring before heavy lifting, gym work, or cleaning with chemicals. Gold is durable but not indestructible.',
  },
  {
    title: 'Cleaning',
    text: 'Soak in warm water with mild dish soap for 15 minutes, brush gently with a soft toothbrush, rinse and pat dry.',
  },
  {
    title: 'Storage',
    text: 'Store separately from other jewelry to avoid scratches. Use the provided box or a fabric-lined compartment.',
  },
  {
    title: 'Inspection',
    text: 'Check prongs every few months. If a stone feels loose, stop wearing it and contact us for a complimentary check.',
  },
  {
    title: 'Professional service',
    text: 'We recommend a professional clean and inspection once a year — complimentary for the first year.',
  },
];

const Guide = () => {
  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal>
            <p className="text-label mb-3">Ring guide</p>
            <h1 className="text-display-xl text-luxury-charcoal mb-6">
              Sizing & care
            </h1>
            <p className="text-body text-luxury-text-muted max-w-2xl">
              Practical guidance for getting the fit right and keeping your ring
              beautiful for decades. Questions? We&apos;re happy to walk you
              through it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-luxury-cream border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <Reveal>
              <h2 className="text-display-sm text-luxury-charcoal mb-6">
                Finding your size
              </h2>
              <ol className="space-y-4">
                {sizingSteps.map((step, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-base font-semibold text-luxury-rose-gold shrink-0 w-6">
                      {i + 1}.
                    </span>
                    <p className="text-body text-luxury-text-muted">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="text-caption mt-6 pt-6 border-t border-border">
                US sizes 4–9 are most common for engagement rings. We confirm
                size at consultation before casting.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-display-sm text-luxury-charcoal mb-6">
                Care & maintenance
              </h2>
              <div className="space-y-6">
                {careTips.map((tip) => (
                  <div key={tip.title} className="border-b border-border pb-5 last:border-0">
                    <h3 className="text-sm font-medium text-luxury-charcoal mb-1.5">
                      {tip.title}
                    </h3>
                    <p className="text-caption leading-relaxed">{tip.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal>
            <div className="border border-border p-8 md:p-10 rounded-sm">
              <h2 className="text-display-sm text-luxury-charcoal mb-3">
                Returns & resizing
              </h2>
              <p className="text-body text-luxury-text-muted mb-4">
                Custom rings are made to order. We offer a 30-day return on
                collection styles in unworn condition. One complimentary resize
                is included within 60 days of delivery. Full details are
                confirmed in your order agreement at consultation.
              </p>
              <Link to="/contact">
                <Button variant="luxury-outline">Ask about sizing</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Guide;
