import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/Reveal';
import { faqItems, faqCategories } from '@/data/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const Faq = () => {
  const [category, setCategory] = useState<string>('all');

  const filtered =
    category === 'all'
      ? faqItems
      : faqItems.filter((item) => item.category === category);

  return (
    <div className="section-padding">
      <div className="container-wide">
        <Reveal>
          <h1 className="text-display-xl mb-3">FAQ</h1>
          <p className="text-body text-luxury-text-muted max-w-2xl mb-8">
            Questions we get on almost every first call. If yours isn&apos;t here,
            send a message — we&apos;d rather answer upfront than surprise you later.
          </p>
        </Reveal>

        <Reveal delay={40}>
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1.5 text-sm rounded-md border transition-colors ${
                  category === cat.id
                    ? 'bg-luxury-charcoal text-white border-luxury-charcoal'
                    : 'border-border hover:bg-muted'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={60}>
          <Accordion type="single" collapsible className="max-w-3xl">
            {filtered.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="text-left text-sm font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-caption pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-luxury-text-muted mb-4">
              Still deciding? Browse the collection or walk through the process first.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop">
                <Button variant="luxury-outline">Collection</Button>
              </Link>
              <Link to="/contact">
                <Button variant="luxury">Contact</Button>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Faq;
