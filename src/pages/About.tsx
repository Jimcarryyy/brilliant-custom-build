import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const About = () => {
  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal>
            <p className="text-label mb-3">About Grace Rings</p>
            <h1 className="text-display-xl text-luxury-charcoal mb-6 max-w-3xl">
              A small studio for rings that mean something
            </h1>
            <p className="text-body text-luxury-text-muted max-w-2xl">
              Grace Rings started with a simple premise: engagement jewelry
              should be personal, transparent, and made without compromise.
              We&apos;re not a marketplace — we&apos;re an atelier that works
              with a handful of couples at a time, from first conversation to
              final polish.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-luxury-cream border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <h2 className="text-display-sm text-luxury-charcoal mb-6">
                How we work
              </h2>
              <div className="space-y-5 text-body text-luxury-text-muted">
                <p>
                  Every project begins with understanding how you wear jewelry,
                  what daily life looks like, and what you want the ring to
                  communicate — understated, bold, vintage, or entirely new.
                </p>
                <p>
                  We source lab-grown diamonds graded to the same standards as
                  mined stones: cut, color, clarity, and carat documented and
                  disclosed. Metals are solid 14k or 18k gold — never plated.
                  Settings are designed for long-term wear, with prongs and
                  galleries engineered for security, not just photographs.
                </p>
                <p>
                  Most of our work happens in three settings — solitaire, hidden
                  halo, and vintage inspired — but roughly half our commissions
                  are fully custom. If you have a family stone, a sketch, or a
                  Pinterest board, that&apos;s where we start.
                </p>
              </div>
              <Link to="/process" className="inline-block mt-8">
                <Button variant="luxury">See our process</Button>
              </Link>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={100}>
              <div className="border border-border bg-background p-8 md:p-10">
                <p className="text-label mb-4">At a glance</p>
                <dl className="space-y-6">
                  {[
                    { term: 'Founded', detail: '2019, studio practice' },
                    { term: 'Stones', detail: 'Lab-grown diamonds & moissanite' },
                    { term: 'Metals', detail: '14k / 18k white, yellow, rose gold' },
                    { term: 'Turnaround', detail: '3–6 weeks typical' },
                    { term: 'Consultations', detail: 'Virtual or by appointment' },
                  ].map((item) => (
                    <div key={item.term} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <dt className="text-label mb-1">{item.term}</dt>
                      <dd className="text-luxury-charcoal font-medium">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal>
            <h2 className="text-display-sm text-luxury-charcoal mb-6">
              On lab-grown diamonds
            </h2>
            <div className="prose-spacing space-y-4 text-body text-luxury-text-muted max-w-3xl">
              <p>
                Lab-grown diamonds are chemically and optically identical to
                mined diamonds. They form under controlled conditions rather
                than geological pressure — which means traceable origin, lower
                environmental impact, and often more stone for the same budget.
              </p>
              <p>
                We don&apos;t treat them as a compromise. We treat them as a
                deliberate choice — the same way you might choose a setting
                profile or a metal color. Every stone we set comes with grading
                documentation and is inspected in-house before it goes into your
                ring.
              </p>
              <p>
                Moissanite remains an option for clients who want maximum
                brilliance at a lower price point. We&apos;ll walk you through
                the tradeoffs honestly, without pushing either direction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
