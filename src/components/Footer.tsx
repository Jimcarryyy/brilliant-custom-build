import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 mt-auto relative">
      <div
        className="absolute top-0 left-0 right-0 overflow-hidden leading-[0] -translate-y-full"
        aria-hidden
      >
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="block w-full h-8 md:h-10">
          <path
            d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,30 1440,20 L1440,40 L0,40 Z"
            fill="hsl(var(--muted))"
            fillOpacity="0.4"
          />
        </svg>
      </div>
      <div className="container-wide py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          <div className="col-span-2 md:col-span-1">
            <Logo size="sm" className="mb-1" />
            <p className="text-caption mt-3 max-w-xs">
              Custom engagement rings. Lab-grown diamonds, solid gold, built one
              at a time in a small studio.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-luxury-charcoal mb-3">Shop</p>
            <ul className="space-y-2 text-sm text-luxury-text-muted">
              <li><Link to="/shop" className="hover:text-luxury-charcoal">Collection</Link></li>
              <li><Link to="/work" className="hover:text-luxury-charcoal">Recent work</Link></li>
              <li><Link to="/materials" className="hover:text-luxury-charcoal">Materials</Link></li>
              <li><Link to="/guide" className="hover:text-luxury-charcoal">Sizing & care</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-luxury-charcoal mb-3">Studio</p>
            <ul className="space-y-2 text-sm text-luxury-text-muted">
              <li><Link to="/process" className="hover:text-luxury-charcoal">Process</Link></li>
              <li><Link to="/about" className="hover:text-luxury-charcoal">About</Link></li>
              <li><Link to="/faq" className="hover:text-luxury-charcoal">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-luxury-charcoal">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-luxury-charcoal mb-3">Reach us</p>
            <ul className="space-y-2 text-sm text-luxury-text-muted">
              <li>hello@gracerings.com</li>
              <li>(555) 123-4567</li>
              <li>Tue–Sat, 10am–6pm</li>
              <li>By appointment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-luxury-text-muted">
          <p>© {currentYear} Grace Rings</p>
          <p>Site designed & built by Jimcarry Omambak</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
