import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';
import {
  getProductBySlug,
  stoneShapes,
  metalTypes,
  stoneTypes,
  caratSizes,
  defaultProductOptions,
  calculatePrice,
  formatPrice,
  type ProductOptions,
} from '@/data/products';
import { ChevronLeft } from 'lucide-react';

const Product = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug ?? '');

  const [options, setOptions] = useState<ProductOptions>(defaultProductOptions);
  const [priceKey, setPriceKey] = useState(0);

  const updateOption = <K extends keyof ProductOptions>(
    key: K,
    value: ProductOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
    setPriceKey((k) => k + 1);
  };

  if (!product) {
    return (
      <div className="section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-display-sm text-luxury-charcoal mb-4">
            Ring not found
          </h1>
          <p className="text-caption mb-6">
            That style may have moved — browse our current collection.
          </p>
          <Link to="/shop">
            <Button variant="luxury">Back to collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = calculatePrice(product.basePrice, options);

  const included = [
    'Professional appraisal certificate',
    'Lifetime warranty on craftsmanship',
    'Free resizing within 60 days',
    'Presentation box and care kit',
    '30-day return policy',
  ];

  return (
    <div className="section-padding">
      <div className="container-wide">
        <Link
          to="/shop"
          className="inline-flex items-center text-caption hover:text-luxury-rose-gold transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div className="sticky top-24">
              <div className="aspect-square overflow-hidden rounded-sm bg-luxury-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <p className="text-caption mt-4">
                Lead time: {product.leadTime} after design approval
              </p>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={50}>
              <p className="text-label mb-2 capitalize">{product.category}</p>
              <h1 className="text-display-sm text-luxury-charcoal mb-3">
                {product.name}
              </h1>
              <p className="text-body text-luxury-text-muted">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="py-5 border-y border-border">
                <p className="text-label mb-1">Estimated total</p>
                <p
                  key={priceKey}
                  className="text-3xl font-semibold text-luxury-rose-gold animate-price-fade motion-reduce:animate-none"
                >
                  {formatPrice(totalPrice)}
                </p>
                <p className="text-caption mt-1">
                  Includes setting and band — final quote confirmed at consultation
                </p>
              </div>
            </Reveal>

            <OptionGroup
              label="Stone shape"
              options={stoneShapes}
              selected={options.stoneShape}
              onSelect={(id) => updateOption('stoneShape', id)}
              columns={3}
            />

            <OptionGroup
              label="Metal"
              options={metalTypes}
              selected={options.metalType}
              onSelect={(id) => updateOption('metalType', id)}
              columns={2}
            />

            <OptionGroup
              label="Stone type"
              options={stoneTypes}
              selected={options.stoneType}
              onSelect={(id) => updateOption('stoneType', id)}
              columns={2}
            />

            <OptionGroup
              label="Carat weight"
              options={caratSizes}
              selected={options.caratSize}
              onSelect={(id) => updateOption('caratSize', id)}
              columns={3}
            />

            <div className="space-y-3 pt-4">
              <Link to="/contact" className="block">
                <Button variant="luxury" className="w-full" size="lg">
                  Request a quote
                </Button>
              </Link>
              <Link to="/design" className="block">
                <Button variant="luxury-outline" className="w-full">
                  Start full custom design
                </Button>
              </Link>
            </div>

            <div className="bg-luxury-cream rounded-sm p-5">
              <h2 className="text-sm font-medium text-luxury-charcoal mb-3">
                Included with every ring
              </h2>
              <ul className="space-y-1.5">
                {included.map((item) => (
                  <li key={item} className="text-caption flex items-start gap-2">
                    <span className="text-luxury-rose-gold mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface OptionItem {
  id: string;
  name: string;
  price: number;
}

function OptionGroup({
  label,
  options,
  selected,
  onSelect,
  columns,
}: {
  label: string;
  options: OptionItem[];
  selected: string;
  onSelect: (id: string) => void;
  columns: 2 | 3;
}) {
  return (
    <Reveal>
      <div>
        <h3 className="text-sm font-medium text-luxury-charcoal mb-3">
          {label}
        </h3>
        <div
          className={`grid gap-2 ${
            columns === 3 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'
          }`}
        >
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              className={`p-3 text-left text-sm border rounded-sm transition-colors duration-200 ${
                selected === option.id
                  ? 'border-luxury-rose-gold bg-luxury-rose-gold/5 text-luxury-charcoal'
                  : 'border-border text-luxury-text-muted hover:border-luxury-rose-gold/40'
              }`}
            >
              <span className="font-medium block">{option.name}</span>
              {option.price !== 0 && (
                <span className="text-xs mt-0.5 block opacity-70">
                  {option.price > 0
                    ? `+$${option.price}`
                    : `-$${Math.abs(option.price)}`}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default Product;
