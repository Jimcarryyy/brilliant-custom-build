import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const iconSizes = {
  sm: 'h-7 w-7',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
};

const textSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('inline-flex items-center gap-2.5 shrink-0', className)}
      aria-label="Grace Rings — home"
    >
      <svg
        className={cn(iconSizes[size], 'shrink-0')}
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
      >
        <circle
          cx="20"
          cy="22"
          r="11"
          className="stroke-luxury-charcoal"
          strokeWidth="2"
        />
        <path
          d="M20 8 L22.4 13.2 L20 14.6 L17.6 13.2 Z"
          className="fill-luxury-rose-gold"
        />
        <circle cx="20" cy="13" r="1.6" className="fill-luxury-rose-gold" />
      </svg>
      {showText && (
        <span
          className={cn(
            'font-semibold text-luxury-charcoal leading-none',
            textSizes[size]
          )}
        >
          Grace Rings
        </span>
      )}
    </Link>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn('h-8 w-8 shrink-0', className)}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      <circle
        cx="20"
        cy="22"
        r="11"
        className="stroke-luxury-charcoal"
        strokeWidth="2"
      />
      <path
        d="M20 8 L22.4 13.2 L20 14.6 L17.6 13.2 Z"
        className="fill-luxury-rose-gold"
      />
      <circle cx="20" cy="13" r="1.6" className="fill-luxury-rose-gold" />
    </svg>
  );
}
