import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Collection', path: '/shop' },
  { name: 'Recent work', path: '/work' },
  { name: 'Materials', path: '/materials' },
  { name: 'Process', path: '/process' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 border-b bg-background',
        scrolled ? 'border-border shadow-sm' : 'border-transparent'
      )}
    >
      <div className="container-wide">
        <div className="flex justify-between items-center h-14">
          <Logo size="md" />

          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm transition-colors',
                  isActive(link.path)
                    ? 'text-luxury-charcoal font-medium'
                    : 'text-luxury-text-muted hover:text-luxury-charcoal'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/design">
              <Button variant="luxury" size="sm">
                Start a design
              </Button>
            </Link>
          </div>

          <div className="xl:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="xl:hidden border-t border-border pb-4">
            <div className="pt-2 space-y-0.5">
              <Link
                to="/"
                className={cn(
                  'block px-3 py-2 text-sm rounded-md',
                  location.pathname === '/'
                    ? 'bg-muted font-medium'
                    : 'hover:bg-muted'
                )}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'block px-3 py-2 text-sm rounded-md',
                    isActive(link.path)
                      ? 'bg-muted font-medium'
                      : 'hover:bg-muted'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/faq" className="block px-3 py-2 text-sm rounded-md hover:bg-muted">
                FAQ
              </Link>
              <div className="px-3 pt-3">
                <Link to="/design">
                  <Button variant="luxury" size="sm" className="w-full">
                    Start a design
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
