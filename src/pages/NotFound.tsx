import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';

const NotFound = () => {
  return (
    <div className="section-padding">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="text-label mb-4">404</p>
          <h1 className="text-display-xl text-luxury-charcoal mb-4">
            Page not found
          </h1>
          <p className="text-body text-luxury-text-muted mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have
            moved. Try the collection or head home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button variant="luxury">Back to home</Button>
            </Link>
            <Link to="/shop">
              <Button variant="luxury-outline">View collection</Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default NotFound;
