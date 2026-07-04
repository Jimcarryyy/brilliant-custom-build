import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';
import { CurvedSection } from '@/components/SectionCurve';
import { products } from '@/data/products';
import { commissions } from '@/data/commissions';
import { faqItems } from '@/data/faq';
import { siteImages } from '@/data/images';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Index = () => {
  const previewFaqs = faqItems.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="section-padding section-hero-bg relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-luxury-rose-gold/10 blur-3xl"
          aria-hidden
        />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <Reveal>
              <h1 className="text-display-xl mb-4">
                Custom engagement rings, built in a small studio
              </h1>
              <p className="text-body text-luxury-text-muted mb-6 max-w-lg">
                We make rings to order — you pick the setting, stone, and metal,
                see a price estimate upfront, and follow the build from CAD to
                delivery. Most projects finish in 3–6 weeks.
              </p>
              <ul className="text-sm text-luxury-text-muted space-y-2 mb-8">
                <li>· Lab-grown diamonds and moissanite</li>
                <li>· 14k and 18k gold (white, yellow, rose)</li>
                <li>· Virtual consultations anywhere in the US</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link to="/shop">
                  <Button variant="luxury">Browse collection</Button>
                </Link>
                <Link to="/work">
                  <Button variant="luxury-outline">See recent work</Button>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <img
                src={siteImages.hero}
                alt="Engagement ring on hand"
                className="w-full aspect-[4/3] object-cover rounded-lg ring-1 ring-border/60"
                loading="eager"
              />
              <p className="text-xs text-luxury-text-muted mt-2">
                1.2 ct oval in 14k yellow gold — client pickup photo
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CurvedSection tone="muted" curveFrom="background">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <h2 className="text-display-sm mb-2">Collection</h2>
                <p className="text-caption max-w-md">
                  Three base settings you can configure online. Everything else is
                  a full custom commission.
                </p>
              </div>
              <Link to="/shop" className="text-sm font-medium text-luxury-rose-gold hover:underline">
                View all →
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 50}>
                <Link
                  to={`/rings/${product.slug}`}
                  className="block group bg-background border border-border rounded-lg overflow-hidden hover:border-luxury-rose-gold/40 hover:shadow-elegant transition-all"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-luxury-charcoal">{product.name}</h3>
                    <p className="text-caption mt-1">{product.tagline}</p>
                    <p className="text-sm font-medium mt-3">
                      From ${product.basePrice.toLocaleString()}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </CurvedSection>

      <CurvedSection tone="background" curveFrom="muted">
        <div className="container-wide">
          <Reveal>
            <h2 className="text-display-sm mb-2">Recent commissions</h2>
            <p className="text-caption mb-8 max-w-xl">
              Real project notes from the last few months — settings, stones,
              constraints, and what we changed along the way.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commissions.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <Link
                  to={`/work#${item.id}`}
                  className="block border border-border rounded-lg overflow-hidden hover:shadow-elegant transition-shadow bg-card"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <p className="text-xs text-luxury-text-muted">{item.client} · {item.location}</p>
                    <h3 className="font-medium mt-1">{item.title}</h3>
                    <p className="text-caption mt-2 line-clamp-2">{item.story}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/work">
              <Button variant="luxury-outline">All case studies</Button>
            </Link>
          </div>
        </div>
      </CurvedSection>

      <CurvedSection tone="cream" curveFrom="background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal>
              <img
                src={siteImages.workshop}
                alt="Gold and silver engagement rings on display"
                className="w-full aspect-[4/3] object-cover rounded-lg ring-1 ring-border/60"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-display-sm mb-4">How we build</h2>
              <div className="prose-block mb-6">
                <p>
                  Rings are cast from CAD models, cleaned by hand, and set under
                  a microscope. We don&apos;t drop-ship from overseas catalogs —
                  every piece passes through our bench before it leaves.
                </p>
                <p>
                  Stones are sourced per project with grading reports included.
                  You approve a 3D render before we cut metal.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="border border-border rounded-lg p-4 bg-background">
                  <p className="font-medium">Typical timeline</p>
                  <p className="text-luxury-text-muted mt-1">3–6 weeks</p>
                </div>
                <div className="border border-border rounded-lg p-4 bg-background">
                  <p className="font-medium">Price range</p>
                  <p className="text-luxury-text-muted mt-1">$2k – $6k most jobs</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/process">
                  <Button variant="luxury">Full process</Button>
                </Link>
                <Link to="/materials">
                  <Button variant="luxury-outline">Stones & metals</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </CurvedSection>

      <CurvedSection tone="muted" curveFrom="cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-4">
              <h2 className="text-display-sm mb-3">Common questions</h2>
              <p className="text-caption mb-4">
                Straight answers — no sales script. More in the full FAQ.
              </p>
              <Link to="/faq" className="text-sm font-medium text-luxury-rose-gold hover:underline">
                Read all FAQ →
              </Link>
            </Reveal>
            <Reveal className="lg:col-span-8" delay={50}>
              <Accordion type="single" collapsible className="w-full">
                {previewFaqs.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-left text-sm font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-caption">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </CurvedSection>

      <CurvedSection tone="background" curveFrom="muted">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="text-display-sm mb-3">Start when you&apos;re ready</h2>
            <p className="text-body text-luxury-text-muted mb-6">
              Use the design brief if you know what you want. Or send a short
              message — no deposit until you approve the final quote.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/design">
                <Button variant="luxury" size="lg">Design brief</Button>
              </Link>
              <Link to="/contact">
                <Button variant="luxury-outline" size="lg">Contact</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </CurvedSection>
    </>
  );
};

export default Index;
