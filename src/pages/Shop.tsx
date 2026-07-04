import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';
import {
  products,
  productCategories,
} from '@/data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="max-w-2xl mb-12 md:mb-16">
            <p className="text-label mb-3">Collection</p>
            <h1 className="text-display-xl text-luxury-charcoal mb-4">
              Engagement rings
            </h1>
            <p className="text-body text-luxury-text-muted">
              Three foundational settings — each configurable by stone shape,
              metal, carat, and stone type. Prices update live on the detail
              page.
            </p>
          </div>
        </Reveal>

        <Reveal delay={50}>
          <div className="flex flex-wrap gap-2 mb-10 md:mb-14">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-sm border transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-luxury-charcoal text-white border-luxury-charcoal'
                    : 'bg-transparent text-luxury-charcoal border-border hover:border-luxury-rose-gold'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <Reveal key={product.slug} delay={i * 60}>
              <article className="group border border-border bg-background overflow-hidden transition-shadow duration-300 hover:shadow-elegant">
                <Link to={`/rings/${product.slug}`}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-luxury group-hover:scale-[1.02] motion-reduce:transform-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-label mb-2 capitalize">
                      {product.category}
                    </p>
                    <h2 className="text-lg font-semibold text-luxury-charcoal mb-2">
                      {product.name}
                    </h2>
                    <p className="text-caption mb-4 line-clamp-2">
                      {product.tagline}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm font-medium text-luxury-rose-gold">
                        From ${product.basePrice.toLocaleString()}
                      </span>
                      <span className="text-caption group-hover:text-luxury-rose-gold transition-colors">
                        Configure →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 md:mt-24 pt-12 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-display-sm text-luxury-charcoal mb-3">
                  Something entirely your own?
                </h2>
                <p className="text-body text-luxury-text-muted">
                  If none of these settings fit, we&apos;ll design from scratch
                  — heirloom redesigns, mixed metals, alternative stones.
                </p>
              </div>
              <div className="md:text-right">
                <Link to="/design">
                  <Button variant="luxury" size="lg">
                    Start a custom design
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Shop;
