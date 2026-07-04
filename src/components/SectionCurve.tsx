import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionTone = 'background' | 'muted' | 'cream';

const toneFill: Record<SectionTone, string> = {
  background: 'hsl(var(--background))',
  muted: 'hsl(var(--muted))',
  cream: 'hsl(var(--luxury-cream))',
};

interface SectionCurveProps {
  /** Background of the section below this divider */
  to: SectionTone;
  /** Flip curve direction (peak vs valley) */
  flip?: boolean;
  className?: string;
}

export function SectionCurve({ to, flip = false, className }: SectionCurveProps) {
  const fill = toneFill[to];

  return (
    <div
      className={cn('relative w-full overflow-hidden leading-[0]', className)}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={cn(
          'block w-full h-10 md:h-14',
          flip && 'rotate-180'
        )}
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

interface CurvedSectionProps {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
  /** Curve at top transitioning from previous tone */
  curveFrom?: SectionTone;
  /** Curve at bottom transitioning to next tone */
  curveTo?: SectionTone;
}

export function CurvedSection({
  children,
  tone = 'background',
  className,
  curveFrom,
  curveTo,
}: CurvedSectionProps) {
  const bgClass =
    tone === 'background'
      ? 'bg-background'
      : tone === 'muted'
        ? 'bg-muted'
        : 'bg-luxury-cream';

  return (
    <>
      {curveFrom && <SectionCurve to={tone} flip />}
      <section className={cn('section-padding', bgClass, className)}>
        {children}
      </section>
      {curveTo && <SectionCurve to={curveTo} />}
    </>
  );
}
