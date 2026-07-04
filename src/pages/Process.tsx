import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    duration: 'Day 1–3',
    description:
      'We review your brief, discuss lifestyle and preferences, and establish budget and timeline. Virtual or in-studio — usually 45 minutes.',
  },
  {
    step: '02',
    title: 'Design & render',
    duration: 'Week 1–2',
    description:
      'Our designer produces hand sketches and a 3D rendering. You receive two revision rounds before we move to production.',
  },
  {
    step: '03',
    title: 'Stone selection',
    duration: 'Week 2',
    description:
      'We source and share stone options with grading reports. You approve the center stone before setting begins.',
  },
  {
    step: '04',
    title: 'Craft & polish',
    duration: 'Week 3–5',
    description:
      'The setting is cast, assembled, and finished by hand. Quality checks at each stage — prongs, symmetry, comfort fit.',
  },
  {
    step: '05',
    title: 'Delivery',
    duration: 'Final week',
    description:
      'Insured shipping or studio pickup with appraisal paperwork, care instructions, and our lifetime craftsmanship warranty.',
  },
];

const Process = () => {
  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal>
            <p className="text-label mb-3">Our process</p>
            <h1 className="text-display-xl text-luxury-charcoal mb-6 max-w-2xl">
              From conversation to the box you open together
            </h1>
            <p className="text-body text-luxury-text-muted max-w-xl">
              Most rings take three to six weeks. Rush timelines are sometimes
              possible — we&apos;ll be upfront about what&apos;s realistic before
              you commit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-luxury-cream border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 60}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-border last:border-0">
                  <div className="md:col-span-2">
                    <p className="text-2xl font-semibold text-luxury-rose-gold/90">
                      {item.step}
                    </p>
                    <p className="text-label mt-1">{item.duration}</p>
                  </div>
                  <div className="md:col-span-10">
                    <h2 className="text-xl md:text-2xl font-semibold text-luxury-charcoal mb-2">
                      {item.title}
                    </h2>
                    <p className="text-body text-luxury-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="text-display-sm text-luxury-charcoal mb-4">
              Ready to begin?
            </h2>
            <p className="text-body text-luxury-text-muted mb-8 max-w-md mx-auto">
              Start with our design brief or send a quick message — whichever
              feels right.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/design">
                <Button variant="luxury" size="lg">
                  Start a design
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="luxury-outline" size="lg">
                  Book consultation
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Process;
