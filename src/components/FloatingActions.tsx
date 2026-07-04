import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link to="/contact" aria-label="Contact us">
        <Button
          size="icon"
          className={cn(
            'h-11 w-11 rounded-full shadow-elegant',
            'bg-luxury-rose-gold text-white hover:bg-luxury-rose-gold/90',
            'transition-all duration-300 motion-reduce:transition-none'
          )}
        >
          <Mail className="h-4 w-4" />
        </Button>
      </Link>

      <Button
        onClick={scrollToTop}
        size="icon"
        aria-label="Scroll to top"
        className={cn(
          'h-11 w-11 rounded-full shadow-elegant transition-all duration-300',
          'bg-white/95 backdrop-blur-sm text-luxury-charcoal border border-border',
          'hover:bg-white motion-reduce:transition-none',
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
};
